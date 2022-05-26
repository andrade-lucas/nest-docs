import { Controller, Get } from "@nestjs/common";

@Controller('cats')
export class CatsController {
    @Get()
    async getAll(): Promise<string> {
        return 'return all cats from Cats Module';
    }
}
