import { Injectable, Logger } from '@nestjs/common';
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
    constructor(private slotsRepository:SlotsRepository){}
}
