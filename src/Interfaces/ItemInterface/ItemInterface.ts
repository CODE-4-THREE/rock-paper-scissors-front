import { ReactNode } from "react";

export interface ItemInterface {
  children?: ReactNode;
  className?: string;
  imageSrc: string;
  imageAlt: string;
}
