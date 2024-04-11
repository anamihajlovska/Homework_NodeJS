import { Controller, Get } from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budgets')
export class BudgetController {
    constructor( private readonly budgetService: BudgetService ){}


    @Get()
    listBudgets(){
        const budgets = this.budgetService.readBudgets();
        return budgets;
    }
}
