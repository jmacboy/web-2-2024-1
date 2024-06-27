import { Test, TestingModule } from '@nestjs/testing';
import { MateriasController } from './materias.controller';
import { MateriasService } from './materias.service';

describe('MateriasController', () => {
  let controller: MateriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriasController],
      providers: [MateriasService],
    }).compile();

    controller = module.get<MateriasController>(MateriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
