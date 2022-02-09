import { IsNotEmpty } from "class-validator";

export class signUpDto{
    @IsNotEmpty({message: 'first name can not be empty'})
    firstname: string;

    @IsNotEmpty({message: 'last name can not be empty'})
    lastname: string;

    phone: string;

    @IsNotEmpty({message: 'email can not be empty'})
    email: string;

    password: string;

    address: string;
}


