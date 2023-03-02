import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '@core/components';
import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [
        PagesComponent,
        HeaderComponent,
      ],
    }).compileComponents();
  });

  it('should create pages', () => {
    const fixture = TestBed.createComponent(PagesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
