import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { loginDTO } from './dto/login.dto';
import { UsersDTO } from './dto/users.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { EMAILID_CONFLICT_EXCEPTION, REGISTER_INTERNALSERVER_FAILED, USERS_MESSAGE, USER_INVALID_CREDENTIALS } from '../constant';

/**
 *  UsersService -- to write a business logic
 *  @author soundariya
 */
@Injectable()
export class UsersService {
  /**
   * Logger instance
   */
  logger = new Logger(UsersService.name);

  /**
   * dependency injection
   * @param usersRepo UsersRepository
   */
  constructor(
    private usersRepo: UsersRepository,
    private jwtService: JwtService,
  ) {}

  /**
   * Register user name and details into table
   * @param user UserDTO
   * @returns Created User
   * @throws InternalServerErrorException(errormessage)
   */
  async register(user: UsersDTO): Promise<string> {
    let response: UsersDTO;
    try {
      const { password } = user;
      const salt = await bcrypt.genSalt();
      const hasedPassword = await bcrypt.hash(password, salt);

      response = await this.usersRepo.save({
        ...user,
        password: hasedPassword,
      });
      if (response) {
        const message =  USERS_MESSAGE;
        this.logger.log(message);
        return message;
      } else {
        throw new InternalServerErrorException(
          REGISTER_INTERNALSERVER_FAILED,
        );
      }
    } catch (err) {
      this.logger.error(err.message);
      if (err.errno === 1062) {
        throw new ConflictException(EMAILID_CONFLICT_EXCEPTION);
      }
      throw new InternalServerErrorException(err.message);
    }
  }

  /**
   * User login
   * @param userLogin loginDTO
   * @returns success message
   */
  async loginUser(userLogin: loginDTO): Promise<{ token }> {
    try {
      const userVal = await this.usersRepo.findOneOrFail({
        email: userLogin.email,
      });
      if (
        userVal &&
        (await bcrypt.compare(userLogin.password, userVal.password))
      ) {
        const payload: JwtPayload = { email: userVal.email };
        const token = this.jwtService.sign(payload);

        return { token };
      } else {
        throw new UnauthorizedException(USER_INVALID_CREDENTIALS);
      }
    } catch (err) {
      this.logger.error(err.message);
      if (err?.status === 401) {
        throw new UnauthorizedException(USER_INVALID_CREDENTIALS);
      }
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
 
}
