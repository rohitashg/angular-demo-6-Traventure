import { TestBed, inject } from '@angular/core/testing';
import { ShareServicesService } from './share-services.service';


describe('ShareServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareServicesService]
    });
  });

  it('should be created', inject([ShareServicesService], (service: ShareServicesService) => {
    expect(service).toBeTruthy();
  }));
});
