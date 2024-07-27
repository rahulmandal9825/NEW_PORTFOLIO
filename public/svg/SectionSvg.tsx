import { Plus } from "lucide-react";
import PlusSvg from "./PlusSvg";


const SectionSvg = ({ crossesOffset }: any) => {
  return (
    <>
      <Plus
        className={` absolute -top-5 ${
          crossesOffset
        } pointer-events-none rotate-45`}
      />
       <Plus
        className={` absolute -top-5  ${
          crossesOffset
        } pointer-events-none`}
      />
    </>
  );
};

export default SectionSvg;
