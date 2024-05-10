async function text() {
    const display = document.querySelector('#display')

    const ul = createDiv('ul',display)

    const response = await fetch("data.json")
    const data = await response.json()

    for(let i=0; i<data[0].exo1.length; i++) {
        createDiv('li',ul,data[0].exo1[i])
    }
}

async function agify() {
    const name=document.querySelector('#inputExo2').value

    const fetchName = (name) => {
        const country=document.querySelector('#inputCountry').value
        const apiKey = 'e05e4c5603c12b7eb9d1e101c88d3920'; // Votre clé d'API
    
        return fetch(`https://api.agify.io/?name=${name}&country_id=${country}&apikey=${apiKey}`);
    };

    fetchName(name)
        .then((response) => response.json())
        .then((json) => {
             exo2(json)
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
}

function exo2(data) {
    console.log(data)
    const display=document.querySelector('#display2')
    const ul=createDiv('ul',display)
    createDiv('li',ul,data.count)
    createDiv('li',ul,data.name)
    createDiv('li',ul,data.age)
}







// CREATE DIV
function createDiv(type,parent,content,className) {
    const newDiv=document.createElement(type);
    if (content!=null) {
      newDiv.innerHTML=content;
    }
    if (className!=null) {
      newDiv.classList.add(className);
    }
    parent.appendChild(newDiv);
    return newDiv;
  }

// SLEEP FUNCTION
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  