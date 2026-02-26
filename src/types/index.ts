type Offer = {
  id: string;
  title: string;
  discount: number;
  isPercentage: boolean;
  discountLevel: "order" | "cheapest item";
};

type FoodItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  categories: string[];
  quantity: number;
};

type Cart = {
  items: FoodItem[];
  offers: Offer[];
};

type UserProfile = {
  fullname: string;
  house: string;
  street: string;
  pincode: string;
  email: string;
  phone: string;
};

type AppInfo = {
  cart: Cart;
  userProfile: UserProfile;
};

type AppliedOffer = {
  title: string;
  discount: number;
};

interface AppState {
  appState: AppInfo;
  updateAppState: (state: AppInfo) => void;
}

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

interface FormValidationResult {
  isValid: boolean;
  errors?: unknown;
}
