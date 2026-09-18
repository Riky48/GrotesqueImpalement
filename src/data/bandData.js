import flyerFestX from '../assets/flyer-grotesque-fest-vol-x.jpg';
import flyerUniclub from '../assets/flyer-grotesque-fest-vol-ii.jpg';
import remeraIWH from '../assets/remera.jpg';
import cdDigipackMFC from '../assets/morbid.jpg';
import cdCOMC from '../assets/cemetery.jpg';
import cdIWHBack from '../assets/impaled-back.png';
import cdDigipackMFCBack from '../assets/morbid-back.jpg';
import cdCOMCBack from '../assets/cemetery-back.jpg';
import buzoCR from '../assets/buzo-cr.jpeg';
import cdIWH from '../assets/impaled.jpg';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import photo10 from '../assets/photo10.jpg';
import photo11 from '../assets/photo11.jpg';
import photo12 from '../assets/photo12.jpg';
import photo13 from '../assets/photo13.jpg';


export const SHOWS_DATA = [
  {
    id: 1,
    date: "17 OCT 2026",
    city: "Olavarría, Bs. As.",
    venue: "Grotesque Fest - Vol. X",
    flyer: flyerFestX,
    ticketUrl: "https://mercadopago.com.ar",
    soldOut: false
  },
  {
    id: 2,
    date: "07 NOV 2026",
    city: "Buenos Aires",
    venue: "Uniclub",
    flyer: flyerUniclub,
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
    // Pegá acá el ID real de 22 caracteres de Spotify
    spotifyId: "0nrr7QfUNHovngY6QLd6yd", 
    bandcampUrl: "https://grotesqueimpalement.bandcamp.com/album/impaled-with-hate"
    // ELIMINADO: tracks, audioUrl, duration (los maneja Spotify)
  },
  {
    id: "mfc-2021",
    title: "Morbid Fetal Creation",
    // ...
    cover: cdDigipackMFC,
    backCover: cdDigipackMFCBack,
    spotifyId: "1M7X27cmMECXBnH9qNHlLT",
    bandcampUrl: "https://grotesqueimpalement.bandcamp.com/album/morbid-fetal-creation"
    // ELIMINADO: tracks, audioUrl
  },
  {
    id: "comc-2017",
    title: "Cemetery of Mutilated Corpses",
    // ...
    cover: cdCOMC,
    backCover: cdCOMCBack,
    spotifyId: "2DI1Kx0n5WbfaVLvLX9rfe",
    bandcampUrl: "https://grotesqueimpalement.bandcamp.com/album/cementery-of-mutilated-corpses-ep"
    // ELIMINADO: tracks, audioUrl
  }
];


export const MERCH_DATA = [
  {
    id: 1,
    name: "Remera Impaled With Hate",
    price: "$35.000",
    image: remeraIWH,
    sizes: ["Doble Estampa","S", "M", "L", "XL", "XXL", "2XXL", "3XXL"]
  },
  {
    id: 2,
    name: "CD Digipack Morbid Fetal Creation",
    price: "$18.000",
    image: cdDigipackMFC,
    sizes: ["Edición Limitada"]
  },
  {
    id: 3,
    name: "Buzo Canguro Craneal Rot",
    price: "$55.000",
    image: buzoCR,
    sizes: ["Cuadruple Estampa","S", "M", "L", "XL", "XXL", "2XXL", "3XXL"]
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