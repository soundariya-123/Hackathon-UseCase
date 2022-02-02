import { Locations } from "src/locations/location.entity";
import { Slots } from "src/slots/entity/slots.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/**
 * Doctors entity for create table columns
 * @author RAM
 */
@Entity()
export class Doctors {


    /**
     * Primary key defines autoIncrement
     * @field id
     */
    @PrimaryGeneratedColumn()
    id: number;

    

    /**
     * Create doctor_name column in Doctors table
     * @field doctor_name
     */
    @Column()
    doctor_name: string

    /**
     * Create emailId column in Doctors table
     * @field emailId
     */
    @Column()
    emailId: string;

    /**
     * Create education column in Doctors table
     * @field education
     */
    @Column()
    education: string;

    /**
     * Create experience column in Doctors table
     * @field experience
     */
    @Column()
    experience: number;

    /**
     * Create role column in Doctors table
     * @field role
     */
     @Column()
     role: string;

    /**
     * Create rating column in Doctors table
     * @field rating
     */
    @Column()
    rating: number

    /**
     * Create location column in Doctors table
     * @field location
     */
    @Column()
    location: number;

    /**
     * Create phoneNumber column in Doctors table
     * @field number
     */
    @Column()
    phoneNumber: number;

    /**
     * Create consultation_fee column in Doctors table
     * @field consultation_fee
     */
    @Column()
    consultation_fee: string;

    /**
     * Create description column in Doctors table
     * @field description
     */
    @Column()
    description: string

    /**
     * Create status column in Doctors table
     * @field status
     */
    @Column()
    status: string;

    /**
     * Create Specialization column in stock table
     * @field Specialization
     */
    @Column()
    specialization: string;

    /**
     * ManyToOne RelationShip 
     */
    @ManyToOne(()=>Locations, locations=>locations.doctors)
    locations:Locations;

    /**
     * OneToMany Relationship
     */
    @OneToMany(()=>Slots, slots=>slots.doctors)
    slots:Slots[];
}