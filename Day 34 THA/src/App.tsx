import { useDispatch, useSelector } from 'react-redux';
import React ,{ useState } from 'react';
import { reducerType } from './reducers';
import { AddNote, deleteNote } from './actions';

import './App.css';


const App = () => {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  return (
    <div className="App">
      <div className="main">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(AddNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="notes">
        {notes.length == 0 ? (
          <h2>Click On Add to add Notes</h2>
        ) : (
          <ul>
            {notes.map((note: string, index: number) => (
              <div className="note">
                <li key={index}>
                  <h3>{note}</h3>
                  <button
                    onClick={() => {
                      dispatch(deleteNote(index));
                    }}
                  >
                    Delete
                  </button>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
