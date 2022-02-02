import { Test } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { UsersDTO } from './dto/users.dto';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const users = {
  name: 'soundariya',
  email: 'soundariya@gmail.com',
  phone: 6352145879,
  password: 'abc',
  gender: 'female',
  age: 18,
};
const ofImportDto = plainToInstance(UsersDTO, users);
describe('Given users', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UsersService,
          useFactory: () => ({
            register: jest.fn(),
            loginUser: jest.fn(),
            getUserById: jest.fn(),
          }),
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });
  it('should be defined', () => {
    expect(UsersController).toBeDefined();
  });

  //register
  describe('When register', () => {
    it('should return response', async () => {
      const message = 'Success';

      const addUsersSpy = jest
        .spyOn(usersService, 'register')
        .mockResolvedValue(message);
      const response = await usersController.register(ofImportDto);
      expect(response).toEqual(message);
      expect(addUsersSpy).toHaveBeenCalled();
      expect(addUsersSpy).toHaveBeenCalledTimes(1);
    });
  });

  //login
  describe('When login', () => {
    it('should return response', async () => {
      const token = {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvdW5kYXJpeWFAZ21haWwuY29tIiwiaWF0IjoxNjQyNzQ4NDMxLCJleHAiOjE2NDI4MzQ4MzF9.X3F0VRxXU8s-H86IYgq0aj68WW9wiwVJxrnIlcv_sq8',
      };
      const login = {
        email: 'soundariya@gmail.com',
        password: '123',
      };

      const getAllHotelsSpy = jest
        .spyOn(usersService, 'loginUser')
        .mockResolvedValue(token);
      const response = await usersController.loginUser(login);
      expect(response).toEqual(token);
      expect(getAllHotelsSpy).toHaveBeenCalled();
      expect(getAllHotelsSpy).toHaveBeenCalledTimes(1);
    });
  });

  //getUserById
  describe('When Get User By id()', () => {
    it('should return response', async () => {
      const getHotelByPlaceSpy = jest
        .spyOn(usersService, 'getUserById')
        .mockResolvedValue(ofImportDto);
      const response = await usersController.getUserById(1);
      expect(response).toEqual(ofImportDto);
      expect(getHotelByPlaceSpy).toHaveBeenCalled();
      expect(getHotelByPlaceSpy).toHaveBeenCalledTimes(1);
    });
  });
});
