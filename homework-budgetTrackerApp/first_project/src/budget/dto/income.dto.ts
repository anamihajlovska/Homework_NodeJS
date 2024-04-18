import { IsNotEmpty, IsNumber } from 'class-validator';

export class IncomeDTO {
    @IsNotEmpty()
    id: string;

    @IsNumber()
    amount: number;

    @IsNotEmpty()
    description: string;
}
