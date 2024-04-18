import { Type } from "class-transformer";
import { ExpenseDto } from "./expense.dto";
import { IncomeDTO } from "./income.dto";
import { IsOptional, IsNotEmpty, IsNumber, IsArray, IsEnum } from "class-validator";
import { Currency } from "src/interfaces/budget.interface";

export class UpdateBudgetDTO {
    @IsOptional()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsNumber()
    balance?: number;

    @IsOptional()
    @IsNotEmpty()
    @IsEnum(Currency)
    currency?: Currency;

    @IsOptional()
    @IsArray()
    
    @Type(() => ExpenseDto)
    expenses?: ExpenseDto[];

    @IsOptional()
    @IsArray()
    @Type(() => IncomeDTO)
    incomes?: IncomeDTO[];
}