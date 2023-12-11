

const obj =
{
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { 
                                        children: props.counter + " Clicks" 
                                    }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}

element=><div class="abcd">
    i am
    <button></button>
</div>

// can you create VDOM structure of below html code

function render(obj) {
    let element;
    if(typeof obj.type === 'string'){
       element = document.createElement(obj.type)
    }
    if(typeof obj.type === 'function'){
        let params = obj.props;
        let obj1 = obj.type(params);
        console.log(obj1,"hi")
        // const childElements = render(obj1);
        // console.log(childElements);
        //element = document.createElement(obj.type)
        // element.appendChild(childElements);
        return render(obj1)
    }

    let props = obj.props;
    for(let prop in props) {
        if(prop === 'children'){
            let arr = props[prop];
            if(Array.isArray(arr)) {
                for(let i=0; i<arr.length; i++){
                  
                    if(typeof arr[i] === "string"){
                        let textNode = document.createTextNode(arr[i]);
                        element.appendChild(textNode);
                    }
                    else {
                        const childElements = render(arr[i]);
                        element.appendChild(childElements);
                    }
                }
            
            }
            else {
                let textNode = document.createTextNode(props[prop]);
                element.appendChild(textNode);
            }
        } 
        else if(typeof props[prop] === "string"){
            element.setAttribute(prop,props[prop])
        }
    }

    return element
}

document.addEventListener("DOMContentLoaded", function () {
    const rootElem = document.querySelector("#root");
    const wholeApp = render(obj);
    console.log("whole app", wholeApp);
    // rootElem.appendChild(wholeApp);
})



// `<div class="container">
//     <h1>this is</h1>
//     <p class="paragraph">
//         I am
//         <button>1 Clicks</button>
//         from
//     </p>
// </div>`


