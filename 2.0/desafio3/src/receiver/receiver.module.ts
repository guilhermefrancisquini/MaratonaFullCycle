import { Module } from '@nestjs/common';
import { ReceiverController } from './controllers/receiver.controller';
import { ReceiverService } from './services/receiver.service';

@Module({
    imports: [],
    controllers: [ReceiverController],
    providers: [ReceiverService],
  })
export class ReceiverModule {}
