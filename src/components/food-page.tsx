import { FC, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import FoodCard from "./food-card";
import bannerImage from "../resources/images/img-banner.png";
import DiscountCard from "./discount-card";

interface FoodPageProps {
  selectedIndex?: number;
  onItemClick?: (item: FoodItem) => void;
  onOfferClick?: (offer: Offer) => void;
  selectedOfferIndices: string[];
  onOfferRemoved?: (offer: Offer) => void;
}

const FoodPage: FC<FoodPageProps> = ({
  selectedIndex = 0,
  onOfferClick,
  onItemClick,
  onOfferRemoved,
  selectedOfferIndices,
}) => {
  // Create seperate ref for offer as it is not included in category listing
  const offerRef = useRef<HTMLDivElement | null>(null);
  // Create an array of refs for each category
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filter categories that have items
  const activeCategories = siteConfig.foodCategories.filter((category) => {
    const categoryItems = siteConfig.foodItems.filter((foodItem) =>
      foodItem.categories.some((cat) => cat === category),
    );
    return categoryItems.length > 0;
  });

  // Scroll to selected category when index changes
  useEffect(() => {
    if (selectedIndex === 0) {
      offerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (selectedIndex > 0 && selectedIndex < activeCategories.length) {
      categoryRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedIndex, activeCategories.length]);

  return (
    <div className="max-h-1/2">
      <div
        className="w-full grid md:grid-cols-4 grid-cols-1 gap-4 pt-20 pb-10 scroll-mt-[100px]"
        ref={(el) => (offerRef.current = el)}
      >
        {siteConfig.offers.map((offer) => (
          <DiscountCard
            offer={offer}
            key={offer.title}
            onCardClick={(isAdded) => {
              if (isAdded) {
                onOfferClick?.(offer);
              } else {
                onOfferRemoved?.(offer);
              }
            }}
            isAdded={selectedOfferIndices.includes(offer.id)}
          />
        ))}
      </div>

      {siteConfig.foodCategories.map((category, index) => {
        // Get items for this category first
        const categoryItems = siteConfig.foodItems.filter((foodItem) =>
          foodItem.categories.some((cat) => cat === category),
        );

        // Only render if there are items
        return categoryItems.length > 0 ? (
          <div
            key={category}
            className="w-full pt-10 scroll-mt-[100px]"
            ref={(el) => (categoryRefs.current[index] = el)}
          >
            <h1 className="text-2xl font-bold mb-4">
              {category.toUpperCase()}
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-2">
              {categoryItems.map((foodItem, index) => (
                <FoodCard
                  key={index}
                  item={foodItem}
                  image={bannerImage}
                  onCardClick={() => onItemClick?.(foodItem)}
                />
              ))}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default FoodPage;
