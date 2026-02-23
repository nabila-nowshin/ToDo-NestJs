import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { PrismaService } from './prisma.service';
import { UsersService } from './user.service';
import { PostsService } from './post.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // optional but recommended
    }),
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UsersService, PostsService],
})
export class AppModule {}
