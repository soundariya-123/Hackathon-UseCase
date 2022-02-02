import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../role.enum';
import { ROLES_KEY } from '../roles/roles.decorator';

/**
 * RolesGuard for check roles
 * @author soundariya
 */
@Injectable()
export class RolesGuard implements CanActivate {
  /**
   * Constructor to inject reflector
   * @param reflector Reflector
   */
  constructor(private reflector: Reflector) {}

  /**
   * CanActivate
   * @param context ExecutionContext
   * @returns roles
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
