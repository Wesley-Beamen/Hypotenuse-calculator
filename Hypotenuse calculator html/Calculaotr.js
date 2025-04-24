function Submit() {
    const legaElement = document.getElementById("leg(a)");
    const legbElement = document.getElementById("leg(b)");
    const legaValue = legaElement.value;
    const legbValue = legbElement.value;
    const hypotenuse = document.getElementById("Hypotenuse");
    const txtcontent = Math.trunc(Math.sqrt((legaValue*legaValue)+(legbValue*legbValue))*1000)/1000;
    hypotenuse.textContent = txtcontent
}