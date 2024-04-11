import { Injectable } from '@nestjs/common';
import { Budget, Currency } from 'src/interfaces/budget.interface';

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
    
}

