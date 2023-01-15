// gets quotes from the local array
function getCat() {
  let selected = document.getElementById('select').value;
  let quoteText = document.getElementById('blockquote');
  let quoteAuthor = document.getElementById('author');
  let cat = quotesArr.filter(quote => quote.category === selected);
  let rand = Math.floor(Math.random() * cat.length);
  quoteText.innerText = cat[rand].text;
    if (cat[rand].author === null) {
      quoteAuthor.innerText = "Anonymous";
    } else {
      quoteAuthor.innerText = cat[rand].author;
    };
  console.log(cat[rand]);
}
// gets quotes (without category) from a public API call
function showOne() {
  let rand = Math.floor(Math.random() * 999);
  let quoteText = document.getElementById('blockquote');
  let quoteAuthor = document.getElementById('author');
  // fetch.then promise syntax
  fetch('https://type.fit/api/quotes')
  .then(res => res.json())
  .then(data => {
    quoteText.innerText = data[rand].text;
    if (data[rand].author === null) {
      quoteAuthor.innerText = "Anonymous";
    } else {
      quoteAuthor.innerText = data[rand].author;
    }
    console.log(data[rand]);
  });
}

// gets category-less quotes from the API using alternative syntax
// async function showOne() {
//   let rand = Math.floor(Math.random() * 99);
//   let quoteText = document.getElementById('blockquote');
//   let quoteAuthor = document.getElementById('author');
//   // alternate promise syntax
//   let response = await fetch('https://type.fit/api/quotes');
//   let data = await response.json();
//   quoteText.innerText = data[rand].text;
//   if (data[rand].author === null) {
//     quoteAuthor.innerText = "Anonymous";
//   } else {
//     quoteAuthor.innerText = data[rand].author;
//   }
//   console.log(data[rand]);
// }