



let myPic=document.querySelector('img');

  myPic.onclick = function(){

  let src=myPic.getAttribute('src');

  if(src === 'images/2.png')
      {
        myPic.setAttribute('src','images/aka.png');
      }

  else
       myPic.setAttribute('src','images/2.png');
  }
