import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true, }),  MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ]), MongooseModule.forRoot(process.env.MONGO_URI!)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
