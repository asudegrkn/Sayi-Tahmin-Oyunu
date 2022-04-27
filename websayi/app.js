var randomSayi,
  sayac,
  hak = 3;
var tahmin = document.querySelector("#tahmin");
var baslat = document.querySelector("#baslat");
var sayi = document.querySelector("#sayi");

function randomInt(min, max) {

 return Math.floor(Math.random() * (max - min + 1)) + min;
    
    
} 
baslat.onclick = function () {
  tahmin.disabled = false;
  randomSayi = randomInt(100, 1000);
  sayac = 0;
  alert(randomSayi);
};

tahmin.onclick = function () {
  var sayiYuzler = Math.floor(sayi.value / 100);
  var sayiOnlar = Math.floor(sayi.value / 100 / 10);
  var sayiBirler = (sayi.value % 100) % 10;
  var randomSayiYuzler = Math.floor(randomSayi / 100);
  var randomSayiOnlar = Math.floor(randomSayi / 100 / 10);
  var randomSayiBirler = (randomSayi % 100) % 10;

  if (sayi.value >= 1000 || sayi.value <= 100) 
    alert("3 basamaklı sayı giriniz");
  
  sayac++;
  
  if (randomSayi != sayi.value && sayac > hak) {
    alert("Hakkınız kalmadı.");
  }
  if (randomSayi == sayi.value) {
    alert("tahmininiz doğru");
    tahmin.disabled = true;
    baslat.disabled = false;
  }
  else{
  if (randomSayiYuzler == sayiYuzler) {
    alert("yüzler basamağı doğru");
  }
  if (randomSayiOnlar == sayiOnlar) {
    alert("onlar basamağı doğru");
  }
  if (randomSayiBirler == sayiBirler) {
    alert("birler basamağı doğru");
  }
}
}
