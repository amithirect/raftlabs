import DefaultLayout from "@/layouts/default";
import FoodMenu from "@/components/food-menu";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import AppBanner from "@/components/banner";
import FoodPage from "@/components/food-page";
import { addToast, Card } from "@heroui/react";
import { AppContext } from "@/lib/providers/app-provider";
import AppUtils from "@/lib/utils/utils";

export default function IndexPage() {
  const [firstRun, setFirstRun] = useState(true);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const { appState, updateAppState } = useContext(AppContext);

  const cartState = appState.cart;

  const showToast = useCallback(
    (
      title: string,
      message: string,
      color:
        | "default"
        | "foreground"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger" = "default",
      onComplete?: VoidFunction,
    ) => {
      addToast({
        title,
        description: message,
        timeout: 3000,
        shouldShowTimeoutProgress: true,
        color,
        variant: color !== "default" ? "solid" : "flat",
        onClose: onComplete,
      });
    },
    [],
  );

  const updateCartState = (updatedCart: Cart) => {
    updateAppState({ ...appState, cart: updatedCart });
  };

  const handleAddFoodItem = useCallback(
    (item: FoodItem) => {
      if (cartState?.items) {
        const foundItem = (cartState?.items ?? []).find(
          (foodItem) => foodItem.id === item.id,
        );

        if (!foundItem) {
          showToast("Item added", `${item.title} added to cart successfully`);

          updateCartState({ ...cartState, items: [...cartState?.items, item] });
        } else {
          showToast(
            "Item updated",
            `${item.title} quantity updated successfully`,
          );

          foundItem.quantity += 1;

          updateCartState({
            ...cartState,
            items: AppUtils.replaceItemInArray(
              cartState.items,
              foundItem,
              "id",
            ),
          });
        }
      }
    },
    [cartState, showToast, updateCartState],
  );

  const handleAddOffer = useCallback(
    (offer: Offer) => {
      if (cartState?.offers) {
        setFirstRun(false);
        showToast(
          "Offer added",
          `${offer.title} added to cart successfully`,
          "success",
        );

        updateCartState({
          ...cartState,
          offers: [...cartState?.offers, offer],
        });
      }
    },
    [cartState, showToast, updateCartState],
  );

  const handleRemoveOffer = useCallback(
    (offer: Offer) => {
      if (cartState?.offers) {
        showToast(
          "Offer removed",
          `${offer.title} removed from cart successfully`,
          "danger",
        );
        updateCartState({
          ...cartState,
          offers: (cartState.offers ?? []).filter(
            (item) => item.id !== offer.id,
          ),
        });
      }
    },
    [cartState],
  );

  useEffect(() => {
    if (cartState) {
      if (cartState.offers.length === 0 && !firstRun) {
        AppUtils.executeDelayed(
          () =>
            showToast(
              "No offers",
              "You have removed all the offers.",
              "warning",
            ),
          3000,
        );
      }

      if (cartState.offers.length > 1) {
        AppUtils.executeDelayed(
          () =>
            showToast(
              "Multiple Offers",
              "You have added multiple offers, only appropriate offer may be applied",
              "warning",
            ),
          3000,
        );
      }
    }
  }, [cartState, showToast]);

  const selectedOfferIndices = useMemo(
    () => (cartState.offers ?? []).map((offer) => offer.id),
    [cartState],
  );

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <AppBanner />
      </section>

      {/* FULL WIDTH sticky wrapper OUTSIDE container */}
      <div className="sticky top-[64px] z-50 bg-background/80 backdrop-blur-md w-full">
        <div className="max-w-7xl mx-auto">
          <Card>
            <FoodMenu
              selectedItemIndex={selectedItemIndex}
              onItemClick={setSelectedItemIndex}
            />
          </Card>
        </div>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="max-w-7xl mx-auto">
        <FoodPage
          selectedIndex={selectedItemIndex}
          onItemClick={handleAddFoodItem}
          onOfferClick={handleAddOffer}
          onOfferRemoved={handleRemoveOffer}
          selectedOfferIndices={selectedOfferIndices || []}
        />
      </div>
    </DefaultLayout>
  );
}
