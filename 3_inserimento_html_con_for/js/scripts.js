// const ul = document.getElementById("seavessiunidlomettereiqui");
const ul = document.querySelector("ul.list");
// const ul = document.querySelector("ul");
 
for (let index = 0; index < 10; index++) {
    // const element = `<li class="box box-${index}">${index}</li>`;
    // ul.innerHTML += element;
    
    //oppure cosa possiamo utilizzare per aggiungere elementi al DOM?
    const newLi = document.createElement('li');
    console.log('newLi', newLi, typeof newLi);
    newLi.innerHTML = `${index}`;
    newLi.className = `box box-${index}`;
    ul.append(newLi);
}