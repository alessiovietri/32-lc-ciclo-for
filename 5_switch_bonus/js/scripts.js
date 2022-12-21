let numeroCliccato = 6;

if (numeroCliccato == 1) {
    alert('Hai cliccato su 1');
}
else if (numeroCliccato == 2) {
    alert('Hai cliccato su 2');
}
else if (numeroCliccato == 3) {
    alert('Hai cliccato su 3');
}
else if (numeroCliccato == 4) {
    alert('Hai cliccato su 4');
}
else if (numeroCliccato == 5) {
    alert('Hai cliccato su 5');
}
else {
    alert('Valore non valido');
}

switch (numeroCliccato) {

    case 1:
        alert('Hai cliccato su 1');
        break;

    case 2:
        alert('Hai cliccato su 2');
        break;

    case 3:
        alert('Hai cliccato su 3');
        break;

    case 4:
        alert('Hai cliccato su 4');
        break;

    case 5:
        alert('Hai cliccato su 5');
        break;

    default:
        alert('Valore non valido');
        break;

}