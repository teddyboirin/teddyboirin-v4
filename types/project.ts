import { StaticImageData } from "next/image";

export type Project = {
    title: string;
    link: string;
    image: StaticImageData;
    color: string;
}