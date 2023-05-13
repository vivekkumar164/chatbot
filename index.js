//const obj = require("./response");

// import('./response')
  const chatBody=document.querySelector('.chat');
  const textInput=document.querySelector('#input');
  const contacts=document.querySelector('.contacts');
  
  
  // const send=document.querySelector('#chat-icon');
  // send.addEventListener('click',()=>renderUserMessage())

  //to render dynamic list
  window.onload = function(){
    renderContacts(contactList);
  }

  function renderContacts(list){
     list.map(e=>{
    createContacts(e);
  })
  }
 

  textInput.addEventListener("keyup",(event)=>{
    console.log(event.target.value);
    if(event.keyCode === 13){
      renderUserMessage();
    }
  })
  const renderUserMessage=()=>{
    const userInput=textInput.value;
    renderMessageEle(userInput,'user');
    textInput.value="";

    setTimeout(()=>{
      renderBotResponse(userInput);
      setScrollPosition();
    },600)
    
   
     
  }

  const renderMessageEle=(txt,type)=>{
    let className="user-message";

    if(type !== 'user'){
      className='Bot-Message'
    }

    const msgElement=document.createElement('div');
    const txtNode=document.createTextNode(txt);

    msgElement.classList.add(className);
    msgElement.append(txtNode);
    chatBody.append(msgElement);
  }


  const getBotResponse=(userInput)=>{
    return responseObj[userInput] === undefined ? 'Please try somthing else':responseObj[userInput];
  }

  renderBotResponse=(userInput)=>{
    const res= getBotResponse(userInput);
    renderMessageEle(res);
    
  }

  createContacts=(item)=>{
    //contacct row
      const contact = document.createElement('div');
      contact.classList.add("contactRow");
      contacts.appendChild(contact);
      

      //images
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("selectedUserImage");

      const contactImage = document.createElement("span");
      const image = document.createElement("img");
      image.src = item.imageUrl;
      image.classList.add("cover")

      contact.appendChild(imageDiv)
      imageDiv.appendChild(contactImage);
      contactImage.appendChild(image);

    //bolck 2 configurations

    const block2 = document.createElement("div");
    block2.classList.add("block2");
    contact.appendChild(block2);

    const block3 = document.createElement("div");
    block3.classList.add("block3");

    const name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = item.name;

    const time = document.createElement("div");
    time.classList.add("time");
    time.innerHTML = item.time;

    const block4 = document.createElement("div");
    block4.classList.add("block4");
    block4.innerHTML = item.message;

    block2.appendChild(block3);
    block2.appendChild(block4);
    block3.appendChild(name);
    block3.appendChild(time);
    

  }

  // A little delay
let typingTimer;        
let typeInterval = 500; // Half a second
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(liveSearch, typeInterval);
});

function liveSearch() {
  // Locate the card elements
  let cards = document.querySelectorAll('.contactRow')
  // Locate the search input
  let search_query = document.getElementById("searchbox").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if(cards[i].innerText.toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        // ...remove the `.is-hidden` class.
        cards[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("is-hidden");
    }
  }
}



   
  