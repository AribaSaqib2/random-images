let btn = document.getElementById("btn");
let images = document.getElementById("images");
let apiUrl ="https://dog.ceo/api/breeds/image/random";

btn.onclick = ()=>{
    fetch(apiUrl,{
        headers :{
            Accept: 'application/json',
            'User-Agent': 'My Library'
        }
    }).then(
        (response)=>{
            return response.json();
        }
    ).then(
        (data)=>{
            images.innerHTML =`<li>  <img src="${data.message}"></li>`
        }
    )
}