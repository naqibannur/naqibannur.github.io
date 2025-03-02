// Quran data organized by Surah (1-114)
const quranData = {
    surahs: [
        {
            id: 1,
            name: "1. Al-Fatihah (The Opening)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/001.mp3"
        },
        {
            id: 2,
            name: "2. Al-Baqarah (The Cow)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/002.mp3"
        },
        {
            id: 3,
            name: "3. Ali 'Imran (Family of Imran)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/003.mp3"
        },
        {
            id: 4,
            name: "4. An-Nisa (The Women)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/004.mp3"
        },
        {
            id: 5,
            name: "5. Al-Ma'idah (The Table Spread)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/005.mp3"
        },
        {
            id: 6,
            name: "6. Al-An'am (The Cattle)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/006.mp3"
        },
        {
            id: 7,
            name: "7. Al-A'raf (The Heights)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/007.mp3"
        },
        {
            id: 8,
            name: "8. Al-Anfal (The Spoils of War)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/008.mp3"
        },
        {
            id: 9,
            name: "9. At-Tawbah (The Repentance)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/009.mp3"
        },
        {
            id: 10,
            name: "10. Yunus (Jonah)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/010.mp3"
        },
        {
            id: 11,
            name: "11. Hud",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/011.mp3"
        },
        {
            id: 12,
            name: "12. Yusuf (Joseph)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/012.mp3"
        },
        {
            id: 13,
            name: "13. Ar-Ra'd (The Thunder)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/013.mp3"
        },
        {
            id: 14,
            name: "14. Ibrahim (Abraham)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/014.mp3"
        },
        {
            id: 15,
            name: "15. Al-Hijr (The Rocky Tract)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/015.mp3"
        },
        {
            id: 16,
            name: "16. An-Nahl (The Bee)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/016.mp3"
        },
        {
            id: 17,
            name: "17. Al-Isra (The Night Journey)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/017.mp3"
        },
        {
            id: 18,
            name: "18. Al-Kahf (The Cave)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/018.mp3"
        },
        {
            id: 19,
            name: "19. Maryam (Mary)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/019.mp3"
        },
        {
            id: 20,
            name: "20. Ta-Ha",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/020.mp3"
        },
        {
            id: 21,
            name: "21. Al-Anbiya (The Prophets)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/021.mp3"
        },
        {
            id: 22,
            name: "22. Al-Hajj (The Pilgrimage)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/022.mp3"
        },
        {
            id: 23,
            name: "23. Al-Mu'minun (The Believers)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/023.mp3"
        },
        {
            id: 24,
            name: "24. An-Nur (The Light)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/024.mp3"
        },
        {
            id: 25,
            name: "25. Al-Furqan (The Criterion)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/025.mp3"
        },
        {
            id: 26,
            name: "26. Ash-Shu'ara (The Poets)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/026.mp3"
        },
        {
            id: 27,
            name: "27. An-Naml (The Ant)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/027.mp3"
        },
        {
            id: 28,
            name: "28. Al-Qasas (The Stories)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/028.mp3"
        },
        {
            id: 29,
            name: "29. Al-Ankabut (The Spider)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/029.mp3"
        },
        {
            id: 30,
            name: "30. Ar-Rum (The Romans)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/030.mp3"
        },
        {
            id: 31,
            name: "31. Luqman",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/031.mp3"
        },
        {
            id: 32,
            name: "32. As-Sajdah (The Prostration)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/032.mp3"
        },
        {
            id: 33,
            name: "33. Al-Ahzab (The Combined Forces)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/033.mp3"
        },
        {
            id: 34,
            name: "34. Saba (Sheba)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/034.mp3"
        },
        {
            id: 35,
            name: "35. Fatir (The Originator)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/035.mp3"
        },
        {
            id: 36,
            name: "36. Ya-Sin",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/036.mp3"
        },
        {
            id: 37,
            name: "37. As-Saffat (Those Ranged in Ranks)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/037.mp3"
        },
        {
            id: 38,
            name: "38. Sad",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/038.mp3"
        },
        {
            id: 39,
            name: "39. Az-Zumar (The Groups)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/039.mp3"
        },
        {
            id: 40,
            name: "40. Ghafir (The Forgiver)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/040.mp3"
        },
        {
            id: 41,
            name: "41. Fussilat (Explained in Detail)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/041.mp3"
        },
        {
            id: 42,
            name: "42. Ash-Shura (The Consultation)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/042.mp3"
        },
        {
            id: 43,
            name: "43. Az-Zukhruf (The Gold Adornments)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/043.mp3"
        },
        {
            id: 44,
            name: "44. Ad-Dukhan (The Smoke)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/044.mp3"
        },
        {
            id: 45,
            name: "45. Al-Jathiyah (The Kneeling)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/045.mp3"
        },
        {
            id: 46,
            name: "46. Al-Ahqaf (The Wind-Curved Sandhills)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/046.mp3"
        },
        {
            id: 47,
            name: "47. Muhammad",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/047.mp3"
        },
        {
            id: 48,
            name: "48. Al-Fath (The Victory)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/048.mp3"
        },
        {
            id: 49,
            name: "49. Al-Hujurat (The Rooms)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/049.mp3"
        },
        {
            id: 50,
            name: "50. Qaf",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/050.mp3"
        },
        {
            id: 51,
            name: "51. Adh-Dhariyat (The Winnowing Winds)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/051.mp3"
        },
        {
            id: 52,
            name: "52. At-Tur (The Mount)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/052.mp3"
        },
        {
            id: 53,
            name: "53. An-Najm (The Star)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/053.mp3"
        },
        {
            id: 54,
            name: "54. Al-Qamar (The Moon)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/054.mp3"
        },
        {
            id: 55,
            name: "55. Ar-Rahman (The Beneficent)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/055.mp3"
        },
        {
            id: 56,
            name: "56. Al-Waqi'ah (The Inevitable)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/056.mp3"
        },
        {
            id: 57,
            name: "57. Al-Hadid (The Iron)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/057.mp3"
        },
        {
            id: 58,
            name: "58. Al-Mujadila (The Pleading Woman)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/058.mp3"
        },
        {
            id: 59,
            name: "59. Al-Hashr (The Exile)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/059.mp3"
        },
        {
            id: 60,
            name: "60. Al-Mumtahanah (The Examined One)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/060.mp3"
        },
        {
            id: 61,
            name: "61. As-Saf (The Ranks)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/061.mp3"
        },
        {
            id: 62,
            name: "62. Al-Jumu'ah (Friday)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/062.mp3"
        },
        {
            id: 63,
            name: "63. Al-Munafiqun (The Hypocrites)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/063.mp3"
        },
        {
            id: 64,
            name: "64. At-Taghabun (Mutual Disillusion)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/064.mp3"
        },
        {
            id: 65,
            name: "65. At-Talaq (Divorce)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/065.mp3"
        },
        {
            id: 66,
            name: "66. At-Tahrim (Prohibition)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/066.mp3"
        },
        {
            id: 67,
            name: "67. Al-Mulk (The Sovereignty)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/067.mp3"
        },
        {
            id: 68,
            name: "68. Al-Qalam (The Pen)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/068.mp3"
        },
        {
            id: 69,
            name: "69. Al-Haqqah (The Reality)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/069.mp3"
        },
        {
            id: 70,
            name: "70. Al-Ma'arij (The Ascending Stairways)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/070.mp3"
        },
        {
            id: 71,
            name: "71. Nuh (Noah)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/071.mp3"
        },
        {
            id: 72,
            name: "72. Al-Jinn (The Jinn)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/072.mp3"
        },
        {
            id: 73,
            name: "73. Al-Muzzammil (The Enshrouded One)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/073.mp3"
        },
        {
            id: 74,
            name: "74. Al-Muddathir (The Cloaked One)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/074.mp3"
        },
        {
            id: 75,
            name: "75. Al-Qiyamah (The Resurrection)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/075.mp3"
        },
        {
            id: 76,
            name: "76. Al-Insan (Man)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/076.mp3"
        },
        {
            id: 77,
            name: "77. Al-Mursalat (The Emissaries)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/077.mp3"
        },
        {
            id: 78,
            name: "78. An-Naba (The Tidings)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/078.mp3"
        },
        {
            id: 79,
            name: "79. An-Nazi'at (Those Who Drag Forth)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/079.mp3"
        },
        {
            id: 80,
            name: "80. 'Abasa (He Frowned)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/080.mp3"
        },
        {
            id: 81,
            name: "81. At-Takwir (The Overthrowing)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/081.mp3"
        },
        {
            id: 82,
            name: "82. Al-Infitar (The Cleaving)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/082.mp3"
        },
        {
            id: 83,
            name: "83. Al-Mutaffifin (The Defrauding)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/083.mp3"
        },
        {
            id: 84,
            name: "84. Al-Inshiqaq (The Splitting Open)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/084.mp3"
        },
        {
            id: 85,
            name: "85. Al-Buruj (The Mansions of the Stars)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/085.mp3"
        },
        {
            id: 86,
            name: "86. At-Tariq (The Nightcomer)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/086.mp3"
        },
        {
            id: 87,
            name: "87. Al-A'la (The Most High)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/087.mp3"
        },
        {
            id: 88,
            name: "88. Al-Ghashiyah (The Overwhelming)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/088.mp3"
        },
        {
            id: 89,
            name: "89. Al-Fajr (The Dawn)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/089.mp3"
        },
        {
            id: 90,
            name: "90. Al-Balad (The City)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/090.mp3"
        },
        {
            id: 91,
            name: "91. Ash-Shams (The Sun)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/091.mp3"
        },
        {
            id: 92,
            name: "92. Al-Lail (The Night)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/092.mp3"
        },
        {
            id: 93,
            name: "93. Ad-Duha (The Morning Hours)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/093.mp3"
        },
        {
            id: 94,
            name: "94. Ash-Sharh (The Relief)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/094.mp3"
        },
        {
            id: 95,
            name: "95. At-Tin (The Fig)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/095.mp3"
        },
        {
            id: 96,
            name: "96. Al-'Alaq (The Clot)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/096.mp3"
        },
        {
            id: 97,
            name: "97. Al-Qadr (The Power)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/097.mp3"
        },
        {
            id: 98,
            name: "98. Al-Bayyinah (The Clear Proof)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/098.mp3"
        },
        {
            id: 99,
            name: "99. Az-Zalzalah (The Earthquake)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/099.mp3"
        },
        {
            id: 100,
            name: "100. Al-'Adiyat (The Coursers)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/100.mp3"
        },
        {
            id: 101,
            name: "101. Al-Qari'ah (The Calamity)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/101.mp3"
        },
        {
            id: 102,
            name: "102. At-Takathur (The Rivalry in World Increase)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/102.mp3"
        },
        {
            id: 103,
            name: "103. Al-'Asr (The Declining Day)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/103.mp3"
        },
        {
            id: 104,
            name: "104. Al-Humazah (The Traducer)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/104.mp3"
        },
        {
            id: 105,
            name: "105. Al-Fil (The Elephant)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/105.mp3"
        },
        {
            id: 106,
            name: "106. Quraysh",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/106.mp3"
        },
        {
            id: 107,
            name: "107. Al-Ma'un (The Small Kindnesses)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/107.mp3"
        },
        {
            id: 108,
            name: "108. Al-Kawthar (The Abundance)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/108.mp3"
        },
        {
            id: 109,
            name: "109. Al-Kafirun (The Disbelievers)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/109.mp3"
        },
        {
            id: 110,
            name: "110. An-Nasr (The Divine Support)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/110.mp3"
        },
        {
            id: 111,
            name: "111. Al-Masad (The Palm Fiber)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/111.mp3"
        },
        {
            id: 112,
            name: "112. Al-Ikhlas (The Sincerity)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/112.mp3"
        },
        {
            id: 113,
            name: "113. Al-Falaq (The Daybreak)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/113.mp3"
        },
        {
            id: 114,
            name: "114. An-Nas (Mankind)",
            reciter: "Mishari Rashid Al-Afasy",
            url: "https://server8.mp3quran.net/afs/114.mp3"
        }
    ]
};
