import { Controller } from '@nestjs/common';
import { SlotsService } from './slots.service';

/**
 * UsersController -- Controllers are responsible for handling incoming requests and returning responses.
 * @author Ram
 */
@Controller('slots')
export class SlotsController {
    
    /**
     * @constructor Constructor for Inject SlotsService
     * @param slotsService 
     */
    constructor(private slotsService:SlotsService){}
}
