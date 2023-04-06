import { Test, TestingModule } from '@nestjs/testing';

import { BeerRepository } from 'src/application/repositories/beers-repository';
import { ListSuitableStyleBeer } from './list-suitable-style-beer';
import { HttpClientService } from 'src/infra/transporters/http-client/http-client.service';

const responseListSuitableStyleBeer = {
  playlists: {
    items: [
      {
        name: 'name de teste',
        tracks: {
          href: 'url',
          items: [
            {
              track: {
                album: {
                  artists: [
                    {
                      name: 'Mateus',
                      href: 'link',
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    ],
  },
};

describe('List Suitable Style Beer', () => {
  let sut: ListSuitableStyleBeer;
  let beerRepository: BeerRepository;
  let httpClientService: HttpClientService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const BeerRepositoryProvider = {
      provide: BeerRepository,
      useValue: {
        listAll: jest.fn(),
        listById: jest.fn(),
        listByName: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
        listSuitableStyle: jest.fn(),
        update: jest.fn(),
      },
    };

    const HttpClientServiceProvider = {
      provide: HttpClientService,
      useValue: {
        get: jest.fn().mockResolvedValue(responseListSuitableStyleBeer),
        post: jest.fn(),
      },
    };

    const app: TestingModule = await Test.createTestingModule({
      providers: [
        ListSuitableStyleBeer,
        BeerRepositoryProvider,
        HttpClientServiceProvider,
      ],
    }).compile();

    sut = app.get(ListSuitableStyleBeer);

    beerRepository = app.get(BeerRepository);
    httpClientService = app.get(HttpClientService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
    expect(beerRepository).toBeDefined();
    expect(httpClientService).toBeDefined();
  });

  describe('execute', () => {
    it('should be return response list suitable style beer and playlist', async () => {
      const beer: any = {
        id: '40bac2b3-2b1c-436f-a6e2-cd977018ed8f',
        styleName: 'teste',
        minimumTemperature: -2,
        maximumTemperature: 4,
        createdAt: new Date(),
      };

      jest
        .spyOn(ListSuitableStyleBeer.prototype as any, 'getTokenSpotifyApi')
        .mockResolvedValue({ access_toke: 'token' });

      jest
        .spyOn(ListSuitableStyleBeer.prototype as any, 'searchTracksByPlaylist')
        .mockResolvedValue({
          items: [
            {
              track: {
                artists: [
                  {
                    name: 'Mateus',
                    href: 'link',
                  },
                ],
                external_urls: {
                  spotify: 'url do spotify',
                },
              },
            },
          ],
        });

      jest.spyOn(beerRepository, 'listSuitableStyle').mockResolvedValue(beer);

      const response = await sut.execute(2);

      expect(jest.spyOn(beerRepository, 'listSuitableStyle')).toBeCalledTimes(
        1,
      );

      expect(
        jest.spyOn(
          ListSuitableStyleBeer.prototype as any,
          'getTokenSpotifyApi',
        ),
      ).toHaveBeenCalled();

      expect(response).toEqual({
        beerStyle: 'teste',
        playlist: {
          name: 'name de teste',
          tracks: [
            {
              artist: 'Mateus',
              link: 'url do spotify',
            },
          ],
        },
      });
    });
  });
});
