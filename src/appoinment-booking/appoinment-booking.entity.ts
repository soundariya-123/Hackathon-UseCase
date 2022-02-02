import { Doctors } from "src/doctors/doctors.entity";
import { Slots } from "src/slots/entity/slots.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./status.enum";
import { VisitMode } from "./visiting_mode.enum";
/**
 * Appoinment booking entity
 * @class AppoinmentBooking
 * @author Prakash
 */
@Entity()
export class AppoinmentBooking {

    /**
     * Primary key defines autoIncrement
     * @field id
     * @type number
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
    * Create location column in users table
    * @field location
    * @type string
    */
    @Column()
    location: string;

    /**
    * Create user_id column in users table
    * @field user_id
    * @type Users
    */
     @ManyToOne(() => Users, users => users.appoinmentbooking)
     users:Users;

    /**
     * Create user_id column in users table
     * @field doctor_id
     * @type Doctors
     */
     @ManyToOne(() => Doctors, doctors=>doctors.appoinmentbooking )
     doctors:Doctors;

    /**
      * Create visit_mode column in users table
      * @field visit_mode
      * @type string
      */
     @Column({ type: 'enum', enum: VisitMode, default: VisitMode.Online})
     visit_mode: string;

    /**
      * Create booking_date column in users table
      * @field booking_date
      * @type Date
      */
    @Column()
    booking_date: Date;

    /**
      * Create status column in users table
      * @field status
      * @type string
      */
     @Column({ type: 'enum', enum: Status, default: Status.Booked})
    status: string;
    /**
       * Create slot_id column in users table
       * @field slots
       * @type Slots
       */
     @ManyToOne(() => Slots, slots => slots.appoinmentbooking)
     slots: Slots;

}