//Buatlah Array hewan yang berisi “Gajah”, “Ikan” dan “Harimau”
const getHewan = () => {
    let soal_1 = document.getElementById("pertama")
    let hewan = [
        "Gajah",
        "Ikan",
        "Harimau"]

    soal_1.innerHTML = hewan
   
    for (h of hewan) {
        console.log(hewan)
    }
}
getHewan()


//Buatlah function yang dapat menambahkan “Gagak” kedalam Array hewan
const getHewan2 = () => {
    let soal_2 = document.getElementById("kedua")
    let hewan = [
        "Gajah",
        "Ikan",
        "Harimau"]

    hewan.push("Gagak")
    soal_2.innerHTML = hewan

    for (h of hewan) {
        console.log(hewan)
    }
}
getHewan2()


//Buatlah function yang dapat mengubah indeks-2 menjadi “Kucing”
const setHewan = () => {
    let soal_3 = document.getElementById("ketiga")
    let hewan = [
            "Gajah",
            "Ikan",
            "Harimau",
            "Gagak"
    ]

    hewan[2] = "Kucing"
    soal_3.innerHTML = hewan

    for (h of hewan) {
        console.log(hewan[2])
    }
}
setHewan()


//Buatlah function yang dapat menghapus indeks-0
const delHewan = () => {
    let soal_4 = document.getElementById("keempat")
    let hewan = [
        "Gajah",
        "Ikan",
        "Kucing",
        "Gagak"
    ]

    hewan.shift([0])
    soal_4.innerHTML = hewan

    for (h of hewan) {
        console.log([0])
    }
}
delHewan()