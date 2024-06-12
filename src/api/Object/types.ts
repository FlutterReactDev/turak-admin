import { ObjectRoom } from "../ObjectRoom/types";

export interface ObjectT {
  id: number;
  anObjectTypeId: number;
  anObjectPropertyTypeId: number;
  name: string;
  countryId: number;
  regionId: number;
  cityId: number;
  internetAccess: number;
  internetAccessSumm: number;
  parking: number;
  parkingSumm: number;
  rating: number;
  fullAddress: string;
  building: string;
  latitude: number;
  longitude: number;
  buildingId: string;
  anObjectRooms: ObjectRoom[];
  anObjectDetail: AnObjectDetail;
  anObjectAdditionalComfort: AnObjectAdditionalComfort;
  anObjectMeal: AnObjectMeal;
  anObjectFeeAdditionalService: AnObjectFeeAdditionalService;
  anObjectImages: AnObjectImages[];
}

export interface AnObjectDetail {
  id: number;
  yearOfConstruntion: number;
  numberOfRooms: number;
  areaOfTheLand: number;
  checkInAfter: string;
  checkOutAfter: string;
  smokingOnSite: number;
  paymentType: number;
}

export interface AnObjectAdditionalComfort {
  id: number;
  restaurant: boolean;
  barCounter: boolean;
  sauna: boolean;
  garden: boolean;
  spaCenter: boolean;
  tennisCourt: boolean;
  aquapark: boolean;
  indoorPool: boolean;
  privateBeach: boolean;
  elevator: boolean;
  childrenSwimmingPool: boolean;
  roomDelivery: boolean;
  twentyFourhourFrontDesk: boolean;
  gym: boolean;
  terrace: boolean;
  footballField: boolean;
  golf: boolean;
  openPool: boolean;
  jacuzzi: boolean;
  playground: boolean;
  ramp: boolean;
  laundry: boolean;
}

export interface AnObjectMeal {
  id: number;
  allInclusive: boolean;
  breakfast: number;
  breakfastService: number;
  lunch: number;
  lunchService: number;
  dinner: number;
  dinnerService: number;
}

export interface AnObjectFeeAdditionalService {
  id: number;
  cleaning: number;
  cleaningSum: number;
  bedLinen: number;
  bedLinenSum: number;
  reportingDocuments: number;
  hasTransfer: boolean;
  transferDetails: string;
  detailComment: string;
  objectInAnotherResources: string;
}

export interface AnObjectImages {
  id: number;
  anObjectId: number;
  fileName: string;
  isDelete: boolean;
}
