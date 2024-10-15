import { BiHome } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { MdEmail, MdWork } from "react-icons/md";

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
        name: "Contact",
        path: "/contact",
        icon: <MdEmail />,
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


const MyMenu = () => {
    return (
        <div className="bg-slate-200 fixed top-0 left-0 w-full h-16 flex items-center justify-center">
            <ul className="flex space-x-6 font-mono text-lg">
                {optionMenu.map((option) => (
                    <li key={option.id}>
                        <a className="flex items-center gap-2" href=
                            {option.path}>
                            {option.icon}
                            {option.name}
                        </a>
                    </li>
                ))}
                </ul>
        </div>
    )
}

export default MyMenu