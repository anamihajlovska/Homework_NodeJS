import { Currency } from "src/interfaces/budget.interface"
import { IsEnum, IsNotEmpty, MinLength, ArrayMinSize  } from 'class-validator'
import { Type } from "class-transformer";
import { ExpenseDto } from "./expense.dto";
import { IncomeDTO } from "./income.dto";

export class BudgetDTO {

    @IsNotEmpty()
    @MinLength(3)
    title: string;


    balance: number;

    @IsEnum(Currency)
    currency: Currency;

    @ArrayMinSize(1)
    @Type(() => IncomeDTO)
    expenses:  ExpenseDto[]; 

    @ArrayMinSize(1)
    @Type(() => IncomeDTO)
    incomes: IncomeDTO[];
}