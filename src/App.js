import Header from './components/Header';
import Assault from './components/weapons/Assault';
//import Battle from './components/weapons/Battle';
//import Smgs from './components/weapons/Smgs';
//import Lmgs from './components/weapons/Lmgs';
//import Shotguns from './components/weapons/Shotguns';
//import Marksman from './components/weapons/Marksman';
//import Snipers from './components/weapons/Snipers';
//import Melee from './components/weapons/Melee';
//import Launchers from './components/weapons/Launchers';
//import Handguns from './components/weapons/Handguns';
import Footer from './components/Footer';

function App() {
  return (
    <main className='bg-lime-900'>
      <Header />
      <Assault />
      {/*<Battle />
      <Smgs />
      <Lmgs />
      <Shotguns />
      <Marksman />
      <Snipers />
      <Melee />
      <Launchers />
      <Handguns />*/}
      <Footer />
    </main>
  );
}

export default App;
