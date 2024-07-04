//alert('Bonjour Mr')

function calcul() {
    let a = document.getElementById('a').value * 1;
    let b = document.getElementById('b').value * 1;
    let c = document.getElementById('c').value * 1;

    let equation = a + "x<sup>2</sup>"
    if (b < 0) {
        equation += b + "x"
    }
    else { 
        equation += "+" + b + "x" 
    }
    if (c < 0) { 
        equation += c + "=0" 
    }
    else { 
        equation += "+" + c + "=0" 
    }


    if ((a || b || c) === 0) {
        document.getElementById('resultat').innerHTML = 'Veuillez remplir les cases'
        alert('Veuillez remplir les cases')
    }
    else {
        let D = ((b * b) - (4 * a * c))

        if (D === 0) {
            X0 = ((-b) / (2 * a))
            document.getElementById('resultat').innerHTML =  '&Delta; =' + D.toFixed(2) + '<br> =>Solution unique <br>' + 'S =' + ' ' + X0.toFixed(2);
        } else if (D >= 0) {
            X1 = (-b - Math.sqrt(D)) / (2 * a)
            X2 = (-b + Math.sqrt(D)) / (2 * a)
            document.getElementById('resultat').innerHTML = '&Delta; =' + D.toFixed(2) + '<br>' + '=>Deux solutions distinctes X1 et X2 tels que <br> X1 =' + ' ' + X1.toFixed(2) + ' <br> X2 =' + ' ' + X2.toFixed(2);
        }
        else {
            document.getElementById('resultat').innerHTML = '&Delta; =' + D.toFixed(2) + '<br>'+'=>Solution impossible'
        }
        document.getElementById("equation").innerHTML = equation
    }
}

// clear

let DisplayValue = '';

function clearDisplay() {
    DisplayValue = '';
    updateDisplay();
    document.getElementById("equation").innerHTML = "ax<sup>2</sup>+bx+c=0";
    document.getElementById('resultat').innerHTML = ' '
}

function updateDisplay() {
    document.getElementById('a').value = DisplayValue || '';
    document.getElementById('b').value = DisplayValue || '';
    document.getElementById('c').value = DisplayValue || '';
}

