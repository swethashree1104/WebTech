const api = "http://localhost:3000";
let page = 1;

function displayBooks(data){

    let html="";

    data.forEach(book=>{

        html += `
        <div class="book">

        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Category: ${book.category}</p>
        <p>Price: ₹${book.price}</p>
        <p>Rating: ${book.rating}</p>

        </div>
        `;
    });

    document.getElementById("books").innerHTML = html;
}


function searchBook(){

    const title = document.getElementById("searchTitle").value;

    fetch(api+"/books/search?title="+title)
    .then(res=>res.json())
    .then(data=>displayBooks(data));

}


function filterCategory(cat){

    fetch(api+"/books/category/"+cat)
    .then(res=>res.json())
    .then(data=>displayBooks(data));

}


function sortPrice(){

    fetch(api+"/books/sort/price")
    .then(res=>res.json())
    .then(data=>displayBooks(data));

}


function sortRating(){

    fetch(api+"/books/sort/rating")
    .then(res=>res.json())
    .then(data=>displayBooks(data));

}


function topBooks(){

    fetch(api+"/books/top")
    .then(res=>res.json())
    .then(data=>displayBooks(data));

}


function loadMore(){

    fetch(api+"/books?page="+page)
    .then(res=>res.json())
    .then(data=>{
        displayBooks(data);
        page++;
    });

}