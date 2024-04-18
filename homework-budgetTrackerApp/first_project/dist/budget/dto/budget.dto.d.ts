import { Currency } from "src/interfaces/budget.interface";
import { ExpenseDto } from "./expense.dto";
import { IncomeDTO } from "./income.dto";
export declare class BudgetDTO {
    title: string;
    balance: number;
    currency: Currency;
    expenses: ExpenseDto[];
    incomes: IncomeDTO[];
}
