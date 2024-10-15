import { LiaLinkedin } from 'react-icons/lia';
import '../styles/aboutme.css';
import { FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center">
      <div className="bg-slate-100 p-60 w-[65%] h-[8rem] rounded-md shadow-md flex flex-col items-center justify-center">
        <div className="texts">
        <h1 className="text-5xl font-bold text-center mb-4">Hello! I'm Alondra</h1>
        <p className="text-lg text-center text-gray-800">
        Full stack web developer from Argentina       
         </p>
        </div>
        <div className="mt-6 flex ">
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">
           <LiaLinkedin size={20}/> Linkedin
          </button>
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 ml-4">
           <FaGithub size={20}/> Github
          </button>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
