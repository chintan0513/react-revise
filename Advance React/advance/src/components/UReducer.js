import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'buy-ingredients') return { money: state.money - 100 };
    if (action.type === 'sell_a_meal') return { money: state.money + 100 };
    if (action.type === 'celebrity_visit') return { money: state.money + 10000 };
}

const UReducer = () => {

    const initialState = { money: 1000 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Money: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({ type: 'buy-ingredients' })}>Shopping for Veggies!</button>
                <button onClick={() => dispatch({ type: 'sell_a_meal' })}>Shopping for Veggies!</button>
                <button onClick={() => dispatch({ type: 'celebrity_visit' })}>Shopping for Veggies!</button>
            </div>
        </div>
    );
}

export default UReducer;