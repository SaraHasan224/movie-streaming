
import TestIMG1 from "../../assets/images/currentlly-playing/1.png";
import TestIMG2 from "../../assets/images/currentlly-playing/2.png";
import TestIMG3 from "../../assets/images/currentlly-playing/3.png";
import TestIMG4 from "../../assets/images/currentlly-playing/4.png";


import TestIMG5 from "../../assets/images/coming-soon/1.png";
import TestIMG6 from "../../assets/images/coming-soon/2.png";
import TestIMG7 from "../../assets/images/coming-soon/3.png";
import TestIMG8 from "../../assets/images/coming-soon/4.png";

import Tile1 from "../../assets/images/banner/tile-1.png";
import Tile2 from "../../assets/images/banner/tile-2.png";
import Tile3 from "../../assets/images/banner/tile-3.png";
import Tile4 from "../../assets/images/banner/tile-4.png";
import Tile5 from "../../assets/images/banner/tile-5.png";
import Tile6 from "../../assets/images/banner/tile-6.png";
import Tile7 from "../../assets/images/banner/tile-7.png";
import Tile8 from "../../assets/images/banner/tile-8.png";
import Tile9 from "../../assets/images/banner/tile-9.png";
import Tile10 from "../../assets/images/banner/tile-10.png";
import Tile11 from "../../assets/images/banner/tile-11.png";
import Tile12 from "../../assets/images/banner/tile-12.png";

import Banner1 from "../../assets/images/banner/banner-1.png";
import Banner2 from "../../assets/images/banner/banner-2.png";
import Banner3 from "../../assets/images/banner/banner-3.png";
import Banner10 from "../../assets/images/banner/banner-10.png";
import Banner11 from "../../assets/images/banner/banner-11.png";
import Banner12 from "../../assets/images/banner/banner-12.png";

import News from "../../assets/images/news/image.png";

export const CurrentlyPlaying = [
    {
        "id": 1,
        "thumb": TestIMG1,
        "name": "The Lion King",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN", "RU"],
        delay: 200
    },
    {
        "id": 2,
        "thumb": TestIMG2,
        "name": "Vikings",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN", "RU"],
        delay: 400
    },
    {
        "id": 3,
        "thumb": TestIMG3,
        "name": "Game of thrones",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN"],
        delay: 600
    },
    {
        "id": 4,
        "thumb": TestIMG4,
        "name": "Grey's Autonomy",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN"],
        delay: 800
    }
]


export const ComingSoon = [
    {
        "id": 1,
        "thumb": TestIMG5,
        "name": "Up from Slavery",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN"],
        delay: 200
    },
    {
        "id": 2,
        "thumb": TestIMG6,
        "name": "After The Rain",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN", "RU"],
        delay: 400
    },
    {
        "id": 3,
        "thumb": TestIMG7,
        "name": "Bliss",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN"],
        delay: 600
    },
    {
        "id": 4,
        "thumb": TestIMG8,
        "name": "Mortal Kombat",
        "date": "20 April",
        "viewing": "18+",
        "lang": ["EN", "RU"],
        delay: 800
    }
]

export const HomePageBanner = [
    {
        name: "Spirited Away",
        titleImg: Tile1,
        expandedView: Banner1,
        reference: "spirted-away",
        delay: 700
    },
    {
        name: "Wonder Woman 1984",
        titleImg: Tile2,
        expandedView: Banner2,
        reference: "ww-1984",
        delay: 700
    },
    {
        name: "Mortal Kombat",
        titleImg: Tile3,
        expandedView: Banner3,
        reference: "mortal-kombat",
        delay: 700
    },
    {
        name: "Peter Rabbit 2 The Runaway",
        titleImg: Tile4,
        expandedView: Banner1,
        reference: "peter-rabbit",
        delay: 700
    },
    {
        name: "Wanda Vision",
        titleImg: Tile5,
        expandedView: Banner1,
        reference: "wanda-vision",
        delay: 700
    },
    {
        name: "Thunder Force",
        titleImg: Tile6,
        expandedView: Banner1,
        reference: "thunder-force",
        delay: 700
    },
    {
        name: "GOT",
        titleImg: Tile7,
        expandedView: Banner1,
        reference: "got",
        delay: 700
    },
    {
        name: "Fear of the Walking dead",
        titleImg: Tile8,
        expandedView: Banner1,
        reference: "fear-of-the-walking-dead",
        delay: 700
    },
    {
        name: "Zeher Tulugu",
        titleImg: Tile9,
        expandedView: Banner1,
        reference: "zeher-tulugu",
        delay: 700
    },
    {
        name: "Godzolla vs. Kong",
        titleImg: Tile10,
        expandedView: Banner10,
        reference: "godzolla-kong",
        delay: 700
    },
    {
        name: "The Lion King",
        titleImg: Tile11,
        expandedView: Banner11,
        reference: "the-lion-king",
        delay: 700
    },
    {
        name: "Zack Snyder’s Justice League",
        titleImg: Tile12,
        expandedView: Banner12,
        reference: "zack-justice-league",
        delay: 700
    },
]

export const HomePageNews = [
    {
        "id": 1,
        "text": "Aenean volutpat in massa at euismod. Phasellus quis viverra lacus, ac interdum dui. Quisque pretium metus id molestie aliquet. In nec neque in metus placerat commodo. Sed in bibendum lorem.",
        "name": "David Beckham",
        "date": "11-02-2023",
        "image": News
    },
]