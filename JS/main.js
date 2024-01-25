function updateDate() {
    const currentDate = new Date();
    const days = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const waktu = document.getElementById("time");
    waktu.innerHTML = `${days} ${month} ${year}`;
}
setInterval(updateDate, 1000);
updateDate();

function cekNomor() {
    const user = document.getElementById('nomor').value;
    const resultInfo = document.getElementById('hasil');
    const Angka = user.replace(/\D/g, '');
    const digitTerakhir = Angka.slice(-1);
    const currentDate = new Date();
    
    const day = currentDate.getDate();
    if (day % 2 === 0) {
        if (!isNaN(digitTerakhir) && digitTerakhir % 2 === 0) {
            resultInfo.innerText = `Ini adalah kendaraan genap. Sekarang tanggal ${day}, kendaraan dengan plat genap boleh melewatinya.`;
        } else {
            resultInfo.innerText = `Ini adalah kendaraan ganjil. Sekarang tanggal ${day}, maaf, kendaraan dengan plat ganjil tidak boleh melewatinya.`;
        }
    } else {
        if (!isNaN(digitTerakhir) && digitTerakhir % 2 !== 0) {
            resultInfo.innerText = `Ini adalah kendaraan ganjil. Sekarang tanggal ${day}, kendaraan dengan plat ganjil boleh melewatinya.`;
        } else {
            resultInfo.innerText = `Ini adalah kendaraan genap. Sekarang tanggal ${day}, maaf, kendaraan dengan plat genap tidak boleh melewatinya.`;
        }
    }
}