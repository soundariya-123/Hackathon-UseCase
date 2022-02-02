import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * DTO (Data Transfer Object) for transfer a data from HTTP
 * @author soundariya
 */
export class loginDTO {
  /**
   * User emailId column for insert email into the user table
   * @field emailId
   * @throws emailId column not be empty and it allows only valid emailid
   */
  @IsNotEmpty({ message: 'Email Id should not be empty' })
  @IsEmail({ message: 'Enter valid email id' })
  email: string;

  /**
   * User password column for insert password into the user table
   * @field password
   * @throws password column not be empty
   */
  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;
}
