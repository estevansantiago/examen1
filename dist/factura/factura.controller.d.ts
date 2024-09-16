import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
export declare class FacturaController {
    private readonly facturaService;
    constructor(facturaService: FacturaService);
    create(createFacturaDto: CreateFacturaDto): string;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateFacturaDto: UpdateFacturaDto): string;
    remove(id: string): "ERROR" | "This action delete a #${id} this.factura";
}
