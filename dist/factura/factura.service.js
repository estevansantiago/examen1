"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaService = void 0;
const common_1 = require("@nestjs/common");
let FacturaService = class FacturaService {
    constructor() {
        this.factura = [];
    }
    create(createFacturaDto) {
        this.factura.push(createFacturaDto);
        return 'This action adds a new factura';
    }
    findAll() {
        return this.factura;
    }
    findOne(id) {
        const index = this.factura.find(c => c.codigo == id);
        if (index != null) {
            return index;
        }
        else {
            return "ERROR";
        }
    }
    update(id, updateFacturaDto) {
        return 'this action updates a #${id} this.factura';
    }
    remove(id) {
        const index = this.factura.findIndex(c => c.codigo == id);
        if (index != -1) {
            this.factura.splice(index, 1);
            return 'This action delete a #${id} this.factura';
        }
        else {
            return "ERROR";
        }
    }
};
exports.FacturaService = FacturaService;
exports.FacturaService = FacturaService = __decorate([
    (0, common_1.Injectable)()
], FacturaService);
//# sourceMappingURL=factura.service.js.map