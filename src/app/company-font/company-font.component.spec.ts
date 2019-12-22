import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFontComponent } from './company-font.component';

describe('CompanyFontComponent', () => {
  let component: CompanyFontComponent;
  let fixture: ComponentFixture<CompanyFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
