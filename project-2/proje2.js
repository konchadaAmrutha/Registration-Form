const login_btn=document.querySelector('.loginbtn');
const cover_box=document.querySelector('.coverbox');

 function activatepopup(){
    cover_box.classList.add('active-popup');
}
login_btn.addEventListener('click',activatepopup);

const close_ion=document.querySelector('.closeion');

function deactivatecoverpopup(){
    cover_box.classList.remove('active-popup');
}
close_ion.addEventListener('click',deactivatecoverpopup);


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var icon_ = document.querySelector(".icon ion-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
       
    } else {
        passwordInput.type = "password";
    
    }
}