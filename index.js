var modal = document.getElementById("myModal");
var resultModal = document.getElementById("resultModal");

function showModal() {
    modal.style.display = "block";
}

function modalOption(modalOption) {
    document.getElementById("modalOption").innerHTML = modalOption;
    resultModal.style.display = "block";
    modal.style.display = "none";
}