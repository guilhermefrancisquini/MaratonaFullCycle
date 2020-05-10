import { Controller, Get, Render } from '@nestjs/common';
import { SenderService } from '../services/sender.service';

@Controller('sender')
export class SenderController {
  constructor(private readonly senderService: SenderService) {}

  @Get('')
  @Render('sender/index')
  root() {
    return { 
      title: this.senderService.getTitle(),
    };
  }
}
