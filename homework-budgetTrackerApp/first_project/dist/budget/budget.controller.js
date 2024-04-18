"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetController = void 0;
const common_1 = require("@nestjs/common");
const budget_service_1 = require("./budget.service");
const budget_dto_1 = require("./dto/budget.dto");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const updateBudget_dto_1 = require("./dto/updateBudget.dto");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    listBudgets() {
        const budgets = this.budgetService.readBudgets();
        return budgets;
    }
    addBudget(requestBody) {
        const budgetCreationProps = {
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
    getBudget(id) {
        const budget = this.budgetService.getBudget(id);
        return budget;
    }
    deleteBudget(id) {
        const budget = this.budgetService.removeBudget(id);
        return { message: 'Success deleted!', budget };
    }
    updateBudget(id, updateBudgetDTO) {
        const budgetCreationProps = {
            title: updateBudgetDTO.title,
            balance: updateBudgetDTO.balance,
            currency: updateBudgetDTO.currency,
            expenses: updateBudgetDTO.expenses,
            incomes: updateBudgetDTO.incomes
        };
        const updatedBudget = this.budgetService.updateBudget(id, budgetCreationProps);
        return { message: 'Success update!', updatedBudget };
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "listBudgets", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [budget_dto_1.BudgetDTO]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "addBudget", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "getBudget", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "deleteBudget", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __param(1, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateBudget_dto_1.UpdateBudgetDTO]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "updateBudget", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)('budgets'),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map