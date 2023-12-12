# Testing
## Definition : 
    your code matches the required specification

## Types of Testing 
### Way to you test
* Manual testing 
* Automated testing




### Areas of testing
* Unit test : testing a smallest unit of the app -> component 

* functional test/integration test : how your multiple components behave in cohesion 
* End to end Testing -> how much closer your application is to the requirement 
* Stress testing 
* Peformance Testing 
* Security Testing 



### React : unit testing  
## Tech:(create-react-app) 
* JEST 
    * test runner : it finds and excutes all the tests
    * It also provides you feature of describe , test and expect
    * snapshot testing
    *  https://jestjs.io/

* React testing library
        * emulates Rendering
        * find element on that emulated UI
        * fire event

count.jsx --> count.test.jsx

--> jest will find count.test.jsx and run this, it will also provide some helper functions.

--> import count.jsx inside our count.test.jsx. and then RTL will render this count.jsx and create a VDOM. and now things like buttonclick, or div is present or not, or navigation to a new screen
all these can be tested on the VDOM.


### What is required to test a react component???
* initial UI -  Snapshot test
* initial State
* Update to that initial state   

### When to write a unit testcase(Recommendation)
* only those component which critical/complex

## TDD: Test driven Development (red-green)
`Usecase`: requirements are stable
* first write all the testcases -> write the component
* rfractor all your testcases -> optimize your component

you write a test case for a component in the beginning, this will fail.
you will create your component and make sure the test case written will pass.

