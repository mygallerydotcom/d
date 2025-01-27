// Cache DOM selections
const audio = document.getElementById('audio');
const volumeRange = document.getElementById('range26');
const mobileNotice = document.getElementById('mobile-notice');
const enterScreen = document.getElementById('enter');
const mainScreen = document.getElementById('main');
const songTitle = document.getElementById('songTitle');
const songTime = document.getElementById('songTime');
const backwardBtn = document.getElementById('backward');
const pauseBtn = document.getElementById('pause');
const forwardBtn = document.getElementById('forward');

// Audio control
const audioController = {
  currentTrack: 0,
  tracks: [
    { title: 'Dream World - TBOST', src: 'songs/Dream World.wav' },
    { title: 'Punk Angels - TBOST', src: 'songs/Punk angels .wav' }
  ],
  
  playTrack(index) {
    this.currentTrack = index;
    audio.src = this.tracks[index].src;
    songTitle.textContent = this.tracks[index].title;
    audio.play();
  },
  
  nextTrack() {
    const next = (this.currentTrack + 1) % this.tracks.length;
    this.playTrack(next);
  },
  
  previousTrack() {
    const prev = (this.currentTrack - 1 + this.tracks.length) % this.tracks.length;
    this.playTrack(prev);
  },
  
  togglePlay() {
    if (audio.paused) {
      audio.play();
      pauseBtn.className = 'status-bar-field fa-solid fa-pause';
    } else {
      audio.pause();
      pauseBtn.className = 'status-bar-field fa-solid fa-play';
    }
  },
  
  updateTime() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    songTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
};

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
    ['PopUpFrawwd', 'FrawwdClose', 'FrawwdOK'],
    ['PopUpSix', 'SixClose', 'SixOK'],
    ['PopUpZix', 'ZixClose', 'ZixOK']
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
  
  // Audio controls
  backwardBtn?.addEventListener('click', () => audioController.previousTrack());
  pauseBtn?.addEventListener('click', () => audioController.togglePlay());
  forwardBtn?.addEventListener('click', () => audioController.nextTrack());
  
  audio?.addEventListener('timeupdate', () => audioController.updateTime());
  
  // Enter screen handling
  $('.window-action-button.main')?.click(() => {
    if (enterScreen && mainScreen && audio) {
      enterScreen.style.display = 'none';
      mainScreen.style.display = 'block';
      audioController.playTrack(0);
    }
  });
  
  // Mobile notice
  if (mobileNotice && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    mobileNotice.textContent = "(View on PC for a better experience)";
  }
  
  // Initialize draggable windows
  $(".draggable").draggable({
    handle: ".title-bar",
    start: function() {
      $(this).css('transform', 'none');
    }
  });
});

// Export functions used by HTML
window.showPopup = popupHandlers.showPopup;
window.hidePopup = popupHandlers.hidePopup;
window.togglePopup = popupHandlers.togglePopup;
  
