import { FOOD_CATEGORIES } from "@/constants";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "RaftLabs Pizzeria",
  description: "An all new online food ordering experience.",
  navItems: [
    {
      label: "Menu",
      href: "/",
    },
    {
      label: "Order History",
      href: "/history",
    },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "/cart",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "#",
  },
  foodCategories: ["Offers", ...FOOD_CATEGORIES],

  offers: [
    {
      id: "Offer-01",
      title: "First order discount",
      discount: 20,
      discountLevel: "order",
      isPercentage: true,
    },
    {
      id: "Offer-02",
      title: "Flat 15% OFF",
      discount: 15,
      discountLevel: "order",
      isPercentage: true,
    },
    {
      id: "Offer-03",
      title: "Flat $5 OFF",
      discount: 5,
      discountLevel: "order",
      isPercentage: false,
    },
    {
      id: "Offer-04",
      title: "Chepeast item free",
      discount: 100,
      discountLevel: "cheapest item",
      isPercentage: true,
    },
  ] as Offer[],

  foodItems: [
    // ==================== BURGERS (10 items) ====================
    {
      id: "burger-001",
      title: "Classic Cheeseburger",
      description:
        "Juicy beef patty with melted cheddar cheese, fresh lettuce, tomatoes, pickles, and our signature sauce on a brioche bun",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
      popular: true,
    },
    {
      id: "burger-002",
      title: "Bacon Double Cheeseburger",
      description:
        "Two beef patties, crispy bacon, double cheddar cheese, caramelized onions, and BBQ sauce",
      quantity: 1,
      price: 16.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
      popular: true,
    },
    {
      id: "burger-003",
      title: "Mushroom Swiss Burger",
      description:
        "Beef patty topped with sautéed mushrooms, melted Swiss cheese, garlic aioli, and fresh arugula",
      quantity: 1,
      price: 14.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
    },
    {
      id: "burger-004",
      title: "Spicy Jalapeño Burger",
      description:
        "Beef patty with pepper jack cheese, fresh jalapeños, spicy chipotle mayo, and crispy onion straws",
      quantity: 1,
      price: 13.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
      spicy: true,
    },
    {
      id: "burger-005",
      title: "Veggie Delight Burger",
      description:
        "Plant-based patty with avocado, lettuce, tomato, red onion, and vegan chipotle sauce",
      quantity: 1,
      price: 13.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
      vegetarian: true,
    },
    {
      id: "burger-006",
      title: "Burger with Fries",
      description:
        "Classic cheeseburger served with a side of crispy golden fries",
      quantity: 1,
      price: 15.99,
      categories: [FOOD_CATEGORIES[0], FOOD_CATEGORIES[1]], // Burgers, Fries
    },
    {
      id: "burger-007",
      title: "BBQ Smokehouse Burger",
      description:
        "Beef patty with smoked bacon, onion rings, cheddar cheese, and smoky BBQ sauce",
      quantity: 1,
      price: 15.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
    },
    {
      id: "burger-008",
      title: "Breakfast Burger",
      description:
        "Beef patty with fried egg, crispy bacon, hash brown, and American cheese",
      quantity: 1,
      price: 14.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
    },
    {
      id: "burger-009",
      title: "Beyond Meat Burger",
      description:
        "100% plant-based Beyond Meat patty with vegan cheese, lettuce, tomato, and special sauce",
      quantity: 1,
      price: 15.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
      vegetarian: true,
    },
    {
      id: "burger-010",
      title: "Triple Trouble Burger",
      description:
        "Three beef patties, triple cheese, special sauce, lettuce, and pickles - for the ultimate appetite",
      quantity: 1,
      price: 19.99,
      categories: [FOOD_CATEGORIES[0]], // Burgers
      popular: true,
    },

    // ==================== FRIES (10 items) ====================
    {
      id: "fries-001",
      title: "Classic French Fries",
      description:
        "Crispy golden fries seasoned with sea salt, served with ketchup",
      quantity: 1,
      price: 4.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
      vegetarian: true,
    },
    {
      id: "fries-002",
      title: "Loaded Cheese Fries",
      description:
        "Crispy fries smothered in melted cheddar cheese sauce, topped with bacon bits and green onions",
      quantity: 1,
      price: 8.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
    },
    {
      id: "fries-003",
      title: "Chili Cheese Fries",
      description:
        "Fries topped with homemade beef chili, melted cheese, jalapeños, and sour cream",
      quantity: 1,
      price: 9.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
      spicy: true,
    },
    {
      id: "fries-004",
      title: "Truffle Parmesan Fries",
      description:
        "Hand-cut fries tossed in truffle oil, grated Parmesan cheese, and fresh parsley",
      quantity: 1,
      price: 7.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
      vegetarian: true,
    },
    {
      id: "fries-005",
      title: "Sweet Potato Fries",
      description:
        "Crispy sweet potato fries sprinkled with cinnamon and sea salt, served with chipotle aioli",
      quantity: 1,
      price: 6.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
      vegetarian: true,
    },
    {
      id: "fries-006",
      title: "Buffalo Wings with Fries",
      description:
        "Spicy buffalo wings served with classic fries and ranch dressing",
      quantity: 1,
      price: 14.99,
      categories: [FOOD_CATEGORIES[1], FOOD_CATEGORIES[2]], // Fries, Snacks
      spicy: true,
    },
    {
      id: "fries-007",
      title: "Garlic Parmesan Fries",
      description:
        "Crispy fries tossed in garlic butter, Parmesan cheese, and fresh herbs",
      quantity: 1,
      price: 6.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
      vegetarian: true,
    },
    {
      id: "fries-008",
      title: "Curly Fries",
      description:
        "Seasoned curly fries with a spicy kick, served with cheese sauce",
      quantity: 1,
      price: 5.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
      spicy: true,
      vegetarian: true,
    },
    {
      id: "fries-009",
      title: "Poutine",
      description:
        "Canadian classic - fries topped with cheese curds and rich brown gravy",
      quantity: 1,
      price: 8.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
    },
    {
      id: "fries-010",
      title: "Loaded Chili Cheese Fries",
      description:
        "Ultimate loaded fries with chili, cheese, jalapeños, sour cream, and guacamole",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[1]], // Fries
      spicy: true,
    },

    // ==================== SNACKS (10 items) ====================
    {
      id: "snack-001",
      title: "Buffalo Wings",
      description:
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and ranch",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
      spicy: true,
      popular: true,
    },
    {
      id: "snack-002",
      title: "Mozzarella Sticks",
      description:
        "Breaded mozzarella sticks fried golden brown, served with marinara sauce",
      quantity: 1,
      price: 7.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
      vegetarian: true,
    },
    {
      id: "snack-003",
      title: "Onion Rings",
      description:
        "Thick-cut onion rings in crispy beer batter, served with ranch dressing",
      quantity: 1,
      price: 5.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
      vegetarian: true,
    },
    {
      id: "snack-004",
      title: "Chicken Tenders",
      description:
        "Hand-breaded chicken tenders, fried crispy, served with honey mustard",
      quantity: 1,
      price: 9.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
    },
    {
      id: "snack-005",
      title: "Loaded Potato Skins",
      description:
        "Crispy potato skins filled with cheese, bacon, and green onions, served with sour cream",
      quantity: 1,
      price: 8.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
    },
    {
      id: "snack-006",
      title: "Nachos Supreme",
      description:
        "Crispy tortilla chips topped with cheese, jalapeños, beans, salsa, and sour cream",
      quantity: 1,
      price: 10.99,
      categories: [FOOD_CATEGORIES[2], FOOD_CATEGORIES[6]], // Snacks, Nachos
      vegetarian: true,
      spicy: true,
    },
    {
      id: "snack-007",
      title: "Spinach Artichoke Dip",
      description:
        "Creamy spinach and artichoke dip served with warm tortilla chips",
      quantity: 1,
      price: 8.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
      vegetarian: true,
    },
    {
      id: "snack-008",
      title: "Jalapeño Poppers",
      description:
        "Cream cheese-filled jalapeños, breaded and fried, served with ranch",
      quantity: 1,
      price: 7.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
      spicy: true,
      vegetarian: true,
    },
    {
      id: "snack-009",
      title: "Garlic Bread with Cheese",
      description:
        "Toasted garlic bread topped with melted mozzarella and herbs",
      quantity: 1,
      price: 5.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
      vegetarian: true,
    },
    {
      id: "snack-010",
      title: "Sampler Platter",
      description:
        "Best of everything: wings, mozzarella sticks, onion rings, and potato skins",
      quantity: 1,
      price: 18.99,
      categories: [FOOD_CATEGORIES[2]], // Snacks
      popular: true,
    },

    // ==================== SALADS (10 items) ====================
    {
      id: "salad-001",
      title: "Caesar Salad",
      description:
        "Crisp romaine lettuce, Parmesan cheese, croutons, and creamy Caesar dressing",
      quantity: 1,
      price: 8.99,
      categories: [FOOD_CATEGORIES[3]], // Salads
      vegetarian: true,
    },
    {
      id: "salad-002",
      title: "Grilled Chicken Caesar",
      description: "Classic Caesar topped with grilled chicken breast",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[3]], // Salads
    },
    {
      id: "salad-003",
      title: "Greek Salad",
      description:
        "Fresh tomatoes, cucumbers, red onions, olives, and feta cheese with Greek dressing",
      quantity: 1,
      price: 9.99,
      categories: [FOOD_CATEGORIES[3]], // Salads
      vegetarian: true,
    },
    {
      id: "salad-004",
      title: "Cobb Salad",
      description:
        "Mixed greens with grilled chicken, bacon, avocado, egg, tomatoes, and blue cheese",
      quantity: 1,
      price: 13.99,
      categories: [FOOD_CATEGORIES[3]], // Salads
    },
    {
      id: "salad-005",
      title: "Burger Salad Bowl",
      description:
        "All the toppings of a burger - beef patty, cheese, pickles, tomatoes, lettuce - served over mixed greens",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[3], FOOD_CATEGORIES[0]], // Salads, Burgers
    },
    {
      id: "salad-006",
      title: "Taco Salad",
      description:
        "Seasoned ground beef, lettuce, tomatoes, cheese, and tortilla strips in a crispy shell bowl",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[3], FOOD_CATEGORIES[5]], // Salads, Tacos
      spicy: true,
    },
    {
      id: "salad-007",
      title: "Strawberry Spinach Salad",
      description:
        "Fresh spinach with strawberries, candied pecans, goat cheese, and balsamic vinaigrette",
      quantity: 1,
      price: 10.99,
      categories: [FOOD_CATEGORIES[3]], // Salads
      vegetarian: true,
    },
    {
      id: "salad-008",
      title: "Southwest Salad",
      description:
        "Mixed greens with corn, black beans, peppers, tortilla strips, and chipotle ranch",
      quantity: 1,
      price: 10.99,
      categories: [FOOD_CATEGORIES[3]], // Salads
      vegetarian: true,
      spicy: true,
    },
    {
      id: "salad-009",
      title: "Mediterranean Quinoa Salad",
      description:
        "Protein-packed quinoa with cucumbers, tomatoes, olives, feta, and lemon-herb dressing",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[3]], // Salads
      vegetarian: true,
    },
    {
      id: "salad-010",
      title: "Pizza Salad",
      description:
        "Topped with pepperoni, mozzarella, tomatoes, and Italian dressing over mixed greens",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[3], FOOD_CATEGORIES[4]], // Salads, Pizzas
    },

    // ==================== PIZZAS (10 items) ====================
    {
      id: "pizza-001",
      title: "Margherita Pizza",
      description:
        "Classic pizza with tomato sauce, fresh mozzarella, basil, and olive oil",
      quantity: 1,
      price: 14.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
      vegetarian: true,
      popular: true,
    },
    {
      id: "pizza-002",
      title: "Pepperoni Pizza",
      description: "Traditional pizza topped with generous layers of pepperoni",
      quantity: 1,
      price: 16.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
      popular: true,
    },
    {
      id: "pizza-003",
      title: "BBQ Chicken Pizza",
      description:
        "Grilled chicken, red onions, and cilantro with BBQ sauce and mozzarella",
      quantity: 1,
      price: 17.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
    },
    {
      id: "pizza-004",
      title: "Vegetarian Supreme",
      description:
        "Bell peppers, onions, mushrooms, olives, and tomatoes with tomato sauce and mozzarella",
      quantity: 1,
      price: 16.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
      vegetarian: true,
    },
    {
      id: "pizza-005",
      title: "Meat Lovers",
      description: "Pepperoni, sausage, bacon, and ham with extra cheese",
      quantity: 1,
      price: 19.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
    },
    {
      id: "pizza-006",
      title: "Buffalo Chicken Pizza",
      description: "Spicy buffalo chicken with ranch drizzle and mozzarella",
      quantity: 1,
      price: 17.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
      spicy: true,
    },
    {
      id: "pizza-007",
      title: "Pizza & Wings Combo",
      description: "Large pepperoni pizza with 6 buffalo wings and fries",
      quantity: 1,
      price: 24.99,
      categories: [FOOD_CATEGORIES[4], FOOD_CATEGORIES[2], FOOD_CATEGORIES[1]], // Pizzas, Snacks, Fries
      spicy: true,
    },
    {
      id: "pizza-008",
      title: "Hawaiian Pizza",
      description: "Ham, pineapple, and bacon with tomato sauce and mozzarella",
      quantity: 1,
      price: 16.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
    },
    {
      id: "pizza-009",
      title: "Mushroom Truffle Pizza",
      description: "Wild mushrooms, truffle oil, mozzarella, and fresh herbs",
      quantity: 1,
      price: 18.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
      vegetarian: true,
    },
    {
      id: "pizza-010",
      title: "Four Cheese Pizza",
      description:
        "Mozzarella, cheddar, parmesan, and gorgonzola with tomato sauce",
      quantity: 1,
      price: 17.99,
      categories: [FOOD_CATEGORIES[4]], // Pizzas
      vegetarian: true,
    },

    // ==================== TACOS (10 items) ====================
    {
      id: "taco-001",
      title: "Classic Beef Tacos",
      description:
        "Three soft corn tortillas with seasoned beef, lettuce, cheese, and pico de gallo",
      quantity: 1,
      price: 10.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
    },
    {
      id: "taco-002",
      title: "Spicy Chicken Tacos",
      description:
        "Grilled spicy chicken with cabbage slaw, crema, and jalapeños",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
      spicy: true,
    },
    {
      id: "taco-003",
      title: "Fish Tacos",
      description:
        "Beer-battered cod with cabbage slaw, chipotle crema, and fresh salsa",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
    },
    {
      id: "taco-004",
      title: "Vegetarian Tacos",
      description: "Roasted vegetables, black beans, avocado, and queso fresco",
      quantity: 1,
      price: 10.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
      vegetarian: true,
    },
    {
      id: "taco-005",
      title: "Taco and Nachos Platter",
      description: "Three tacos served with a side of loaded nachos",
      quantity: 1,
      price: 15.99,
      categories: [FOOD_CATEGORIES[5], FOOD_CATEGORIES[6]], // Tacos, Nachos
    },
    {
      id: "taco-006",
      title: "Carnitas Tacos",
      description: "Slow-roasted pork with onions, cilantro, and salsa verde",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
    },
    {
      id: "taco-007",
      title: "Taco Salad Bowl",
      description:
        "All taco fixings served over lettuce in an edible tortilla bowl",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[5], FOOD_CATEGORIES[3]], // Tacos, Salads
    },
    {
      id: "taco-008",
      title: "Shrimp Tacos",
      description: "Grilled shrimp with mango salsa, cabbage, and lime crema",
      quantity: 1,
      price: 13.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
    },
    {
      id: "taco-009",
      title: "Breakfast Tacos",
      description:
        "Scrambled eggs, bacon, potatoes, and cheese in warm tortillas",
      quantity: 1,
      price: 9.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
    },
    {
      id: "taco-010",
      title: "Al Pastor Tacos",
      description: "Marinated pork with pineapple, onions, and cilantro",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[5]], // Tacos
      popular: true,
    },

    // ==================== NACHOS (10 items) ====================
    {
      id: "nachos-001",
      title: "Classic Nachos",
      description:
        "Crispy tortilla chips with melted cheese, jalapeños, and salsa",
      quantity: 1,
      price: 8.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
      vegetarian: true,
      spicy: true,
    },
    {
      id: "nachos-002",
      title: "Beef Nachos Supreme",
      description:
        "Loaded with seasoned beef, cheese, beans, jalapeños, sour cream, and guacamole",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
      spicy: true,
      popular: true,
    },
    {
      id: "nachos-003",
      title: "Chicken Nachos",
      description:
        "Shredded chicken, cheese sauce, black beans, pico de gallo, and crema",
      quantity: 1,
      price: 12.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
    },
    {
      id: "nachos-004",
      title: "Nachos with Guacamole",
      description: "Fresh guacamole served with classic cheese nachos",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
      vegetarian: true,
    },
    {
      id: "nachos-005",
      title: "Taco Nachos Fusion",
      description: "Nachos topped with all your favorite taco ingredients",
      quantity: 1,
      price: 13.99,
      categories: [FOOD_CATEGORIES[6], FOOD_CATEGORIES[5]], // Nachos, Tacos
      spicy: true,
    },
    {
      id: "nachos-006",
      title: "Buffalo Chicken Nachos",
      description:
        "Buffalo chicken, blue cheese crumbles, and ranch drizzle over nachos",
      quantity: 1,
      price: 13.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
      spicy: true,
    },
    {
      id: "nachos-007",
      title: "Veggie Fiesta Nachos",
      description:
        "Loaded with bell peppers, onions, corn, black beans, and multiple cheeses",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
      vegetarian: true,
    },
    {
      id: "nachos-008",
      title: "Pulled Pork Nachos",
      description:
        "Slow-cooked pulled pork, BBQ sauce, cheese, and pickled onions",
      quantity: 1,
      price: 14.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
    },
    {
      id: "nachos-009",
      title: "Breakfast Nachos",
      description:
        "Scrambled eggs, bacon, sausage, cheese, and breakfast salsa",
      quantity: 1,
      price: 11.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
    },
    {
      id: "nachos-010",
      title: "Ultimate Loaded Nachos",
      description:
        "Everything - beef, chicken, beans, all cheeses, guacamole, and sour cream",
      quantity: 1,
      price: 16.99,
      categories: [FOOD_CATEGORIES[6]], // Nachos
      popular: true,
    },

    // ==================== DESSERTS (10 items) ====================
    {
      id: "dessert-001",
      title: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a molten center, served with vanilla ice cream",
      quantity: 1,
      price: 7.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
      popular: true,
    },
    {
      id: "dessert-002",
      title: "New York Cheesecake",
      description: "Classic creamy cheesecake with strawberry topping",
      quantity: 1,
      price: 6.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
    {
      id: "dessert-003",
      title: "Brownie Sundae",
      description:
        "Warm brownie topped with vanilla ice cream, chocolate sauce, and whipped cream",
      quantity: 1,
      price: 7.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
    {
      id: "dessert-004",
      title: "Apple Pie à la Mode",
      description: "Classic apple pie served warm with vanilla ice cream",
      quantity: 1,
      price: 6.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
    {
      id: "dessert-005",
      title: "Milkshake",
      description:
        "Thick and creamy milkshake available in chocolate, vanilla, or strawberry",
      quantity: 1,
      price: 5.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
    {
      id: "dessert-006",
      title: "Burger & Dessert Combo",
      description: "Any burger with a slice of cheesecake or brownie",
      quantity: 1,
      price: 18.99,
      categories: [FOOD_CATEGORIES[0], FOOD_CATEGORIES[7]], // Burgers, Desserts
    },
    {
      id: "dessert-007",
      title: "Tiramisu",
      description:
        "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      quantity: 1,
      price: 6.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
    {
      id: "dessert-008",
      title: "Churros with Chocolate",
      description:
        "Crispy cinnamon churros served with warm chocolate dipping sauce",
      quantity: 1,
      price: 5.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
    {
      id: "dessert-009",
      title: "Ice Cream Sandwich",
      description: "Cookies with vanilla ice cream, rolled in sprinkles",
      quantity: 1,
      price: 4.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
    {
      id: "dessert-010",
      title: "Fruit Crumble",
      description:
        "Seasonal fruit crumble with oat topping, served with custard",
      quantity: 1,
      price: 6.99,
      categories: [FOOD_CATEGORIES[7]], // Desserts
      vegetarian: true,
    },
  ] as FoodItem[],
};
