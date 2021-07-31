import { CompactProperty } from "../models";

const BASE_URL: string = "https://test.com";

const PROPERTIES_ENDPOINT = "/properties";
const CATEGORIES_ENDPOINT = `${PROPERTIES_ENDPOINT}/categories`;

const properties: Array<CompactProperty> = [
  {
    id: 1,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "1098 USD",
    isForSale: false,
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
  },
  {
    id: 2,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "1098 USD",
    isForSale: false,
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
  },
  {
    id: 3,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "1098 USD",
    isForSale: false,
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
  },
  {
    id: 4,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "1098 USD",
    isForSale: false,
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
  },
  {
    id: 5,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "1098 USD",
    isForSale: false,
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
  },
];

// will be deleted
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function fetchPopularProperties(): Promise<
  Array<CompactProperty>
> {
  await delay(2000);
  return properties;
}

export async function fetchCloseProperties(): Promise<Array<CompactProperty>> {
  await delay(2000);
  return properties;
}

export async function fetchNewProperties(): Promise<Array<CompactProperty>> {
  await delay(2000);
  return properties;
}
