# Al-Quran Player

A beautiful, responsive web application for listening to Quranic recitations with a modern, user-friendly interface.

## Features

- **Complete Quran Collection**: Access all 114 Surahs of the Holy Quran
- **High-Quality Audio**: Crystal clear recitations by Mishari Rashid Al-Afasy
- **Intuitive Controls**: Play, pause, skip, and navigate between Surahs easily
- **Progress Tracking**: Visual progress bar with time display
- **Volume Control**: Adjust audio volume with a slider
- **Loop Function**: Repeat Surahs for memorization practice
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Elegant UI**: Clean, modern interface with smooth animations
- **Motivational Verses**: Dynamic display of inspirational Quranic verses with elegant fade-in/fade-out animations at the bottom of the player
- **Time and Date Display**: Real-time clock showing current time alongside both Gregorian and Hijri (Islamic) calendar dates

## Technologies Used

- HTML5
- CSS3 (with Flexbox for responsive layouts)
- JavaScript (ES6+)
- Font Awesome icons
- Web Audio API

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection to stream audio files

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/alquran-player.git
   ```

2. Navigate to the project directory:
   ```
   cd alquran-player
   ```

3. Open `index.html` in your browser or use a local server:
   ```
   # Using Python's built-in server
   python -m http.server
   ```

4. Access the application at `http://localhost:8000` (or the port specified by your server)

## Usage

1. Select a Surah from the dropdown menu
2. Use the play/pause button to control playback
3. Navigate between Surahs using the previous/next buttons
4. Adjust volume using the volume slider
5. Toggle loop mode by clicking the repeat button
6. Click anywhere on the progress bar to jump to a specific part of the recitation
7. Watch inspirational Quranic verses scroll at the bottom of the player
8. View the current time, Gregorian date, and Hijri date displayed in the header

## Customization

### Motivational Verses
The motivational verses displayed at the bottom of the player include a collection of 50 inspirational Quranic verses with elegant fade-in/fade-out transitions. These can be easily customized by modifying the `motivation-data.js` file. You can add, remove, or edit verses while maintaining the existing data structure format of verse text and reference.

## Credits

- **Recitations**: Mishari Rashid Al-Afasy
- **Audio Source**: MP3Quran.net
- **Icons**: Font Awesome

## License

This project is available for personal and educational use.

## Acknowledgments

- Thanks to all contributors who have helped improve this project
- Special thanks to the providers of the Quran recitation audio files
