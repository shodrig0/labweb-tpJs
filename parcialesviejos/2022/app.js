let txtVotoCandidato = document.getElementById('txCandidato')
let txtDNIVotante = document.getElementById('txDNI')
let txtSexoVotante = document.getElementById('txSexo')
let divContainerVotantes = document.getElementById('Votantes')

function validarCandidato(candidato) {

    let candidatoValido = true

    candidato = candidato.toLowerCase()

    if (candidato === 'kang' || candidato === 'kang' || candidato === 'blanco') {
        if (campoCandidato.classList.contains('campoIncorrecto')) {
            campoCandidato.classList.remove('campoIncorrecto')
        } else {
            candidatoValido = false
            campoCandidato.classList.add('campoCorrecto')
        }
    }

}