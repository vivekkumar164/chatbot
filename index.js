//const obj = require("./response");

// import('./response')
  const chatBody=document.querySelector('.chat');
  const textInput=document.querySelector('#input');
  const contacts=document.querySelector('.contacts');
  
  
  // const send=document.querySelector('#chat-icon');
  // send.addEventListener('click',()=>renderUserMessage())

  //to render dynamic list
  window.onload = function(){
    renderContacts(obj);
  }

  function renderContacts(list){
     list.map(e=>{
    console.log(e);
    //let name=
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
    //console.log(obj);
    return responseObj[userInput] === undefined ? 'Please try somthing else':responseObj[userInput];
  }

  renderBotResponse=(userInput)=>{
    const res= getBotResponse(userInput);
    renderMessageEle(res);
    
  }



   
  