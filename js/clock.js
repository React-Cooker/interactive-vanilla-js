// 1. ADIM: Kullanıcıdan ismini alıp ekrandaki yerine yazdırma

// Kullanıcıdan prompt ile ismini istiyoruz.
let userName = prompt("Lütfen adınızı giriniz:");

// HTML'deki id'si "myName" olan elemanı seçiyoruz.
let myNameSpan = document.getElementById("myName");

// Seçtiğimiz elemanın içeriğine, kullanıcıdan aldığımız ismi yazdırıyoruz.
myNameSpan.innerHTML = userName;


// 2. ADIM: Saati ve günü alıp ekrandaki yerine yazdırma

// Saatin gösterileceği HTML elemanını seçiyoruz.
let myClockDiv = document.getElementById("myClock");

// Saati anlık olarak güncelleyecek olan ana fonksiyonumuz.
function showTime() {
    // anlık zamanı Date objesi olarak alıyoruz.
    const today = new Date();

    // Saat, dakika ve saniye bilgilerini alıyoruz.
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // Günleri bir dizi içinde tutuyoruz (getDay() 0-6 arası bir sayı döndürür).
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[today.getDay()];

    // Tek haneli sayıların başına "0" eklemek için bir kontrol.
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Tüm bilgileri birleştirip ekrana yazdırılacak formata getiriyoruz.
    const timeString = `${h}:${m}:${s} ${day}`;

    // Seçtiğimiz clock elemanının içeriğini oluşturduğumuz bu formatla değiştiriyoruz.
    myClockDiv.innerHTML = timeString;
}

// 3. ADIM: Fonksiyonun her saniye çalışmasını sağlama

// showTime fonksiyonunu her 1000 milisaniyede (yani 1 saniyede) bir tekrar çalıştırmak için setInterval kullanıyoruz.
setInterval(showTime, 1000);

// Sayfa ilk yüklendiğinde saatin görünmesi için fonksiyonu bir kere de başlangıçta çağırıyoruz.
showTime();