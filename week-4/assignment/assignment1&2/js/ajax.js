// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
    // your code here
    let xhr = new XMLHttpRequest();
    let result;
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            result = JSON.parse(xhr.responseText);
            // console.log(result);
            callback(result);
        }
    };
    xhr.open('GET', src);
    xhr.send();

}
function render(data){
    // your code here.
    // console.log(data);
    data.forEach(item => {
        // console.log(item);
        let parentContainer = document.getElementById('parent');
        let divItem = document.createElement('div');
        divItem.className = 'divItem';

        let pName = document.createElement('h2');
        let name = document.createTextNode(item.name);
        pName.appendChild(name);
        divItem.appendChild(pName);

        let pPrice = document.createElement('p');
        pPrice.className = 'pPrice';
        let price = document.createTextNode(`$${item.price.toLocaleString()}`);
        pPrice.appendChild(price);
        divItem.appendChild(pPrice);

        let pDescription = document.createElement('p');
        let description = document.createTextNode(item.description);
        pDescription.appendChild(description); 
        divItem.appendChild(pDescription);

        parentContainer.appendChild(divItem);
    });
    
}
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function(response){
        render(response);
    }
); // you should get product information in JSON format and render data in the page