import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AdalService } from 'adal-angular4';
import { AdalServiceSpy } from './adalservicespy';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AdalService, useClass: AdalServiceSpy }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
