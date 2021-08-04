const reducer2 = (stateEmail = "", action) => {
  if (action.type === "NAME") {
    console.log("haha");
  } else if (action.type === "EMAIL") {
    return stateEmail = action.value;
  }

  return stateEmail;
};

export default reducer2;
