import { EntityRepository, Repository } from "typeorm";
import { Slots } from "./entity/slots.entity";


/**
 * SlotsRepository Exrends Standard Repository 
 * @author RAM
 */
@EntityRepository(Slots)
export class SlotsRepository extends Repository<Slots>{

    searchByLocation(){
        
    }
}