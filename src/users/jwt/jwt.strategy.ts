import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersRepository } from '../users.repository';
import { JwtPayload } from './jwt-payload.interface';

/**
 * To export JwtStratagy
 * @author soundariya
 */
@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy) {
  /**
   * Constructor for inject UserRepository
   * @param userRepo UserRepository
   */
  constructor(private uerRepo: UsersRepository) {
    super({
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  /**
   * To validate payload
   * @param payload JwtPayload
   * @returns response
   */
  async validate(payload: JwtPayload) {
    try {
      const response = await this.uerRepo.findOneOrFail({
        email: payload.email,
      });
      return response;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
