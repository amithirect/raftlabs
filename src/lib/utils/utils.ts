const AppUtils = {
  executeDelayed: (fnCallback: VoidFunction, duration: number = 300): void => {
    window.setTimeout(fnCallback, duration);
  },

  formatCurrency: (value: number): string =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(value),

  isEmpty: (value: string): boolean => value.trim() === "",

  replaceItemInArray: <T>(array: T[], newItem: T, key: string): T[] =>
    (array ?? []).map((item) => (item[key] === newItem[key] ? newItem : item)),

  getBestOffer: (offers: Offer[], items: FoodItem[]) => {
    var bestOffer: AppliedOffer = {
      title: "",
      discount: 0,
    };

    const cheapestItemTotalPrice = items.reduce((minTotal, item) => {
      const itemTotal = item.price * item.quantity;
      return itemTotal < minTotal ? itemTotal : minTotal;
    }, Infinity);

    const orderTotal = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    (offers ?? []).forEach((offer) => {
      switch (offer.discountLevel) {
        case "cheapest item":
          if (bestOffer.discount < cheapestItemTotalPrice) {
            bestOffer = {
              title: offer.title,
              discount: cheapestItemTotalPrice,
            };
          }
          break;

        default:
          var totalDiscount = 0;
          if (offer.isPercentage) {
            totalDiscount = orderTotal * (offer.discount / 100);
          } else {
            totalDiscount = offer.discount;
          }

          if (bestOffer.discount < totalDiscount) {
            bestOffer = {
              title: offer.title,
              discount: totalDiscount,
            };
          }

          break;
      }
    });

    return bestOffer.discount === 0 ? null : bestOffer;
  },
};

export default AppUtils;
