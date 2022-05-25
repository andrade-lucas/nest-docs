import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    async findAll(): Promise<string> {
        return 'This method returns all cats';
    }

    @Get(':id')
    async getById(@Param('id') id): Promise<string> {
        return `This method returns the cat with the id ${id}`;
    }

    @Post()
    async create(): Promise<string> {
        return 'This method creates a new cat';
    }
}
