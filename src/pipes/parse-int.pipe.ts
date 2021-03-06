import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata) {
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new BadRequestException('Validation failed');
        }

        return val;
    }
}
