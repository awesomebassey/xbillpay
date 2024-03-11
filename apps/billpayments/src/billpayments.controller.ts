import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillPaymentService } from './billpayments.service';
import { CreateBillPaymentDto } from './dto/create-billpayment.dto';
import { UpdateBillPaymentDto } from './dto/update-billpayment.dto';

@Controller('billpayments')
export class BillPaymentController {
  constructor(private readonly billpaymentService: BillPaymentService) {}

  @Post()
  create(@Body() createBillPaymentDto: CreateBillPaymentDto) {
    return this.billpaymentService.create(createBillPaymentDto);
  }

  @Get()
  findAll() {
    return this.billpaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billpaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillPaymentDto: UpdateBillPaymentDto) {
    return this.billpaymentService.update(+id, updateBillPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billpaymentService.remove(+id);
  }
}
