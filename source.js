let results = document.getElementById("library");
let numResults = 3;

function handleResponse(response){
    for(let i = 0; i < numResults; i++){
        let book = response.items[i];
        console.log(book.volumeInfo.title);

        let para = document.createElement("p");
        para.innerHTML += "<h3>TITLE:</h3> " + book.volumeInfo.title;
        para.innerHTML += "<br> <h3>AUTHOR:</h3> " + book.volumeInfo.authors;
        para.innerHTML += "<br> <h3>DESCRIPTION:</h3> " + book.volumeInfo.description;
        let img = document.createElement("img");
        img.src = book.volumeInfo.imageLinks.thumbnail;

        let btn = document.createElement("button");
        btn.innerHTML = "Buy";
        btn.src = book.volumeInfo.buyLink;

        results.appendChild(img);
        results.appendChild(para);
        results.appendChild(btn);
    }
}