export interface User {
  id: number;
  name: string;
  surname: string;
  gender: number;
  dateOfBirth: string;
  countryID: number;
  languageID: number;
  email: string;
  emaiIsVerified: boolean;
  lastLoginDateTime: string;
  phoneNumbers: UserPhoneNumber[];
}

export interface UserPhoneNumber {
  id: number;
  phoneNumber: string;
  isMain: boolean;
  isDelete: boolean;
}
