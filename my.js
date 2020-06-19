function  testGS(){
    var url = "https://script.google.com/macros/s/AKfycbxcgfPJ4x2acshGYltLcK6nGxSUwM_ples-OksjPSiSWutPuPTV/exec"

    fetch(url)
        .then(d => d.json())
        .then(d =>{
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("btn").addEventListener("click", testGS);