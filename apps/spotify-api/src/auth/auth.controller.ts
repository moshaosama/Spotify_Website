import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  googleCallBack(@Req() req, @Res() res) {
    res.cookie('access_token', JSON.stringify(req.user), {
      httpOnly: false,
      maxAge: 3600000,
      secure: false,
    });
    return res.redirect('http://localhost:5173');
  }

  @Post('signup')
  SignUp(@Body() user: CreateAuthDto) {
    return this.authService.CreateUser(user);
  }

  @Post('login')
  Login(@Body() user: LoginAuthDto) {
    return this.authService.Login(user);
  }
}
