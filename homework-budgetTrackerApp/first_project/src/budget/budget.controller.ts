import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDTO } from './dto/budget.dto';
import { BudgetCreationProps } from 'src/interfaces/budget.interface';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateBudgetDTO } from './dto/updateBudget.dto';

@Controller('budgets')
export class BudgetController {
    constructor( private readonly budgetService: BudgetService ){}


    @Get()
    listBudgets(){
        const budgets = this.budgetService.readBudgets();
        return budgets;
    }

    @Post()
    addBudget(@Body() requestBody: BudgetDTO){
        const budgetCreationProps: BudgetCreationProps = {
            title: requestBody.title,
            balance: requestBody.balance,
            currency: requestBody.currency,
            expenses: requestBody.expenses,
            incomes: requestBody.incomes
        };

        const id = this.budgetService.createBudget(budgetCreationProps);
        console.log(id);
        return { message: 'Success created!', tripId: id };
    }

    @Get(':id')
    getBudget(@Param('id') id: string){
        const budget = this.budgetService.getBudget(id)
        return budget;
    }

    @Delete(':id')
    deleteBudget(@Param('id') id: string){
        const budget = this.budgetService.removeBudget(id)
        return { message: 'Success deleted!', budget };
    }

    @Put(':id')
    updateBudget(@Param('id') id: string, @Body() updateBudgetDTO : UpdateBudgetDTO){
        const budgetCreationProps: BudgetCreationProps = {
            title: updateBudgetDTO.title,
            balance: updateBudgetDTO.balance,
            currency: updateBudgetDTO.currency,
            expenses: updateBudgetDTO.expenses,
            incomes: updateBudgetDTO.incomes
    }
        const updatedBudget = this.budgetService.updateBudget(id, budgetCreationProps);
        return { message: 'Success update!', updatedBudget }

    
}
}
