import { IsNotEmpty } from "class-validator";
import { Doctors } from "src/doctors/doctors.entity";




export class SlotDTO {



   /**
    * Id is for find the number of the users
    * @field id
    */
     id: number;

   /**
    * slot_date is for find the number of the users
    * @field slot_date
    */
    slot_date: Date;

    /**
    * startTime is for find the number of the users
    * @field startTime
    */
    @IsNotEmpty({ message: 'startTime should not be empty' })
    startTime: string;

   /**
    * endTime is for find the number of the users
    * @field endTime
    */
    @IsNotEmpty({ message: 'endTime should not be empty' })
    endTime: string;

   /**
    * status is for find the number of the users
    * @field status
    */
    status: string;

   /**
    * modeOfVisit is for find the number of the users
    * @field modeOfVisit
    */
    @IsNotEmpty({ message: 'modeOfVisit should not be empty' })
    modeOfVisit: string;

   /**
    * doctors is for find the number of the users
    * @field doctors
    */
    doctors: Doctors;
}