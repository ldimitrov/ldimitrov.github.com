var modal_init = function() {

  var modalMaskContact = document.getElementById("modal_mask_contact");
  var modalMaskAbout = document.getElementById("modal_mask_about");
  var modal_window_small  = document.getElementById("modal_window_small");
  var modal_window_big  = document.getElementById("modal_window_big");

  var openModalContact = function(e)
  {
    modalMaskContact.className = "overlay";
    modal_window_small.style.marginTop = (-modal_window_small.offsetHeight)/2 + "px";
    modal_window_small.style.marginLeft = (-modal_window_small.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var openModalAbout = function(e)
  {
    modalMaskAbout.className = "overlay";
    modal_window_big.style.marginTop = (-modal_window_big.offsetHeight)/2 + "px";
    modal_window_big.style.marginLeft = (-modal_window_big.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var closeModalContact = function(e)
  {
    modalMaskContact.className = "";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var closeModalAbout = function(e)
  {
    modalMaskAbout.className = "";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var clickHandler = function(e) {
    if(!e.target) e.target = e.srcElement;
    if(e.target.tagName == "DIV") {
      if(e.target.id != "modal_window") closeModalContact(e);
      if(e.target.id != "modal_window") closeModalAbout(e);
    }
  };

  var keyHandler = function(e) {
    if(e.keyCode == 27) closeModalContact(e);
    if(e.keyCode == 27) closeModalAbout(e);
  };

  if(document.addEventListener) {
    document.getElementById("modal_open_contact").addEventListener("click", openModalContact, false);
    document.getElementById("modal_close_contact").addEventListener("click", closeModalContact, false);
    document.getElementById("modal_open_about").addEventListener("click", openModalAbout, false);
    document.getElementById("modal_close_about").addEventListener("click", closeModalAbout, false);
    document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keyHandler, false);
  } else {
    document.getElementById("modal_open_contact").attachEvent("onclick", openModalContact);
    document.getElementById("modal_close_contact").attachEvent("onclick", closeModalContact);
    document.getElementById("modal_open_about").attachEvent("onclick", openModalAbout);
    document.getElementById("modal_close_about").attachEvent("onclick", closeModalAbout);
    document.attachEvent("onclick", clickHandler);
    document.attachEvent("onkeydown", keyHandler);
  }

};

if(document.addEventListener) {
  document.addEventListener("DOMContentLoaded", modal_init, false);
} else {
  window.attachEvent("onload", modal_init);
}
