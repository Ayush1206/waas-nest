import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { signUpDto } from 'src/auth/DTO/auth.dto';
import { User, UserDocument } from 'src/auth/schemas/user.schema';

@Injectable()
export class UserRepoService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<UserDocument>
    ){

    }

    async signupFunc(user:signUpDto):Promise<signUpDto>{
        const newUser = new this.userModel(user)
        return newUser.save();
    }
}
