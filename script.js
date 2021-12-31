function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var forAno = document.getElementById('anoNas')
    var res = document.getElementById('res')

    if (forAno.value.length === 0) {
        alert('Verifique o ano de nascimento')
    } else if (forAno.value >= anoAtual || forAno.value < 1895) {
        alert('Data inválida')
    } else {
        var radio = document.getElementsByName('radsex')
        var idade = Number(anoAtual) - Number(forAno.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style = 'border-radius: 20px;'
        if (radio[0].checked) {
            res.innerHTML = `Detectamos um homem de ${idade} anos`
            if (idade >= 1 && idade < 7) {
                img.setAttribute('src', './assets/img.homembaby.png')
            } else if (idade >= 7 && idade <= 14) {
                img.setAttribute('src', './assets/img.homemcrianca1.png')
            } else if (idade < 20) {
                img.setAttribute('src', './assets/img.homemadolescente.png')
            } else if (idade >= 20 && idade < 25) {
                img.setAttribute('src', './assets/img.homemjoveladulto2.png')
            } else if (idade >= 25 && idade < 32) {
                img.setAttribute('src', './assets/img.homemjovemadulto.png')
            } else if (idade >= 32 && idade < 45) {
                img.setAttribute('src', './assets/img.homemadulto.png')
            } else if (idade >= 45 && idade < 58) {
                img.setAttribute('src', './assets/img.homemadulto2.png')
            } else if (idade >= 58 && idade < 66) {
                img.setAttribute('src', './assets/img.homemadulto3.png')
            } else if (idade >= 66 && idade < 79) {
                img.setAttribute('src', './assets/img.homemidoso.png')
            } else if (idade >= 79 && idade <= 122) {
                img.setAttribute('src', './assets/img.homemidoso2.png')
            } else {
                img.setAttribute('src', './assets/tumu.png')
            }

        } else if (radio[1].checked) {
            res.innerHTML = `Detectamos uma mulher de ${idade} anos`
            if (idade >= 1 && idade < 7) {
                img.setAttribute('src', './assets/img.mulherbaby.png')
            } else if (idade >= 7 && idade <= 14) {
                img.setAttribute('src', './assets/img.mulhercrianca.png')
            } else if (idade < 20) {
                img.setAttribute('src', './assets/img.mulheradolescente.png')
            } else if (idade >= 20 && idade < 27) {
                img.setAttribute('src', './assets/img.mulherjovemadulta.png')
            } else if (idade >= 27 && idade < 37) {
                img.setAttribute('src', './assets/img.mulheradulta.png')
            } else if (idade >= 37 && idade < 52) {
                img.setAttribute('src', './assets/img.mulheradulta2.png')
            } else if (idade >= 52 && idade < 60) {
                img.setAttribute('src', './assets/img.mulheradulta3.png')
            } else if (idade >= 60 && idade < 66) {
                img.setAttribute('src', './assets/img.mulheridosa.png')
            } else if (idade >= 66 && idade < 79) {
                img.setAttribute('src', './assets/img.mulheridosa.png')
            } else if (idade >= 79 && idade <= 122) {
                img.setAttribute('src', './assets/img.mulheridosa2.png')
            } else {
                img.setAttribute('src', './assets/tumu.png')
            }
        }

        res.appendChild(img)
    }

}