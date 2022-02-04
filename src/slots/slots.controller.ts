import { Controller, Get, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guards';
import { LocationDTO } from '../locations/location.dto';
import { SlotsService } from './slots.service';

/**
 * UsersController -- Controllers are responsible for handling incoming requests and returning responses.
 * @author Ram
 */
@ApiBearerAuth('swagger')
@UseGuards(JwtAuthGuard)
@ApiTags('Slots')
@Controller('slots')
export class SlotsController {
    
    /**
     * @constructor Constructor for Inject SlotsService
     * @param slotsService 
     */
    constructor(private slotsService:SlotsService){}
    
    /**
     * @Get Handler
     * @param location 
     * @returns LocationDTO
     */
    @ApiOkResponse({description: 'Locations with Doctors Details fetched Successfully', status: HttpStatus.OK})
    @ApiNotFoundResponse({description: 'Locations with Doctors Details Not found', status: HttpStatus.NOT_FOUND})
    @Get(':location')
    getLocationByName(@Param('location') location:string):Promise<LocationDTO[]>{
       return this.slotsService.getLocationByName(location);
    }
    /**
     * Appointment Reschedule
     * @param id 
     * @param startTime 
     * @param endTime 
     * @returns Success or Failure Message
     */
    @ApiOkResponse({description: 'Appointment Rescheduled Successfully', status: HttpStatus.OK})
    @ApiNotFoundResponse({description: 'Appointment Rescheduled Failed', status: HttpStatus.NOT_FOUND})
    @Patch('/reschedule/:id/:startTime/:endTime')
    rescheduleAppointment(@Param('id') id:number, @Param('startTime')startTime: string,@Param('endTime')endTime: string):Promise<string>{
        return this.slotsService.rescheduleAppointment(id,startTime,endTime);
    }
}
