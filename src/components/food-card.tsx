import { Card, CardBody, CardFooter, NumberInput } from "@heroui/react";
import { Button } from "@heroui/button";
import { FC } from "react";
import { DeleteIcon } from "./icons";

interface FoodCardProps {
  item: FoodItem;
  image: string;
  onCardClick?: () => void;
  isCartView?: boolean;
  onQuantityChange?: (newQuantity: number) => void;
  onItemRemove?: () => void;
}

const FoodCard: FC<FoodCardProps> = ({
  item,
  image,
  onCardClick,
  isCartView = false,
  onQuantityChange,
  onItemRemove,
}) => {
  return (
    <Card className="">
      <CardBody className="flex flex-row items-start justify-between">
        {/* LEFT SIDE - TEXT */}
        <div className="flex flex-col gap-1 flex-1">
          <h3 className="text-base font-semibold leading-tight">
            {item.title}
          </h3>

          <p className="text-sm text-default-500 line-clamp-2">
            {item.description}
          </p>

          <p className="text-base font-bold mt-1">£{item.price.toFixed(2)}</p>
        </div>

        {/* RIGHT SIDE - IMAGE + BUTTON */}
        <div className="relative w-28 h-28 shrink-0">
          <img
            src={image}
            alt={item.title}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* ADD BUTTON */}
          {!isCartView && (
            <Button
              isIconOnly
              radius="full"
              color="primary"
              size="sm"
              className="absolute -bottom-2 -right-2 shadow-lg"
              onPress={onCardClick}
            >
              +
            </Button>
          )}
        </div>
      </CardBody>
      {isCartView && (
        <CardFooter className="flex flex-row gap-4 justify-between">
          <NumberInput
            isWheelDisabled
            aria-label="Quantity"
            label="Quantity"
            className="w-3/4"
            minValue={1}
            defaultValue={item.quantity ?? 1}
            placeholder="Enter the quantity"
            onValueChange={onQuantityChange}
          />
          <Button
            isIconOnly
            variant="flat"
            className="text-danger"
            onPress={onItemRemove}
          >
            <DeleteIcon />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FoodCard;
