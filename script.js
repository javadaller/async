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
        
    
        return fetch(`https://api.agify.io/?name=${name}&country_id=${country}`);
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


async function randomQuote() {
  const display=document.querySelector('#display3')
  display.innerHTML=''
  const loader=document.querySelector('.loader')
  loader.style.display='block'
  const fetchName = () => {
    return fetch('https://thatsthespir.it/api');
  };

  fetchName()
    .then((response) => response.json())
    .then((json) => {
         exo3(json)
    })
    .catch((error) => {
        console.log("There was an error!", error);
    });
}

async function exo3(data) {
  await sleep(1200)
  console.log(data)
  const display=document.querySelector('#display3')
  

  const quote=createDiv('p',display,'"'+data.quote+'"','quote')
  const author=createDiv('p',display,data.author,'author')
  const photo=createDiv('img',display,null,'photo')
  photo.src=data.photo
  photo.alt='no image for this author'

  const loader=document.querySelector('.loader')
  loader.style.display='none'
}

randomQuote()


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
  