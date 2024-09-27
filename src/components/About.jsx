import about from "../assets/about.png";
import about2 from "../assets/about-2.png";


const About = () => {
  return (
    <div className="mt-20 flex flex-row justify-between gap-10 w-[1200px] mx-auto px-0">
      <div className="w-1/2">
        <h3 className="text-xl font-bold">
          Introduction To the Best{" "}
          <span className="text-red-500">Digital Agency</span>
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
          Molestias nobis magni soluta amet similique tenetur excepturi incidunt
          tempora officia vel laboriosam optio quis sit aut nisi fugit sapiente
          cum, mollitia aliquid. Quisquam id quae repellat, error minus quo,
          odio possimus veritatis voluptatum ad hic nesciunt nobis cum modi odit
          temporibus, illo nulla mollitia provident ipsam totam! A et illum eos
          error beatae hic doloremque tempora dignissimos quod corrupti earum
          
        </p>
        <button className="bg-red-500 rounded-md py-2 w-40 mt-4 text-white">Hire Us</button>
      </div>
      <div className="w-1/2">
        <div className="relative ">
          <img className="w-100% " src={about} alt="" />
          <img className="absolute left-0 -bottom-10" src={about2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
