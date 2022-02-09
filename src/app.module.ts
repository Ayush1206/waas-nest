import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/controller/auth/auth.controller';
import { UserService } from './auth/service/user/user.service';
import { UserRepoService } from './auth/service/repo/user-repo/user-repo.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://user:myheart1007@cluster0.dj11k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
