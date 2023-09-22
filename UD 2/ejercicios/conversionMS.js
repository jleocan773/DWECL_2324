function conversionMS() {
    var x = prompt('Introduce una velocidad en kilómetros por hora (km/h)');
    var kmh = parseInt(x);
    var ms = kmh / 3.6;
    

    alert(kmh + ' kilómetros por hora son ' + ms + ' metros por segundo');    

}