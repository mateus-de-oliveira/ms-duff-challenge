import { BeerRepository } from '@application/repositories/beers-repository';
import { HttpClientService } from '@infra/transporters/http-client/http-client.service';
import { Injectable } from '@nestjs/common';
import QueryString = require('qs');

interface SpotifyApiAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyApiSearchPlaylistResponse {
  playlists: {
    items: {
      name: string;
      tracks: SpotifyApiTracksPlaylist;
    }[];
  };
}
interface SpotifyApiTracksPlaylist {
  href: string;
  items: {
    track: {
      album: {
        artists: {
          name: string;
          href: string;
        }[];
      };
    };
  }[];
}

interface SpotifyTracksClean {
  name: any;
  artist: any;
  link: any;
}

export interface ResponseListSuitableStyleBeer {
  beerStyle: string;
  playlist: {
    name: string;
    tracks: SpotifyTracksClean[];
  };
}

@Injectable()
export class ListSuitableStyleBeer {
  constructor(
    private readonly beerRepository: BeerRepository,
    private readonly httpClientService: HttpClientService,
  ) {}

  async execute(temperature: number) {
    const beer = await this.beerRepository.listSuitableStyle(temperature);

    const { access_token } = await this.getTokenSpotifyApi();

    const getPlaylistByName = await this.searchPlaylistByName(
      beer.styleName,
      access_token,
    );

    return getPlaylistByName;
  }

  private async searchPlaylistByName(
    playlistName: string,
    token: string,
  ): Promise<ResponseListSuitableStyleBeer> {
    const API_SPOTIFY_URL_SEARCH = process.env.API_SPOTIFY_URL_SEARCH;

    const { playlists }: SpotifyApiSearchPlaylistResponse =
      await this.httpClientService.get(
        `${API_SPOTIFY_URL_SEARCH}?q=${playlistName}&type=playlist&limit=1`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

    const trackUrl = playlists.items[0].tracks.href;

    const { items: tracks }: SpotifyApiTracksPlaylist =
      await this.searchTracksByPlaylist(trackUrl, token);

    const clearObjectTracksBySpotify: SpotifyTracksClean[] =
      await this.clearObjectTracksBySpotify(tracks);

    const data: ResponseListSuitableStyleBeer = {
      beerStyle: playlistName,
      playlist: {
        name: playlists.items[0].name,
        tracks: clearObjectTracksBySpotify,
      },
    };

    return data;
  }

  private async searchTracksByPlaylist(
    url: string,
    token: string,
  ): Promise<SpotifyApiTracksPlaylist> {
    return await this.httpClientService.get(`${url}?limit=3`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  private async getTokenSpotifyApi(): Promise<SpotifyApiAuthResponse> {
    const API_SPOTIFY_URL_AUTH = process.env.API_SPOTIFY_URL_AUTH;
    const API_SPOTIFY_CLIENT_ID = process.env.API_SPOTIFY_CLIENT_ID;
    const API_SPOTIFY_CLIENT_SECRET = process.env.API_SPOTIFY_CLIENT_SECRET;
    console.log(API_SPOTIFY_CLIENT_ID, API_SPOTIFY_CLIENT_SECRET);

    const data = QueryString.stringify({
      grant_type: 'client_credentials',
      client_id: API_SPOTIFY_CLIENT_ID,
      client_secret: API_SPOTIFY_CLIENT_SECRET,
    });

    const response: SpotifyApiAuthResponse = await this.httpClientService.post(
      API_SPOTIFY_URL_AUTH,
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response;
  }

  private async clearObjectTracksBySpotify(
    tracks: any[],
  ): Promise<SpotifyTracksClean[]> {
    const cleanObject = tracks.map((item) => {
      const data = {
        name: item.track.name,
        artist: item.track.artists[0].name,
        link: item.track.external_urls.spotify,
      };

      console.log(item);
      return data;
    });

    return cleanObject;
  }
}
