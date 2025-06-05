import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CattuongPage } from './cattuong.page';

describe('CattuongPage', () => {
  let component: CattuongPage;
  let fixture: ComponentFixture<CattuongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CattuongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
