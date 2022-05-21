import { Controller, Get } from "@nestjs/common";

@Controller()
export class CustomersController {
    @Get()
    async getAll(): Promise<string> {
        return 'customers get all';
    }
}