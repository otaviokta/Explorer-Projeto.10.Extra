// Variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector("#btnTry")
let randomPhrase = document.querySelector("#randomPhrase")
let createRandomPhrase
const luckyBiscuitphrases = [
  "O sucesso está logo à frente. Continue persistindo!",
  "Grandes desafios trazem grandes recompensas.",
  "A vida é uma jornada, aproveite cada passo.",
  "Seja a mudança que você deseja ver no mundo.",
  "As oportunidades batem à porta, esteja preparado para recebê-las.",
  "Acredite no seu potencial, você é capaz de grandes conquistas.",
  "A sabedoria está em ouvir tanto quanto falar.",
  "O sorriso é o melhor caminho para espalhar felicidade.",
  "A sorte favorece aqueles que se esforçam.",
  "Aprenda com o passado, viva o presente e sonhe com o futuro.",
  "Sua determinação irá abrir novos caminhos.",
  "A paciência é uma virtude que traz grandes recompensas.",
  "O conhecimento é a chave para abrir todas as portas.",
  "O pensamento positivo atrai boas energias.",
  "O amor é a resposta para muitas questões da vida.",
  "Aproveite as pequenas coisas, pois elas têm grande significado.",
  "Seja gentil, pois gentileza gera gentileza.",
  "Acredite nos seus sonhos e eles se tornarão realidade.",
  "Com coragem e determinação, não há obstáculo intransponível.",
  "Siga sua intuição, ela é sua melhor conselheira.",
  "O segredo para o sucesso é a constância no propósito.",
  "Acredite na sua capacidade de transformar desafios em oportunidades.",
  "Aprenda com os erros, mas não viva neles.",
  "A maior recompensa vem da superação dos maiores desafios.",
  "O tempo bem aproveitado é o maior tesouro da vida.",
  "A confiança em si mesmo é o primeiro passo para o êxito.",
  "Faça o bem sem olhar a quem, a gratidão virá por si só.",
  "A persistência é a chave que abre todas as portas.",
  "A amizade é o verdadeiro tesouro da vida.",
  "Não tenha medo de sonhar alto, pois os sonhos podem se tornar realidade.",
  "A gratidão transforma momentos comuns em dias especiais.",
  "Um sorriso pode iluminar o dia de alguém.",
  "Nunca é tarde para recomeçar e buscar a felicidade.",
  "As dificuldades são oportunidades disfarçadas.",
  "A felicidade está nas coisas simples da vida.",
  "Acredite na sua força interior, você é mais forte do que imagina.",
  "Siga seu coração, ele sempre saberá o caminho certo.",
  "O amor é a resposta para todas as perguntas.",
  "A cada novo dia, novas possibilidades surgem.",
  "Com humildade, alcançamos a verdadeira grandeza.",
  "Seja grato pelo que tem e novas bênçãos virão.",
  "Aprenda a ouvir a sabedoria da vida.",
  "A harmonia consigo mesmo é o caminho para a paz interior.",
  "O conhecimento é o combustível para o crescimento.",
  "O amor é a linguagem universal que todos entendem.",
  "Mantenha a calma nas tempestades da vida.",
  "As dificuldades são oportunidades para mostrar do que somos capazes.",
  "O respeito é a base de todas as relações saudáveis.",
  "Aprenda a viver o presente, pois é nele que a vida acontece.",
  "A esperança é a luz que nos guia nas horas mais sombrias.",
  "O perdão liberta o coração e a alma.",
  "Com determinação e foco, não há limites para o que podemos conquistar.",
  "O otimismo é a chave para uma vida plena e feliz.",
  "O que importa é a jornada, não apenas o destino.",
  "Acredite no poder dos seus sonhos e lute por eles.",
]

clickOnCookie.addEventListener("click", createPhrase)
btnTry.addEventListener("click", buttonTry)

function createPhrase() {
  toggleScreen()
  createRandomPhrase = Math.floor(Math.random() * luckyBiscuitphrases.length)
  randomPhrase.innerText = luckyBiscuitphrases[createRandomPhrase]
}

function buttonTry(event) {
  event.preventDefault()
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
