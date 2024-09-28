import { MdDesignServices } from "react-icons/md";
import SectinTitle from "../shared/SectinTitle";

const Services = () => {
  return (
    <div className="flex justify-between mt-20  bg-slate-900 p-10 py-20 ">
      <div className="w-[1200px] mx-auto flex gap-10">
        <div className="grid gap-10 grid-cols-2 w-1/2">
          <div className="bg-white rounded space-y-2 flex flex-col justify-center items-center text-center">
            <div className=" bg-red-500 w-[60px] h-[60px] flex justify-center items-center rounded-full -mt-[30px]">
              <MdDesignServices></MdDesignServices>
            </div>
            <h4>UI/UX</h4>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi accusantium eum nobis rem iste minus at aliquid? Animi lorem50

            </p>
          </div>
          <div className="bg-white rounded space-y-2 flex flex-col justify-center items-center text-center">
            <div className=" bg-red-500 w-[60px] h-[60px] flex justify-center items-center rounded-full -mt-[30px]">
              <MdDesignServices></MdDesignServices>
            </div>
            <h4>UI/UX</h4>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi accusantium eum nobis rem iste minus at aliquid? Animi
            </p>
          </div>
          <div className="bg-white rounded space-y-2 flex flex-col justify-center items-center text-center">
            <div className=" bg-red-500 w-[60px] h-[60px] flex justify-center items-center rounded-full -mt-[30px]">
              <MdDesignServices></MdDesignServices>
            </div>
            <h4>UI/UX</h4>

            <p className="pb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              commodi accusantium eum nobis rem iste minus at aliquid? Animi
            </p>
          </div>
          <div className="bg-white rounded space-y-2 flex flex-col justify-center items-center text-center">
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
            <p className="text-white mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem dolorem nesciunt dicta qui necessitatibus placeat non minima perferendis. Sed corrupti magnam deleniti minus suscipit inventore aspernatur ad sit quae voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem, eveniet id est delectus modi repudiandae assumenda cupiditate earum placeat, aperiam neque? Exercitationem qui eum sint eos aut eius, consequatur inventore non reprehenderit repellendus quae laborum optio neque itaque autem maxime ut repellat commodi dolorum aspernatur! Quia mollitia eligendi sint ea hic earum repudiandae quod, facere dolor minima tempora facilis aperiam ratione, quas, debitis quis repellendus blanditiis. Corrupti autem delectus beatae? Odit doloribus harum quis minima totam? Id, deleniti fugit tempore ex sit veritatis quas inventore repellat eum? Animi dolor deserunt quia natus laudantium maiores officiis blanditiis porro laborum obcaecati?</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
