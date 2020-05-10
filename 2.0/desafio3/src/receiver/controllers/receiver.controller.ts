import { Controller, Get, Render } from '@nestjs/common';
import { ReceiverService } from '../services/receiver.service';

@Controller('receiver')
export class ReceiverController {
   constructor(private readonly receiverService: ReceiverService) {}

  @Get('')
  @Render('receiver/index')
  root() {
    return { 
      title: this.receiverService.getTitle(),
    };
  }
}
