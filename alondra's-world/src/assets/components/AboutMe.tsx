import React, { useState } from "react";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Información</h2>
        <p>{content}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCircleClick = (text: React.SetStateAction<string>) => {
    setModalContent(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
        <div className="flex ml-8 mt-8">
            <h2 className="text-4xl font-semibold text-center mb-6">About me</h2>
        </div>
        <div className="flex justify-center">
      <svg
        width="40rem"
        height="auto"
        viewBox="-100 -100 800 800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#1e293b"
        strokeWidth="2.5"
      >
        <path d="M300,300 C350,100 600,150 500,50" strokeLinecap="round" />
        <path d="M300,300 C200,500 50,600 20,580" strokeLinecap="round" />
        <path d="M300,300 C400,500 600,550 580,300" strokeLinecap="round" />
        <path d="M300,300 C150,50 200,0 50,100" strokeLinecap="round" />
        <path d="M300,300 C400,350 500,300 650,500" strokeLinecap="round" />
        <path d="M300,300 C450,50 700,100 550,20" strokeLinecap="round" />
        <path d="M300,300 C100,600 300,700 50,650" strokeLinecap="round" />
        <path d="M300,300 C50,250 -50,400 0,300" strokeLinecap="round" />
        <path d="M300,300 C100,0 200,-50 300,50" strokeLinecap="round" />

        <circle
          cx="300"
          cy="300"
          r="10"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Este es el círculo central.")}
        />
        <circle
          cx="500"
          cy="50"
          r="6"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 1.")}
        />
        <circle
          cx="20"
          cy="580"
          r="6"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 2.")}
        />
        <circle
          cx="580"
          cy="300"
          r="7"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 3.")}
        />
        <circle
          cx="50"
          cy="100"
          r="8"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("I really love coffe")}
        />
        <circle
          cx="650"
          cy="500"
          r="9"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 5.")}
        />
        <circle
          cx="550"
          cy="20"
          r="12"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 6.")}
        />
        <circle
          cx="50"
          cy="650"
          r="7"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 7.")}
        />
        <circle
          cx="0"
          cy="300"
          r="15"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 8.")}
        />
        <circle
          cx="300"
          cy="50"
          r="8"
          fill="#000000"
          className="cursor-pointer animate-pulse"
          onClick={() => handleCircleClick("Información del círculo 9.")}
        />
      </svg>

      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </div>
    </div>
  );
};

export default AboutMe;
