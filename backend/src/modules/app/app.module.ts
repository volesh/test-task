import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { envConfig } from 'src/general/configs';
import { ItemsModule } from '../items/items.module';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(envConfig.databse_url)],
  controllers: [],
  providers: [],
})
export class AppModule {}
