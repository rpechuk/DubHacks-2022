import { HikeT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: HikeT[] = [
  {
    name: "Rattlesnape ledge",
    match: "4",
    description:"Mile length: 5.3, Elevation Gain: 1459ft, Enjoy nice views of the lake from the summit",
    image: IMAGE_01,
  },
  {
    name: "Snow Lake",
    match: "5",
    description:
      "Mile length: 6.7, Elevation Gain: 1699ft, Enjoy a nice foresty trail to get to a mountain lake",
    image: IMAGE_02,
  },
  {
    name: "Lake Colchuck",
    match: "0",
    description:
      "Mile length: 8.9, Elevation Gain: 3100ft, Enjoy a nice foresty trail to get to a green lake",
    image: IMAGE_03,
  },
  {
    name: "High Rock Lookout",
    match: "2",
    description:
      "Mile length: 3.2, Elevation Gain: 1299ft, Enjoy an amazing view over the mountains of the PNW",
    image: IMAGE_04,
  },
];

export default data;
