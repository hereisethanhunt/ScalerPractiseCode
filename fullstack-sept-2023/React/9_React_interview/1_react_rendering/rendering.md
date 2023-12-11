## How react Renders 


1. Intial Render: `[(CSR) + (SSR) == NEXTJS]`
React creates VDOM
* **VDOM** : virtual DOM : it is a in memory representation of orginal DOM of the browser.


2. Update few changes : update the state.
* React will create another VDOM and then it will compare with the previous virtual DOM.

<div></div>
html
|
body
|
div
<div><div></div></div>
html
|
body
|
div
|
div
<!-- diff -->
|
div

* This process of comparing our old VDOM with new virtual is Known as `Reconcilation`
* React uses an algorithm known `Diffing algorithm` to compare your Old VDOM with new VDOM.
* Time complexity of our Diffing Algorithm -> O(n)


3. Updating the Real DOM: 
*   It will be using those minimum set of changes and with those changes it is going to update your real dom 


## how reconcillation - 
* https://aw.club/global/en/blog/learn/react-js-dom-and-how-the-reconciliation-process-works