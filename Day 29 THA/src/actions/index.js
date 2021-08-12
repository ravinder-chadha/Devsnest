const updatePlace = (place) => {
    return {
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData = (place) => {
    return (dispatch) => {
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=b02b0278db2646f19a7142812212707&q=${place}`
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: "UPDATE_PLACE_DATA",
                    payload: data,
                });
            });
    };
};

const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    };
};

export { updatePlace, updatePlaceData, toggleTheme };