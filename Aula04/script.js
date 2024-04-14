const words = ["software", "javascript", "python", "pedras", "computador"];
const solution = document.getElementById("solution");
let numTries = 6;
let word;
let currentGuess;
let guessedLetters;
let guessIsCorrect

/*
    A função abaixo é chamada toda vez que:
    - A página web for atualizada/aberta pela primeira vez;
    - O botão "Reiniciar jogo" for clicado;
    - O jogador acertar a palavra;
    - O número de tentativas zerar.

*/
function startGame() {
    guessedLetters = [];
    document.getElementById("guessed-letters").innerText = " "
    const index = Math.floor(Math.random()  * words.length);
    word = words[index]; // Ecolhendo uma palavra com base num indice aleatório
    currentGuess = Array(word.length).fill('_');
    /*
        currentGuess é uma lista para que possam
        ser feitas atualizações em pontos específicos
        da palavra. Por Exemplo:
        Letra escolihida pelo usuário: a
        Palavra correta: software

        A letra "a" está presente na posição 5
        (contando a primeira letra como sendo a posição 0).

        Após as verificações na função testGuess, o
        conteúdo da lista ficará assim:

        currentGuess = ["_" , "_", ..., "a", "_", "_"]
    */
    solution.innerText = "_".repeat(word.length);
    numTries = 6;
    document.getElementById("numTries").innerText = numTries;
}

function checkNumTries() {
    if (numTries === 0) {
        alert("Suas tentativas acabaram :(...\nA palavra certa era: " + word);
        startGame();
        return false;
        /* 
            Tanto faz retornar falso ou verdadeiro,
            contanto que o operador "!" seja retirado
            no caso da função retornar false como tipo
            de retorno padrão.
        */
    }
    return true

}

function testGuess() {
    let userLetter = document.getElementById("user-guess").value.toLowerCase();
    guessIsCorrect = false;
    /* 
        guessIsCorrect existe para que possamos verificar
        se uma letra escolhida está presente ou não na
        palavra. 
        Caso não esteja, o valor de numTries, variavél
        responsável por indicar quantas vezes o jogador pode
        tentar chutar uma letra, diminui.
        Caso contrário, o jogo continua rodando normalmente e 
        as tentativas do jogador permanecem inalteradas.
    */

    for (let i = 0; i < guessedLetters.length; i++) {
        if (userLetter == guessedLetters[i]) {
        alert("Essa letra já foi utilizada. Tente outra :)");
        return null;
        }
    }
    /*
        Se a letra que o jogador chutou não estiver presente
        em guessedLetters, adicionamos ela à essa variável e
        (que também é uma lista) e atualizamos a lista de le-
        tras utilizadas na página do jogo.
    */
    guessedLetters.push(userLetter);
    document.getElementById("guessed-letters").innerText = guessedLetters.join(" ");

    for (let i = 0; i < word.length; i++) {
        if (userLetter === word[i] && currentGuess[i] === "_") {
            /*
                Letra escolhida está presente na palavra correta,
                mas ainda não havia sido revelada.
            */ 
            currentGuess[i] = userLetter;
            guessIsCorrect = true;
        }
    }

    solution.innerText = currentGuess.join("");

    if(!guessIsCorrect) {
        numTries--;
        document.getElementById("numTries").innerText = numTries;
    }
    /*
        Ao terminar de checar se a letra está presente
        na palavra correta, o código verifica se o nú-
        mero de tentativas é zero.
        Caso seja, o jogo é finalizado e uma nova pa-
        lavra é escolhida aleatoriamente.
    */
    checkNumTries();
    if (word == currentGuess.join("")) {
        alert("Você acertou!! A palavra correta é: "+word+"!");
        startGame();
    }
}
