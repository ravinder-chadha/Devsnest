const updateName = (e) => {
    return {
      type: "NAME",
      value: e.target.value,
    };
};

const updateEmail = (ev) => {
  return {
    type: "EMAIL",
    value: ev.target.value,
  };
};

export { updateName, updateEmail };