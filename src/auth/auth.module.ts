import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './controller/auth/auth.controller';
import { User, UserSchema } from './schemas/user.schema';
import { PasswordHelperService } from './service/password-helper/password-helper.service';
import { UserRepoService } from './service/repo/user-repo/user-repo.service';
import { UserService } from './service/user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name:User.name, schema: UserSchema}]),
  ],
  controllers: [AuthController],
  providers: [UserService,UserRepoService,PasswordHelperService]
})
export class AuthModule {}
