document.addEventListener('DOMContentLoaded', () => {
    // Update date and time function
    function updateDateTime() {
        const now = new Date();
        
        // Update time
        const timeDisplay = document.getElementById('current-time-display');
        timeDisplay.textContent = now.toLocaleTimeString('en-US', {
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Update Gregorian date
        const gregorianDisplay = document.getElementById('gregorian-date');
        gregorianDisplay.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        
        // Convert to Hijri date
        const hijriDisplay = document.getElementById('hijri-date');
        hijriDisplay.textContent = now.toLocaleDateString('ar-SA-u-ca-islamic', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
    
    // Initialize date and time display
    updateDateTime();
    
    // Update date and time every second
    setInterval(updateDateTime, 1000);
    
    // Track the last displayed verse index to avoid repetition
    let lastVerseIndex = -1;
    
    // Display motivational verse with fade effect
    async function displayMotivationalVerse() {
        const motivationTextElement = document.getElementById('motivation-text');
        if (motivationTextElement && motivationalVerses && motivationalVerses.length > 0) {
            // Get a random verse from the array, ensuring it's not the same as the last one
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * motivationalVerses.length);
            } while (randomIndex === lastVerseIndex && motivationalVerses.length > 1);
            
            // Update the last verse index
            lastVerseIndex = randomIndex;
            const verse = motivationalVerses[randomIndex];
            
            // Format and display the verse
            motivationTextElement.innerHTML = `${verse.verse} <span style="font-weight: bold;">— ${verse.reference}</span>`;
        }
    }
    
    // Initialize motivational verse display
    displayMotivationalVerse();
    
    // Change verse every 10 seconds (matching the CSS animation duration)
    setInterval(displayMotivationalVerse, 10000);
    
    // Initialize view counter
    let viewCount = localStorage.getItem('alquranPlayerViews') || 0;
    viewCount = parseInt(viewCount) + 1;
    localStorage.setItem('alquranPlayerViews', viewCount);
    
    // Update view count in footer
    const viewCountDisplay = document.createElement('span');
    viewCountDisplay.textContent = `Views: ${viewCount} | `;
    document.querySelector('footer p').prepend(viewCountDisplay);
    // DOM Elements
    const surahSelect = document.getElementById('surah-select');
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const loopBtn = document.getElementById('loop-btn');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume');
    const trackName = document.getElementById('track-name');
    const progressBar = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    
    // Variables
    let currentSurahIndex = -1;
    let isPlaying = false;
    let isLooping = false;
    
    // Initialize the player
    function initPlayer() {
        // Populate surah dropdown
        quranData.surahs.forEach(surah => {
            const option = document.createElement('option');
            option.value = surah.id;
            option.textContent = surah.name;
            surahSelect.appendChild(option);
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
    
    // Load and play a surah
    function loadSurah(surahId) {
        const surah = quranData.surahs.find(s => s.id === parseInt(surahId));
        if (surah) {
            currentSurahIndex = quranData.surahs.indexOf(surah);
            audioPlayer.src = surah.url;
            trackName.textContent = surah.name;
            playBtn.disabled = false;
            prevBtn.disabled = currentSurahIndex === 0;
            nextBtn.disabled = currentSurahIndex === quranData.surahs.length - 1;
            
            // Play automatically when a new surah is loaded
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
    
    // Play previous track
    function playPrevious() {
        if (currentSurahIndex > 0) {
            loadSurah(quranData.surahs[currentSurahIndex - 1].id);
        }
    }
    
    // Play next track
    function playNext() {
        if (currentSurahIndex < quranData.surahs.length - 1) {
            loadSurah(quranData.surahs[currentSurahIndex + 1].id);
        }
    }
    
    // Event listeners
    surahSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            loadSurah(e.target.value);
        }
    });
    
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    
    loopBtn.addEventListener('click', () => {
        isLooping = !isLooping;
        audioPlayer.loop = isLooping;
        loopBtn.classList.toggle('active');
        const loopIcon = loopBtn.querySelector('i');
        loopIcon.style.color = isLooping ? '#3498db' : '#2c3e50';
    });
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });
    
    progressContainer.addEventListener('click', setProgress);
    
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
        updateVolumeIcon();
    });
    
    volumeBtn.addEventListener('click', () => {
        if (audioPlayer.volume === 0) {
            audioPlayer.volume = volumeSlider.value;
        } else {
            audioPlayer.volume = 0;
        }
        updateVolumeIcon();
    });
    
    // Initialize the player
    initPlayer();
});
