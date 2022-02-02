import { EntityRepository, Repository } from "typeorm";
import { AppoinmentBooking } from "./appoinment-booking.entity";
import { Status } from "./status.enum";
/**
 * AppoinmentBooking repository
 * @class AppoinmentBookingRepository
 * @author Prakash Pawar
 */
@EntityRepository(AppoinmentBooking)
export class AppoinmentBookingRepository extends Repository<AppoinmentBooking>{
    
    /**
     * Update status of userbooking table
     * @param id userBookingId
     * @returns affected rows count
     */
     async updateStatus(id:number) {
        let response = await this.createQueryBuilder()
                    .update(AppoinmentBooking)
                    .set({ status: Status.Cancelled })
                    .where("id = :id", { id })
                    .printSql()
                    .execute();
                    console.log(response)
        return response;
    }
}
