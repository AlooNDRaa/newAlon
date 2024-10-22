import './App.css'
import AboutMe from './assets/components/About-me';
import MyMenu from './assets/components/Menu';
import MyProyectsGallery from './assets/components/Proyects';
import Trainings from './assets/components/Trainings';


function App() {
  return (
    <div>
      <MyMenu />
      <AboutMe />
      <MyProyectsGallery/>
      <Trainings/>
    </div>
  );
}

export default App;

