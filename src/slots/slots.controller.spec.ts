import { Test, TestingModule } from '@nestjs/testing';
import { SlotsController } from './slots.controller';
import { SlotsService } from './slots.service';


describe('SlotsController', () => {
  let slotsController: SlotsController;
  let slotsService:SlotsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlotsController],
      providers:[SlotsService,{
        provide:SlotsService,
        useFactory:()=>({
          getLocationByName:jest.fn(),
          rescheduleAppointment:jest.fn()
        })
      }]
    }).compile();

    slotsController = module.get<SlotsController>(SlotsController);
    slotsService = module.get<SlotsService>(SlotsService);
  });

  it('should be defined', () => {
    expect(slotsController).toBeDefined();
  });
  describe('when rescheduleAppointment()', async()=>{
    const rescheduleDetails = {
      id:1,
      startTime:"09:00 AM",
      endTime:"09:30 AM",
      status:"BOOKED"
    }
    //let rescheduleSpy = jest.spyOn(slotsService,'rescheduleAppointment').mockResolvedValue(rescheduleDetails)
    //let response = await slotsService.rescheduleAppointment();
    //expect(response).toEqual(rescheduleDetails)
    //expect(rescheduleSpy).toHaveBeenCalled()
    //expect(rescheduleSpy).toHaveBeenCalledTimes
  })
});
