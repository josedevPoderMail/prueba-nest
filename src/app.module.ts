import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';
const dbConn = 'mongodb+srv://josepodermail:fpi8VUP2V64vfNUv@cluster0.p9jsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
@Module({
  imports: [
    MongooseModule.forRoot(dbConn),
    ClientModule
  ]
})
export class AppModule {}
