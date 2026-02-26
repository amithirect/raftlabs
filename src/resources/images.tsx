import { AppImageType } from "@/constants";
import { Image, ImageProps } from "@heroui/react";
import { FC } from "react";
import bannerImage from "./images/img-banner.png";

interface AppImagesProps extends ImageProps {
  type: AppImageType;
}

const AppImages: FC<AppImagesProps> = ({ type, ...rest }) => {
  switch (type) {
    case AppImageType.Banner:
      return <Image src={bannerImage} height={200} width={200} {...rest} />;

    default:
      return <></>;
  }
};

export default AppImages;
