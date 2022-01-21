
let nome1 = window.prompt('Digite o nome do jogador 1')
let nome2 = window.prompt('Digite o nome do jogador 2')

let j1 = window.document.getElementById('j1')
let j2 = window.document.getElementById('j2')

let nJogadas = window.document.getElementById('nJogadas')

//let tabela = window.document.getElementById('tabela')

let plac1 = window.document.getElementById('plac1')
let plac2 = window.document.getElementById('plac2')

let vezjog = window.document.getElementById('vezjogador')

//Linha 1
let n7 = window.document.getElementById('n7')
let n8 = window.document.getElementById('n8')
let n9 = window.document.getElementById('n9')

//Linha 2
let n4 = window.document.getElementById('n4')
let n5 = window.document.getElementById('n5')
let n6 = window.document.getElementById('n6')

//Linha 3
let n1 = window.document.getElementById('n1')
let n2 = window.document.getElementById('n2')
let n3 = window.document.getElementById('n3')

let vez = 1
let jogadas = 0
let fim = 9
let vencedor = 0
let ponto1 = 0
let ponto2 = 0

let tab = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]

function jogadores() {

    j1.innerHTML += ` ${nome1.toUpperCase()}`
    j2.innerHTML += ` ${nome2.toUpperCase()}`

    nJogadas.innerHTML = `${jogadas}`
    if (vez == 1) {
        vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
        vezjog.style.color = 'red'
    }
}

//Linha 1

function jog7() {

    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[0][0] == 0) {

                tab[0][0] = 1
                n7.innerHTML = 'X'
                n7.style.fontSize = '2em'
                n7.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[0][0] == 0) {

                tab[0][0] = 2
                n7.innerHTML = 'O'
                n7.style.fontSize = '2em'
                n7.style.color = 'blue'
                vez = 1
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

function jog8() {
    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[0][1] == 0) {

                tab[0][1] = 1
                n8.innerHTML = 'X'
                n8.style.fontSize = '2em'
                n8.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[0][1] == 0) {

                tab[0][1] = 2
                n8.innerHTML = 'O'
                n8.style.fontSize = '2em'
                n8.style.color = 'blue'
                vez = 1
                jogadas++

                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

function jog9() {
    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[0][2] == 0) {

                tab[0][2] = 1
                n9.innerHTML = 'X'
                n9.style.fontSize = '2em'
                n9.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[0][2] == 0) {

                tab[0][2] = 2
                n9.innerHTML = 'O'
                n9.style.fontSize = '2em'
                n9.style.color = 'blue'
                vez = 1
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

//Linha 2
function jog4() {

    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[1][0] == 0) {

                tab[1][0] = 1
                n4.innerHTML = 'X'
                n4.style.fontSize = '2em'
                n4.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[1][0] == 0) {

                tab[1][0] = 2
                n4.innerHTML = 'O'
                n4.style.fontSize = '2em'
                n4.style.color = 'blue'
                vez = 1
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

function jog5() {
    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[1][1] == 0) {

                tab[1][1] = 1
                n5.innerHTML = 'X'
                n5.style.fontSize = '2em'
                n5.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[1][1] == 0) {

                tab[1][1] = 2
                n5.innerHTML = 'O'
                n5.style.fontSize = '2em'
                n5.style.color = 'blue'
                vez = 1
                jogadas++

                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

function jog6() {
    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[1][2] == 0) {

                tab[1][2] = 1
                n6.innerHTML = 'X'
                n6.style.fontSize = '2em'
                n6.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[1][2] == 0) {

                tab[1][2] = 2
                n6.innerHTML = 'O'
                n6.style.fontSize = '2em'
                n6.style.color = 'blue'
                vez = 1
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

//Linha 3
function jog1() {

    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[2][0] == 0) {

                tab[2][0] = 1
                n1.innerHTML = 'X'
                n1.style.fontSize = '2em'
                n1.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[2][0] == 0) {

                tab[2][0] = 2
                n1.innerHTML = 'O'
                n1.style.fontSize = '2em'
                n1.style.color = 'blue'
                vez = 1
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

function jog2() {
    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[2][1] == 0) {

                tab[2][1] = 1
                n2.innerHTML = 'X'
                n2.style.fontSize = '2em'
                n2.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[2][1] == 0) {

                tab[2][1] = 2
                n2.innerHTML = 'O'
                n2.style.fontSize = '2em'
                n2.style.color = 'blue'
                vez = 1
                jogadas++

                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

function jog3() {
    if (jogadas == fim) {
        nJogadas.innerHTML = `Fim de jogo`
    } else {
        if (vez == 1) {

            if (tab[2][2] == 0) {

                tab[2][2] = 1
                n3.innerHTML = 'X'
                n3.style.fontSize = '2em'
                n3.style.color = 'red'
                vez = 2
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome2.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'blue'
            } else {
                alert('Jogada inválida')
            }
        } else if (vez == 2) {
            if (tab[2][2] == 0) {

                tab[2][2] = 2
                n3.innerHTML = 'O'
                n3.style.fontSize = '2em'
                n3.style.color = 'blue'
                vez = 1
                jogadas++
                nJogadas.innerHTML = `${jogadas}`
                quemGanha()
                vezjog.innerHTML = `${nome1.toUpperCase()}, sua vez de jogar`
                vezjog.style.color = 'red'
            } else {
                alert('Jogada inválida')
            }
        }
    }

}

//Verficar ganhador

function quemGanha() {

    //tabela.innerHTML = tab

    if (tab[0][0] == 1 && tab[0][1] == 1 && tab[0][2] == 1) {
        //horizontal
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[0][0] == 2 && tab[0][1] == 2 && tab[0][2] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (tab[1][0] == 1 && tab[1][1] == 1 && tab[1][2] == 1) {
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[1][0] == 2 && tab[1][1] == 2 && tab[1][2] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (tab[2][0] == 1 && tab[2][1] == 1 && tab[2][2] == 1) {
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[2][0] == 2 && tab[2][1] == 2 && tab[2][2] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (tab[0][0] == 1 && tab[1][0] == 1 && tab[2][0] == 1) {
        //vertical
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[0][0] == 2 && tab[1][0] == 2 && tab[2][0] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (tab[0][1] == 1 && tab[1][1] == 1 && tab[2][1] == 1) {
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[0][1] == 2 && tab[1][1] == 2 && tab[2][1] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (tab[0][2] == 1 && tab[1][2] == 1 && tab[2][2] == 1) {
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[0][2] == 2 && tab[1][2] == 2 && tab[2][2] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (tab[0][0] == 1 && tab[1][1] == 1 && tab[2][2] == 1) {
        //diagonal
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[0][0] == 2 && tab[1][1] == 2 && tab[2][2] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (tab[0][2] == 1 && tab[1][1] == 1 && tab[2][0] == 1) {
        nJogadas.innerHTML = `${nome1.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'red'
        jogadas = 9
        ponto1++
        vencedor = 1
        plac1.innerHTML = ` ${ponto1}`
    } else if (tab[0][2] == 2 && tab[1][1] == 2 && tab[2][0] == 2) {
        nJogadas.innerHTML = `${nome2.toUpperCase()} venceu!!!`
        nJogadas.style.color = 'blue'
        jogadas = 9
        ponto2++
        vencedor = 2
        plac2.innerHTML = ` ${ponto2}`
    } else if (jogadas == fim && vencedor == 0) {
        nJogadas.innerHTML = `Empate!!!`
        nJogadas.style.color = 'orange'

    }



}


function zerar() {
    zerarDisp()
    jogadas = 0
    vencedor = 0
    nJogadas.innerHTML = `${jogadas}`

    for (let l = 0; l < tab.length; l++) {
        for (let c = 0; c < tab.length; c++) {
            tab[l][c] = 0
        }
    }
    tabela.innerHTML = tab
    if (vencedor == 1) {
        vez = 1
    } else if (vencedor == 2) {
        vez = 2
    }


}

function zerarDisp() {

    n7.innerHTML = '7'
    n7.style.color = 'black'
    n8.innerHTML = '8'
    n8.style.color = 'black'
    n9.innerHTML = '9'
    n9.style.color = 'black'

    n4.innerHTML = '4'
    n4.style.color = 'black'
    n5.innerHTML = '5'
    n5.style.color = 'black'
    n6.innerHTML = '6'
    n6.style.color = 'black'

    n1.innerHTML = '1'
    n1.style.color = 'black'
    n2.innerHTML = '2'
    n2.style.color = 'black'
    n3.innerHTML = '3'
    n3.style.color = 'black'

}