import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    async findAll(): Promise<string> {
        return 'This method returns all cats';
    }

    @Post()
    async create(): Promise<string> {
        return 'This method creates a new cat';
    }
}
