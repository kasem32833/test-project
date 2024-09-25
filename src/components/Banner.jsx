import bgImage from "../assets/photo-1557804506-669a67965ba0.avif";
import about from "../assets/about.png";
import about2 from "../assets/about-2.png";

// React icons
import { MdDesignServices } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Banner = () => {

  const {user} = useContext(AuthContext)
  return (
    <div className="px-6 mx-auto max-w-7xl ">
      <div className="relative">
        <img className=" h-[600px] w-full" src={bgImage} alt="background-img" />
        <div className="bg-black absolute left-0 top-0 w-full h-full opacity-85 text-white flex flex-col justify-center items-center gap-8 px-32">
          <p>
            welcome To <span className="text-red-500">Design Hub</span>
          </p>
          <h1 className="text-5xl font-bold ">
            Creating The Future With Design Hub
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt
            doloremque beatae excepturi ut eligendi cumque facere, culpa
            provident non explicabo quis sit ullam quos officiis unde! Pariatur,
            inventore similique?
          </p>
          <div className="flex gap-6">
            <button className="btn btn-primary">Hire Us</button>
            <button className="btn btn-secondary">View Portfolio</button>
          </div>
        </div>
      </div>
      {/* about section  */}
      <div className="mt-20 flex flex-row justify-between gap-10">
        <div className="w-1/2">
          <h3 className="text-xl font-bold">
            Introduction To the Best{" "}
            <span className="text-red-500">Digital Agency</span>
          </h3>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            voluptatibus veniam qui nemo repellendus praesentium placeat
            accusamus saepe et dolores! Excepturi aliquam delectus nulla
            corrupti quis, illo non voluptatem accusantium possimus ab
            laboriosam veritatis ex blanditiis dolor numquam praesentium maiores
            sit similique debitis cupiditate? Eos dolore, facilis, optio
            dignissimos ex id quod, nesciunt deserunt praesentium explicabo
            saepe enim architecto porro! Consequuntur illum reiciendis similique
            alias mollitia nisi veniam itaque non corporis esse officia dolorum
            commodi, magnam, fugit ex quos? Dolores ducimus natus, ratione ea
            maiores quos sed architecto molestias minus nam dicta quia numquam
            voluptas, magnam fugiat accusamus eligendi dolore laboriosam aut
            quis cumque praesentium provident! Accusamus recusandae autem eius
            soluta voluptatem! Molestias nobis magni soluta amet similique
            tenetur excepturi incidunt tempora officia vel laboriosam optio quis
            sit aut nisi fugit sapiente cum, mollitia aliquid. Quisquam id quae
            repellat, error minus quo, odio possimus veritatis voluptatum ad hic
            nesciunt nobis cum modi odit temporibus, illo nulla mollitia
            provident ipsam totam! A et illum eos error beatae hic doloremque
            tempora dignissimos quod corrupti earum sint, molestiae nobis
            repudiandae voluptatibus facilis magni similique quia alias totam
            est quas quidem suscipit vel. Dolor dolores deserunt nobis beatae
            ratione unde ipsam amet dicta vero?
          </p>
          <button className="btn btn-secondary mt-6">Hire Us</button>
        </div>
        <div className="w-1/2">
          <div className="relative ">
            <img className="w-100% " src={about} alt="" />
            <img className="absolute left-0 -bottom-10" src={about2} alt="" />
          </div>
        </div>
      </div>
      {/* service section */}
      <div className="flex justify-between mt-20  bg-slate-900 py-20 ">
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
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
