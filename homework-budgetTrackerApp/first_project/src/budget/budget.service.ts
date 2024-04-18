import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Budget, Currency, BudgetCreationProps } from 'src/interfaces/budget.interface';
import { v4 as uuid } from 'uuid';



@Injectable()
export class BudgetService {
    private budgets: Budget[] = [
        {
            id: "1",
            title: "Weekly budget",
            balance: 3000,
            currency: Currency.MKD,
            expenses: [
                { id: "1", amount: 800, description: "Groceries" }, 
                { id: "2", amount: 1000, description: "Dining out" }],
            incomes: [
                { id: "1", amount: 30000, description: "Salary" }
            ]
        },

        {
            id: "2",
            title: "Monthly budget",
            balance: 20000,
            currency: Currency.MKD,
            expenses: [
                { id: "1", amount: 9000, description: "Rent" },
                { id: "2", amount: 3000, description: "Utilities" }
            ],
            incomes: [
                { id: "1", amount: 10000, description: "Side job" }
                ]
        },

        {
            id: "3",
            title: "Savings budget",
            balance: 10000,
            currency: Currency.MKD,
            expenses: [
                { id: "1", amount: 2000, description: "Emergency fund" }
            ],
            incomes: [
                { id: "4", amount: 1200, description: "Investment returns"}
            ]
        }
    ]

    readBudgets(): Budget[] {
        return this.budgets;
    }
    
    createBudget(budgetCreationProps: BudgetCreationProps){
        const budget: Budget = {
            id: uuid(),
            title: budgetCreationProps.title,
            balance: budgetCreationProps.balance,
            currency: budgetCreationProps.currency,
            expenses: budgetCreationProps.expenses,
            incomes: budgetCreationProps.incomes
        };
        this.budgets.push(budget);

        return budget.id;
    }

    getBudget(id:string){
        const budget = this.budgets.find((budget) => budget.id === id);
        if(!budget){
            throw new HttpException(`Budget with id: ${id} not found`, 404);
        }
        return budget;
    }

    removeBudget(id: string){
        const budget = this.budgets.find((budget)=> budget.id === id);
        if(!budget){
            throw new NotFoundException(`Budget with id: ${id} not found`);
        
        }

        this.budgets = this.budgets.filter((budget)=> budget.id !== id);
    }

    updateBudget(id: string, budgetCreationProps: BudgetCreationProps): Budget {
        const budgetFound = this.getBudget(id);
        budgetFound.title = budgetCreationProps.title;
        budgetFound.balance = budgetCreationProps.balance;
        budgetFound.currency = budgetCreationProps.currency;
        budgetFound.expenses = budgetCreationProps.expenses;
        budgetFound.incomes = budgetCreationProps.incomes;

        return budgetFound;
    }
}

