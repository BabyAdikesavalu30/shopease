const products = [
  // Electronics
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&fit=crop",
    description: "High quality wireless headphones with noise cancellation and 20hr battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&fit=crop",
    description: "Feature packed smart watch with health tracking and notifications."
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&fit=crop",
    description: "Adjustable aluminum laptop stand for better posture and cooling."
  },
  {
    id: 4,
    name: "Desk Lamp",
    price: 649,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&fit=crop",
    description: "LED desk lamp with adjustable brightness and USB charging port."
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&fit=crop",
    description: "Portable waterproof bluetooth speaker with 360 degree sound and 12hr battery."
  },
  {
    id: 6,
    name: "Power Bank 20000mAh",
    price: 999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=400&fit=crop",
    description: "High capacity power bank with fast charging support for all devices."
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 2199,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&fit=crop",
    description: "Tactile mechanical keyboard with RGB backlight perfect for gaming and typing."
  },

  // Footwear
  {
    id: 8,
    name: "Running Shoes",
    price: 899,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop",
    description: "Lightweight and comfortable running shoes perfect for daily workouts."
  },
  {
    id: 9,
    name: "Sneakers",
    price: 1099,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&fit=crop",
    description: "Trendy sneakers with cushioned sole and breathable upper material."
  },
  {
    id: 10,
    name: "Men's Formal Shoes",
    price: 1799,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&fit=crop",
    description: "Classic leather formal shoes perfect for office and special occasions."
  },
  {
    id: 11,
    name: "Men's Loafers",
    price: 1299,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&fit=crop",
    description: "Comfortable slip-on loafers with premium leather finish for casual wear."
  },
  {
    id: 12,
    name: "Sports Sandals",
    price: 599,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&fit=crop",
    description: "Durable sports sandals with adjustable straps and cushioned footbed."
  },
  {
    id: 13,
    name: "Men's Boots",
    price: 2299,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400&fit=crop",
    description: "Rugged leather boots with ankle support perfect for outdoor adventures."
  },

  // Clothing
  {
    id: 14,
    name: "Cotton T-Shirt",
    price: 299,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&fit=crop",
    description: "Premium soft cotton t-shirt available in multiple colors."
  },
  {
    id: 15,
    name: "Men's Polo Shirt",
    price: 499,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1625910513872-a52c7f98dc07?w=400&fit=crop",
    description: "Classic polo shirt with collar perfect for casual and semi-formal occasions."
  },
  {
    id: 16,
    name: "Men's Slim Fit Jeans",
    price: 899,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&fit=crop",
    description: "Slim fit stretch jeans with comfortable waistband for all day wear."
  },
  {
    id: 17,
    name: "Men's Formal Shirt",
    price: 699,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&fit=crop",
    description: "Crisp cotton formal shirt perfect for office wear and formal events."
  },
  {
    id: 18,
    name: "Men's Hoodie",
    price: 999,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&fit=crop",
    description: "Warm fleece hoodie with kangaroo pocket perfect for winter and casual wear."
  },
  {
    id: 19,
    name: "Men's Tracksuit",
    price: 1299,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&fit=crop",
    description: "Comfortable polyester tracksuit set perfect for gym and outdoor activities."
  },
  {
    id: 20,
    name: "Men's Shorts",
    price: 399,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=400&fit=crop",
    description: "Light and breathable cotton shorts ideal for summer and casual outings."
  },

  // Bags
  {
    id: 21,
    name: "Backpack",
    price: 599,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&fit=crop",
    description: "Spacious backpack with laptop compartment and water resistant material."
  },
  {
    id: 22,
    name: "Men's Messenger Bag",
    price: 899,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&fit=crop",
    description: "Stylish canvas messenger bag with multiple compartments for daily use."
  },
  {
    id: 23,
    name: "Gym Duffel Bag",
    price: 799,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&fit=crop",
    description: "Large capacity gym bag with separate shoe compartment and water bottle holder."
  },
  {
    id: 24,
    name: "Men's Wallet",
    price: 399,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&fit=crop",
    description: "Slim genuine leather wallet with multiple card slots and coin pocket."
  },
  {
    id: 25,
    name: "Laptop Bag",
    price: 1099,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&fit=crop",
    description: "Professional laptop bag with padded compartment fits up to 15.6 inch laptops."
  },

  // Accessories
  {
    id: 26,
    name: "Sunglasses",
    price: 499,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&fit=crop",
    description: "Stylish UV protected sunglasses for all occasions."
  },
  {
    id: 27,
    name: "Water Bottle",
    price: 349,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&fit=crop",
    description: "Insulated stainless steel water bottle keeps drinks cold for 24 hours."
  },
  {
    id: 28,
    name: "Men's Belt",
    price: 499,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&fit=crop",
    description: "Genuine leather belt with classic buckle available in black and brown."
  },
  {
    id: 29,
    name: "Men's Cap",
    price: 299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&fit=crop",
    description: "Adjustable cotton cap with curved brim perfect for outdoor activities."
  },
  {
    id: 30,
    name: "Men's Bracelet",
    price: 399,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&fit=crop",
    description: "Stylish leather and metal bracelet set adds a trendy look to any outfit."
  },
  {
    id: 31,
    name: "Perfume",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&fit=crop",
    description: "Long lasting men's eau de parfum with woody and spicy fragrance notes."
  },
  {
    id: 32,
    name: "Men's Scarf",
    price: 349,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&fit=crop",
    description: "Soft woolen scarf perfect for winter keeps you warm and stylish."
  }
];

export default products;