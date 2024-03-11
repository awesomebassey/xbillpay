import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class BillPaymentDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;

  @Prop()
  agentId: string;

  @Prop()
  commissionEarned: string;

  @Prop()
  billType: string;

  @Prop()
  paymentType: string;

  @Prop()
  billId: string;

  @Prop()
  amountPaid: string;

  @Prop()
  transactionId: string;
}

export const BillPaymentSchema =
  SchemaFactory.createForClass(BillPaymentDocument);
