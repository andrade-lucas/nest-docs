import { Injectable } from '@nestjs/common';
import { ICat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: ICat[] = [];

    public create(cat: ICat) {
        this.cats.push(cat);
    }

    public async findAll(): Promise<ICat[]> {
        return this.cats;
    }

    public async findByName(name: string): Promise<ICat> {
        return this.cats.find(cat => cat.name == name);
    }

    public async delete(name: string): Promise<boolean> {
        let item = this.cats.find(item => item.name == name);
        this.cats.splice(this.cats.indexOf(item), 1);
        return true;
    }
}