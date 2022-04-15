import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('FORECAST_BACKEND') private client: ClientProxy) {}

  sayHello(): any {
    return this.client.emit('HELLO', { name: 'mehdi' });
  }
}
