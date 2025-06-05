import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuongviPage } from './tuongvi.page';

describe('TuongviPage', () => {
  let component: TuongviPage;
  let fixture: ComponentFixture<TuongviPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TuongviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
