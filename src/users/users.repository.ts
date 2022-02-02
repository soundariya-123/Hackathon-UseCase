import { EntityRepository, Repository } from 'typeorm';
import { Users } from './users.entity';

/**
 * Repositories can be obtained from the database connection
 * @author soundariya
 */
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {}
