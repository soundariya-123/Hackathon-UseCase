import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { FIND_LOCATIONS, FIND_LOCATIONS_NOTFOUND, REAPPOINTMENT_SCHEDULE, REAPPOINTMENT_SCHEDULE_FAILED, USERDETAILS_FAILED } from 'constant';
import { LocationDTO } from '../locations/location.dto';
import { LocationsRepository } from '../locations/locations.repository';
import { SlotsRepository } from './slots.repository';

/**
 *  UsersService -- to write a business logic
 *  @author Ram
 */
@Injectable()
export class SlotsService {


    /**
     * InBuilt Logger Used
     */
    logger = new Logger(SlotsService.name);

    /**
     * dependency injection
     * @param slotsRepository 
     */
    constructor(private slotsRepository: SlotsRepository,
        private locationsRepository: LocationsRepository) { }


    /**
     * search location and Doctor Details
     * @param location 
     * @returns LocationDTO[]
     */
    @Cron('4 * * * * *')
    async getLocationByName(location: string): Promise<LocationDTO[]> {
        try {
            let response = await this.locationsRepository.searchByLocation(location);
            if (response.length > 0) {
                this.logger.log(FIND_LOCATIONS)
                return response;
            } else {
                const message: string = FIND_LOCATIONS_NOTFOUND
                this.logger.error(FIND_LOCATIONS_NOTFOUND)
                throw new NotFoundException(message)
            }
        } catch (error) {
            this.logger.error(error.message);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Reschedule the appointment
     * @param id 
     * @param startTime 
     * @param endTime 
     * @returns Updated Appointment Booking
     */
    async rescheduleAppointment(id: number, startTime: string, endTime: string): Promise<string> {
        try {
            let response = await this.slotsRepository.findOneOrFail({ where: { id } });
            if (response) {
                let data = await this.slotsRepository.changeSlot(id, startTime, endTime);
                if (data) {
                    const message = REAPPOINTMENT_SCHEDULE;
                    this.logger.log(REAPPOINTMENT_SCHEDULE);
                    return message;
                }
                else {
                    this.logger.log(REAPPOINTMENT_SCHEDULE_FAILED);
                    throw new InternalServerErrorException(REAPPOINTMENT_SCHEDULE_FAILED)
                }
            } else {
                this.logger.log(USERDETAILS_FAILED);
                throw new InternalServerErrorException(USERDETAILS_FAILED)
            }
        } catch (error) {
            this.logger.error(error.message);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
