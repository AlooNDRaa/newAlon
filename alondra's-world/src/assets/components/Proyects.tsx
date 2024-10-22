import { GrProjects } from "react-icons/gr";

const MyProyectsGallery = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="flex justify-start ml-10 p-2 items-center gap-2">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <GrProjects size={30} />
      </div>

      <div className="grid grid-cols-3 gap-4 p-6 m-4">
        <article className="bg-black h-60 flex items-center justify-center text-white rounded-lg">
          P1
        </article>
        <article className="bg-black h-60 flex items-center justify-center text-white rounded-lg">
          P2
        </article>
        <article className="bg-black h-60 flex items-center justify-center text-white rounded-lg">
          P3
        </article>
        <article className="bg-black h-60 flex items-center justify-center text-white rounded-lg">
          P4
        </article>
        <article className="bg-black h-60 flex items-center justify-center text-white rounded-lg">
          P5
        </article>
        <article className="bg-black h-60 flex items-center justify-center text-white rounded-lg">
          P6
        </article>
      </div>
    </div>
  );
};

export default MyProyectsGallery;
