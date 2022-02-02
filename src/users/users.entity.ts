import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';

/**
 * Users entity for create table columns
 * @author soundariya
 */
@Entity()
export class Users {
  /**
   * Primary key defines autoIncrement
   * @field id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Create name column in users table
   * @field name
   */
  @Column()
  name: string;

  /**
   * Create email column in users table
   * @field email
   */
  @Column({ unique: true })
  email: string;

  /**
   * Create name column in users table
   * @field phone
   */
  @Column({ type: 'bigint' })
  phone_number: number;

  /**
   * Create ssn column in users table
   * @field ssn
   */
  @Column()
  ssn:string

  /**
   * Create name column in users table
   * @field password
   */
  @Column()
  password: string;

  /**
   * Create roles column in users table
   * @field roles
   */
  @Column({ type: 'enum', enum: Role, default: Role.Admin })
  roles: string;

  /**
   * Create gender column in users table
   * @field gender
   */
  @Column()
  gender: string;

  /**
   * Create age column in users table
   * @field age
   */
  @Column()
  age: number;

  /**
   * Create rooms column in users table
   * @field rooms
   *
   */
  // @OneToMany(() => Bookings, (bookings) => bookings.users)
  // bookings: Bookings[];
 
}
