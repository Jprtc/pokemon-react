import charmanderImagem from "../assets/charmander.png";
import charmeleonImagem from "../assets/charmeleon.png"
import charizardImagem from '../assets/charizard.gif'

import squirtleImagem from "../assets/squirtle.png";
import wartortleImagem from '../assets/wartortle.png'
import blastoiseImagem from '../assets/blastoise.gif'

import bulbasauroImagem from "../assets/bulbasauro.png";
import ivysaurImagem from "../assets/ivysaur.png";
import venosaurImagem from "../assets/venosaur.gif";

import fakePikachu from "../assets/mimikyu.png";

const pokemons = {
    Charmander:{
        evolucao: "Charmeleon",
        imagem: charmanderImagem
    },
    Charmeleon:{
        evolucao:"Charizard",
        imagem: charmeleonImagem
    },
    Charizard:{
        evolucao: null,
        imagem: charizardImagem
    },


    Squirtle:{
        evolucao:"Wartortle",
        imagem: squirtleImagem
    },
    Wartortle:{
        evolucao:"Blastoise",
        imagem: wartortleImagem
    },
    Blastoise:{
        evolucao:null,
        imagem: blastoiseImagem
    },


    Bulbasauro:{
        evolucao: "Ivysaur",
        imagem: bulbasauroImagem
    },
    Ivysaur:{
        evolucao: "Venosaur",
        imagem: ivysaurImagem
    },
    Venosaur:{
        evolucao:null,
        imagem: venosaurImagem
    },


    Mimikyu:{
        evolucao: null,
        imagem: fakePikachu
    }
}

export default pokemons