function showPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
  }
  
  function hidePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }
  
  function togglePopup(id) {
    const popup = document.getElementById(id);
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }
  
  function addPopupListeners(popupId, closeBtnClass, okBtnClass) {
    document
      .querySelector(`button[class='${closeBtnClass}']`)
      .addEventListener("click", function () {
        hidePopup(popupId);
      });
    document
      .querySelector(`button[class='${okBtnClass}']`)
      .addEventListener("click", function () {
        hidePopup(popupId);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    addPopupListeners("PopUpK5", "K5Close", "K5OK");
    addPopupListeners("PopUpReiko", "ReikoClose", "ReikoOK");
    addPopupListeners("PopUpFrawwd", "FrawwdClose", "FrawwdOK");
    addPopupListeners("PopUpSix", "SixClose", "SixOK");
    addPopupListeners("PopUpZix", "ZixClose", "ZixOK");
    addPopupListeners("PopUpVayne", "VayneClose", "VayneOK");
    addPopupListeners("PopUpRandy", "RandyClose", "RandyOK");
    addPopupListeners("PopUpCrown", "CrownClose", "CrownOK");
  });
  
  let date = new Date();
  
  setInterval(function(){
      document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }, 1000);
  
  document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("audio");
    let range = document.getElementById("range26");
    range.addEventListener("input", function() {
      audio.volume = range.value / 50;
    });
  });
  
  if (window.matchMedia("(max-width: 767px)").matches) {
    console.log("This is a mobile device, the code will not run");
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      let button = document.querySelector('.start-button');
      let counter = 0;
      let desktop = document.querySelector('#desktop');
  
      button.addEventListener('click', function() {
        counter++;
        if (counter % 2 === 1) {
          desktop.style.backgroundImage = 'url(./images/22.png)';
        } else {
          desktop.style.backgroundImage = 'url(./images/girl.jpg)';
        }
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
  
    $(document).ready(function(){
      $('.window-action-button.main').click(function(){
          $('#enter').hide();
          $('#main').show();
          $('#audio')[0].play();
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
    }
  });
  
  
