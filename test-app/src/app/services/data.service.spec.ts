import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Should return fruits", () => {
    expect(service.getData().length).toBe(3)
  })

  it("Should return fruits with promise", () => {
    service.getPromiseFruits().then((response: Array<string>) => {
      expect(response.length).toBe(3)
    })
  })

  it("Should return fruits with observable", () => {
    service.getObservableFruits().subscribe((response) => {
      // expect(response).toBeTruthy();
      expect(response.length).toBe(3)
    })
  })
});
