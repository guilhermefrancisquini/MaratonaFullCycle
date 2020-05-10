import { Injectable } from '@nestjs/common';

@Injectable()
export class SenderService {
    getTitle(): string {
        return 'Peer-to-Peer Cue System --- Sender';
    }
}