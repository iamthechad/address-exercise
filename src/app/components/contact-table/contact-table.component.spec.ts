import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactTableComponent } from "./contact-table.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("ContactTableComponent", () => {
  let component: ContactTableComponent;
  let fixture: ComponentFixture<ContactTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTableComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
