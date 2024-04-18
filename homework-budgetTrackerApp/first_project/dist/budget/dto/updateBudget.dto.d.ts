import { ExpenseDto } from "./expense.dto";
import { IncomeDTO } from "./income.dto";
import { Currency } from "src/interfaces/budget.interface";
export declare class UpdateBudgetDTO {
    title?: string;
    balance?: number;
    currency?: Currency;
    expenses?: ExpenseDto[];
    incomes?: IncomeDTO[];
}
