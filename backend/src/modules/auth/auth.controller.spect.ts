/* import { Test, TestingModule } from '@nestjs/testing';
import { lastValueFrom, of } from 'rxjs';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { createMock } from '@golevelup/ts-jest';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            constructor: jest.fn(),
            login: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = app.get<AuthController>(AuthController);
    authService = app.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should return access_token', async () => {
      jest.spyOn(authService, 'validateUser').mockImplementation((user: any) => {
        return of({ access_token: 'jwttoken' });
      });

      const token = await generateAccessToken();
      expect(token).toBeTruthy();
      expect(authService.login).toBeCalled();
    });
  });
});

function generateAccessToken() {
    throw new Error('Function not implemented.');
}
 */