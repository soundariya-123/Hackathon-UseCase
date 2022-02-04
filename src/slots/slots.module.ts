import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locations } from '../locations/location.entity';
import { LocationsRepository } from '../locations/locations.repository';
import { Slots } from './entity/slots.entity';
import { SlotsController } from './slots.controller';
import { SlotsRepository } from './slots.repository';
import { SlotsService } from './slots.service';

@Module({
  imports:[TypeOrmModule.forFeature([Slots,SlotsRepository,Locations,LocationsRepository]),ScheduleModule.forRoot()],
  controllers: [SlotsController],
  providers: [SlotsService]
})
export class SlotsModule {}
