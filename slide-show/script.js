let slideIndex=1
function showSlide(){
  const totalImage=document.querySelectorAll(".image-slide").length
  console.log(totalImage)
  const slides=document.querySelector(".slides")
  if (slideIndex==totalImage){
    slideIndex=0
  }  

  slides.style.transform=`translate(${-slideIndex*100}%)`
  slideIndex++

}
setInterval(showSlide,3000)












