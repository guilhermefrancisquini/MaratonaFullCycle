import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTitle(): string {
    return 'Peer-to-Peer Cue System';
  }
}
