import { Module } from '@nestjs/common';
import { SenderController } from './controllers/sender.controller';
import { SenderService } from './services/sender.service';

@Module({
    imports: [],
    controllers: [SenderController],
    providers: [SenderService],
  })
export class SenderModule {}
