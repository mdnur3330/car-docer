
export type USer = {
  _id: string;
  name: string;
  title: string;
  img: string;
  price: string
}




export interface Facility {
  name: string;
  details: string;
}

export interface Service {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: string;
  description: string;
  facility: Facility[];
}
