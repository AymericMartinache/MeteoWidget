//* --- REACT-FEATHER
import { Cloud } from 'react-feather';

//* --- COMPONENTS
import Form from '../Form/Form';
import CityList from '../CityList/CityList';

//* --- SCSS
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-logo">
          <Cloud size={60} />
        </div>
        <div className="header-title">Météo Widget</div>
      </header>
      <Form />
      <CityList />
    </div>
  );
}

export default App;
