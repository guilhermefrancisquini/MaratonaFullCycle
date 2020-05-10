import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
  imports: [SenderModule, ReceiverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
