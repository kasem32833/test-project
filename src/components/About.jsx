import about from "../assets/about.png";
import about2 from "../assets/about-2.png";
import SectionTitle from "../shared/SectinTitle";

const About = () => {
  return (
    <div className="mt-20 flex flex-row justify-between gap-10 w-[1200px] mx-auto px-0">
      <div className="w-1/2">
        <p>About Design Hub</p>
        <h3 className="text-4xl mb-4 font-bold">
          Introduction To The Best
          <span className="text-red-500">
            <br />
            Digital Agency
          </span>
        </h3>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          voluptatibus veniam qui nemo repellendus praesentium placeat accusamus
          saepe et dolores! Excepturi aliquam delectus nulla corrupti quis, illo
          non voluptatem accusantium possimus ab laboriosam veritatis ex
          blanditiis dolor numquam praesentium maiores sit similique debitis
          cupiditate? Eos dolore, facilis, optio dignissimos ex id quod,
          nesciunt deserunt praesentium explicabo saepe enim architecto porro!
          Consequuntur illum reiciendis similique alias mollitia nisi veniam
          itaque non corporis esse officia dolorum commodi, magnam, fugit ex
          quos? Dolores ducimus natus, ratione ea maiores quos sed architecto
          molestias minus nam dicta quia numquam voluptas, magnam fugiat
          accusamus eligendi dolore laboriosam aut quis cumque praesentium
          provident! Accusamus recusandae autem eius soluta voluptatem!
        </p>
        <button className="bg-red-500 rounded-md py-2 w-40 mt-4 text-white">
          Hire Us
        </button>
      </div>
      <div className="w-1/2 ml-20">
        <div className="relative ">
          <img className="w-100%  relative" src={about} alt="" />
          <div className="absolute -left-10 -bottom-40">
            <img className=" " src={about2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
