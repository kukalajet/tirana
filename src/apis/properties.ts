import { CompactProperty, Filters, Property } from "../models";
import { property, properties } from "./mock_properties";

const BASE_URL: string = "https://test.com";

const PROPERTIES_ENDPOINT = "/properties";
const CATEGORIES_ENDPOINT = `${PROPERTIES_ENDPOINT}/categories`;

// START TESTING: will be deleted
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
function shuffle(array: any): any {
  var currentIndex = array.length,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
// END TESTING: will be deleted

export async function fetchPopularProperties(
  filters?: Filters
): Promise<Array<CompactProperty>> {
  await delay(3500);
  return shuffle(properties);
}

export async function fetchSuggestedProperties(
  filters?: Filters
): Promise<Array<CompactProperty>> {
  await delay(3000);
  return shuffle(properties);
}

export async function fetchNewProperties(
  filters?: Filters
): Promise<Array<CompactProperty>> {
  await delay(2500);
  return shuffle(properties);
}

export async function fetchPropertyById(id: number): Promise<Property> {
  await delay(1000);
  return property;
}
