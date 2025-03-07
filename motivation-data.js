// Motivational Quranic verses for scrolling display
const motivationalVerses = [
    {
        verse: "Indeed, with hardship comes ease. Indeed, with hardship comes ease.",
        reference: "Quran 94:5-6"
    },
    {
        verse: "Allah does not burden a soul beyond that it can bear.",
        reference: "Quran 2:286"
    },
    {
        verse: "So verily, with the hardship, there is relief. Verily, with the hardship, there is relief.",
        reference: "Quran 94:5-6"
    },
    {
        verse: "And whoever puts their trust in Allah, then He will suffice him.",
        reference: "Quran 65:3"
    },
    {
        verse: "Allah is with the patient.",
        reference: "Quran 2:153"
    },
    {
        verse: "And whoever fears Allah, He will make for him a way out.",
        reference: "Quran 65:2"
    },
    {
        verse: "My mercy encompasses all things.",
        reference: "Quran 7:156"
    },
    {
        verse: "And when My servants ask you concerning Me - indeed I am near.",
        reference: "Quran 2:186"
    },
    {
        verse: "So remember Me; I will remember you.",
        reference: "Quran 2:152"
    },
    {
        verse: "Indeed, Allah is with those who fear Him and those who are doers of good.",
        reference: "Quran 16:128"
    },
    {
        verse: "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins.'" ,
        reference: "Quran 39:53"
    },
    {
        verse: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
        reference: "Quran 94:5-6"
    },
    {
        verse: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient.",
        reference: "Quran 2:155"
    },
    {
        verse: "And whoever relies upon Allah - then He is sufficient for him.",
        reference: "Quran 65:3"
    },
    {
        verse: "And your Lord says, 'Call upon Me; I will respond to you.'",
        reference: "Quran 40:60"
    },
    {
        verse: "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
        reference: "Quran 13:11"
    },
    {
        verse: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive.",
        reference: "Quran 2:45"
    },
    {
        verse: "And whoever is grateful - his gratitude is only for [the benefit of] himself.",
        reference: "Quran 31:12"
    },
    {
        verse: "And He found you lost and guided [you].",
        reference: "Quran 93:7"
    },
    {
        verse: "So which of the favors of your Lord would you deny?",
        reference: "Quran 55:13"
    },
    {
        verse: "And whoever is mindful of Allah, He will make for him a way out and will provide for him from where he does not expect.",
        reference: "Quran 65:2-3"
    },
    {
        verse: "And Allah would not punish them while they seek forgiveness.",
        reference: "Quran 8:33"
    },
    {
        verse: "And whoever does righteous deeds, whether male or female, while being a believer - those will enter Paradise and will not be wronged, [even as much as] the speck on a date seed.",
        reference: "Quran 4:124"
    },
    {
        verse: "And We have already created man and know what his soul whispers to him, and We are closer to him than [his] jugular vein.",
        reference: "Quran 50:16"
    },
    {
        verse: "And it is He who created the heavens and earth in six days - and His Throne had been upon water - that He might test you as to which of you is best in deed.",
        reference: "Quran 11:7"
    },
    {
        verse: "And when you have decided, then rely upon Allah. Indeed, Allah loves those who rely [upon Him].",
        reference: "Quran 3:159"
    },
    {
        verse: "And whoever fears Allah - He will make for him of his matter ease.",
        reference: "Quran 65:4"
    },
    {
        verse: "Indeed, the patient will be given their reward without account.",
        reference: "Quran 39:10"
    },
    {
        verse: "And whoever holds firmly to Allah has [indeed] been guided to a straight path.",
        reference: "Quran 3:101"
    },
    {
        verse: "And Allah wants to lighten for you [your difficulties]; and mankind was created weak.",
        reference: "Quran 4:28"
    },
    {
        verse: "And be patient, for indeed, Allah does not allow to be lost the reward of those who do good.",
        reference: "Quran 11:115"
    },
    {
        verse: "And whoever submits his face to Allah while he is a doer of good - then he has grasped the most trustworthy handhold.",
        reference: "Quran 31:22"
    },
    {
        verse: "And your Lord is the Forgiving, full of mercy.",
        reference: "Quran 18:58"
    },
    {
        verse: "And whoever obeys Allah and His Messenger has certainly achieved a great achievement.",
        reference: "Quran 33:71"
    },
    {
        verse: "And Allah is the best of providers.",
        reference: "Quran 62:11"
    },
    {
        verse: "Indeed, Allah is ever, over all things, Perfect in Ability.",
        reference: "Quran 48:21"
    },
    {
        verse: "And Allah is the best of planners.",
        reference: "Quran 3:54"
    },
    {
        verse: "And to Allah belongs whatever is in the heavens and whatever is on the earth.",
        reference: "Quran 3:109"
    },
    {
        verse: "And Allah is the [best] Guardian, and He is the most merciful of the merciful.",
        reference: "Quran 12:64"
    },
    {
        verse: "And Allah knows what you conceal and what you declare.",
        reference: "Quran 16:19"
    },
    {
        verse: "And Allah is Knowing and Wise.",
        reference: "Quran 4:11"
    },
    {
        verse: "And Allah is ever, over all things, a Witness.",
        reference: "Quran 4:33"
    },
    {
        verse: "And Allah is Powerful over everything.",
        reference: "Quran 2:109"
    },
    {
        verse: "And Allah is Encompassing and Knowing.",
        reference: "Quran 2:115"
    },
    {
        verse: "And Allah is the ally of the believers.",
        reference: "Quran 3:68"
    },
    {
        verse: "And Allah is Appreciative and Knowing.",
        reference: "Quran 2:158"
    },
    {
        verse: "And Allah is Gentle with His servants.",
        reference: "Quran 42:19"
    },
    {
        verse: "And Allah is Free of need and Forbearing.",
        reference: "Quran 2:263"
    },
    {
        verse: "And Allah is ever Hearing and Seeing.",
        reference: "Quran 4:134"
    },
    {
        verse: "And Allah is Knowing of what you do.",
        reference: "Quran 2:234"
    },
    {
        verse: "And Allah is Forgiving and Merciful.",
        reference: "Quran 2:173"
    },
    {
        verse: "And Allah is sufficient as Disposer of affairs.",
        reference: "Quran 4:81"
    },
    {
        verse: "And Allah is sufficient as a witness.",
        reference: "Quran 4:79"
    },
    {
        verse: "Indeed, Allah loves those who act justly.",
        reference: "Quran 60:8"
    },
    {
        verse: "And Allah loves the steadfast.",
        reference: "Quran 3:146"
    },
    {
        verse: "And Allah loves those who purify themselves.",
        reference: "Quran 9:108"
    }
];
