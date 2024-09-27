import bgImage from "../assets/photo-1557804506-669a67965ba0.avif";


// React icons
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "./Footer";


const Banner = () => {

  const {user, logOut} = useContext(AuthContext)
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: "center",
      height: "100vh",
      width:"100vw",
      position: "relative",
      marginTop: "80px"

    }} >
      <div className="bg-black absolute left-0 top-0 w-full h-full opacity-85 text-white flex flex-col justify-center items-center gap-8 px-32 ">
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
            <button className="bg-red-500 rounded-md py-2 w-40">Hire Us</button>
            <button className="bg-white text-black py-2 rounded-md  w-40">View Portfolio</button>
          </div>
        </div>
    </div>
    // <div className="px-6 mx-auto">
    //   <div className="relative">
    //     <img className=" h-[600px] w-full" src={bgImage} alt="background-img" />
        
    //   </div>
    //   
    // </div>
    
  );
};

export default Banner;
