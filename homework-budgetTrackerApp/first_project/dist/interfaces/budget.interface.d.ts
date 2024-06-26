export interface Expense {
    id: string;
    amount: number;
    description: string;
}
export interface Income {
    id: string;
    amount: number;
    description: string;
}
export declare enum Currency {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
}
export interface Budget {
    id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}
export interface BudgetCreationProps {
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}
