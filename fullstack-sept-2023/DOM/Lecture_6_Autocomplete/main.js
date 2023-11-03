import getCountries from "./fetchData.js";
const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

const populateResponseStructure = (respArr) =>{

    suggestionBox.classList.remove('visible')
    if(respArr?.length > 0)
        suggestionBox.classList.add('visible')

    suggestionBox.innerHTML = '';
    
    const countryNames = respArr?.map(element => element.name.common);

    const frag = document.createDocumentFragment();
    for(let i=0; i< countryNames?.length; i++)
    {
        let li = document.createElement('li');
        li.textContent = countryNames[i];
        frag.appendChild(li);
    }
    suggestionBox.appendChild(frag);
    

}

// if interval b/w two subseqnet key press is more than delay then only i will call it again
function debounce(fn, delay = 1000) {
    let timerId;
    return function (...args) {
        if (timerId) { 
            clearTimeout(timerId)
        }
        timerId = setTimeout(function () {
            fn(...args);
        }, delay)
    }
}

const handleSuggestions = async (e) => {

    console.log(e.target.value);
    const keyword = e.target.value;
    const response = await getCountries(keyword);
    
    populateResponseStructure(response);
}

inputBox.addEventListener("input", debounce(handleSuggestions));


