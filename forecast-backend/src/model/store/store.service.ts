import { Injectable } from '@nestjs/common';
import { generateCrudService } from '../../utils/crud.generic';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService extends generateCrudService(Store) {}
