// Cache DOM selections
const audio = document.getElementById('audio');
const volumeRange = document.getElementById('range26');
const mobileNotice = document.getElementById('mobile-notice');
const enterScreen = document.getElementById('enter');
const mainScreen = document.getElementById('main');

// Popup handling
const popupHandlers = {
  showPopup: (popupId) => {
    document.getElementById(popupId).style.display = "block";
  },
  
  hidePopup: (popupId) => {
    document.getElementById(popupId).style.display = "none";
  },
  
  togglePopup: (id) => {
    const popup = document.getElementById(id);
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  }
};

// Initialize popup listeners
const initPopupListeners = () => {
  const popups = [
    ['PopUpK5', 'K5Close', 'K5OK'],
    ['PopUpReiko', 'ReikoClose', 'ReikoOK'],
    ['PopUpFrawwd', 'FrawwdClose', 'FrawwdOK'],
    ['PopUpSix', 'SixClose', 'SixOK'],
    ['PopUpZix', 'ZixClose', 'ZixOK'],
    ['PopUpVayne', 'VayneClose', 'VayneOK'],
    ['PopUpRandy', 'RandyClose', 'RandyOK'],
    ['PopUpCrown', 'CrownClose', 'CrownOK']
  ];

  popups.forEach(([popupId, closeClass, okClass]) => {
    const closeBtns = document.querySelectorAll(`.${closeClass}, .${okClass}`);
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => popupHandlers.hidePopup(popupId));
    });
  });
};

// Time update optimization
const updateTime = () => {
  const timeElement = document.querySelector('.time');
  if (!timeElement) return;
  
  const updateClock = () => {
    const date = new Date();
    timeElement.textContent = date.toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    });
  };
  
  updateClock();
  setInterval(updateClock, 1000);
};

// Desktop background toggle (desktop only)
const initDesktopBackground = () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    const button = document.querySelector('.start-button');
    const desktop = document.querySelector('#desktop');
    let isAlternate = false;

    button?.addEventListener('click', () => {
      isAlternate = !isAlternate;
      desktop.style.backgroundImage = `url(./images/${isAlternate ? '22.png' : 'girl.jpg'})`;
    });
  }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initPopupListeners();
  updateTime();
  initDesktopBackground();
  
  // Volume control
  volumeRange?.addEventListener('input', (e) => {
    if (audio) audio.volume = e.target.value / 50;
  });
  
  // Enter screen handling
  $('.window-action-button.main')?.click(() => {
    if (enterScreen && mainScreen && audio) {
      enterScreen.style.display = 'none';
      mainScreen.style.display = 'block';
      audio.play();
    }
  });
  
  // Mobile notice
  if (mobileNotice && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    mobileNotice.textContent = "(View on PC for a better experience)";
  }
});

// Export functions used by HTML
window.showPopup = popupHandlers.showPopup;
window.hidePopup = popupHandlers.hidePopup;
window.togglePopup = popupHandlers.togglePopup;
  
