import { NestFactory } from '@nestjs/core';
import { BillPaymentsModule } from './billpayments.module';

async function bootstrap() {
  const app = await NestFactory.create(BillPaymentsModule);
  await app.listen(3000);
}
bootstrap();
