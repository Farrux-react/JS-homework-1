let uzs = prompt("Summat kiriting: ");
let usd;
let evro;
let summa;
let rasxod;

usd = 11000.34 * 750;
evro = 12354.03 * 120;
summa = usd + evro;

rasxod = uzs - summa;

if (summa <= uzs) {
    console.log("Oq yo'l, Alisher!");
    // Harajatlar
    alert(summa);
    // Qolgan pul
    alert(rasxod);

} else {
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}

if (0 <= rasxod) {
    console.log("Oq yo'l!");
} else {
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}