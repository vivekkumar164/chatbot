

  const chatBody=document.querySelector('.chat-body');
  const textInput=document.querySelector('#input');
  const send=document.querySelector('#chat-icon');
  

  send.addEventListener('click',()=>renderUserMessage())

  textInput.addEventListener("keyup",(event)=>{
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
    setScrollPosition();
  }

  const setScrollPosition=()=>{
    
    if(chatBody.scrollHeight > 0) chatBody.scrollTop=chatBody.scrollHeight;
  }