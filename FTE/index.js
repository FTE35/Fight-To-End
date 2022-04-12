

let nav = document.getElementsByClassName("nav")[0];


/*
window.onscroll = function(){
  if(navTop == "0"){
    nav.style.backgroundColor = "none";
  }
  else{
    nav.style.backgroundColor = "red";
  }
}
*/

function scrolling(){
  let y = document.documentElement.scrollTop;
  if(y < 120){
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
  else{
    nav.style.backgroundColor = "rgb(3 0 27)";
    nav.style.boxShadow = "0px 0px 12px 6px rgb(3 0 27)";
  }
}





function openClose(){
  let nav_open_close = document.getElementById("nav_open_close");
  let nav_buttons = document.getElementById("nav_buttons");
  nav_open_close_class = nav_open_close.className;
  nav_buttons_class = nav_buttons.className;
  
  if(nav_open_close_class == "nav_open"){
    document.getElementById("nav_open_close").className = "nav_close";
    document.getElementById("nav_buttons").className = "nav_buttons_phone";
  }
  else if(nav_open_close_class == "nav_close"){
    document.getElementById("nav_open_close").className = "nav_open";
    document.getElementById("nav_buttons").className = "nav_buttons";
  }
}








