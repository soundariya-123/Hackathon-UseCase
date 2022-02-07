import { IsNotEmpty } from "class-validator";
import { Doctors } from "src/doctors/doctors.entity";
import { Slots } from "src/slots/entity/slots.entity";
import { Users } from "src/users/users.entity";
/**
 * AppoinmentBooking DTO File
 * @class AppoinmentBookingDTO
 * @author Prakash Pawar
 */
export class AppoinmentBookingDTO{

    /**
    * Id field
    * @field id
    * @type number
    */
    id: number;

    /**
    * Location 
    * @field location
    * @type string
    */
     @IsNotEmpty({message:'loaction should not empty'})
     location: string;
     
     /**
      * Users
      * @field users
      * @type Users
      */
     @IsNotEmpty({message:'User should not empty'})
     users:Users;
     
     /**
      * Doctors
      * @field doctors
      * @type Doctors
      */
     @IsNotEmpty({message:'doctor_id:Doctors'})
     doctors:Doctors;

     /**
      * visit_mode
      * @field visit_mode
      * @type string
      */
      visit_mode: string;

    /**
     * Bookig date
     * @field booking_date
     * @type Date
     */
    @IsNotEmpty({message:'Booking date should not empty'})
    booking_date: Date;

    /**
     * Status
     * @field status
     * @type string
     */
    status: string;

    /**
     * Slots 
     * @field slot_id
     * @type Slots
     */
    @IsNotEmpty({message:'Slots Id should not emppty'})
    slots: Slots;

}