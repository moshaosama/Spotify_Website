import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { CreateSpotifyDto } from './dto/create-spotify.dto';

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}
}
