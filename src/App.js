import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {
    let [state, dispatch] = useReducer(reducer);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch('+')}>inc</button>
            <button onClick={() => dispatch('-')}>dec</button>
        </div>
    );
}


