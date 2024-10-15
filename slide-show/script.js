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
// `https://api.opencagedata.com/geocode/v1/json?q=Frauenplan+1%2C+99423+Weimar%2C+Germany&key=1e5df825b2474cc788c4656020b983d9`
// `Example request for coordinates 52.3877830,9.7334394 

// https://api.opencagedata.com/geocode/v1/json?q=52.3877830%2C9.7334394&key=1e5df825b2474cc788c4656020b983d9`
// `You can use the following free APIs to convert a place name (geocoding) into coordinates:

// OpenCage Geocoding API:

// Offers up to 2,500 free requests per day.
// Supports reverse geocoding and forward geocoding.
// Easy to use and offers data in JSON format.
// Documentation: OpenCage API
// LocationIQ Geocoding API:

// Provides 5,000 free requests per day.
// Offers both forward and reverse geocoding.
// Documentation: LocationIQ API
// Positionstack API:

// Allows up to 25,000 free requests per month.
// Provides forward and reverse geocoding.
// Easy integration and returns data in JSON format.
// Documentation: Positionstack API
// Nominatim (OpenStreetMap):

// Free and open-source.
// Has rate limits, but no hard request limits.
// Ideal for non-commercial and smaller projects.
// Documentation: Nominatim API
// All these APIs are beginner-friendly and suitable for web development projects. Let me know if you need help with integrating any of them!











// ChatGPT`