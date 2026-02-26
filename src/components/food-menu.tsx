import { FC } from "react";
import { Card, CardBody, Button } from "@heroui/react";

import { siteConfig } from "@/config/site";

interface FoodMenuProps {
  selectedItemIndex?: number;
  onItemClick?: (itemIndex: number) => void;
}

const FoodMenu: FC<FoodMenuProps> = ({
  selectedItemIndex = 0,
  onItemClick,
}) => {
  return (
    <Card className="bg-zinc-800 shadow-2xl">
      <CardBody className="flex flex-row items-center justify-between gap-4 py-2">
        {siteConfig.foodCategories.map((item, index) => (
          <Button
            radius="full"
            color="warning"
            variant={selectedItemIndex === index ? "solid" : "light"}
            onPress={() => onItemClick?.(index)}
            key={index}
          >
            {item}
          </Button>
        ))}
      </CardBody>
    </Card>
  );
};

export default FoodMenu;
