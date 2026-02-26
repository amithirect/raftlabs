import { FC } from "react";
import {
  Card,
  CardBody,
  Button,
  CardFooter,
  CardHeader,
  Image,
} from "@heroui/react";
import AppImages from "@/resources/images";
import { AppImageType } from "@/constants";
import bannerImage from "../resources/images/img-banner.png";

const AppBanner: FC = () => {
  return (
    <>
      <Card className="py-4 w-full animated-gradient hidden md:block">
        <CardBody className="flex-row items-center justify-between">
          <div>
            <p className="text-tiny uppercase font-bold">I'm Lovin' it!</p>
            <small className="text-default-500">Near you</small>
            <h4 className="font-bold text-large">RaftLabs Pizzeria, Palaaj</h4>
            <Button className="mt-5 shadow-lg">Order now</Button>
          </div>
          <AppImages type={AppImageType.Banner} />
        </CardBody>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5 block md:hidden"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            Near you
          </p>
          <h4 className="text-black font-medium text-2xl">I'm Lovin' it!</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={bannerImage}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">RaftLabs Pizzeria</p>
            <p className="text-black text-tiny">Palaaj</p>
          </div>
          <Button className="text-tiny shadow-lg" color="primary" size="sm">
            Order now
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AppBanner;
