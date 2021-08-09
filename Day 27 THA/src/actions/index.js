const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item,
    };
};

const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id,
    };
};

export { addItem, removeItem };

