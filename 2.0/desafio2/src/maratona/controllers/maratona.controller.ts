import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MaratonaService } from '../services/maratona.service';
import { Maratona } from '../models/maratona.entity';

@Controller('maratona')
export class MaratonaController {

    constructor(private maratonaService: MaratonaService) {
    }

    @Get()
    index(): Promise<Maratona[]> {
        return this.maratonaService.findAll();
    }   

    @Post('')
    async create(@Body() contactData: Maratona): Promise<any> {
        return this.maratonaService.create(contactData);
    }  

    @Put(':id')
    async update(@Param('id') id, @Body() contactData: Maratona): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.maratonaService.update(contactData);
    }  
    
    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.maratonaService.delete(id);
    }
}
