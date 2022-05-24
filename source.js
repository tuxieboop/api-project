let results = document.getElementById("library");
let numResults = 3;

function search(){
    let query = document.getElementById("searchbar").value;
    console.log(query);
    document.getElementById("query").innerHTML = query;
    query.replace(" ", "+");
    numResults = document.getElementById("num").value;
    let s = document.getElementById("api-script");
    s.src="https://www.googleapis.com/books/v1/volumes?q=" + query + "&callback=handleResponse";
    console.log(query);
    document.location.reload();
}

function handleResponse(response){
    for(let i = 0; i < numResults; i++){
        let book = response.items[i];

        let para = document.createElement("p");
        para.innerHTML += "<h2>" + book.volumeInfo.title + "</h2>";
        para.innerHTML += "<br> <h3>AUTHOR:</h3> " + book.volumeInfo.authors;
        para.innerHTML += "<br> <h3>DESCRIPTION:</h3> " + book.volumeInfo.description;
        let img = document.createElement("img");
        img.src = book.volumeInfo.imageLinks.thumbnail;

        results.appendChild(img);
        results.appendChild(para);

        let btn = document.createElement("button");
        if(book.saleInfo.saleability == "FOR_SALE"){
            let a = document.createElement('a'); 
            let link = document.createTextNode("Buy");
            a.appendChild(link); 
            a.href = book.saleInfo.buyLink;

            btn.appendChild(a);
        }
        else{
            btn.innerHTML = "Buy";
            btn.disabled = true;
        }
        results.appendChild(btn);
    }
}