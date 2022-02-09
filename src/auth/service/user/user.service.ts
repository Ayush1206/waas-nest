import { Injectable } from '@nestjs/common';
import { signUpDto } from 'src/auth/DTO/auth.dto';
import { PasswordHelperService } from '../password-helper/password-helper.service';
import { UserRepoService } from '../repo/user-repo/user-repo.service';

@Injectable()
export class UserService {
    constructor(
        private passService: PasswordHelperService,
        private userRepoService:UserRepoService,
    ){}

    async signUp(user: signUpDto){

        user.password = await this.passService.encryptPass(user.password);

      const result =  this.userRepoService.signupFunc(user);

      return result;
    }

}
