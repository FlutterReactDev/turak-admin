export interface ObjectRoom {
  id: number;
  anObjectId: number;
  categoryType: number;
  description: string;
  maximumGuests: number;
  anObjectRoomDescription: AnObjectRoomDescription;
  anObjectRoomBeds: AnObjectRoomBeds[];
  anObjectRoomBaseCost: AnObjectRoomBaseCost;
  anObjectRoomInsuranceDeposit: AnObjectRoomInsuranceDeposit;
  anObjectRoomCleaningFee: AnObjectRoomCleaningFee;
  anObjectRoomAmenities: AnObjectRoomAmenities;
  anObjectRoomViewFromWindow: AnObjectRoomViewFromWindow;
  anObjectRoomAvailability: AnObjectRoomAvailability;
  anObjectRoomEquipment: AnObjectRoomEquipment;
  anObjectRoomKitchenEquipment: AnObjectRoomKitchenEquipment;
  anObjectRoomBathroom: AnObjectRoomBathroom;
  anObjectRoomIndoorRelaxation: AnObjectRoomIndoorRelaxation;
  anObjectRoomOutsideRelaxation: AnObjectRoomOutsideRelaxation;
  anObjectRoomInfrastructureLeisureNearby: AnObjectRoomInfrastructureLeisureNearby;
  anObjectRoomForChildren: AnObjectRoomForChildren;
  anObjectRoomBookingSettings: AnObjectRoomBookingSettings;
  anObjectRoomPostingRule: AnObjectRoomPostingRule;
  anObjectRoomImages: AnObjectRoomImages;
  anObjectRoomCalendarSeasonPrices: AnObjectRoomCalendarSeasonPrices[];
  anObjectRoomCalendarAvailabilities: AnObjectRoomCalendarAvailabilities[];
}

export interface AnObjectRoomDescription {
  id: number;
  uniqueName: string;
  ownName: string;
  roomNameTypeId: number;
  count: number;
  area: number;
  floorType: number;
  floorsInTheBuilding: number;
  kitchenType: number;
  repairType: number;
  numberOfIsolatedBedroom: number;
}

export interface AnObjectRoomBeds {
  id: number;
  anObjectRoomId: number;
  bedType: number;
  count: number;
  isDelete: boolean;
}

export interface AnObjectRoomBaseCost {
  id: number;
  currencyId: number;
  minimumLengthOfStay: number;
  pricePerDay: number;
  forHowManyGuests: number;
}

export interface AnObjectRoomInsuranceDeposit {
  id: number;
  amount: number;
}

export interface AnObjectRoomCleaningFee {
  id: number;
  cleaningFeeType: number;
  amount: number;
}

export interface AnObjectRoomAmenities {
  id: number;
  airConditioner: boolean;
  balcony: boolean;
  bath: boolean;
  toiletries: boolean;
  safe: boolean;
  tv: boolean;
  electricKettle: boolean;
  hairDryer: boolean;
  jacuzzi: boolean;
  microwave: boolean;
}

export interface AnObjectRoomViewFromWindow {
  id: number;
  onTheSea: boolean;
  toTheMountains: boolean;
  toTheCity: boolean;
  toTheRiver: boolean;
  toTheLake: boolean;
  toTheForest: boolean;
  toThePark: boolean;
  outside: boolean;
  intoTheYard: boolean;
  toThePool: boolean;
  toTheAttraction: boolean;
  toTheGarden: boolean;
}

export interface AnObjectRoomAvailability {
  id: number;
  contactlessCheckinPossible: boolean;
  disabledAccess: boolean;
  elevator: boolean;
  locatedOnTheFirstFloor: boolean;
  toiletWithGrabBars: boolean;
}

export interface AnObjectRoomEquipment {
  id: number;
  balcony: boolean;
  wirelessInternetWiFi: boolean;
  fan: boolean;
  pool: boolean;
  waterHeater: boolean;
  gasWaterHeater: boolean;
  wardrobe: boolean;
  seatingArea: boolean;
  woodParquetFloor: boolean;
  jacuzzi: boolean;
  sofa: boolean;
  sofaBed: boolean;
  intercom: boolean;
  soundproofing: boolean;
  fireplace: boolean;
  carpetCovering: boolean;
  airConditioner: boolean;
  steelDoor: boolean;
  mosquitoNet: boolean;
  heater: boolean;
  electricHeatedBlankets: boolean;
  personalComputer: boolean;
  tileMarbleFloor: boolean;
  wiredInternet: boolean;
  desktop: boolean;
  foldingBed: boolean;
  safe: boolean;
  washingMachine: boolean;
  clothesDryer: boolean;
  dryer: boolean;
  telephone: boolean;
  ironWithIroningBoard: boolean;
  centralHeating: boolean;
  cleaners: boolean;
  closet: boolean;
  attic: boolean;
  laminate: boolean;
  linoleum: boolean;
  coffeeTable: boolean;
  vacuumCleaner: boolean;
  clothesHanger: boolean;
  beachTowels: boolean;
  skiSnowboardStorage: boolean;
  blackoutCurtains: boolean;
}

export interface AnObjectRoomKitchenEquipment {
  id: number;
  barCounter: boolean;
  blender: boolean;
  gasStove: boolean;
  oven: boolean;
  coffeeMaker: boolean;
  coffeeMachine: boolean;
  kitchenSet: boolean;
  microwave: boolean;
  miniBar: boolean;
  freezer: boolean;
  multicooker: boolean;
  dinnerTable: boolean;
  dishesAndAccessories: boolean;
  dishwasher: boolean;
  cutlery: boolean;
  toaster: boolean;
  turkForMakingCoffee: boolean;
  waterFilter: boolean;
  fridge: boolean;
  electricKettle: boolean;
  electricStove: boolean;
}

export interface AnObjectRoomBathroom {
  id: number;
  numberOfBathroomsWithToilet: number;
  numberOfBathroomsWithOutToilet: number;
  numberOfSeparateToilets: number;
  bidet: boolean;
  bath: boolean;
  hygienicShower: boolean;
  additionalBathroom: boolean;
  additionalToilet: boolean;
  shower: boolean;
  sharedBathroom: boolean;
  sharedToilet: boolean;
  towels: boolean;
  sauna: boolean;
  slippers: boolean;
  toiletries: boolean;
  hairDryer: boolean;
  robe: boolean;
  sharedShowerRoom: boolean;
}

export interface AnObjectRoomIndoorRelaxation {
  id: number;
  billiards: boolean;
  gameConsole: boolean;
  cableTV: boolean;
  books: boolean;
  musicCenter: boolean;
  boardGames: boolean;
  tableTennis: boolean;
  laptop: boolean;
  radio: boolean;
  satelliteTV: boolean;
  tv: boolean;
  terrestrialTV: boolean;
  payTVChannels: boolean;
  smartTV: boolean;
}
export interface AnObjectRoomOutsideRelaxation {
  id: number;
  bathhouseOnSide: boolean;
  alcove: boolean;
  veranda: boolean;
  hammock: boolean;
  garage: boolean;
  babySwing: boolean;
  playground: boolean;
  boat: boolean;
  barbecueGrill: boolean;
  outdoorFurniture: boolean;
  outdoorDiningArea: boolean;
  protectedArea: boolean;
  parking: boolean;
  patio: boolean;
  beachUmbrella: boolean;
  barbecueSupplies: boolean;
  gardenFurniture: boolean;
  gym: boolean;
  terrace: boolean;
  footballField: boolean;
  sunLoungers: boolean;
}

export interface AnObjectRoomInfrastructureLeisureNearby {
  id: number;
  hotSprings: boolean;
  spaCenter: boolean;
  mountaineering: boolean;
  bathhouseOffSite: boolean;
  billiardClub: boolean;
  bowling: boolean;
  horsebackRiding: boolean;
  waterSports: boolean;
  golf: boolean;
  skiing: boolean;
  snowmobiling: boolean;
  housingIsInPrivateSector: boolean;
  zoo: boolean;
  iceRink: boolean;
  cinema: boolean;
  forest: boolean;
  nightClub: boolean;
  hunting: boolean;
  amusementPark: boolean;
  bicyclesForRent: boolean;
  rollerSkateRental: boolean;
  pondLakeNearby: boolean;
  fishing: boolean;
  theater: boolean;
  tennisCourt: boolean;
  yachtClub: boolean;
}

export interface AnObjectRoomForChildren {
  id: number;
  highChairForChild: boolean;
  childrensPotty: boolean;
  crib: boolean;
  windowProtection: boolean;
  gamesToysForChildren: boolean;
  playpenBed: boolean;
  changingTable: boolean;
  chairForBabies: boolean;
  protectiveCoversOnSockets: boolean;
}

export interface AnObjectRoomBookingSettings {
  id: number;
  howCanBook: number;
  checkInAfter: string;
  checkOutAfter: string;
  reportingDocuments: number;
  fromBookingToCheckIn: number;
  instantBookingStart: number;
  prepaymentPercent: number;
}

export interface AnObjectRoomPostingRule {
  id: number;
  possibleWithChildren: boolean;
  childsAge: number;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  partiesAllowed: boolean;
}

export interface AnObjectRoomImages {
  id: number;
  fileName: string;
  base64: string;
  isDelete: boolean;
}

export interface AnObjectRoomCalendarSeasonPrices {
  id: number;
  anObjectRoomId: number;
  date: string;
  cost: number;
}

export interface AnObjectRoomCalendarAvailabilities {
  id: number;
  anObjectRoomId: number;
  startDate: string;
  endDate: string;
  comment: string;
  createdDate: string;
  guestPhone: string;
  gusetName: string;
  color: string;
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
