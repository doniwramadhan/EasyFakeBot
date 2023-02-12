const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container")


let init = 0;

const botSay = (data) => {
    return [
        "Halo, saya adalah bot, siapa kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Oh ${data?.usia} Kita seumuran yaa, lalu apa hobi kamu?`,
        `Wahh aku juga suka ${data?.hobi}, btw kamu udah punya pacar?`,
        `Ohh bagus deh kalo ${data?.pacar}, mau udahan?`,
    ]
}

pertanyaan.innerHTML = botSay()[0];
let userData = []

function botStart() {
    if(jawaban.value.length < 1 ) return alert ("Silahkan jawab terlebih dahulu")
    init++

    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }

}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [800])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Terima kasih ya ${userData[0]} udah mampir`
    jawaban.value = ""
}

function botEnd() {
    alert(`Terima kasih ${userData[0]} sudah berkunjung, halaman ini akan otomatis reload`)
    window.location.reload()
}