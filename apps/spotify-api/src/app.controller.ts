import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleAuthGuard } from './auth/guards/google-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
