const reducer = (stateName = '',action) => {
    if (action.type === "NAME") {
        return stateName = action.value;
    } else if (action.type === "EMAIL") {
        console.log("haha");
    }

    return stateName;
};

export default reducer;