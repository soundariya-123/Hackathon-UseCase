import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * To export JwtAuthGuard
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
