// Nav Bar Profile icon appearence 

// if (isUserLoggedIn()) {
//     // User is logged in, hide the button
//     document.getElementById("navbar_container-profile").style.display = "none";
//   } else {
//     // User is not logged in, show the button
//     document.getElementById("navbar_container-profile").style.display = "block";
//     document.getElementById("navbar_container-signinup").style.display = "none";
//   }

  if(sessionStorage.getItem('searchInput') !== null ){
  
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = sessionStorage.getItem('searchInput') ;
    console.log(searchInput);
  
    // Fetch data and display based on the search input
    fetchBooks(searchInput);
  });
  
  function fetchBooks(searchInput) {
    const bookList = document.getElementById('cat');
  
    fetch('http://localhost:3000/mydata')
      .then(response => response.json())
      .then(data => {
        // Filter books based on search input
        const filteredBooks = data.filter(book =>
          book.title.toLowerCase().includes(searchInput) ||
          book.author.toLowerCase().includes(searchInput)
        );
  
        // Update the HTML
        bookList.innerHTML = '';
        filteredBooks.forEach(book => {
          const li = document.createElement('div');
          // li.textContent = `${book.title} by ${book.author}`;
          li.innerHTML=`<article class="swiper-item card">
          <!-- Image Source -->
                  <img class="card-image"src="${book.image}" height="280rem" width="200rem">
                
                  <div class="card-header">
                      <a href="#">${book.title}</a><br><br>
                      <button class="icon-button">
          <!-- Bookmark icon// Inline Style -->
                          <svg style="color: #0f294e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z" fill="blue"></path></svg>
              
                      </button>
                  </div>
                  <div class="card-footer">
                      <p>Author: ${book.author}</p>
          
                      <fieldset class="rating">
                          <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                          <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                          <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                          <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                          <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                          <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                          <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                          <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                          <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                          <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                      </fieldset>
                      
                  </div>
              </article>`
          bookList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  } }


  if(sessionStorage.getItem('category') !== null ){

  document.addEventListener('DOMContentLoaded', function () {
    const category = sessionStorage.getItem('category') ;
    
  
    // Fetch data and display based on the search input
    fetchBooks(category);
  });
  
  function fetchBooks(category) {
    const bookList = document.getElementById('cat');
  
    fetch('http://localhost:3000/mydata')
      .then(response => response.json())
      .then(data => {
        // Filter books based on search input
        const filteredBooks = data.filter(book =>
          book.category.toLowerCase().includes(category) 
        );
  
        // Update the HTML
        bookList.innerHTML = '';
        filteredBooks.forEach(book => {
          const li = document.createElement('div');
          // li.textContent = `${book.title} by ${book.author}`;
          li.innerHTML=`<article class="swiper-item card">
          <!-- Image Source -->
                  <img class="card-image"src="${book.image}" height="400rem" width="50rem">
                
                  <div class="card-header">
                      <a href="#">${book.title}</a><br><br>
                      <button class="icon-button">
          <!-- Bookmark icon// Inline Style -->
                          <svg style="color: #0f294e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z" fill="blue"></path></svg>
              
                      </button>
                  </div>
                  <div class="card-footer">
                      <p>Author: ${book.author}</p>
          
                      <fieldset class="rating">
                          <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                          <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                          <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                          <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                          <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                          <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                          <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                          <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                          <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                          <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                      </fieldset>
                      
                  </div>
              </article>`
          bookList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  } }