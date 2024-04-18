
import { IsNotEmpty, IsNumber } from "class-validator";

export class ExpenseDto{
    @IsNotEmpty()
    id: string;

    @IsNumber()
    amount: number;

    @IsNotEmpty()
    description: string;
}