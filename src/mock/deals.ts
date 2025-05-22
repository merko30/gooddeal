export type Deal = {
  id: string;
  title: string;
  link: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  imageUrl: string;
  category: string;
  rating: number;
};

export const deals: Deal[] = [
  {
    id: "1",
    link: "https://example.com/deal1",
    title: "Wireless Noise Cancelling Headphones",
    price: 89.99,
    originalPrice: 199.99,
    discountPercent: 55,
    imageUrl: "https://via.placeholder.com/200x200?text=Headphones",
    category: "Electronics",
    rating: 4.6,
  },
  {
    id: "2",
    link: "https://example.com/deal1",
    title: "Smartwatch Series 7",
    price: 229.99,
    originalPrice: 399.99,
    discountPercent: 42,
    imageUrl: "https://via.placeholder.com/200x200?text=Smartwatch",
    category: "Wearables",
    rating: 4.3,
  },
  {
    id: "3",
    link: "https://example.com/deal1",
    title: "Ergonomic Office Chair",
    price: 149.0,
    originalPrice: 299.0,
    discountPercent: 50,
    imageUrl: "https://via.placeholder.com/200x200?text=Office+Chair",
    category: "Home & Office",
    rating: 4.7,
  },
  {
    id: "4",
    link: "https://example.com/deal1",
    title: '4K 55" Smart TV',
    price: 349.99,
    originalPrice: 599.99,
    discountPercent: 41,
    imageUrl: "https://via.placeholder.com/200x200?text=Smart+TV",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: "5",
    link: "https://example.com/deal1",
    title: "Running Shoes - Men's",
    price: 59.99,
    originalPrice: 120.0,
    discountPercent: 50,
    imageUrl: "https://via.placeholder.com/200x200?text=Running+Shoes",
    category: "Sportswear",
    rating: 4.2,
  },
  {
    id: "6",
    link: "https://example.com/deal1",
    title: "Blender with Glass Jar - 1200W",
    price: 39.95,
    originalPrice: 89.95,
    discountPercent: 56,
    imageUrl: "https://via.placeholder.com/200x200?text=Blender",
    category: "Kitchen",
    rating: 4.4,
  },
];

export const getDeals = async (term?: string) => {
  // Simulate a 1-second delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!term?.length) {
    return deals;
  }

  return deals.filter((item) =>
    item.title.toLowerCase().includes(term.toLowerCase())
  );
};
