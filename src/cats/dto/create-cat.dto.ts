import { ICat } from "src/cats/interfaces/cat.interface";
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto implements ICat {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;
}