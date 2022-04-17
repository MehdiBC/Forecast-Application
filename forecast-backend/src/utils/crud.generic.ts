import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export function generateCrudService(Entity: any): any {
  class GenericService {
    @InjectRepository(Entity)
    protected readonly entityRepository: Repository<any>;

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
