import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
    get(): string {
        return 'You called CustomersController get method!';
    }

    @Get(':id')
    getById(@Param('id') id: string): string {
        return `You called CustomersController getById method passing ${id} as param`;
    }
}