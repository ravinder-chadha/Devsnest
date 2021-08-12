import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Form from './components/form';
import WeatherCard from './components/WeatherCard';
import { useSelector } from "react-redux";
import ToggleTheme from './components/ToggleTheme';

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "app dark": "app"}>
      <ToggleTheme />
      <Form />
      <WeatherCard/>
    </div>
  );
}


export default App;
