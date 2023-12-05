# React component
* UI 
* Business logic
* state management
* event handler

# State management library

 *        a.) State management
 *                  *) set the state 
 *                  *) update of the state

 *          b.) If we have an given realife application 
 *              * 1000s of component
 *              * passing the props to required component
 *          c.) Problem with complex apps
 *              *  Individual state management
 *              * Prop drilling -> 1000s of component if there is common state then to send that state you will need to pass the props to the whole chain 
 *          d.) we can have a state Management Library
 *              * Central state managment
 *              * Avoid Prop Drilling
 * 

## Issues with normal state

* prop drilling
* business logic lies within component
* centralised place to handle api/states

## redux

* 3. Redux : 
*      *  Third Party JS library for state managment  (install it )
*      *  It gives you feature known as `store` -> where all the state are stored;
*      *  It also provide centralized state Managment with the help of a features know : slice where we can store/update/add our state.
* 4. Providing state to a component 
* 5. Also have extra features like middlewares where we can manipulate api response and then store it.
* 6. readability increase - clean code and separate logic space for separate scenarios.
* 7. Easier debugging as it is one way flow and also support timeline debugging.