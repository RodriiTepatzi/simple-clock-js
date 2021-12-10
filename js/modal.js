var btnOpenModal = document.getElementById('modal-btn');
btnOpenModal.addEventListener("click", function(){
    document.getElementById('modal').style.top = 0;
});

var modal = document.getElementById('modal').addEventListener("click", function(){
    this.style.top = '-100vh';
});