let books =[
    {title:"Clean Code", author:"Robert C. Martin", year:"2009",},
    {title:"Norwegian Wood", author:"Haruki Murakami", year:"1987"},
    {title:"The Da Vinci Code", author:"Dan Brown", year:"2003"},
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald", year:"1925"},
 ]
 
 books.forEach(book=>{
    console.log(book.title);
 });
 
 let authors = books.map(book=> book.author);
 
 authors.forEach(author=>{
    console.log(author);
 });
 
 let modernBooks = books.filter(book=> book.year > 2000)
 