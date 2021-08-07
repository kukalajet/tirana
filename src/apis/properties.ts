import { CompactProperty } from "../models";
import properties from "./mock_properties";

const BASE_URL: string = "https://test.com";

const PROPERTIES_ENDPOINT = "/properties";
const CATEGORIES_ENDPOINT = `${PROPERTIES_ENDPOINT}/categories`;

// will be deleted
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function fetchPopularProperties(): Promise<
  Array<CompactProperty>
> {
  await delay(3500);
  return properties;
}

export async function fetchSuggestedProperties(): Promise<
  Array<CompactProperty>
> {
  await delay(3000);
  return properties;
}

export async function fetchNewProperties(): Promise<Array<CompactProperty>> {
  await delay(2500);
  return properties;
}
