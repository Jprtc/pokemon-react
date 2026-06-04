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

// Tive que mudar pra um array de objetos, antes tava como se fosse um objetão com varios pokemons, erro meu :S

const pokemons = [
    {
        id: 1,
        estagio:1,
        nome:"Charmander",
        evolucao: "Charmeleon",
        imagem: charmanderImagem
    },
    {
        id: 2,
        estagio:2,
        nome:"Charmeleon",
        evolucao:"Charizard",
        imagem: charmeleonImagem
    },
    {
        id: 3,
        estagio:3,
        nome:"Charizard",
        evolucao: null,
        imagem: charizardImagem
    },


    {
        id: 4,
        estagio:1,
        nome:"Squirtle",
        evolucao:"Wartortle",
        imagem: squirtleImagem
    },
    {
        nome:"Wartortle",
        estagio:2,
        id: 5,
        evolucao:"Blastoise",
        imagem: wartortleImagem
    },
    {
        nome:"Blastoise",
        estagio:3,
        id: 6,
        evolucao:null,
        imagem: blastoiseImagem
    },


    {
        nome:"Bulbasauro",
        estagio:1,
        id: 7,
        evolucao: "Ivysaur",
        imagem: bulbasauroImagem
    },
    {
        nome:"Ivysaur",
        estagio:2,
        id: 8,
        evolucao: "Venosaur",
        imagem: ivysaurImagem
    },
    {
        nome:"Venosaur",
        estagio:3,
        id: 9,
        evolucao:null,
        imagem: venosaurImagem
    },


    {
        nome:"Mimikyu",
        estagio:1,
        id: 10,
        evolucao: null,
        imagem: fakePikachu
    }
]

export default pokemons