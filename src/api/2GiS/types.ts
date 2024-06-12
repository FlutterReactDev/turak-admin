export interface GISBaseResponse<T> {
  meta: Meta;
  result: T;
}

export interface Meta {
  code: number;
  api_version: string;
  issue_date: string;
  error?: Error;
}

export interface Error {
  type: string;
  message: string;
}

export interface SuggestResult {
  total: number;
  items: Item[];
}

export interface Item {
  id: string;
  type: string;
  region_id: string;
  segment_id: string;
  address: Address;
  address_name?: string;
  point: LatLon;
}
interface Address {
  postcode: string;
  building_code: string;
  building_name: string;
  landmark_name: string;
  makani: string;
  components: Component[];
  building_id: string;
}

interface Component {
  type: string;
  street_id: string;
  street: string;
  number: string;
  fias_code: string;
}

export interface LatLon {
  lat: number;
  lon: number;
}
