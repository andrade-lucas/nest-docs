import { Controller, Get, Post } from "@nestjs/common";

@Controller()
export class CustomersController {
    @Get()
    async getAll(): Promise<string> {
        return 'customers get all';
    }

    @Post()
    async create(): Promise<string> {
        return 'Creates a new customer';
    }
}