import { Body, Controller, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger';
import { AppoinmentBookingService } from './appoinment-booking.service';
import { AppoinmentBookingDTO } from './dto/appoinment-booking.dto';
/**
 * Appoinment Booking Controller
 * @class AppoinmentBookingController
 * @author Prakash Pawar
 */
@ApiTags('appoinment-booking')
@Controller('appoinment-booking')
export class AppoinmentBookingController {

    /**
     * @constructor Constructor for Inject AppoinmentBookingService
     * @param appoinmentService  AppoinmentBookingService
     */
     constructor(private  appoinmentService:AppoinmentBookingService ) {}
    /**
     * Add appoinment 
     * @param appoinmentDTO AppoinmentBookingDTO
     * @returns Appinment created successfully
     */
    @ApiCreatedResponse({ description: 'Appinment created successfully', status: HttpStatus.CREATED })
    @ApiInternalServerErrorResponse({ description: 'Appoinment not created(Internal Server) ', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post()
    addAppointment(@Body() appoinmentDTO: AppoinmentBookingDTO): Promise<AppoinmentBookingDTO>{
        return this.appoinmentService.addAppointment(appoinmentDTO);

    }

    /**
     * Cancel Appoinment
     * @param id id
     * @returns returns success message
     */
     @ApiCreatedResponse({ description: 'Appinment created successfully', status: HttpStatus.CREATED })
     @ApiInternalServerErrorResponse({ description: 'Appoinment not created(Internal Server) ', status: HttpStatus.INTERNAL_SERVER_ERROR })
     @Patch(':id')
     cancelAppoinment(@Param('id') id:number): Promise<string>{
         return this.appoinmentService.cancelAppoinment(id);
     }

    
}
