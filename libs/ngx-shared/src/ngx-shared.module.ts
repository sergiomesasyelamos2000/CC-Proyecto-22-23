import { Module } from '@nestjs/common';
import { ResponseBuilderService } from './lib/services/response-builder.service';

@Module({
  providers: [ResponseBuilderService],
  exports: [ResponseBuilderService],
})
export class NgxSharedModule {}
