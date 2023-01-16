import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdmissionCheckService } from './admission-check.service';

describe('AdmissionCheckService', () => {
  let service: AdmissionCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AdmissionCheckService],
    });
    service = TestBed.inject(AdmissionCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('will be used to verify if cpf exists', () => {
    const cpf = 10690753616;
    service.getUser(cpf).subscribe((u) => {
      expect(u.name).toEqual('Gabriel');
    });
  });

  it('will be used to verify if cpf not exists', () => {
    const cpf = 10690753619;
    service.getUser(cpf).subscribe((u) => {
      expect(u?.name).toBeNull();
    });
  });
});
