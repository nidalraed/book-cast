var data = sessionStorage.getItem("userId");

if (data == null) {
    function render() {
        // Your rendering logic goes here
    }

    fetch("http://localhost:3000/list")
        .then(response => response.json())
        .then(data => {
            const list = data;
            list.forEach(item => {
                fetch(`http://localhost:3000/mydata/${item.bookid}`)
                    .then(response => response.json())
                    .then(data => {
                        let card = document.getElementById("cat");

                        // Create a new div element for each card
                        let newCard = document.createElement('article');
                        newCard.classList.add('swiper-item','card'); 
                        newCard.innerHTML = `
                        <img class="card-image"src="${product.image}"  id="${product.id}" onclick="re(this)">
                        </img>
                        <div class="card-header">
                            <a href="#">${product.title}</a><br><br>
                            <button class="icon-button" id="${product.id}" onclick="addlist(this)">
                  
                                <svg style="color: #0f294e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z" fill="blue"></path></svg>
                    
                            </button>
                        </div>
                        <div class="card-footer">
                            <p>Author: ${product.author}</p>
                  
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
                        `;

                        // Append the new card to the existing content
                        card.appendChild(newCard);
                    });
            });
        });
} else {
    alert("You are not registered yet");
}
