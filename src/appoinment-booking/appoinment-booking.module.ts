import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppoinmentBookingController } from './appoinment-booking.controller';
import { AppoinmentBooking } from './appoinment-booking.entity';
import { AppoinmentBookingRepository } from './appoinment-booking.repository';
import { AppoinmentBookingService } from './appoinment-booking.service';
import { UsersRepository } from '../users/users.repository';
import { SlotsRepository } from 'src/slots/slots.repository';
import { DoctorsRepository } from 'src/doctors/doctors.repository';

@Module({
  imports:[TypeOrmModule.forFeature([AppoinmentBooking,AppoinmentBookingRepository,UsersRepository,
           SlotsRepository,DoctorsRepository])],
  controllers: [AppoinmentBookingController],
  providers: [AppoinmentBookingService]
})
export class AppoinmentBookingModule {}
