import { EntityRepository, Repository } from "typeorm";
import { Doctors } from "./doctors.entity";

/**
 * DoctorsRepository Exrends Standard Repository 
 * @author RAM
 */
@EntityRepository(Doctors)
export class DoctorsRepository extends Repository<Doctors>{
}