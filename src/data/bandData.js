import flyer1 from '../assets/flyer2.webp';
import flyer2 from '../assets/flyer1.webp';
import remeraIWH from '../assets/remera.webp';
import cdDigipackMFC from '../assets/morbid.webp';
import cdCOMC from '../assets/cemetery.webp';
import cdIWHBack from '../assets/impaled-back.webp';
import cdDigipackMFCBack from '../assets/morbid-back.webp';
import cdCOMCBack from '../assets/cemetery-back.webp';
import buzoCR from '../assets/buzo-cr.webp';
import cdIWH from '../assets/impaled.webp';
import photo1 from '../assets/photo1.webp';
import photo2 from '../assets/photo2.webp';
import photo3 from '../assets/photo3.webp';
import photo4 from '../assets/photo4.webp';
import photo5 from '../assets/photo5.webp';
import photo6 from '../assets/photo6.webp';
import photo7 from '../assets/photo7.webp';
import photo8 from '../assets/photo8.webp';
import photo9 from '../assets/photo9.webp';
import photo10 from '../assets/photo10.webp';
import photo11 from '../assets/photo11.webp';
import photo12 from '../assets/photo12.webp';
import photo13 from '../assets/photo13.webp';


export const SHOWS_DATA = [
  {
    id: 1,
    date: "04 DIC 2026",
    city: "Montevideo, Uruguay",
    venue: "Centro Cultural Mandragora",
    flyer: flyer1,
    doorTime: "20:30 hs",
    ticketUrl: "",
    soldOut: false
  },
  {
    id: 2,
    date: "05 DIC 2026",
    city: "CABA, Argentina",
    venue: "Espacio Rincon",
    flyer: flyer2,
    doorTime: "00:00 hs",
    ticketUrl: "https://passline.com",
    soldOut: false
  }
];

export const ALBUMS_DATA = [
  {
    id: "iwh-2026",
    title: "Impaled With Hate",
    year: "2026",
    type: "Full-Length Album",
    cover: cdIWH,
    backCover: cdIWHBack,
    spotifyId: "0nrr7QfUNHovngY6QLd6yd", 
    bandcampUrl: "https://grotesqueimpalement.bandcamp.com/album/impaled-with-hate"
    
  },
  {
    id: "mfc-2021",
    title: "Morbid Fetal Creation",
    year: "2021",
    type: "Full-Length Album",
    cover: cdDigipackMFC,
    backCover: cdDigipackMFCBack,
    spotifyId: "1M7X27cmMECXBnH9qNHlLT",
    bandcampUrl: "https://grotesqueimpalement.bandcamp.com/album/morbid-fetal-creation"
   
  },
  {
    id: "comc-2017",
    title: "Cemetery of Mutilated Corpses",
    year: "2017",
    type: "EP",
    cover: cdCOMC,
    backCover: cdCOMCBack,
    spotifyId: "2DI1Kx0n5WbfaVLvLX9rfe",
    bandcampUrl: "https://grotesqueimpalement.bandcamp.com/album/cementery-of-mutilated-corpses-ep"
   
  }
];


export const MERCH_DATA = [
  {
    id: 1,
    name: "Remera Impaled With Hate",
    price: "$35.000",
    image: remeraIWH,
    sizes: ["Doble Estampa","del S al 3XL"]
  },
  {
    id: 2,
    name: "CD Morbid Fetal Creation",
    price: "$18.000",
    image: cdDigipackMFC,
    sizes: ["Edición Limitada"]
  },
  {
    id: 3,
    name: "Buzo Canguro Craneal Rot",
    price: "$55.000",
    image: buzoCR,
    sizes: ["Cuadruple Estampa","del S al 3XL"]
  }
];

export const GALLERY_DATA = [
  photo1,
  photo2,
  photo3, 
  photo4, 
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13
];