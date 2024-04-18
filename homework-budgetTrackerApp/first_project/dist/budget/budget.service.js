"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const budget_interface_1 = require("../interfaces/budget.interface");
const uuid_1 = require("uuid");
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [
            {
                id: "1",
                title: "Weekly budget",
                balance: 3000,
                currency: budget_interface_1.Currency.MKD,
                expenses: [
                    { id: "1", amount: 800, description: "Groceries" },
                    { id: "2", amount: 1000, description: "Dining out" }
                ],
                incomes: [
                    { id: "1", amount: 30000, description: "Salary" }
                ]
            },
            {
                id: "2",
                title: "Monthly budget",
                balance: 20000,
                currency: budget_interface_1.Currency.MKD,
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
                currency: budget_interface_1.Currency.MKD,
                expenses: [
                    { id: "1", amount: 2000, description: "Emergency fund" }
                ],
                incomes: [
                    { id: "4", amount: 1200, description: "Investment returns" }
                ]
            }
        ];
    }
    readBudgets() {
        return this.budgets;
    }
    createBudget(budgetCreationProps) {
        const budget = {
            id: (0, uuid_1.v4)(),
            title: budgetCreationProps.title,
            balance: budgetCreationProps.balance,
            currency: budgetCreationProps.currency,
            expenses: budgetCreationProps.expenses,
            incomes: budgetCreationProps.incomes
        };
        this.budgets.push(budget);
        return budget.id;
    }
    getBudget(id) {
        const budget = this.budgets.find((budget) => budget.id === id);
        if (!budget) {
            throw new common_1.HttpException(`Budget with id: ${id} not found`, 404);
        }
        return budget;
    }
    removeBudget(id) {
        const budget = this.budgets.find((budget) => budget.id === id);
        if (!budget) {
            throw new common_1.NotFoundException(`Budget with id: ${id} not found`);
        }
        this.budgets = this.budgets.filter((budget) => budget.id !== id);
    }
    updateBudget(id, budgetCreationProps) {
        const budgetFound = this.getBudget(id);
        budgetFound.title = budgetCreationProps.title;
        budgetFound.balance = budgetCreationProps.balance;
        budgetFound.currency = budgetCreationProps.currency;
        budgetFound.expenses = budgetCreationProps.expenses;
        budgetFound.incomes = budgetCreationProps.incomes;
        return budgetFound;
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)()
], BudgetService);
//# sourceMappingURL=budget.service.js.map