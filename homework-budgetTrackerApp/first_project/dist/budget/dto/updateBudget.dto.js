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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBudgetDTO = void 0;
const class_transformer_1 = require("class-transformer");
const expense_dto_1 = require("./expense.dto");
const income_dto_1 = require("./income.dto");
const class_validator_1 = require("class-validator");
const budget_interface_1 = require("../../interfaces/budget.interface");
class UpdateBudgetDTO {
}
exports.UpdateBudgetDTO = UpdateBudgetDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateBudgetDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateBudgetDTO.prototype, "balance", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(budget_interface_1.Currency),
    __metadata("design:type", String)
], UpdateBudgetDTO.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => expense_dto_1.ExpenseDto),
    __metadata("design:type", Array)
], UpdateBudgetDTO.prototype, "expenses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => income_dto_1.IncomeDTO),
    __metadata("design:type", Array)
], UpdateBudgetDTO.prototype, "incomes", void 0);
//# sourceMappingURL=updateBudget.dto.js.map