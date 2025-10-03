//ampliar imagens ao clicar

//seleção dos elementos

const overlay = document.getElementById("overlay");
const imgsEx = document.querySelectorAll(".exImgs");
const imgOverlay = document.getElementById("imgOverlay");
const imgGale = document.querySelectorAll(".galeriaImgs")
const serve = document.querySelectorAll(".servico");

//função para ampliar as imagens ao clicar

imgsEx.forEach((img) => {
    img.addEventListener("click", () => {
        overlay.style.display = "block";
        let novoSRC = img.src;
        imgOverlay.src = novoSRC;
        imgOverlay.style.display = "block";
        document.body.style.overflow = "hidden"
    });
});

imgGale.forEach((img) => {
    img.addEventListener("click", () => {
        overlay.style.display = "block";
        let novoSRC = img.src;
        imgOverlay.src = novoSRC;
        imgOverlay.style.display = "block";
        document.body.style.overflow = "hidden"
    })
})

serve.forEach((img) => {
    img.addEventListener("click", () => {
        overlay.style.display = "block";
        let novoSRC = img.querySelector("img").src;
        imgOverlay.src = novoSRC;
        imgOverlay.style.display = "block";
        document.body.style.overflow = "hidden"
    })
})

//função para fechar a sobreposição ao clicar fora da imagem

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    imgOverlay.style.display = "none";
    document.body.style.overflow = "";
});