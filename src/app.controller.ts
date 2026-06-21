import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Controller()
export class AppController {
  constructor(@InjectModel("User") private readonly userModel:Model<User>) {}

  @Get('create')
  async createUser(): Promise<string> {
   const user= new this.userModel({name:'alaa'})
    await user.save();
    return "created user successfully"
  }
}
