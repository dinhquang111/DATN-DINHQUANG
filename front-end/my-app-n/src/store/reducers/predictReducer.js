const initialState = {
    price: 0,
}

const predictReducers = (state = initialState, action) => {
    switch (action.type) {
        case "PREDICT_SUCCESS":
            return {
                price: action.data.price,
                // price:1000
            }
        default:
            return state;
    }

}

export { predictReducers }