import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
export declare class FacturaService {
    factura: any[];
    create(createFacturaDto: CreateFacturaDto): string;
    findAll(): any[];
    findOne(id: number): any;
    update(id: number, updateFacturaDto: UpdateFacturaDto): string;
    remove(id: number): "ERROR" | "This action delete a #${id} this.factura";
}
