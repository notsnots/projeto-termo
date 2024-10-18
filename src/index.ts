import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

const frases = [
    "O pôr do sol parecia uma pintura de aquarela, espalhando cores pelo céu.",
    "As melhores ideias surgem nos momentos mais inesperados.",
    "Cada viagem é uma nova oportunidade de descobrir algo sobre si mesmo.",
    "O som da chuva caindo no telhado sempre trazia uma sensação de paz.",
    "Ele olhou para o relógio e percebeu que estava atrasado para o encontro mais importante de sua vida.",
    "As estrelas brilhavam intensamente, como se quisessem contar segredos esquecidos.",
    "Às vezes, as pequenas mudanças fazem as maiores diferenças.",
    "O aroma do café fresco espalhou-se pela cozinha, trazendo memórias antigas.",
    "Ela segurou o livro com carinho, sabendo que cada página tinha uma história única para contar.",
    "A liberdade verdadeira é aquela que encontramos dentro de nós mesmos."
]

app.get('/frase', (_, response) => {
    const numeroRandom = Math.floor(Math.random() * frases.length);
    const frase = frases[numeroRandom];


    console.log("GET /frase");
    return response.json({
        frase: frase
    });
});

app.listen(3000, () => {
    console.log("Aplicacao iniciada na porta 3000");
});