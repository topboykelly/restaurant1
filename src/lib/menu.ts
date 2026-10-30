export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuGroup = {
  title?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  name: string;
  note?: string;
  /** One category photo — not per dish. */
  image: string;
  imageAlt: string;
  groups: MenuGroup[];
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const menuWelcome = [
  "Welcome to Baguette Sub, where the rich East meets the creative West, with a distinctive blend of unique flavors and a large selection of delicious sandwiches and dishes.",
  "Whether you are looking for a quick meal that combines a Western influence with a Lebanese touch, or you want to experience a special dining session with your loved ones, Baguette Sub Restaurant is the ideal destination.",
  "Baguette Sub is where delicious, carefully grilled meat, chicken, and fresh vegetables come together in unique sandwiches and plates, topped with delicious sauces, carefully prepared fresh vegetables, and wrapped in gourmet bread baked daily.",
  "Join us on an exceptional journey that takes you on a tour across the West without leaving Ghana.",
] as const;

export const menuSections: MenuSection[] = [
  {
    id: "starters",
    name: "Starters",
    note: "All served with sauce",
    image: img("photo-1608039755401-742074f0548d"),
    imageAlt: "Crispy chicken wings and dipping sauce",
    groups: [
      {
        items: [
          {
            name: "Chicken Wings — Grilled / Fried",
            description:
              "8 pcs of wings served with spicy sauce, honey mustard or BBQ sauce",
            price: "GHS 195",
          },
          {
            name: "Jalapeños Cheese Poppers",
            description: "5 pcs mix jalapeños cheese breaded with ranch sauce",
            price: "GHS 195",
          },
          {
            name: "Mozzarella Sticks",
            description: "5 pcs with sauce",
            price: "GHS 110",
          },
          {
            name: "Truffle Fries",
            description: "Fries with truffle & parmesan",
            price: "GHS 140",
          },
          {
            name: "Chicken Tender Fried",
            description: "Chicken strips breaded, served with honey mustard",
            price: "GHS 120",
          },
          {
            name: "Shrimp Pane",
            description: "6 pieces of shrimp and cocktail sauce",
            price: "GHS 130",
          },
          { name: "Cheese Garlic Bread", price: "GHS 70" },
          { name: "Yam Fries", price: "GHS 50" },
          { name: "Sweet Potato", price: "GHS 65" },
          { name: "French Fries", price: "GHS 65" },
          { name: "Wedges", price: "GHS 55" },
        ],
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    image: img("photo-1512621776951-a57141f2eefd"),
    imageAlt: "Fresh mixed salad bowl",
    groups: [
      {
        items: [
          {
            name: "Beetroot & Rocca Salad",
            description:
              "Beetroot, rocca, feta cheese, walnuts, pomegranate, balsamic sauce",
            price: "GHS 190",
          },
          {
            name: "Shrimp Quinoa Salad",
            description:
              "Mix lettuce, quinoa, shrimp, cranberry, walnuts, carrot, cherry tomato, orange segment, pomegranate, balsamic sauce",
            price: "GHS 295",
          },
          {
            name: "Chicken Caesar Salad",
            description:
              "Iceberg, shredded parmesan, crouton, caesar sauce, grilled chicken",
            price: "GHS 170",
          },
          {
            name: "Caesar Pasta Salad",
            description:
              "Fried chicken breast, penne pasta, iceberg lettuce, parmesan cheese, and caesar dressing",
            price: "GHS 200",
          },
          {
            name: "Taco Salad",
            description:
              "Mix lettuce, avocado, cherry tomato, corn, grilled chicken, tortilla, jalapeños, mix cheese, lemon mustard",
            price: "GHS 200",
          },
          {
            name: "Tuna Salad",
            description:
              "Mix lettuce, tuna, corn, tomato, red onion, boiled egg, lemon sauce",
            price: "GHS 180",
          },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    image: img("photo-1509722747041-616f39b57569"),
    imageAlt: "Fresh baguette sandwich",
    groups: [
      {
        title: "Submarine sandwiches",
        items: [
          {
            name: "Chicken Fajitas",
            description: "Marinated chicken, bell pepper, avocado sauce, cheese",
            price: "GHS 175",
          },
          {
            name: "Chicken Sub",
            description: "Chicken, garlic mayo, lettuce, cheese, corn, pickles",
            price: "GHS 190",
          },
          {
            name: "Crispy",
            description: "Chicken, coleslaw, ketchup, pickles",
            price: "GHS 160",
          },
          {
            name: "Mexican Chicken",
            description:
              "Marinated chicken, jalapeños, sweet corn, cocktail sauce",
            price: "GHS 170",
          },
        ],
      },
      {
        title: "Baguette sandwiches",
        note: "Served with fries and sauce",
        items: [
          {
            name: "Spicy Chicken",
            description: "Grilled chicken, cheese, lettuce, pickles, spicy mayo",
            price: "GHS 170",
          },
          {
            name: "Chilli Steak",
            description:
              "Marinated chilli steak, mushroom, bell pepper, onion, pickles, cheese, cocktail sauce",
            price: "GHS 220",
          },
          {
            name: "Chili Shrimp",
            description:
              "Marinated chilli shrimp, bell pepper, onion, pickles, cheese, cocktail sauce",
            price: "GHS 240",
          },
          {
            name: "Pesto Chicken",
            description: "Grilled chicken, pesto sauce, rocca, tomato",
            price: "GHS 175",
          },
        ],
      },
    ],
  },
  {
    id: "tortilla",
    name: "Tortilla",
    note: "Served with fries and sauce",
    image: img("photo-1550547660-d9450f859349"),
    imageAlt: "Grilled wrap with fries",
    groups: [
      {
        items: [
          {
            name: "Twister",
            description: "Chicken, cocktail sauce, cheddar, lettuce, pickles",
            price: "GHS 175",
          },
          {
            name: "Boneless",
            description: "BBQ sauce, chicken, cheddar, chip sticks, lettuce",
            price: "GHS 225",
          },
          {
            name: "Quesadillas Chicken",
            description:
              "Marinated chicken, bell pepper, onion, cheese, sour cream",
            price: "GHS 170",
          },
          {
            name: "Chicken Shawarma",
            description:
              "Sliced marinated chicken, served with French fries and traditional garlic paste",
            price: "GHS 190",
          },
          {
            name: "Quesadillas Shrimp",
            description:
              "Marinated shrimp, bell pepper, onion, cheese, sour cream",
            price: "GHS 210",
          },
          {
            name: "Quesadillas Beef",
            description:
              "Marinated beef, bell pepper, onion, cheese, sour cream",
            price: "GHS 180",
          },
        ],
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers & tenders",
    image: img("photo-1551782450-a2132b4ba21d"),
    imageAlt: "Classic burger with fries",
    groups: [
      {
        title: "Burgers",
        note: "Served with fries and sauce",
        items: [
          {
            name: "Beef Burger",
            description: "Beef patty, ketchup, mustard, coleslaw, fries",
            price: "GHS 170",
          },
          {
            name: "Classic Burger",
            description:
              "Beef patty, cocktail sauce, pickles, onion, tomato, lettuce, cheddar",
            price: "GHS 180",
          },
          {
            name: "Swiss Mushroom",
            description: "Beef patty, mushroom sauce, emmental, rocca",
            price: "GHS 220",
          },
          {
            name: "Escalope Burger",
            description: "Fried chicken, cheddar cheese, coleslaw, pickles",
            price: "GHS 170",
          },
          {
            name: "Pineapple Chicken Burger",
            description:
              "Grilled chicken, emmental cheese, fresh pineapple, rocca, cocktail sauce, onion",
            price: "GHS 180",
          },
          {
            name: "Add Mozzarella Pane",
            price: "GHS 40",
          },
        ],
      },
      {
        title: "Tenders",
        note: "Served with fries and sauce",
        items: [
          {
            name: "Chicken Breast",
            description:
              "Chicken breast, garlic mayo, lettuce, pickles, tomato, cheddar",
            price: "GHS 180",
          },
          {
            name: "Zinger",
            description: "Chicken zinger, cheddar, pickles, lettuce, cocktail sauce",
            price: "GHS 170",
          },
          {
            name: "Zinger Supreme",
            description:
              "Chicken zinger, cheddar, pickles, lettuce, cream sauce, cocktail sauce",
            price: "GHS 180",
          },
          {
            name: "Chicken Avocado",
            description:
              "Grilled chicken, fresh avocado, tomato, lettuce, mustard sauce",
            price: "GHS 180",
          },
          {
            name: "Dragon BBQ",
            description:
              "Crispy chicken, cheddar, jalapeño, lettuce, tortilla chips, hot mayo, hot BBQ sauce",
            price: "GHS 190",
          },
        ],
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta & noodles",
    image: img("photo-1621996346565-e3dbc646d9a9"),
    imageAlt: "Creamy pasta dish",
    groups: [
      {
        title: "Pasta",
        items: [
          {
            name: "Linguini Shrimp",
            description: "Linguini, red sauce, cherry tomato, shrimps",
            price: "GHS 295",
          },
          {
            name: "Penne Arrabiata",
            description: "Penne, red spicy sauce, olives, parsley, parmesan",
            price: "GHS 160",
          },
          {
            name: "Fettucine Chicken Mushroom",
            description: "Tagliatelle, white sauce, chicken, mushroom, parmesan",
            price: "GHS 230",
          },
          {
            name: "Fettucine Creamy Pesto",
            description: "Tagliatelle, creamy pesto, parmesan",
            price: "GHS 190",
          },
        ],
      },
      {
        title: "Noodles",
        items: [
          {
            name: "Assorted Noodles",
            description: "Sausage, chicken, beef",
            price: "GHS 230",
          },
          { name: "Beef Noodles", price: "GHS 195" },
          { name: "Chicken Noodles", price: "GHS 165" },
          { name: "Vegetable Noodles", price: "GHS 130" },
        ],
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    note: "Ask about sizes and sides",
    image: img("photo-1513104890138-7c749659a591"),
    imageAlt: "Fresh baked pizza",
    groups: [
      {
        items: [
          {
            name: "Margherita",
            description: "Pizza sauce, cheese, oregano",
            price: "GHS 195",
          },
          {
            name: "Vegetarian",
            description:
              "Pizza sauce, bell pepper, mushroom, olive, zucchini, onion, corn, cheese, oregano",
            price: "GHS 225",
          },
          {
            name: "Pepperoni",
            description: "Pizza sauce, cheese, pepperoni, oregano",
            price: "GHS 255",
          },
          {
            name: "Chicken",
            description: "Pizza sauce, chicken, cheese, BBQ sauce, oregano",
            price: "GHS 240",
          },
        ],
      },
    ],
  },
  {
    id: "mexican",
    name: "Mexican & plates",
    note: "Mexican dishes served with your choice of rice or fries",
    image: img("photo-1565299585323-38d6b0865b47"),
    imageAlt: "Sizzling Mexican-style skillet",
    groups: [
      {
        title: "Mexican",
        items: [
          {
            name: "Mexican Chicken",
            description: "Marinated chicken, bell pepper, onion, coriander",
            price: "GHS 230",
          },
          {
            name: "Mexican Beef",
            description: "Marinated beef, bell pepper, onion, coriander",
            price: "GHS 280",
          },
          {
            name: "Mexican Shrimp",
            description: "Marinated shrimp, bell pepper, onion, coriander",
            price: "GHS 330",
          },
        ],
      },
      {
        title: "Plates",
        items: [
          {
            name: "Assorted Fried Rice",
            description: "Sausage, chicken, beef",
            price: "GHS 170",
          },
          {
            name: "Chicken Thigh Plate",
            description:
              "Chicken thigh, rice and special sauce (plain / fried rice / jollof)",
            price: "GHS 150",
          },
          {
            name: "Special Wings Plate",
            description:
              "Any 4 pieces of wings, rice (plain / fried rice / jollof), and special sauce",
            price: "GHS 130",
          },
          {
            name: "Grilled Wings Plate",
            description:
              "4 pcs grilled chicken, rice (plain / fried rice / jollof) or fries, and special sauce",
            price: "GHS 130",
          },
        ],
      },
    ],
  },
  {
    id: "mains",
    name: "Main course",
    image: img("photo-1544025162-d76694265947"),
    imageAlt: "Grilled main course platter",
    groups: [
      {
        items: [
          {
            name: "Chicken Mushroom",
            description: "Chicken breast, mushroom sauce, wedges, vegetable sauté",
            price: "GHS 270",
          },
          {
            name: "Chicken Light",
            description: "Chicken breast, vegetable sauté, corn cob, side salad",
            price: "GHS 220",
          },
          {
            name: "Steak Platter",
            description:
              "Beef tenderloin, mushroom sauce, mashed potato, vegetable sauté",
            price: "GHS 385",
          },
          {
            name: "Grilled Shrimp Platter",
            description:
              "6 pcs grilled shrimps, vegetables, mashed potatoes, lemon sauce, grilled pineapples",
            price: "GHS 395",
          },
          {
            name: "Snapper Platter",
            description:
              "Grilled snapper fish, vegetables, plain rice, stew, herbs sauce",
            price: "GHS 265",
          },
          {
            name: "Chicken Skewers",
            description:
              "Grilled skewers of 200g marinated chicken and vegetables, served with seasoned white rice",
            price: "GHS 265",
          },
          {
            name: "Chicken Escalope",
            description: "Chicken breast, fries, cocktail sauce, side salad",
            price: "GHS 220",
          },
          {
            name: "Grilled Shrimp Skewers",
            description:
              "3 skewers of grilled shrimps, vegetables, potato wedges, cocktail sauce",
            price: "GHS 320",
          },
          {
            name: "Crispy Platter",
            description: "5 pcs fried chicken, coleslaw, fries, garlic sauce",
            price: "GHS 230",
          },
          {
            name: "Crispy Kid Platter",
            description: "3 pcs fried chicken, coleslaw, fries, garlic sauce",
            price: "GHS 200",
          },
          {
            name: "Beef Skewers",
            description:
              "Grilled skewers of 200g tender beef and vegetables, served with seasoned white rice",
            price: "GHS 310",
          },
        ],
      },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    note: "All breakfast sandwiches are served with side salad",
    image: img("photo-1533089860892-a7c6f0a88666"),
    imageAlt: "Breakfast plate with eggs and toast",
    groups: [
      {
        title: "Baguette breakfast",
        items: [
          {
            name: "English Breakfast",
            description:
              "Eggs, mozzarella, tomato, baked beans, sausage, sliced bread, jam, butter",
            price: "GHS 150",
          },
          {
            name: "Tuna Club",
            description:
              "Tuna, lettuce, tomato, boiled eggs, mayonnaise, pickles, cucumber, sweet corn",
            price: "GHS 220",
          },
          {
            name: "Chicken Club",
            description:
              "Cooked chicken, cheddar slice, lettuce, tomato, boiled eggs, cocktail sauce, turkey",
            price: "GHS 210",
          },
          {
            name: "Turkey & Cheese",
            description: "Turkey, emmental, mayonnaise, mustard, pickles, iceberg",
            price: "GHS 148",
          },
          {
            name: "Salmon Sandwich",
            description:
              "Smoked salmon, cream cheese, lemon segment, dill, caper, rocca, avocado",
            price: "GHS 255",
          },
        ],
      },
      {
        title: "Omelettes",
        items: [
          {
            name: "Cheese Omelette",
            description: "Mozzarella, eggs, side salad and 2 slices of bread",
            price: "GHS 110",
          },
          {
            name: "Spinach Omelette",
            description:
              "Spinach, cheese, eggs, side salad and 2 slices of bread",
            price: "GHS 135",
          },
          {
            name: "Plain Omelette",
            description: "Eggs, side salad and 2 slices of bread",
            price: "GHS 95",
          },
          {
            name: "Pepperoni Omelette",
            description:
              "Egg, mozzarella, pepperoni, side salad and slice of bread",
            price: "GHS 145",
          },
        ],
      },
    ],
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    image: img("photo-1572490122747-3968b75cc699"),
    imageAlt: "Tall milkshakes with whipped cream",
    groups: [
      {
        items: [
          {
            name: "Strawberry Milkshake",
            description: "Strawberry ice cream, strawberry puree, ice, fresh milk",
            price: "GHS 115",
          },
          {
            name: "Chocolate Milkshake",
            description:
              "Chocolate ice cream, dark chocolate sauce, ice, fresh milk",
            price: "GHS 115",
          },
          {
            name: "Vanilla Milkshake",
            description: "Vanilla ice cream, vanilla sauce, ice, fresh milk",
            price: "GHS 115",
          },
          {
            name: "Vanilla & Banana & Honey",
            description:
              "Vanilla ice cream, vanilla sauce, honey, banana, ice, fresh milk",
            price: "GHS 120",
          },
          {
            name: "Oreo Milkshake",
            description: "Oreo biscuit, vanilla ice cream, ice, fresh milk",
            price: "GHS 120",
          },
          {
            name: "Chocolate & Banana",
            description: "Chocolate ice cream, banana, ice, fresh milk",
            price: "GHS 120",
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks & desserts",
    image: img("photo-1536935338788-846bb9981813"),
    imageAlt: "Colorful drinks and refreshments",
    groups: [
      {
        title: "Lemonade coolers",
        items: [
          {
            name: "Passion Fruit",
            description: "Passion fruit puree, lemonade, soda water",
            price: "GHS 115",
          },
          {
            name: "Apple & Lemonade",
            description: "Apple puree, lemonade, soda water",
            price: "GHS 105",
          },
        ],
      },
      {
        title: "Frappe",
        items: [
          {
            name: "Caramel Frappuccino",
            description: "Coffee, caramel sauce, vanilla sauce, ice, fresh milk",
            price: "GHS 100",
          },
          {
            name: "Frappuccino",
            description: "Coffee, vanilla sauce, ice, fresh milk",
            price: "GHS 85",
          },
        ],
      },
      {
        title: "Iced flavoured latte",
        items: [
          {
            name: "Iced Vanilla Latte",
            description: "Ice, coffee, vanilla syrup, fresh milk",
            price: "GHS 90",
          },
          {
            name: "Matcha",
            description: "Ice, vanilla, fresh milk",
            price: "GHS 95",
          },
          {
            name: "Iced Caramel Latte",
            description: "Ice, caramel syrup, coffee, fresh milk",
            price: "GHS 95",
          },
        ],
      },
      {
        title: "Hot espresso",
        items: [
          { name: "Espresso", price: "GHS 30" },
          { name: "Double Espresso", price: "GHS 45" },
          { name: "Macchiato Coffee", price: "GHS 50" },
          { name: "Cappuccino", price: "GHS 70" },
          { name: "Latte", price: "GHS 70" },
          { name: "American Coffee", price: "GHS 60" },
          { name: "Tea Cup", price: "GHS 30" },
          { name: "Latte Caramel", price: "GHS 75" },
        ],
      },
      {
        title: "Signature cocktails",
        items: [
          { name: "Blue Hawaii", price: "GHS 100" },
          { name: "Piña Colada", price: "GHS 120" },
          { name: "Strawberry Mojito", price: "GHS 105" },
          { name: "Lychee Lemonade", price: "GHS 115" },
          { name: "Strawberry Lemonade", price: "GHS 105" },
          { name: "Virgin Mojito", price: "GHS 105" },
          { name: "Passion Mojito", price: "GHS 115" },
        ],
      },
      {
        title: "Cold beverages",
        items: [
          { name: "All Soft Drinks", price: "GHS 40" },
          { name: "Mineral Water", price: "GHS 35" },
          { name: "Sparkling Water (S)", price: "GHS 60" },
          { name: "Sparkling Water (L)", price: "GHS 90" },
          { name: "Malt", price: "GHS 40" },
          {
            name: "Ice Tea",
            description: "Raspberry, peach, lemon",
            price: "GHS 40",
          },
        ],
      },
      {
        title: "Fresh juice",
        items: [
          { name: "Pineapple Fresh Juice", price: "GHS 75" },
          { name: "Pineapple with Ginger", price: "GHS 85" },
          { name: "Mango Fresh", price: "GHS 75" },
          { name: "Orange Fresh", price: "GHS 75" },
          { name: "Cocktail Fresh", price: "GHS 125" },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Chocolate Cake", price: "GHS 75" },
          { name: "Red Velvet Cake", price: "GHS 75" },
          {
            name: "Ice Cream",
            description: "3 scoops, chocolate chips and syrup",
            price: "GHS 110",
          },
        ],
      },
    ],
  },
];
