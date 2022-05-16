let para = document.getElementById("book-info");
let numResults = 3;

function handleResponse(response){
    for(let i = 0; i < numResults; i++){
        let book = response.items[i];
        console.log(book.volumeInfo.title);
        para.innerHTML += "<br> <h3>TITLE:</h3> " + book.volumeInfo.title;
        para.innerHTML += "<br> <h3>AUTHOR:</h3> " + book.volumeInfo.authors;
        para.innerHTML += "<br> <h3>DESCRIPTION:</h3> " + book.volumeInfo.description;
        para.innerHTML += "<br>";
    }
}

const api_url = "https://www.googleapis.com/books/v1/volumes?q=";
let queries = "java&callback=handleResponse";

src = api_url + queries;