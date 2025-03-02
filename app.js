document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const juzukSelect = document.getElementById('juzuk-select');
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume');
    const trackName = document.getElementById('track-name');
    const progressBar = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    
    // Variables
    let currentJuzukIndex = -1;
    let isPlaying = false;
    
    // Initialize the player
    function initPlayer() {
        // Populate juzuk dropdown
        quranData.juzuks.forEach(juzuk => {
            const option = document.createElement('option');
            option.value = juzuk.id;
            option.textContent = juzuk.name;
            juzukSelect.appendChild(option);
        });
        
        // Set initial volume
        audioPlayer.volume = volumeSlider.value;
        
        // Update volume icon based on current volume
        updateVolumeIcon();
    }
    
    // Format time in MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    // Update progress bar
    function updateProgress() {
        if (audioPlayer.duration) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        }
    }
    
    // Set progress bar on click
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    }
    
    // Update volume icon based on current volume
    function updateVolumeIcon() {
        const volumeIcon = volumeBtn.querySelector('i');
        if (audioPlayer.volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (audioPlayer.volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    }
    
    // Load and play a juzuk
    function loadJuzuk(juzukId) {
        const juzuk = quranData.juzuks.find(j => j.id === parseInt(juzukId));
        if (juzuk) {
            currentJuzukIndex = quranData.juzuks.indexOf(juzuk);
            audioPlayer.src = juzuk.url;
            trackName.textContent = juzuk.name;
            playBtn.disabled = false;
            prevBtn.disabled = currentJuzukIndex === 0;
            nextBtn.disabled = currentJuzukIndex === quranData.juzuks.length - 1;
            
            // Play automatically when a new juzuk is loaded
            playAudio();
        }
    }
    
    // Play/Pause audio
    function togglePlay() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    }
    
    // Play audio
    function playAudio() {
        audioPlayer.play();
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    
    // Pause audio
    function pauseAudio() {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
    
    // Play previous juzuk
    function playPrevious() {
        if (currentJuzukIndex > 0) {
            loadJuzuk(quranData.juzuks[currentJuzukIndex - 1].id);
        }
    }
    
    // Play next juzuk
    function playNext() {
        if (currentJuzukIndex < quranData.juzuks.length - 1) {
            loadJuzuk(quranData.juzuks[currentJuzukIndex + 1].id);
        }
    }
    
    // Toggle mute
    function toggleMute() {
        if (audioPlayer.volume === 0) {
            audioPlayer.volume = volumeSlider.value;
        } else {
            audioPlayer.volume = 0;
        }
        updateVolumeIcon();
    }
    
    // Event Listeners
    juzukSelect.addEventListener('change', () => {
        if (juzukSelect.value) {
            loadJuzuk(juzukSelect.value);
        } else {
            pauseAudio();
            audioPlayer.src = '';
            trackName.textContent = 'Select a Juzuk to play';
            playBtn.disabled = true;
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        }
    });
    
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    volumeBtn.addEventListener('click', toggleMute);
    
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
        updateVolumeIcon();
    });
    
    progressContainer.addEventListener('click', setProgress);
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });
    
    audioPlayer.addEventListener('ended', () => {
        pauseAudio();
        audioPlayer.currentTime = 0;
        progressBar.style.width = '0%';
        
        // Auto-play next juzuk if available
        if (currentJuzukIndex < quranData.juzuks.length - 1) {
            playNext();
        }
    });
    
    // Initialize the player
    initPlayer();
});