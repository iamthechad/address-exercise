/**
 * Interface representing an Address Entry
 * Reverse engineered from the randomuser.me documentation
 * Most of the items are actually optional in the randomuser.me API, but I know that some of these
 * values will always be queried by this implementation and are set as required
 */
export interface AddressEntry {
  gender?: "female" | "male";
  name: {
    title?: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login?: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob?: {
    date: string;
    age: number;
  };
  registered?: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id?: {
    name: string;
    value: string;
  };
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: "AU" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FI" | "FR" | "GB" | "IE" | "IN" | "IR" | "MX" | "NL" | "NO" | "NZ" | "RS" | "TR" | "UA" | "US";
}
