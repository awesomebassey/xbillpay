import { Injectable } from '@nestjs/common';
import { CreateBillPaymentDto } from './dto/create-billpayment.dto';
import { UpdateBillPaymentDto } from './dto/update-billpayment.dto';

@Injectable()
export class BillPaymentService {
  create(createBillPaymentDto: CreateBillPaymentDto) {
    return 'This action adds a new billpayments';
  }

  findAll() {
    return `This action returns all billpayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billpayments`;
  }

  update(id: number, updateBillPaymentDto: UpdateBillPaymentDto) {
    return `This action updates a #${id} billpayments`;
  }

  remove(id: number) {
    return `This action removes a #${id} billpayments`;
  }
}
