
        // setup
        const button = document.querySelector("button");
        const ul = document.querySelector("ul");
        const input = document.querySelector("input");
        // console.log("before");
        // listening for input
        button.addEventListener("click", cb);
        function cb() {
            // when you get the input
            console.log("Between");
            // create
            if (input.value) {
                const li = document.createElement("li");
                const value = input.value;
                li.innerText = value;
                ul.appendChild(li);
                input.value = "";
            }


        }
        console.log("after");

