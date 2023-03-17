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

/*const checkBoxes = document.querySelectorAll('.checkbox')
const checkedBoxes = [];

checkBoxes.forEach(function(checkBox) {
  if (checkBox.checked) {
    checkedBoxes.push(checkBox.value);
  }
});*/

let checkedBoxes = [];

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkedBoxes.push(this.value);
    } else {
      let index = checkedBoxes.indexOf(this.value);
      checkedBoxes.splice(index, 1);
    }
    localStorage.setItem('checkedBoxes', JSON.stringify(checkedBoxes));
  });
});

localStorage.setItem('checkedBoxes', JSON.stringify(checkedBoxes));

let storedCheckedBoxes = JSON.parse(localStorage.getItem('checkedBoxes'));
if (storedCheckedBoxes) {
  checkedBoxes = storedCheckedBoxes;
  checkboxes.forEach(function(checkbox) {
    if (checkedBoxes.includes(checkbox.value)) {
      checkbox.checked = true;
    }
  });
}

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
