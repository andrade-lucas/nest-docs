import { Controller, Get, Query, Post, Body, Put, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntitiesDto } from './dto';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/cat.interface';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ParseIntPipe } from '../pipes/parse-int.pipe';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {  }

    @Post() 
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<ICat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `This action updates #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.catsService.delete(id);
    }
}
