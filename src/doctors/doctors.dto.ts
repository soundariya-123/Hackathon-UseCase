import { IsEmail, IsNotEmpty, IsPositive, Length } from "class-validator";
import { Locations } from "src/locations/location.entity";
import { Slots } from "src/slots/entity/slots.entity";



/**
 * To declare  properties for user and to perform validations
 */
export class DoctorsDTO{

    /**
     * Id is for find the number of the users
     * @field id
     */
     id: number;


    /**
     * User name column for insert name into the user table
     * @field name
     * @throws name column not be empty
     */
    @IsNotEmpty({ message: 'name should not be empty' })
    @Length(3, 8, { message:'name should be minimum of 3 characters and maximum of 8 characters '})
    doctor_name: string

     /**
     * User emailId column for insert email into the user table
     * @field emailId
     * @throws emailId column not be empty and it allows only valid emailid
     */
    @IsNotEmpty({ message: 'emailId should not be empty' })
    @IsEmail()
    emailId: string;

    /**
     * education column for insert roles into the user tables
     * @field education
     */
    @IsNotEmpty({message:'education Should Not Be Empty'})
    education: string;

    /**
     * experience column for insert roles into the user tables
     * @field experience
     */
    @IsNotEmpty({message:'experience Should Not Be Empty'})
    experience: number;

    /**
     * role column for insert roles into the user tables
     * @field role
     */
    @IsNotEmpty({message:'role Should Not Be Empty'})
    role: string;

    /**
     * rating column for insert roles into the user tables
     * @field rating
     */
    @IsNotEmpty({message:'rating Should Not Be Empty'})
    rating: number

    /**
     * location column for insert roles into the user tables
     * @field location
     */
    @IsNotEmpty({message:'Location Should Not Be Empty'})
    location: number;

    /**
     * User phone column for insert phone into the user table
     * @field phone
     * @throws phone column not be empty
     */
    @IsNotEmpty({message:'phoneNumber Should Not Be Empty'})
    @IsPositive()
    phoneNumber: number;

    /**
     * consultation_fee column for insert roles into the user tables
     * @field consultation_fee
     */
    @IsNotEmpty({message:'consultation_fee Should Not Be Empty'})
    consultation_fee: string;

    /**
     * description column for insert roles into the user tables
     * @field description
     */
    @IsNotEmpty({message:'description Should Not Be Empty'})
    description: string

    /**
     * status column for insert roles into the user tables
     * @field status
     */
    @IsNotEmpty({message:'status Should Not Be Empty'})
    status: string;

    /**
     * status column for insert roles into the user tables
     * @field status
     */
    @IsNotEmpty({message:'specialization Should Not Be Empty'})
    specialization: string;

   /**
     * RelationShip - Many To One
     * @field locations
     */
    locations:Locations;

    /**
     * RelationShip - Many To One
     * @field slots
     */
    slots:Slots[];
}