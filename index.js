// Cache DOM selections
const elements = {
    audio: document.getElementById('audio'),
    volumeRange: document.getElementById('range26'),
    mobileNotice: document.getElementById('mobile-notice'),
    enterScreen: document.getElementById('enter'),
    mainScreen: document.getElementById('main'),
    songTitle: document.getElementById('songTitle'),
    songTime: document.getElementById('songTime'),
    controls: {
        backward: document.getElementById('backward'),
        pause: document.getElementById('pause'),
        forward: document.getElementById('forward')
    },
    progressBar: document.querySelector('.progress-bar'),
    progressFill: document.querySelector('.progress-fill')
};

// Audio controller
const audioController = {
    currentTrack: 0,
    tracks: [
        { title: 'Dream World - TBOST', src: 'songs/Dream World.wav' },
        { title: 'Punk Angels - TBOST', src: 'songs/Punk angels .wav' }
    ],
    
    playTrack(index) {
        const { audio, songTitle } = elements;
        this.currentTrack = index;
        audio.src = this.tracks[index].src;
        songTitle.textContent = this.tracks[index].title;
        audio.play();
        this.updateProgress();
        elements.controls.pause.textContent = '▌▌';
    },
    
    updateProgress() {
        const { audio, songTime, progressFill } = elements;
        if (!audio) return;
        
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        songTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (progressFill && !isNaN(audio.duration)) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = `${progress}%`;
        }
    },
    
    togglePlay() {
        const { audio, controls } = elements;
        if (audio.paused) {
            audio.play();
            controls.pause.textContent = '▌▌';
        } else {
            audio.pause();
            controls.pause.textContent = '►';
        }
    },
    
    nextTrack() {
        const next = (this.currentTrack + 1) % this.tracks.length;
        this.playTrack(next);
    },
    
    previousTrack() {
        const prev = (this.currentTrack - 1 + this.tracks.length) % this.tracks.length;
        this.playTrack(prev);
    }
};

// Window management
const windowManager = {
    showPopup: (popupId) => {
        document.getElementById(popupId).style.display = "block";
    },
    
    hidePopup: (popupId) => {
        document.getElementById(popupId).style.display = "none";
    },
    
    togglePopup: (id) => {
        const popup = document.getElementById(id);
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    },
    
    initPopupListeners: () => {
        const popups = [
            ['PopUpK5', 'K5Close', 'K5OK'],
            ['PopUpFrawwd', 'FrawwdClose', 'FrawwdOK'],
            ['PopUpSix', 'SixClose', 'SixOK'],
            ['PopUpZix', 'ZixClose', 'ZixOK']
        ];

        popups.forEach(([popupId, closeClass, okClass]) => {
            document.querySelectorAll(`.${closeClass}, .${okClass}`).forEach(btn => {
                btn.addEventListener('click', () => windowManager.hidePopup(popupId));
            });
        });
    }
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
    const { audio, controls, progressBar, enterScreen, mainScreen, mobileNotice } = elements;
    
    // Initialize windows
    windowManager.initPopupListeners();
    
    // Initialize draggable
    $(".draggable").draggable({
        handle: ".title-bar",
        start: function() {
            $(this).css('transform', 'none');
        }
    });
    
    // Audio controls
    controls.backward?.addEventListener('click', () => audioController.previousTrack());
    controls.pause?.addEventListener('click', () => audioController.togglePlay());
    controls.forward?.addEventListener('click', () => audioController.nextTrack());
    
    // Progress bar
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = x / rect.width;
            if (audio && !isNaN(audio.duration)) {
                audio.currentTime = percentage * audio.duration;
                audioController.updateProgress();
            }
        });
    }
    
    // Time updates
    audio?.addEventListener('timeupdate', () => audioController.updateProgress());
    
    // Enter screen
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
});

// Export functions for HTML
window.showPopup = windowManager.showPopup;
window.hidePopup = windowManager.hidePopup;
window.togglePopup = windowManager.togglePopup;
  
