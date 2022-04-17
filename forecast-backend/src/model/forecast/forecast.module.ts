import { Module } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { ForecastController } from './forecast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forecast } from './entities/forecast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Forecast])],
  controllers: [ForecastController],
  providers: [ForecastService],
})
export class ForecastModule {}
