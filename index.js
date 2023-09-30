let img_box = document.getElementById("img_box");
let qr_image = document.getElementById("qr_image");
let qr_input = document.getElementById("qr_input");

function generateOR(){
    if(qr_input.value.length > 0){
        qr_image.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
        + qr_input.value;
        img_box.classList.add("show-img");
    }
    else{
        setTimeout(()=>{
            qr_input.classList.add("error");
        },1000);
    }
}