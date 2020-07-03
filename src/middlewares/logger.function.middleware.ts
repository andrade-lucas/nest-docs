import { Request, Response } from 'express';

export default function logger (req: Request, res: Response, next: Function) {
    console.log('This is a functional middleware...');
    next();
}