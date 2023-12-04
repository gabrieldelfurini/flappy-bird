// Função para criar um novo elemento
function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    this.borda = novoElemento('div', 'borda')
    this.corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? this.corpo : this.borda)
    this.elemento.appendChild(reversa ? this.borda : this.corpo)

    this.setAltura = altura => this.corpo.style.height = `${altura}px`
}

function ParDeBarreiras(altura, abertura, x){
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWith

    this.sortearAbertura()
    this.setX(x)
}

const b = new ParDeBarreiras(700, 200, 500)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
