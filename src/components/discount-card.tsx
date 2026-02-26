import { Button } from "@heroui/button";
import { Card, CardHeader, CardFooter, Image, Chip } from "@heroui/react";
import { FC } from "react";
import offerImage from "../resources/images/img-offer.png";

interface DiscountCardProps {
  offer: Offer;
  onCardClick?: (isAdded: boolean) => void;
  isAdded?: boolean;
}

const DiscountCard: FC<DiscountCardProps> = ({
  offer,
  onCardClick,
  isAdded = false,
}) => {
  return (
    <Card isFooterBlurred className="md:w-70 sm:w-full">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <Chip
          color="success"
          className="text-tiny uppercase font-bold absolute -top-0 -right-0"
        >
          {offer.isPercentage ? `${offer.discount}%` : `$${offer.discount}`}
        </Chip>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={offerImage}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 z-10 justify-between">
        <div>
          <p className="font-bold text-white">{offer.title}</p>
        </div>
        <Button
          isIconOnly
          color={isAdded ? "danger" : "warning"}
          variant="solid"
          radius="sm"
          className="absolute -bottom-0 -right-0 shadow-lg h-full w-15 text-white font-bold text-large"
          onPress={() => onCardClick?.(!isAdded)}
        >
          {isAdded ? "-" : "+"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiscountCard;
