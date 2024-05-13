import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// decorator to define base route for app.controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // decorator to define specific routes and their HTTP methods
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
