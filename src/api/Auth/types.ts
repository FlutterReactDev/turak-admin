export interface UserLoginData {
  phoneNumber: string;
  password: string;
}

export interface LoginData {
  accessToken: string;
  accessTokenExpireAt: "2024-04-12T11:15:37.294Z";
  refreshToken: {
    phoneNumber: "string";
    tokenString: "string";
    expireAt: "2024-04-12T11:15:37.294Z";
  };
}

export interface UserRegisterData {
  name: string;
  surname: string;
  gender: number;
  dateOfBirth: Date;
  countryID: number;
  languageID: number;
  email: string;
  phoneNumbers: UserPhone[];
  password: string;
  confirmPassword: string;
}

export interface UserPhone {
  phoneNumber: string;
  isMain: boolean;
  isDelete: boolean;
}

export interface RefreshTokenData {
  refreshToken: string;
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface UserResetPassword {
  newPassword: string;
  confirmNewPassword: string;
}
