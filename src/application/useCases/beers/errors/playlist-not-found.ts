import { NotFoundException } from '@nestjs/common';

export class PlaylistNotFoundException extends NotFoundException {
  constructor() {
    super(
      `Playlist not found for this beer style`,
      PlaylistNotFoundException.name,
    );
  }
}
