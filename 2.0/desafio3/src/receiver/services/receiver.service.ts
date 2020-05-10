import { Injectable } from '@nestjs/common';

@Injectable()
export class ReceiverService {
    getTitle(): string {
        return 'Peer-to-Peer Cue System --- Sender';
    }
}
