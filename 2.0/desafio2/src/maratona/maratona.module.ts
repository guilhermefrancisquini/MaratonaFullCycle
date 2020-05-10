import { Module } from '@nestjs/common';
import { MaratonaService } from './services/maratona.service';
import { MaratonaController } from './controllers/maratona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './models/maratona.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Maratona]),
      ],
      providers: [MaratonaService],
      controllers: [MaratonaController]
})
export class MaratonaModule {}
