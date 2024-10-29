import { LiaLinkedin } from 'react-icons/lia';
import { FaGithub } from 'react-icons/fa';
import Doodle from '../doodle/1.png'
import ClipboardCopyButton from './ClipBoards';

const Home = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center">
      <div 
      style={{ backgroundImage: `url(${Doodle})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="bg-slate-100 p-60 w-[65%] h-[8rem] rounded-md shadow-md flex flex-col items-center justify-center">
        <div className="bg-black p-16 backdrop-blur-md rounded-3xl">
        <div className="texts w-[35rem] p-6">
        <h1 className="text-5xl font-bold text-white text-center mb-4">Hello! I'm Alondra</h1>
        <p className="text-lg text-center text-gray-400 font-bold">
        Full stack web developer from Argentina       
         </p>
        </div>
        <div className="mt-5 flex justify-center">
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">
           <a href="https://www.linkedin.com/in/alondra-gadea/" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
           <LiaLinkedin size={20}/> Linkedin           
           </a>
          </button>
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 ml-4">
            <a href="https://github.com/AlooNDRaa" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
           <FaGithub size={20}/> Github
            </a>
          </button>
        </div>
        <div className="flex justify-center w-full">
        <ClipboardCopyButton/>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
