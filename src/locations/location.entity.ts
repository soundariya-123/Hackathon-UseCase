import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Doctors } from "../doctors/doctors.entity";

/**
 * locations Entity 
 * @class locations
 * @author RAM
 */
@Entity()
export class Locations{

    /**
     * Primary key defines autoIncrement
     * @field id
     */
    @PrimaryGeneratedColumn()
    id:number;

    /**
     * Create location column in Doctors table
     * @field location
     */
    @Column()
    location:string;

    /**
     * Create state column in Doctors table
     * @field state
     */
     @Column()
     state:string;

     /**
     * Create city column in Doctors table
     * @field city
     */
      @Column()
      city:string;

     /**
     * Create doctorsId column in holding table
     * @field doctors
     * RelationShip - One To Many
     */
    @OneToMany(()=>Doctors,doctors=>doctors.locations)
    doctors:Doctors[];
}