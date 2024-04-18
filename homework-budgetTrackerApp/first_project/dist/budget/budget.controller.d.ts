import { BudgetService } from './budget.service';
import { BudgetDTO } from './dto/budget.dto';
import { UpdateBudgetDTO } from './dto/updateBudget.dto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): {};
    addBudget(requestBody: BudgetDTO): {
        message: string;
        tripId: string;
    };
    getBudget(id: string): any;
    deleteBudget(id: string): {
        message: string;
        budget: void;
    };
    updateBudget(id: string, updateBudgetDTO: UpdateBudgetDTO): {
        message: string;
        updatedBudget: import("src/interfaces/budget.interface").Budget;
    };
}
