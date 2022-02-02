import { IsNotEmpty } from "class-validator";
import { Doctors } from "src/doctors/doctors.entity";
/**
 * To declare  properties for user and to perform validations
 */
export class LocationDTO {

  /**
    * Id is for find the number of the users
    * @field id
    */
    id: number;

    /**
     * Location Should Not Be Empty.
     */
    @IsNotEmpty({ message: 'Location Should Not Be Empty' })
    location: string;

    /**
     * Location Should Not Be Empty.
     */
    @IsNotEmpty({ message: 'State Should Not Be Empty' })
    state: string;

  /**
    * City Should Not Be Empty.
    */
    @IsNotEmpty({ message: 'City Should Not Be Empty' })
    city: string;

    /**
     * RelationShip - One To many 
     * @field doctors 
     */
    doctors: Doctors[];
}