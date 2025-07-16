import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';

@Module({
  imports: [BeneficiaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
