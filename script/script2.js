'use sctrict'


const links=document.querySelectorAll('.links'),
      parentSelector=document.querySelector('.main__items'),
      allButtons=document.querySelectorAll('.main__button'),
      search=document.querySelector('.search'),
      viewButton=document.querySelector('.view__button');

function changeToHide(){
    if(viewButton.classList.contains('all')){
        viewButton.classList.remove('all');
        viewButton.classList.add('not__all');
        viewButton.innerHTML=`
        <p>View all</p>
        `
    }
}

function createAndAdd(item){
    const element = document.createElement('div');
                element.classList.add("main__items__item");
                if(item.price){
                    element.innerHTML += `
                    <img src="${item.src}" alt="${item.altimg}">
                    <p>${item.title}</p>
                    <p>${item.price} $</p>
                    `;
                    parentSelector.append(element);
                }else{
                    element.innerHTML += `
                    <img src="${item.src}" alt="${item.altimg}">
                    <p>${item.title}</p>
                    `;
                    parentSelector.append(element);
                }
}

const products=(sortParametr,urlGet)=>{
let allItems=sortParametr;

viewButton.addEventListener('click',()=>{
    if(viewButton.classList.contains('not__all')){
        viewButton.classList.remove('not__all');
        viewButton.classList.add('all');
        viewButton.innerHTML=`
             <p>Hide</p>
        `
        parentSelector.innerHTML='';
        logJSONDataProducts(urlGet);
    }else if(viewButton.classList.contains('all')){
        changeToHide();
        parentSelector.innerHTML='';
        logJSONDataProducts(urlGet);
    }
})



async function logJSONDataProducts(urlGet) {
    const response = await fetch(urlGet);
    const jsonData = await response.json();

    let searchValue;

    search.addEventListener('input',e=>{
        searchValue=e.target.value;
        parentSelector.innerHTML='';
    jsonData.filter(item=>item.category===allItems[0] || item.category===allItems[1] || item.category===allItems[2] || item.category===allItems[3])
    .filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .forEach(item=>{
        createAndAdd(item);
    })
    })

    if(viewButton.classList.contains('not__all')){
    jsonData.filter(item=>item.category===allItems[0] || item.category===allItems[1] || item.category===allItems[2] || item.category===allItems[3]).filter(item=>item.id<=6)
    .forEach(item=>{
         createAndAdd(item);
    })
    }else{
    jsonData.filter(item=>item.category===allItems[0] || item.category===allItems[1] || item.category===allItems[2] || item.category===allItems[3]).filter(item=>item.id<=10000)
    .forEach(item=>{
        createAndAdd(item);
    })
    }

}

logJSONDataProducts(urlGet);

allButtons.forEach(item=>{
    item.addEventListener('click',(e)=>{
        allButtons.forEach(item=>{
            item.classList.remove('active-button');
        })
        if(e.target.classList.contains('main__button')){
            e.target.classList.add('active-button');
            parentSelector.innerHTML='';
            if(e.target.getAttribute('data-category')==='all'){
                allItems=sortParametr;
                changeToHide();
                logJSONDataProducts(urlGet);
            }else{
                allItems=[e.target.getAttribute('data-category')];
                changeToHide();
                logJSONDataProducts(urlGet);
            }
        }else{
            e.target.parentNode.classList.add('active-button');
            parentSelector.innerHTML='';
            if(e.target.parentNode.getAttribute('data-category')==='all'){
                changeToHide();
                allItems=sortParametr;
                logJSONDataProducts(urlGet);
            }else{
                allItems=[e.target.parentNode.getAttribute('data-category')];
                changeToHide();
                logJSONDataProducts(urlGet);
            }
        }
    })
})
}

if(links[0].classList.contains('active-page')){
    products(['men','women','jewelery','electronics'],"http://localhost:3000/items")
}else if(links[1].classList.contains('active-page')){
    products(['NorthAmerica','Europe','Australia','SouthAmerica'],"http://localhost:3000/countries")
}else{
    products(['NorthAmerica','Europe','Australia','SouthAmerica'],"http://localhost:3000/users")
}

