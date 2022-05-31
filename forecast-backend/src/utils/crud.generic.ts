import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface GenericCrudService {
  readonly entityRepository: Repository<any>;

  create(createEntityDto: any): Promise<any>;

  findAll(): Promise<any[]>;

  findOne(id: number): Promise<any>;

  update(updateEntityDto: any): Promise<any>;

  remove(id: number);
}

export type GenericCrudServiceRef = new (...args: any) => GenericCrudService;

export function generateCrudService(Entity: any): GenericCrudServiceRef {
  class GenericService implements GenericCrudService {
    @InjectRepository(Entity)
    readonly entityRepository: Repository<any>;

    create(createEntityDto: any): Promise<any> {
      const createEntity = this.entityRepository.create(createEntityDto);
      return this.entityRepository.save(createEntity);
    }

    findAll(): Promise<any[]> {
      return this.entityRepository.find();
    }

    findOne(id: number): Promise<any> {
      return this.entityRepository.findOne(id);
    }

    async update(updateEntityDto: any): Promise<any> {
      const updateEntity = await this.entityRepository.preload(updateEntityDto);
      return this.entityRepository.save(updateEntity);
    }

    remove(id: number) {
      return this.entityRepository.delete(id);
    }
  }

  return GenericService;
}
