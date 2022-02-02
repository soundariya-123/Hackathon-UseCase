import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { AppoinmentBookingRepository } from './appoinment-booking.repository';
import { AppoinmentBookingDTO } from './dto/appoinment-booking.dto';

/**
 * AppoinmentBookingService -- to write a business logic
 * @class AppoinmentBookingService
 * @author Prakash Pawar
 */
@Injectable()
export class AppoinmentBookingService {
    
    /**
     * Logger Instance
     */
     logger = new Logger(AppoinmentBookingService.name)

     /**
     * dependency injection 
     * @param AppointmentRepo AppoinmentBookingRepository
     */
    constructor(private appointmentRepo: AppoinmentBookingRepository) {}

    /**
     * Add booking for the passangers
     * @param appoinmentDTO AppoinmentBookingDTO
     * @returns success message
     */
     async addAppointment(appoinmentDTO: AppoinmentBookingDTO): Promise<AppoinmentBookingDTO> {
        let response: AppoinmentBookingDTO;
        try {
            response = await this.appointmentRepo.save(appoinmentDTO);
            this.logger.log(`appoinment  added Succefully with id: ${response}`)
            console.log(response)
        } catch (err) {
            this.logger.error(err.message);
            throw new InternalServerErrorException(err.message);
        }
        return response;
    }

    /**
     * Cancel Appoinment
     * @param id number
     * @returns Appoinment cancelled successfully
     */
    async cancelAppoinment(id: number): Promise<string> {
        try {
            let response = await  this.appointmentRepo.updateStatus(id);
            if(response.affected > 0) {
                const msg:string = 'Appoinment cancelled successfully';
                this.logger.log(msg)
                return msg
            } else {
                throw new InternalServerErrorException('Appoinment not cancelled ')
            }
        } catch(err) {
            this.logger.error(err.message)
            throw new  HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
    }


}