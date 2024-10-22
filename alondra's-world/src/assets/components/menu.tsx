import { useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { MdBook, MdInvertColors, MdWork } from "react-icons/md";

 const optionMenu = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <BiHome />,
  },
  {
      id: 2,
      name: "Projects",
      path: "/projects",
      icon: <MdWork />,
    },
    {
        id: 3,
        name: "Trainings",
        path: "/contact",
        icon: <MdBook />,
    },
    {
      id: 4,
      name: "About Me",
      path: "/aboutme",
      icon: <BsPerson />,
    },
    {
        id: 5,
        name: "English",
        icon: <IoLanguage />,
    }
];

const ChangueThemeFunction = () => {
    return console.log("Funciona el cambio");
}




const MyMenu = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
<div className={`fixed top-0 left-0 w-full h-16 flex items-center justify-center font-manrope ${isScrolled ? "bg-white backdrop-blur-sm m-2 p-2 border-lg bg-opacity-10 flex w-max justify-center ml-[20rem]" : ""}`}>
<ul className="flex items-center space-x-6 font-semibold">
          {optionMenu.map((option) => (
            <li key={option.id}>
              <a className="flex items-center gap-2" href={option.path}>
                {option.icon}
                {option.name}
              </a>
            </li>
          ))}
            <button onClick={
                ChangueThemeFunction
            } type="button" className="flex aling-center items-center gap-1">
              <MdInvertColors size={20} /> Theme
            </button>
        </ul>
      </div>
    );
  };
  
  export default MyMenu;
  