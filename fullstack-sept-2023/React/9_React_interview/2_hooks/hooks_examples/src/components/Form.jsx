import React, {useReducer} from "react";

let initalState = {
    firstName: "",
    lastName: "",
};
const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case "firstNameInput":
            return { 
                ...state,
                firstName: action.payload 
            }
        case "lastNameInput":
            return { 
                ...state,
                lastName: action.payload 
            }
        case "clear":
            return {
                ...state,
                firstName: "",
                lastName: "",
            }
        default:
            return state;
    }
}

function Form() {
// const [formState, setFormState] = useState(initalState);
// setFormState ==> dispatch

  const [formState, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <form>
        <input
          type="text"
          className="firstName"
          value={formState.firstName}
          onChange={(e) => {
            dispatch({ type: "firstNameInput", payload: e.target.value });
          }}
        />
        <input
          type="text"
          className="lastName"
          value={formState.lastName}
          onChange={(e) => {
            dispatch({ type: "lastNameInput", payload: e.target.value });
          }}
        />
        <button onClick={ (e) => { 
            e.preventDefault();
            dispatch({ type: "clear" }) }}>
                Reset all fileds
        </button>
      </form>
    </>
  );
}

export default Form;
