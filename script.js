
function gene(){
    const text = document.getElementById('in').value;
    const qr = document.getElementById('s1');
    qr.innerHTML = "";
    if(text.trim() !== ""){
        new QRCode(qr, {
            text: text,
            width: 150,
            height: 150
        });
    }
}