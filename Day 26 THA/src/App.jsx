import "./App.css"
import { updateName, updateEmail } from "./actions";
import { useDispatch,useSelector } from "react-redux";

function App() {
  const nameData = useSelector(state => state.name);
  const emailData = useSelector((state) => state.email);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <input
        onChange={(e) => {
          dispatch(updateName(e));
        }}
        className="name_input"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(ev) => {
          dispatch(updateEmail(ev));
        }}
        className="email_input"
        type="text"
        placeholder="Email"
      />

      <div className="data">
        <h2>Data</h2>
        <div className="input1">
          <p>Username: </p>
          <p className="name">{nameData}</p>
        </div>
        <div className="input2">
          <p>Email: </p>
          <p className="email">{emailData}</p>
        </div>
      </div>
    </div>
  );
}


export default App;
