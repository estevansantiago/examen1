import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Injectable()
export class FacturaService {

factura =[]

  create(createFacturaDto: CreateFacturaDto) {
    this.factura.push(createFacturaDto)
    return 'This action adds a new factura';
  }

  findAll() {
    return this.factura;
  }

  findOne(id: number) {
      const index = this.factura.find(c=> c.codigo == id);
      if (index!= null){
        return index
      } else {
        return "ERROR"
  }
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return 'this action updates a #${id} this.factura';
  }

  remove(id: number) {
    const index = this.factura.findIndex(c=> c.codigo == id);
    if (index!= -1){
      this.factura.splice(index,1)
      return 'This action delete a #${id} this.factura'
    } else {
      return "ERROR"
     }
         }
     }