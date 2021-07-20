import "./styles.css";
import counter from './counter'

export default function App(props) {
  return (
    <div className="App">
     <p>{props.description}</p>
     <counter/>
    </div>
  );
}
