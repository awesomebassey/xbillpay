import { Test, TestingModule } from '@nestjs/testing';
import { BillPaymentController } from './billpayments.controller';
import { BillPaymentService } from './billpayments.service';

describe('BillPaymentController', () => {
  let controller: BillPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillPaymentController],
      providers: [BillPaymentService],
    }).compile();

    controller = module.get<BillPaymentController>(BillPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
