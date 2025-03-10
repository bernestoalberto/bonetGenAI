import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { promptResolver } from './prompt.resolver';

describe('promptResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => promptResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
