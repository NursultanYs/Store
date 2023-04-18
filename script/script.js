'use strict';

const links=document.querySelectorAll('.links');

const parentSelector=document.querySelector('.main__items'),
      all=document.querySelector('.main__buttons__all'),
      men=document.querySelector('.main__buttons__men'),
      jewelery=document.querySelector('.main__buttons__jewelery'),
      electronics=document.querySelector('.main__buttons__electronics'),
      women=document.querySelector('.main__buttons__women'),
      buttons=document.querySelectorAll('.main__button');

let filter=['men','women','jewelery','electronics'];

if(links[0].classList.contains('active-page')){
    async function logJSONDataProducts() {
        const response = await fetch("http://localhost:3000/items");
        const jsonData = await response.json();
        parentSelector.innerHTML='';
    
        console.log(jsonData);
        jsonData.forEach(({src, altimg, title, price,category})=>{
    
        if(all.classList.contains('active-button')){
        const element = document.createElement('div');
        element.classList.add("main__items__item");
        console.log(src, altimg, title, price);
        element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                <p>${price} $</p>
        `;
        console.log(category);
        parentSelector.append(element);
        }else if(men.classList.contains('active-button')){
            if(category==='men'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                <p>${price} $</p>
                `;
                parentSelector.append(element);
            }
        }else if(jewelery.classList.contains('active-button')){
            if(category==='jewelery'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                <p>${price} $</p>
                `;
                parentSelector.append(element);
            }
        }else if(electronics.classList.contains('active-button')){
            if(category==='electronics'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                <p>${price} $</p>
                `;
                parentSelector.append(element);
            }
        }else if(women.classList.contains('active-button')){
            if(category==='women'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                <p>${price} $</p>
                `;
                parentSelector.append(element);
            }
        }
    })  
    }
    
    
    logJSONDataProducts();
    
    buttons.forEach(item=>{
        item.addEventListener(('click'),e=>{
            buttons.forEach(item=>{
                item.classList.remove('active-button');
            })
            if(e.target.classList.contains('main__button')){
                e.target.classList.add('active-button');
            }else{
                e.target.parentNode.classList.add('active-button');
            }
    
            logJSONDataProducts();
        })
    })
}



if(links[1].classList.contains('active-page')){
    async function logJSONDataCountries() {
        const response = await fetch(" http://localhost:3000/countries");
        const jsonData = await response.json();
        parentSelector.innerHTML='';
    
        console.log(jsonData);
        jsonData.forEach(({src, altimg, title,category})=>{
    
        if(all.classList.contains('active-button')){
        const element = document.createElement('div');
        element.classList.add("main__items__item");
        console.log(src, altimg, title);
        element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
        `;
        parentSelector.append(element);
        }else if(men.classList.contains('active-button')){
            if(category==='NorthAmerica'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }else if(jewelery.classList.contains('active-button')){
            if(category==='SouthAmerica'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }else if(electronics.classList.contains('active-button')){
            if(category==='Europe'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }else if(women.classList.contains('active-button')){
            if(category==='Australia'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }
    })  
    }

    logJSONDataCountries();

    buttons.forEach(item=>{
        item.addEventListener(('click'),e=>{
            buttons.forEach(item=>{
                item.classList.remove('active-button');
            })
            if(e.target.classList.contains('main__button')){
                e.target.classList.add('active-button');
            }else{
                e.target.parentNode.classList.add('active-button');
            }
    
            logJSONDataCountries();
        })
    })
}


if(links[2].classList.contains('active-page')){
    async function logJSONDataCountries() {
        const response = await fetch(" http://localhost:3000/users");
        const jsonData = await response.json();
        parentSelector.innerHTML='';
    
        console.log(jsonData);
        jsonData.forEach(({src, altimg, title,category})=>{
    
        if(all.classList.contains('active-button')){
        const element = document.createElement('div');
        element.classList.add("main__items__item");
        console.log(src, altimg, title);
        element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
        `;
        console.log(category);
        parentSelector.append(element);
        }else if(men.classList.contains('active-button')){
            if(category==='NorthAmerica'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }else if(jewelery.classList.contains('active-button')){
            if(category==='SouthAmerica'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }else if(electronics.classList.contains('active-button')){
            if(category==='Europe'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }else if(women.classList.contains('active-button')){
            if(category==='Australia'){
                const element = document.createElement('div');
                element.classList.add("main__items__item");
                element.innerHTML += `
                <img src="${src}" alt="${altimg}">
                <p>${title}</p>
                `;
                parentSelector.append(element);
            }
        }
    })  
    }

    logJSONDataCountries();

    buttons.forEach(item=>{
        item.addEventListener(('click'),e=>{
            buttons.forEach(item=>{
                item.classList.remove('active-button');
            })
            if(e.target.classList.contains('main__button')){
                e.target.classList.add('active-button');
            }else{
                e.target.parentNode.classList.add('active-button');
            }
    
            logJSONDataCountries();
        })
    })
}