import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OntarioComponent } from './ontario.component';

describe('OntarioComponent', () => {
  let component: OntarioComponent;
  let fixture: ComponentFixture<OntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
