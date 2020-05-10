import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from '../models/maratona.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class MaratonaService {

    constructor(@InjectRepository(Maratona)
        private maratonaRepository: Repository<Maratona>) {
    }

    async  findAll(): Promise<Maratona[]> {
        return await this.maratonaRepository.find();
    }

    async  create(maratona: Maratona): Promise<Maratona> {
        return await this.maratonaRepository.save(maratona);
    }

    async update(maratona: Maratona): Promise<UpdateResult> {
        return await this.maratonaRepository.update(maratona.id, maratona);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.maratonaRepository.delete(id);
    }
}
