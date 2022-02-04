import { Doctors } from "src/doctors/doctors.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Slots {

    /**
     * Primary key defines autoIncrement
     * @field id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
    * Create location column in Doctors table
    * @field location
    */
    @Column()
    slot_date: Date;

    /**
     * Create state column in Doctors table
     * @field state
     */
    @Column()
    startTime: string;

    /**
    * Create city column in Doctors table
    * @field city
    */
    @Column()
    endTime: string;

    /**
     * Create status column in Doctors table
     * @field status
     */
    @Column()
    status: string;

    /**
     * Create modeOfVisit column in Doctors table
     * @field modeOfVisit
     */
     @Column()
     modeOfVisit: string;
     
     /**
      * Create doctors column in Doctors table
      * @field doctors
      */
     @ManyToOne(()=>Doctors, doctors=>doctors.slots)
     doctors:Doctors;

}