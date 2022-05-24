import { Controller, Get } from '@nestjs/common';

@Controller()
export class DogsController {
    @Get()
    async getAll(): Promise<string> {
        return 'returns all the dogs';
    }
}
