import { Module } from '@nestjs/common';
import { BillPaymentService } from './billpayments.service';
import { BillPaymentController } from './billpayments.controller';
import { DatabaseModule } from '@app/common';
import { BillPaymentsRepository } from './billpayments.repository';
import {
  BillPaymentSchema,
  BillPaymentDocument,
} from './models/billpayment.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: BillPaymentDocument.name, schema: BillPaymentSchema },
    ]),
  ],
  controllers: [BillPaymentController],
  providers: [BillPaymentService, BillPaymentsRepository],
})
export class BillPaymentsModule {}
