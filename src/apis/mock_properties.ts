import { CompactProperty, Property } from "../models";

const property: Property = {
  id: 1,
  type: "Single House",
  address: "45039 Newcastle, Calabasas, CA",
  price: "$100,000",
  status: "For Sale",
  bedrooms: 3,
  bathrooms: 2,
  size: "92 m\xB2",
  images: [
    "https://media.architecturaldigest.com/photos/571e97ce818277135ff91620/master/w_2626,h_1821,c_limit/modernist-decor-inspiration-07.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2018/11/Rustic-modern-living-room.jpg",
    "https://betweennapsontheporch.net/wp-content/uploads/2016/08/Tour-home-in-The-Intern-with-Anne-Hathaway-Robert-De-Niro.jpg",
  ],
  seller: {
    name: "Jeton Kukalaj",
    phone: "069 631 4886",
  },
  coordinate: {
    longitude: 19.814309,
    latitude: 41.330722,
  },
  description:
    "Shitet Apartament ne qendren e kamzes ne pedonalen Bulevardi Blu. Apartamenti ndodhet ne katin e dyte dhe mund te perdoret dhe per shfrytezim biznesi.",
};

const properties: Array<CompactProperty> = [
  {
    id: 1,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "$1,098",
    status: "Sold",
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
    previewImage:
      "https://betweennapsontheporch.net/wp-content/uploads/2016/08/Tour-home-in-The-Intern-with-Anne-Hathaway-Robert-De-Niro.jpg",
  },
  {
    id: 2,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "$1,098",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
    previewImage:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    id: 3,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "$1,098",
    status: "Sold",
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
    previewImage:
      "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
  },
  {
    id: 4,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "$1,098",
    status: "For Rent",
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
    previewImage:
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    id: 5,
    type: "Apartment",
    address: "45039 Newcastle, Calabasas, CA",
    price: "$1,098",
    status: "For Sale",
    bedrooms: 2,
    bathrooms: 1,
    size: "92 m\xB2",
    previewImage:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
];

export { property, properties };
