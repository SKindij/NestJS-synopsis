// app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// describe test suite for AppController class
describe('AppController', () => {
  let appController: AppController;

  // before each test, set up testing environment
  beforeEach(async () => {
    // create testing module
    const app: TestingModule = await Test.createTestingModule({
      // specify controllers to be tested
      controllers: [AppController],
      // specify services required by controller
      providers: [AppService],
    }).compile(); // compile testing module
    // get instance of AppController from testing module
    appController = app.get<AppController>(AppController);
  });

  // describe specific test case for root route of controller
  describe('root', () => {
    // Test if root route returns expected response
    it('should return "Hello Nice World!"', () => {
      // assert that result of calling getHello method is "..."
      expect(appController.getHello()).toBe('Hello Nice World!');
    });
  });
});
