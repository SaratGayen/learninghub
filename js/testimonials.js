  //  const slides=document.querySelector(".slider").children;
  //  const indicatorImages=document.querySelector(".slider-indicator").children;

  //   for(let i=0; i<indicatorImages.length; i++){
  //   	indicatorImages[i].addEventListener("click",function(){
         
  //          for(let j=0; j<indicatorImages.length; j++){
  //            indicatorImages[j].classList.remove("active");
  //          }
  //           this.classList.add("active");
  //           const id=this.getAttribute("data-id");
  //          for(let j=0; j<slides.length; j++){
  //          	slides[j].classList.remove("active");
  //          }

  //           slides[id].classList.add("active");

  //   	})
  //   }
  const slides=document.querySelector(".sl").children;
  const indicatorImages=document.querySelector(".sli-indicator").children;

   for(let i=0; i<indicatorImages.length; i++){
     indicatorImages[i].addEventListener("click",function(){
        
          for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("ac");
          }
           this.classList.add("ac");
           const id=this.getAttribute("data-id");
          for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("ac");
          }

           slides[id].classList.add("ac");

     })
   }
