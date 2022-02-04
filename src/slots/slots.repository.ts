import { EntityRepository, Repository } from "typeorm";
import { Slots } from "./entity/slots.entity";


/**
 * SlotsRepository Extends Standard Repository 
 * @author RAM
 */
@EntityRepository(Slots)
export class SlotsRepository extends Repository<Slots>{

    async changeSlot(id:number,startTime: string,endTime: string){
       return await this
       .createQueryBuilder()
       .update(Slots)
       .set({startTime: startTime,endTime: endTime})
       .where("id = :id",{id})
       .execute()
    }
}