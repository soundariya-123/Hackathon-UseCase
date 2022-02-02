import { IsEmail, IsNotEmpty } from 'class-validator';
/**
 * DTO (Data Transfer Object) for transfer a data from HTTP
 * @author soundariya
 */
export class UsersDTO {
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
  name: string;

  /**
   * User emailId column for insert email into the user table
   * @field emailId
   * @throws emailId column not be empty and it allows only valid emailid
   */
  @IsEmail({ message: 'Give a valid emailId' })
  @IsNotEmpty({ message: 'email should not be empty' })
  email: string;

  /**
   * User phone column for insert phone into the user table
   * @field phone
   * @throws phone column not be empty
   */
  @IsNotEmpty({ message: 'phone should not be empty' })
  phone_number: number;

  /**
   * User password column for insert password into the user table
   * @field password
   * @throws password column not be empty
   */
  @IsNotEmpty({ message: 'password should not be empty' })
  password: string;

  /**
   * role column for insert roles into the user tables
   * @field roles
   */
  roles: string;

  /**
   * gender column for insert gender into the user table
   * @field gender
   * @throws gender should not be  empty
   */
  @IsNotEmpty({ message: 'gender should not be empty' })
  gender: string;

  /**
   * age column for insert age into the user table
   * @field age
   * @throws age should not be empty
   */
  @IsNotEmpty({ message: 'age should not be empty' })
  age: number;

  /**
   * ssn column for insert age into the user table
   * @field ssn
   * @throws ssn should not be empty
   */
  @IsNotEmpty({ message: 'ssn should not be empty' })
  ssn: string;

   

  /**
   * orders column to store orders   into the user table
   * @field orders
   */
  // bookings: Booings[];
 
}
