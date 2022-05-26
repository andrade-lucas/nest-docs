import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller('cats')
export class CatsController {
    @Get()
    async getAll(): Promise<string> {
        return 'return all cats from Cats Module';
    }

    @Put()
    async update(@Param('id') id): Promise<string> {
        return 'Update cat';
    }
}
