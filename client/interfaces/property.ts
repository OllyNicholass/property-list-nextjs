import { Address } from "./address";

export type Property = {
  id: number,
  name: string,
  imageUrl: string,
  bedrooms: number,
  bathrooms: number,
  receptions: number,
  address: Address,
  description: string,
  askingPrice: number,
  isActive: boolean,
  createdDate: Date,
  justAdded: boolean
}