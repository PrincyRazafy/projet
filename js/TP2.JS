function calculate(){
    let E = document.getElementById('E').value*1;
    let R1 = document.getElementById('R1').value*1;
    let R2 = document.getElementById('R2').value*1;
    let R3 = document.getElementById('R3').value*1;
    let R4 = document.getElementById('R4').value*1;
  
    //si l'entrée est vide
    if ((E && R1 && R2 && R3 && R4) == ''){
      document.getElementById('result').innerHTML='veuiller saisir les champs'
    // }else if((R1 || R2 || R3 || R4) === 0){
      document.getElementById('result1').innerHTML=' '
    }else{
    let I1 , I2 , I3 , I4 , U1 , U2 , U3 ;
    I1 = (E)/(R1+((R2*R3)/(R2+R3))+R4);
    I4 = I1;
    I2 = (E-(R1*I1)-(R4*I4))/(R2);
    I3 = (I1 - I2);
     document.getElementById('result').innerHTML='Les intensités sont :<br> I1 ='+I1.toFixed(2) +'A ; I2 = '+I2.toFixed(2) +'A ;<br>I3 = '+I3.toFixed(2) +'A;I4 =  '+I1.toFixed(2) +'A';
    // calcul tensions
    U1 = (R1*I1);
    U2 = (R2*I2);
    U3 = (R3*I3);
    U4 = (R4*I4);
    document.getElementById('result1').innerHTML= '  Les tensions sont :<br> U1 ='+U1.toFixed(2) +'V ;U2 = '+U2.toFixed(2) + 'V ;<br> U3 ='+U3.toFixed(2)+'V;U4 = '+U4.toFixed(2) +'V';  
    }
  }
// clear

let DisplayValue = '';

function clearDisplay() {
    DisplayValue = '';
    updateDisplay();
    // document.getElementById("E").innerHTML = ' ';
    document.getElementById('result').innerHTML = 'saisissez les valeurs'
    document.getElementById('result1').innerHTML = ' '
}

function updateDisplay() {
    document.getElementById('E').value = DisplayValue || '';
    document.getElementById('R1').value = DisplayValue || '';
    document.getElementById('R2').value = DisplayValue || '';
    document.getElementById('R3').value = DisplayValue || '';
    document.getElementById('R4').value = DisplayValue || '';
}