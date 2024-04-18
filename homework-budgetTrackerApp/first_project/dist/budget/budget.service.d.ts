import { Budget, BudgetCreationProps } from 'src/interfaces/budget.interface';
export declare class BudgetService {
    private budgets;
    readBudgets(): Budget[];
    createBudget(budgetCreationProps: BudgetCreationProps): string;
    getBudget(id: string): any;
    removeBudget(id: string): void;
    updateBudget(id: string, budgetCreationProps: BudgetCreationProps): Budget;
}
