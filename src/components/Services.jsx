import { MdDesignServices } from "react-icons/md";
import SectinTitle from "../shared/SectinTitle";

const Services = () => {
  return (
    <div className="flex justify-between mt-20  bg-slate-900 p-10 py-20 ">
      <div className="w-[1200px] mx-auto flex gap-10">
        <div className="grid gap-10 grid-cols-2 w-1/2">
          <div className="bg-white rounded space-y-6 flex flex-col justify-center items-center text-center">
            <div className=" bg-red-500 w-[60px] h-[60px] flex justify-center items-center rounded-full -mt-[30px]">
              <MdDesignServices></MdDesignServices>
            </div>
            <h4>UI/UX</h4>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi accusantium eum nobis rem iste minus at aliquid? Animi
            </p>
          </div>
          <div className="bg-white rounded space-y-6 flex flex-col justify-center items-center text-center">
            <div className=" bg-red-500 w-[60px] h-[60px] flex justify-center items-center rounded-full -mt-[30px]">
              <MdDesignServices></MdDesignServices>
            </div>
            <h4>UI/UX</h4>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi accusantium eum nobis rem iste minus at aliquid? Animi
            </p>
          </div>
          <div className="bg-white rounded space-y-6 flex flex-col justify-center items-center text-center">
            <div className=" bg-red-500 w-[60px] h-[60px] flex justify-center items-center rounded-full -mt-[30px]">
              <MdDesignServices></MdDesignServices>
            </div>
            <h4>UI/UX</h4>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi accusantium eum nobis rem iste minus at aliquid? Animi
            </p>
          </div>
          <div className="bg-white rounded space-y-6 flex flex-col justify-center items-center text-center">
            <div className=" bg-red-500 w-[60px] h-[60px] flex justify-center items-center rounded-full -mt-[30px]">
              <MdDesignServices></MdDesignServices>
            </div>
            <h4>UI/UX</h4>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi accusantium eum nobis rem iste minus at aliquid? Animi
            </p>
          </div>
        </div>
        {/* description section */}
        <div className="w-1/2">
            <SectinTitle title={"We Can Offer You"} subTitle={"This is a sub title"}></SectinTitle>
        </div>
      </div>
    </div>
  );
};

export default Services;
