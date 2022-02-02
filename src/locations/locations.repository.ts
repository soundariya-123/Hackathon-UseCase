import { EntityRepository, Repository } from "typeorm";
import { Locations } from "./location.entity";

/**
 * LocationRepository Exrends Standard Repository 
 * @author RAM
 */
@EntityRepository(Locations)
export class LocationsRepository extends Repository<Locations>{
}