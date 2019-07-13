import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathBreadcrumbComponent } from './path-breadcrumb.component';

describe('PathBreadcrumbComponent', () => {
  let component: PathBreadcrumbComponent;
  let fixture: ComponentFixture<PathBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
