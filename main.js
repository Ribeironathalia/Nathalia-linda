const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o principal objetivo do estilo de vida clean girl?"
        alternativas: [
            {
                texto: "Seguir tendências de moda rapidamente"
                afirmacao: "terecoteco"
            },
            {
                texto: "Manter uma rotina de beleza e cuidados com a saúde de forma simples e minimalista"
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },

{
    enunciado: "O que é geralmente enfatizado no visual clean girl?"
    alternativas:[
        {
            texto: "Maquiagem ousada e cores vibrantes"
            afirmacao:
        },
        {
            texto: "Pele natural e maquiagem leve"
            afirmacao: 
           
        },
    ]
},

{
    enunciado: "Qual é um dos itens essenciais no guarda-roupa de uma clean girl?"
    alternativas:[
        {
            texto: "Roupas com estampas extravagantes"
            afirmacao: 
           
        },
        {
            texto: "Peças básicas e atemporais"
            afirmacao: 
           
        },
    ]
},

{
    enunciado: "Você se considera uma Clean Girl?"
    alternativas:[
        {
            texto: Sim, sempre
            afirmação:           
           
        },
        {
            texto: "Não, não sou muito fã",
            afirmacao: 
           
        },
    ]
},

{
    enunciado: "Você faz skincare todo dia?",
    alternativas:[
        {
            texto: "Sim, todos os dias",
            afirmacao: "Afirmação 1a alternativa"
           
        },
        {
            texto: "Não muito, não tenho esse costume",
            afirmacao: "Afirmação 2a alternativa"
         
        },
    ]
},

]

let atual = 0;
let perguntaAtual;
function mostraPergunta(){
    caixaAlternativas.textContent="";
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    caixaAlternativas.textContent="";
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });        
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
