import './App.css'
import Home from './assets/components/Home';
import MyMenu from './assets/components/Menu';
import MyProyectsGallery from './assets/components/Proyects';
import AboutMe from './assets/components/AboutMe';
import Trainings from './assets/components/Trainings';


function App() {
  return (
    <div>
      <MyMenu />
      <Home />
      <MyProyectsGallery/>
      <Trainings/>
      <AboutMe/>
    </div>
  );
}

export default App;

