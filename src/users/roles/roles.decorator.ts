import { SetMetadata } from '@nestjs/common';
import { Role } from '../role.enum';

/**
 * ROLES_KEY for find roles
 */
export const ROLES_KEY = 'roles';
/**
 * Roles
 * @param roles Role[]
 * @returns ROLES_KEY, roles
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
