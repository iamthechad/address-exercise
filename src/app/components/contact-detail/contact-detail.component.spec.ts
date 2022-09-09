import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ContactDetailComponent} from "./contact-detail.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AddressEntry} from "../../domain/address-entry.interface";

describe("ContactDetailComponent", () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactDetailComponent],
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatIconModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Should show contact details", () => {
    it("Should show full info", () => {
      component.entry = mkSampleEntry("http://www.abc.com/myimage.png");
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".mat-card-title").textContent).toEqual("First Last");
      expect(compiled.querySelector(".mat-card-header img").src).toEqual("http://www.abc.com/myimage.png");

      const phoneCards = compiled.querySelectorAll(".card-info");
      expect(phoneCards).toBeTruthy();
      expect(phoneCards.length).toEqual(2);

      const phone = phoneCards[0];
      expect(phone.querySelector("dt")).toBeTruthy();
      expect(phone.querySelector("dd").textContent).toEqual("719-555-1234");

      const mobile = phoneCards[1];
      expect(mobile.querySelector("dt")).toBeTruthy();
      expect(mobile.querySelector("dd").textContent).toEqual("719-555-5555");
    });

    it("Should show partial info", () => {
      component.entry = mkSampleEntry();
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".mat-card-title").textContent).toEqual("First Last");
      expect(compiled.querySelector(".mat-card-header img")).toBeNull();
    });
  });
});

function mkSampleEntry(thumbnail?: string): AddressEntry {
  const sampleEntry: AddressEntry = {
    name: {
      first: "First",
      last: "Last"
    },
    cell: "719-555-5555",
    phone: "719-555-1234",
    dob: {
      date: "01/01/1980",
      age: 42
    },
    email: "a@b.com",
    nat: "US",
    location: {
      city: "My Town",
      country: "US",
      state: "CO",
      street: {
        name: "My Street",
        number: 1234
      },
      postcode: "12345",
      timezone: {
        offset: "-6:00",
        description: "Mountain/Denver"
      },
      coordinates: {
        latitude: "",
        longitude: ""
      }
    },
    picture: {
    }
  };

  if (thumbnail) {
    sampleEntry.picture.thumbnail = thumbnail;
  }
  return sampleEntry;
}
