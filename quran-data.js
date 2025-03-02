// Quran data organized by Juzuk (1-30)
const quranData = {
    juzuks: [
        {
            id: 1,
            name: "Juzuk 1 (Al-Fatihah - Al-Baqarah)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/001.mp3"
        },
        {
            id: 2,
            name: "Juzuk 2 (Al-Baqarah)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/002.mp3"
        },
        {
            id: 3,
            name: "Juzuk 3 (Al-Baqarah - Ali 'Imran)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/003.mp3"
        },
        {
            id: 4,
            name: "Juzuk 4 (Ali 'Imran - An-Nisa)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/004.mp3"
        },
        {
            id: 5,
            name: "Juzuk 5 (An-Nisa)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/005.mp3"
        },
        {
            id: 6,
            name: "Juzuk 6 (An-Nisa - Al-Ma'idah)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/006.mp3"
        },
        {
            id: 7,
            name: "Juzuk 7 (Al-Ma'idah - Al-An'am)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/007.mp3"
        },
        {
            id: 8,
            name: "Juzuk 8 (Al-An'am - Al-A'raf)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/008.mp3"
        },
        {
            id: 9,
            name: "Juzuk 9 (Al-A'raf - Al-Anfal)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/009.mp3"
        },
        {
            id: 10,
            name: "Juzuk 10 (Al-Anfal - At-Tawbah)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/010.mp3"
        },
        {
            id: 11,
            name: "Juzuk 11 (At-Tawbah - Hud)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/011.mp3"
        },
        {
            id: 12,
            name: "Juzuk 12 (Hud - Yusuf)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/012.mp3"
        },
        {
            id: 13,
            name: "Juzuk 13 (Yusuf - Ibrahim)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/013.mp3"
        },
        {
            id: 14,
            name: "Juzuk 14 (Al-Hijr - An-Nahl)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/014.mp3"
        },
        {
            id: 15,
            name: "Juzuk 15 (Al-Isra - Al-Kahf)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/015.mp3"
        },
        {
            id: 16,
            name: "Juzuk 16 (Al-Kahf - Ta-Ha)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/016.mp3"
        },
        {
            id: 17,
            name: "Juzuk 17 (Al-Anbiya - Al-Hajj)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/017.mp3"
        },
        {
            id: 18,
            name: "Juzuk 18 (Al-Mu'minun - Al-Furqan)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/018.mp3"
        },
        {
            id: 19,
            name: "Juzuk 19 (Al-Furqan - An-Naml)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/019.mp3"
        },
        {
            id: 20,
            name: "Juzuk 20 (An-Naml - Al-'Ankabut)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/020.mp3"
        },
        {
            id: 21,
            name: "Juzuk 21 (Al-'Ankabut - Al-Ahzab)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/021.mp3"
        },
        {
            id: 22,
            name: "Juzuk 22 (Al-Ahzab - Ya-Sin)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/022.mp3"
        },
        {
            id: 23,
            name: "Juzuk 23 (Ya-Sin - Az-Zumar)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/023.mp3"
        },
        {
            id: 24,
            name: "Juzuk 24 (Az-Zumar - Fussilat)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/024.mp3"
        },
        {
            id: 25,
            name: "Juzuk 25 (Fussilat - Al-Jathiyah)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/025.mp3"
        },
        {
            id: 26,
            name: "Juzuk 26 (Al-Ahqaf - Adh-Dhariyat)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/026.mp3"
        },
        {
            id: 27,
            name: "Juzuk 27 (Adh-Dhariyat - Al-Hadid)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/027.mp3"
        },
        {
            id: 28,
            name: "Juzuk 28 (Al-Mujadilah - At-Tahrim)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/028.mp3"
        },
        {
            id: 29,
            name: "Juzuk 29 (Al-Mulk - Al-Mursalat)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/029.mp3"
        },
        {
            id: 30,
            name: "Juzuk 30 (An-Naba - An-Nas)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/030.mp3"
        }
    ]
};