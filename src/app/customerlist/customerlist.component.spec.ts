import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { CustomerlistComponent } from './customerlist.component';
import { LayoutModule } from '@angular/cdk/layout';

describe('CustomerlistComponent', () => {
  let component: CustomerlistComponent;
  let fixture: ComponentFixture<CustomerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerlistComponent ],
      imports: [
        NoopAnimationsModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
