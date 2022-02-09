import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
    autoIndex: true,
    id: true,
})
export class User extends Document{
    @Prop({})
    firstname: string;

    @Prop({})
    lastname: string;

    @Prop({})
    phone: string;

    @Prop({})
    email: string;

    @Prop({})
    password: string;

    @Prop({})
    address: string;

}

export const UserSchema = SchemaFactory.createForClass(User);