import { Address } from "./address.model";

export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    companyId: number;
    addresses?: Address[];
  }
  