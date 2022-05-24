import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller()
export class CustomersController {
    @Get()
    async getAll(): Promise<string> {
        return 'customers get all';
    }

    @Get(':id')
    async getById(@Param('id') id): Promise<string> {
        return `Get customer by the id ${id}`;
    }

    @Post()
    async create(): Promise<string> {
        return 'Creates a new customer';
    }
}