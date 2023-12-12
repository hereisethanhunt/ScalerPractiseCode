**Problem Statement** : `useState` in React is fantastic for managing state within components. However, when it comes to interacting with the DOM or dealing with certain scenarios like focusing on specific elements or storing mutable values without causing re-renders, `useRef` becomes very handy.
**Focus Management**:
    - When you're working with forms, you might want to control the focus of input fields dynamically. While `useState` helps you manage state changes in your form data, it doesn't directly handle focusing on specific elements within the DOM.
​
​
**How** `useRef` comes into play:
​
- **Creating a Reference**:
    - `useRef` allows you to create a reference to a DOM element or a mutable value that persists across renders. It's like a pointer to a specific piece of the DOM or a value that you want to keep track of without triggering re-renders.
```jsx
import React, { useRef } from 'react';
​
function MyForm() {
  const inputRef = useRef(null);
​
  const focusInput = () => {
    // Focus the input field when this function is called
    inputRef.current.focus();
  };
​
  return (
    <div>
      <h1>My Form</h1>
      <form>
        <label>
          Name:
          <input type="text" ref={inputRef} />
        </label>
      </form>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
​
export default MyForm;
​
```
​
​
Custom Hook : https://legacy.reactjs.org/docs/hooks-custom.html