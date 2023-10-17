let bookid=localStorage.getItem("id");

// review star function 
function star1() {
    document.getElementById("star1").classList.add = ("orange")
    document.getElementById("star2").style.color = ""
    document.getElementById("star3").style.color = ""
    document.getElementById("star4").style.color = ""
    document.getElementById("star5").style.color = ""
}
function star2() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = ""
    document.getElementById("star4").style.color = ""
    document.getElementById("star5").style.color = ""
}

function star3() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = "orange"
    document.getElementById("star4").style.color = ""
    document.getElementById("star5").style.color = ""
}
function star4() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = "orange"
    document.getElementById("star4").style.color = "orange"
    document.getElementById("star5").style.color = ""
}
function star5() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = "orange"
    document.getElementById("star4").style.color = "orange"
    document.getElementById("star5").style.color = "orange"
}
// end function 

// Detils book fatch function

function detels_book() {
   let id=bookid
   console.log(id);
    fetch(`http://localhost:3000/mydata/${id}`)
      .then(response => response.json())
      .then(data => {
          
      
  
          const cards = document.getElementById('details_hero');
        
              
              const card = document.createElement('div');
              card.classList.add('row'); 

            if (data.rate==1) {
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg" style=box-shadow: 10px 10px 5px #ccc;
                        -moz-box-shadow: 10px 10px 5px #ccc;
                        -webkit-box-shadow: 10px 10px 5px #ccc;
                        -khtml-box-shadow: 10px 10px 5px #ccc;">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                                
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star "  ></span>
        <span class="fa fa-star "  ></span>
        <span class="fa fa-star " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <i class="fa-solid fa-heart"  id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)" ></i>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;" onclick="downlode()">  Download  </button>
                        
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
            else if(data.rate==2){
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                               
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star  "  ></span>
        <span class="fa fa-star " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <i class="fa-solid fa-heart"  id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)" ></i>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);

            }
            else if (data.rate==3) {
                
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                               
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star checked "  ></span>
        <span class="fa fa-star " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <i class="fa-solid fa-heart"  id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)" ></i>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
            else if (data.rate==4) {
                
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                               
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star checked "  ></span>
        <span class="fa fa-star checked " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <i class="fa-solid fa-heart"  id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)" ></i>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
            else if (data.rate==5) {
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                                
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star checked "  ></span>
        <span class="fa fa-star checked" > </span>
        <span class="fa fa-star checked"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                      
                        <i class="fa-solid fa-heart"  id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)" ></i>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
             
          });
      }
  // end render 
 detels_book()
 renderboc()

 function renderboc() {
    fetch("http://localhost:3000/mydata")
      .then(response => response.json())
      .then(data => {
          const products = data;
      
  console.log(products);
          const cards = document.getElementById('card-slader');
          products.slice(0,4).map(product => {
            const card = document.createElement('article');
            card.classList.add("swiper-item","card")

               
              card.innerHTML = `
              
           
              <img class="card-image"src="${product.image}" id="${product.id}" onclick="rd(this)">
                    </img>
                    <div class="card-header">
                        <a href="#">${product.title}</a><br><br>
                        <button class="icon-button">
            <!-- Bookmark icon// Inline Style -->
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
             cards.appendChild(card);
          });
      })
  }
// review section 
// fetch("http://localhost:3000/users")
// .then(response => response.json())
//       .then(data => {
//           const userss=data;
//         sessionStorage.setItem('fullname',userss[userss.length-1].fullname) })


function addcom() {
    let comint = document.getElementById("commint").value;
    fetch("http://localhost:3000/users")
.then(response => response.json())
      .then(data => {
          const userss=data;
        sessionStorage.setItem('fullname',userss[userss.length-1].fullname) })
    // Assuming you have a proper class for the stars like "checked" for selected stars
    let rate =  document.querySelectorAll('[style*="color: orange"]').length;
    let data = sessionStorage.getItem("userId");
    let userName= sessionStorage.getItem("fullname");
    if (data!=null) {
        fetch("http://localhost:3000/commint", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "commint": comint,
                "bookid": 60,
                "rate": rate,
                "username": userName
            }),
            
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    
       const cards= document.getElementById('comrender')
        cards.innerHTML=``;
        render2();
    }
    else{
        alert("you not registered yet ");
    }
   
}

function render2() {
    fetch("http://localhost:3000/commint")
      .then(response => response.json())
      .then(data => {
        const products = data.map(item => ({
            commint: item.commint,
            rate: item.rate,
            id: item.id
          }));
      
  console.log(products);
  products.slice(0,4).map(product => {
          const cards = document.getElementById('comrender');
        
              
              const card = document.createElement('div');
             

              
             
              
              if (product.rate==1) {
                card.innerHTML = `
              
              
              <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
        
              <div class="d-flex justify-content-between align-items-center" style="border:none">

            <div class="user d-flex flex-row" >
              <div>
                  <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" style="max-width: 100px; max-height: 100px;" class="user-img rounded-circle">  
              </div>

              
              <div>
                  <div style="display: flex;flex-direction: row;">
                      <p class="font-weight-bold" style="margin-left: 10px;">  ${product.username} </p> 
                      <div style="margin-left: 10px;">
                          <span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
<span class="fa fa-star "></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
                      </div>
                      
                      
                  </div>
                  
                  
                  <P> ${product.commint} </P>
              </div>

              
                
            </div>

            <i class='far fa-edit' style='font-size:36px' id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"></i>
            <i class="fa fa-remove" style="font-size:36px" id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"></i>
           
          

            </div>


            
              
          </div>
              `;
              }
              else if (product.rate==2) {
                
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  ${product.username}  </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star "></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
              <i class='far fa-edit' style='font-size:36px' id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"></i>
              <i class="fa fa-remove" style="font-size:36px" id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"></i>
             

              </div>
  
  
              
                
            </div>
                `;
              }
              else if (product.rate==3) {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  ${product.username}  </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
              <i class='far fa-edit' style='font-size:36px' id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"></i>
              <i class="fa fa-remove" style="font-size:36px" id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"></i>
             
              </div>
  
  
              
                
            </div>
                `;
              }
              else if (product.rate==4) {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  ${product.username}  </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star  checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star "></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
              <i class='far fa-edit' style='font-size:36px' id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"></i>
              <i class="fa fa-remove" style="font-size:36px" id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"></i>
             
  
              </div>
  
  
              
                
            </div>
                `;
              }
              else if (product.rates==5) {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  ${product.username}  </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
              <i class='far fa-edit' style='font-size:36px' id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"></i>
              <i class="fa fa-remove" style="font-size:36px" id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"></i>
             
              </div>
  
  
              
                
            </div>
                `;
              }
              else {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  ${product.username}  </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
  
              <i class='far fa-edit' style='font-size:36px' id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"></i>
              <i class="fa fa-remove" style="font-size:36px" id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"></i>
             
              </div>
  
  
              
                
            </div>
                `;

              }
             
              cards.appendChild(card);
          });
      });
  }
  render2()
    

  function deleteItem(e) {
    const deletitem=e.id;
    let data = sessionStorage.getItem("userId");
    console.log(deletitem);
    if (data!=null) {
    fetch(`http://localhost:3000/commint/${deletitem}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
    })
    const cards= document.getElementById('comrender')
    cards.innerHTML=``;
    render2();
  }
  else{

    alert("you not registered yet ");
  }
}
  function updateitem(e) {
    let updateite =e.id;

    let data = sessionStorage.getItem("userId");
    let tt=document.getElementById("commint").value;
    let rate =  document.querySelectorAll('[style*="color: orange"]').length;
    if (data!=null) {
        fetch(`http://localhost:3000/commint/${updateite}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                "commint":tt,
                "rate":rate
            
            }),
    
            
        })
        const cards= document.getElementById('comrender')
    cards.innerHTML=``;
    render2();
    }
    else{
        alert("you not registered yet ");
    }
   
    
  }
  function addlist(e) {
   let bookid=e.id
   let data = sessionStorage.getItem("userId");
if (data!=null) {
    fetch(`http://localhost:3000/list`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
            "bookid": bookid,
            "userid":data
        }),
        
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

   
}
else{
    alert("you not registered yet ");
}
    
}
function rd(e) {
    let id=e.id
    localStorage.clear();
    localStorage.setItem("id",id);
    window.location.assign("../Html/details.html");
    
}