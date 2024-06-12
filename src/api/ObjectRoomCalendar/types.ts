export interface SeasonPrice {
  id: number;
  anObjectRoomId: number;
  date: string;
  cost: number;
}

export interface Availability {
  id: number;
  anObjectRoomId: number;
  startDate: Date;
  endDate: Date;
  comment: string;
  createdDate: Date;
  guestPhone: string;
  gusetName: string;
  color: string;
}
