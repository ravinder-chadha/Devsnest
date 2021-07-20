import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { useState } from "react";

var newName = "";
var newCal = "";
var deleteIndex = -1;

const Form = (props) => {
  const [nameOfFood, setNameOfFood] = useState("");
  const [calories, setCalories] = useState();

  return (
    <div className="formContainer">
      <div className="foodNameContainer">
        <input
          type="text"
          className="foodNameInput"
          placeholder="Food Name"
          value={nameOfFood}
          onChange={(e) => setNameOfFood(e.target.value)}
        />
        <input
          type="number"
          className="calInput"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          key="cal_field"
        />
        <button
          onClick={() => {
            newName = nameOfFood;
            newCal = calories;
            console.log(newCal, newName);
            props.add(newName, newCal);
            setNameOfFood("");
            setCalories("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const Card = (props) => {
  const [editedName, setEditedName] = useState("Boi");
  const [editedCal, setEditedCal] = useState(0);
  return (
    <div className="card">
      {props.editing ? (
        <div className="editing">
          <div className="editName">
            <input
              type="text"
              placeholder="Food Name"
              onChange={(e) => setEditedName(e.target.value)}
            />
          </div>
          <div className="editCal">
            <input
              type="number"
              placeholder="Calories"
              onChange={(e) => setEditedCal(e.target.value)}
            />
          </div>
          <div className="submitBtn">
            <button
              onClick={() => {
                props.edit(props.i, props.name, props.cal);
                props.update(props.i, editedName, editedCal);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="cardname">
            {props.name}
            <span>
              <i
                className="fa fa-edit"
                onClick={() => {
                  console.log("editing", props.i, props.name, props.cal);
                  props.edit(props.i, props.name, props.cal);
                }}
              ></i>
            </span>
          </div>
          <div className="content">
            You have consumed {props.cal} cals today
            <span>
              <i
                className="fa fa-trash"
                onClick={() => {
                  console.log(props.i);
                  deleteIndex = props.i;
                  props.del(deleteIndex);
                }}
              ></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const List = (props) => {
  return (
    <div className="listContainer">
      <div className="lists">
        {props.cards.map((items, index) => (
          <Card
            name={items.name}
            cal={items.val}
            i={index}
            del={props.del}
            key={index}
            edit={props.edit}
            editing={items.editing}
            update={props.update}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  var [cards, setCards] = useState([]);

  const Add = (newFoodName, newCaloriesValues) => {
    if (newFoodName && newCaloriesValues) {
      setCards([
        ...cards,
        { name: newFoodName, val: newCaloriesValues, editing: false },
      ]);
    }
  };

  const Del = (deleteIndex) => {
    const newCards = cards.filter((el, index) => index !== deleteIndex);
    setCards(newCards);
  };

  const Edit = (index, name, calories) => {
    let updatedListItem = [...cards];

    if (updatedListItem[index].editing === false)
      updatedListItem[index].editing = true;
    else updatedListItem[index].editing = false;

    setCards(updatedListItem);
  };

  const Update = (index, name, calories) => {
    let updatedListItem = [...cards];
    updatedListItem[index].name = name;
    updatedListItem[index].val = calories;
    console.log("Updated");
    setCards(updatedListItem);
  };

  return (
    <div className="container">
      <Form add={Add} key="form" />
      <List cards={cards} del={Del} key="list" edit={Edit} update={Update} />
    </div>
  );
};

ReactDOM.render(<App key="app" />, document.getElementById("root"));
