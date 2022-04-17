import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('HELLO')
  getHello(data: any): void {
    console.log(this.appService.getHello());
    console.log(data);
  }
}
