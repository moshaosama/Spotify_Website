import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategies } from './auth/strategies/googel.strategies';
import { ConfigModule } from '@nestjs/config';
import googleAuthConfig from './auth/Config/google-auth.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './auth/entities/auth.entity';
import { SpotifyModule } from './spotify/spotify.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [googleAuthConfig],
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'SETCGRGHFKK',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'spotify-clone',
      entities: [User],
      synchronize: true,
    }),
    SpotifyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
