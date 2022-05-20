let results = document.getElementById("library");
let numResults = 3;

function handleResponse(response){
    for(let i = 0; i < numResults; i++){
        let book = response.items[i];
        console.log(book.volumeInfo.title);

        let para = document.createElement("p");
        para.innerHTML += "<h2>" + book.volumeInfo.title + "</h2>";
        para.innerHTML += "<br> <h3>AUTHOR:</h3> " + book.volumeInfo.authors;
        para.innerHTML += "<br> <h3>DESCRIPTION:</h3> " + book.volumeInfo.description;
        let img = document.createElement("img");
        img.src = book.volumeInfo.imageLinks.thumbnail;

        results.appendChild(img);
        results.appendChild(para);

        let btn = document.createElement("button");
        btn.innerHTML = "Buy";
        if(book.saleInfo.saleability == "FOR_SALE"){
            let a = document.createElement('a'); 
            let link = document.createTextNode("This is link");
            results.appendChild(link); 
            a.href = book.saleInfo.buyLink; 
            results.appendChild(a);
            //btn.href = (book.saleInfo.buyLink);
        }
        else{
            btn.disabled = true;
        }
        results.appendChild(btn);
    }
}