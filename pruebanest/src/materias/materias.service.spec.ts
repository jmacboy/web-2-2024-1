import { Test, TestingModule } from '@nestjs/testing';
import { MateriasService } from './materias.service';

describe('MateriasService', () => {
  let service: MateriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MateriasService],
    }).compile();

    service = module.get<MateriasService>(MateriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
