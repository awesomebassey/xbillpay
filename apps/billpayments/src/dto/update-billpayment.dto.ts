import { PartialType } from '@nestjs/mapped-types';
import { CreateBillPaymentDto } from './create-billpayment.dto';

export class UpdateBillPaymentDto extends PartialType(CreateBillPaymentDto) {}
