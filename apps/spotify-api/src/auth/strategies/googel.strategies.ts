import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import googleAuthConfig from '../Config/google-auth.config';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategies extends PassportStrategy(Strategy, 'google') {
  constructor(
    @Inject(googleAuthConfig.KEY)
    private googleConfiguration: ConfigType<typeof googleAuthConfig>,
    private authService: AuthService,
  ) {
    super({
      clientID: googleConfiguration.clientID,
      clientSecret: googleConfiguration.clientSecret,
      callbackURL: googleConfiguration.callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    const getUser = await this.authService.GetUserByEmail(user.email);
    if (getUser) {
      await this.authService.Login({
        email: getUser.email,
      });
    } else {
      await this.authService.CreateUser(user);
    }
    done(null, user);
  }
}
