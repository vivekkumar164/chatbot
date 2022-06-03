

  const chatBody=document.querySelector('.chat');
  const textInput=document.querySelector('#input');
  
  
  // const send=document.querySelector('#chat-icon');
  // send.addEventListener('click',()=>renderUserMessage())

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
    setScrollPosition();
  }

  const setScrollPosition=()=>{
    chatBody.scrollTop=chatBody.scrollHeight
    // if(chatBody.scrollHeight > 0){
    //   window.setTimeout(() => {
    //     window.scrollBy(0,chatBody.scrollHeight);
    // }, 1000)
      //chatBody.offsetTop;
       //console.log('chatBody.scrollTop',chatBody.scrollTop);
      };
    

   
  