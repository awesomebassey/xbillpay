import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { BillPaymentDocument } from './models/billpayment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BillPaymentsRepository extends AbstractRepository<BillPaymentDocument> {
  protected readonly logger = new Logger(BillPaymentsRepository.name);

  constructor(
    @InjectModel(BillPaymentsRepository.name)
    billPaymentModel: Model<BillPaymentDocument>,
  ) {
    super(billPaymentModel);
  }
}
