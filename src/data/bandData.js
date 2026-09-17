import flyerFestX from '../assets/flyer-grotesque-fest-vol-x.jpg';
import flyerUniclub from '../assets/flyer-grotesque-fest-vol-ii.jpg';
import remeraIWH from '../assets/remera.jpg';
import cdDigipackMFC from '../assets/morbid.jpg';
import cdIWH from '../assets/impaled.jpg';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';


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
    tracks: [
      { name: "Impaled With Hate", duration: "03:45", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { name: "Rotten Sanctum", duration: "04:12", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { name: "Abyssal Torment", duration: "03:58", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ]
  },
  {
    id: "mfc-2021",
    title: "Morbid Fetal Creation",
    year: "2021",
    type: "Full-Length Album",
    cover: cdDigipackMFC,
    tracks: [
      { name: "Morbid Fetal Creation", duration: "04:05", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
      { name: "Necrotic Devastation", duration: "03:30", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
    ]
  }
];

export const MERCH_DATA = [
  {
    id: 1,
    name: "Remera Impaled With Hate",
    price: "$22.000",
    image: remeraIWH,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "CD Digipack Morbid Fetal Creation",
    price: "$14.000",
    image: cdDigipackMFC,
    sizes: ["Edición Limitada"]
  }
];

export const GALLERY_DATA = [
  photo1,
  photo2,
  photo3, 
  photo4, 
  photo5];