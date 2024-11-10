
   document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('loadingOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            overlay.classList.add('show');

            setTimeout(() => {
                overlay.classList.remove('show');
                window.location.href = this.href;
            }, 1500);
        });
    });
});



function sendToWhatsApp(service, price) {
    // Ganti nomor telepon berikut dengan nomor WhatsApp tujuan
    const phoneNumber = "6289515001716"; // format nomor: gunakan kode negara (62 untuk Indonesia)
    const message = `Halo, saya ingin memesan layanan ${service} dengan harga ${price}.`;

    // Membuka WhatsApp dengan pesan yang telah terisi
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}



const texts = ["Unlock Bootloader", "Root", "Flashing", "Bypass FRP", "Bypass Auth", "Custom Rom", "Write Imei"]; let index = 0; function changeText() { let t = document.getElementById("changingText"); t.classList.remove("changing-text"), setTimeout(() => { t.textContent = texts[index], t.classList.add("changing-text"), index = (index + 1) % texts.length }, 200) } setInterval(changeText, 3e3);



let attemptsLeft = 5;
let promoUsesLeft = localStorage.getItem("promoUsesLeft") ? parseInt(localStorage.getItem("promoUsesLeft")) : 2;
const promoHP = [
    "Redmi Note 8 Pro", "Redmi Note 9", "Redmi Note 9 Pro 5G", "Redmi Note 9T", "Redmi 6", "Redmi 6A",
    "Redmi 9", "Redmi 9A", "Redmi 9C", "Realme C2", "Realme C3", "Realme C11", "Realme C12",
    "Realme C15", "Realme 5i", "Realme 6i"
];

// Ubah semua elemen di promoHP menjadi lowercase untuk perbandingan yang konsisten
const promoHPLowerCase = promoHP.map(device => device.toLowerCase());

function checkPromo() {
    let e = document.getElementById("promoCode").value.toLowerCase();
    let t = document.getElementById("result");
    let promoMessage = document.getElementById("promoMessage");
    let promoButton = document.querySelector("button");

    // Reset promoMessage on each check
    promoMessage.innerHTML = "";

    if (attemptsLeft > 0) {
        // Check if the promo is available for the entered device (in lowercase)
        if (promoHPLowerCase.includes(e)) {
            if (promoUsesLeft > 0) {
                let confirmation = confirm(`Selamat! Anda mendapatkan promo untuk merk ${e}! Apakah Anda ingin mengambil promo ini?`);

                if (confirmation) {
                    let a = `Selamat! Anda mendapatkan promo untuk merk ${e}!`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(a)}`, "_blank");
                    t.innerHTML = "<span class='text-success'>Promo berhasil! Pesan terkirim ke WhatsApp.</span>";
                    promoUsesLeft--;
                    localStorage.setItem("promoUsesLeft", promoUsesLeft);

                    if (promoUsesLeft === 0) {
                        showAlert("Promo telah habis digunakan.", "info");
                        promoButton.disabled = true;
                    }
                } else {
                    t.innerHTML = "<span class='text-warning'>Promo dibatalkan oleh pengguna.</span>";
                }
            } else {
                t.innerHTML = "<span class='text-danger'>Anda sudah menggunakan promo maksimal 2 kali.</span>";
                promoButton.disabled = true;
            }
            attemptsLeft = 5;
            promoMessage.innerHTML = "";
        } else {
            attemptsLeft--;
            t.innerHTML = `<span class='text-danger'>Kode tidak valid. Anda bisa mencoba ${attemptsLeft} kali lagi.</span>`;
            promoMessage.innerHTML = "<span class='text-danger'>Perangkat ini tidak tersedia promo.</span>";
        }
    }

    if (attemptsLeft === 0) {
        showAlert("Percobaan habis. Silakan coba lagi setelah 1 jam.", "danger");
        t.innerHTML = "";
        promoButton.disabled = true;
        localStorage.setItem("lockedUntil", Date.now() + 3600000);
    }
}

function showAlert(e, t) {
    let a = document.getElementById("alert-container");
    let s = document.createElement("div");

    s.className = `alert alert-${t} alert-dismissible fade show text-center`;
    s.role = "alert";
    s.innerHTML = `
${e}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
`;

    a.appendChild(s);

    setTimeout(() => {
        s.classList.remove("show");
        s.classList.add("hide");
        setTimeout(() => s.remove(), 500);
    }, 5000);
}

window.onload = function () {
    let e = localStorage.getItem("lockedUntil");
    if (e && Date.now() < e) {
        let t = Math.ceil((e - Date.now()) / 60000);
        showAlert(`Percobaan habis. Silakan coba lagi setelah ${t} menit.`, "warning");
        document.querySelector("button").disabled = true;
    }

    if (promoUsesLeft === 0) {
        showAlert("Promo telah habis digunakan.", "info");
        document.querySelector("button").disabled = true;
    }
};





const devicesSupport = {
    // Perangkat yang Mendukung Custom ROM dan Root
    'REDMI_NOTE_1': { root: true, customROM: true },
    'REDMI_NOTE_2': { root: true, customROM: true },
    'REDMI_NOTE_3_PRO': { root: true, customROM: true },
    'REDMI_NOTE_4': { root: true, customROM: true },
    'REDMI_NOTE_4X': { root: true, customROM: true },
    'REDMI_NOTE_5': { root: true, customROM: true },
    'REDMI_NOTE_5_PRO': { root: true, customROM: true },
    'REDMI_NOTE_6_PRO': { root: true, customROM: true },
    'REDMI_NOTE_7_PRO': { root: true, customROM: true },
    'REDMI_NOTE_8_PRO': { root: true, customROM: true },
    'REDMI_NOTE_8': { root: true, customROM: true },
    'REDMI_NOTE_9': { root: true, customROM: true },
    'REDMI_NOTE_9_PRO': { root: true, customROM: true },
    'REDMI_NOTE_9S': { root: true, customROM: true },
    'REDMI_NOTE_10': { root: true, customROM: true },
    'REDMI_NOTE_10_PRO': { root: true, customROM: true },
    'REDMI_NOTE_10S': { root: true, customROM: true },
    'REDMI_NOTE_11': { root: true, customROM: true },
    'REDMI_NOTE_11_PRO': { root: true, customROM: true },
    'REDMI_NOTE_11S': { root: true, customROM: true },
    'REDMI_NOTE_12': { root: true, customROM: true },
    'REDMI_NOTE_12_PRO': { root: true, customROM: true },
    'REDMI_1S': { root: true, customROM: true },
    'REDMI_2': { root: true, customROM: true },
    'REDMI_2_PRIME': { root: true, customROM: true },
    'REDMI_3S': { root: true, customROM: true },
    'REDMI_3S_PRIME': { root: true, customROM: true },
    'REDMI_4A': { root: true, customROM: true },
    'REDMI_4X': { root: true, customROM: true },
    'REDMI_5': { root: true, customROM: true },
    'REDMI_5A': { root: true, customROM: true },
    'REDMI_6A': { root: true, customROM: true },
    'REDMI_6_PRO': { root: true, customROM: true },
    'REDMI_7': { root: true, customROM: true },
    'REDMI_8': { root: true, customROM: true },
    'REDMI_8A': { root: true, customROM: true },
    'REDMI_9': { root: true, customROM: true },
    'REDMI_9A': { root: true, customROM: true },
    'REDMI_9C': { root: true, customROM: true },
    'REDMI_9': { root: true, customROM: true },
    'REDMI_10': { root: true, customROM: true },
    'POCO_F1': { root: true, customROM: true },
    'POCO_F2_PRO': { root: true, customROM: true },
    'POCO_F3': { root: true, customROM: true },
    'POCO_X2': { root: true, customROM: true },
    'POCO_X3_NFC': { root: true, customROM: true },
    'POCO_X3_PRO': { root: true, customROM: true },
    'POCO_M2': { root: true, customROM: true },
    'POCO_M2_PRO': { root: true, customROM: true },
    'POCO_M3': { root: true, customROM: true },
    'POCO_M4': { root: true, customROM: true },
    'POCO_M4_PRO': { root: true, customROM: true },
    'POCO_C3': { root: true, customROM: true },
    'POCO_C31': { root: true, customROM: true },
    'POCO_X5_5G': { root: true, customROM: true },
    'INFINIX_GT_10_PRO': { root: true, customROM: true },
    'INFINIX_HOT_11': { root: true, customROM: true },
    'INFINIX_NOTE_30': { root: true, customROM: true },
    'INFINIX_NOTE_40': { root: true, customROM: true },
    'XIAOMI_MI_3': { root: true, customROM: true },
    'XIAOMI_MI_4': { root: true, customROM: true },
    'XIAOMI_MI_4I': { root: true, customROM: true },
    'XIAOMI_MI_5': { root: true, customROM: true },
    'XIAOMI_MI_5S': { root: true, customROM: true },
    'XIAOMI_MI_5S_PLUS': { root: true, customROM: true },
    'XIAOMI_MI_6': { root: true, customROM: true },
    'XIAOMI_MI_6X': { root: true, customROM: true },
    'XIAOMI_MI_8': { root: true, customROM: true },
    'XIAOMI_MI_8_LITE': { root: true, customROM: true },
    'XIAOMI_MI_9': { root: true, customROM: true },
    'XIAOMI_MI_9T': { root: true, customROM: true },
    'XIAOMI_MI_9T_PRO': { root: true, customROM: true },
    'XIAOMI_MI_10': { root: true, customROM: true },
    'XIAOMI_MI_10T_PRO': { root: true, customROM: true },
    'XIAOMI_MI_A1': { root: true, customROM: true },
    'XIAOMI_MI_A2': { root: true, customROM: true },
    'XIAOMI_MI_MIX': { root: true, customROM: true },
    'XIAOMI_MI_MIX_2': { root: true, customROM: true },
    'XIAOMI_MI_MIX_2S': { root: true, customROM: true },
    'XIAOMI_MI_MIX_3': { root: true, customROM: true },
    'XIAOMI_MI_MAX': { root: true, customROM: true },
    'XIAOMI_MI_MAX_2': { root: true, customROM: true },
    'XIAOMI_MI_MAX_3': { root: true, customROM: true },
    'XIAOMI_MI_NOTE': { root: true, customROM: true },
    'XIAOMI_MI_NOTE_2': { root: true, customROM: true },
    'XIAOMI_MI_NOTE_3': { root: true, customROM: true },
    'BLACK_SHARK': { root: true, customROM: true },
    'BLACK_SHARK_2': { root: true, customROM: true },
    'BLACK_SHARK_2_PRO': { root: true, customROM: true },
    'REALME_3': { root: true, customROM: true },
    'REALME_5_PRO': { root: true, customROM: true },
    'REALME_6': { root: true, customROM: true },
    'REALME_6_PRO': { root: true, customROM: true },
    'REALME_7': { root: true, customROM: true },
    'REALME_7_PRO': { root: true, customROM: true },
    'REALME_8I': { root: true, customROM: true },
    'REALME_NARZO_10': { root: true, customROM: true },
    'REALME_NARZO_20': { root: true, customROM: true },
    'REALME_C25': { root: true, customROM: true },
    'ONEPLUS_ONE': { root: true, customROM: true },
    'ONEPLUS_2': { root: true, customROM: true },
    'ONEPLUS_X': { root: true, customROM: true },
    'ONEPLUS_3': { root: true, customROM: true },
    'ONEPLUS_3T': { root: true, customROM: true },

    // Perangkat yang Mendukung Root Saja
    'SAMSUNG_GALAXY_S9': { root: true, customROM: false },
    'SAMSUNG_GALAXY_S9+': { root: true, customROM: false },
    'SAMSUNG_GALAXY_S10': { root: true, customROM: false },
    'SAMSUNG_GALAXY_S10+': { root: true, customROM: false },
    'SAMSUNG_GALAXY_S20': { root: true, customROM: false },
    'SAMSUNG_GALAXY_S20+': { root: true, customROM: false },
    'SAMSUNG_GALAXY_S21': { root: true, customROM: false },
    'SAMSUNG_GALAXY_NOTE_8': { root: true, customROM: false },
    'SAMSUNG_GALAXY_NOTE_9': { root: true, customROM: false },
    'SAMSUNG_GALAXY_NOTE_10': { root: true, customROM: false },
    'SAMSUNG_GALAXY_NOTE_10+': { root: true, customROM: false },
    'SAMSUNG_GALAXY_A50': { root: true, customROM: false },
    'SAMSUNG_GALAXY_A70': { root: true, customROM: false },
    // Perangkat yang Mendukung Root Saja
    'VIVO_Y91C': { root: true, customROM: false },
    'VIVO_Y12': { root: true, customROM: false },
    'VIVO_Y15': { root: true, customROM: false },
    'VIVO_Y17': { root: true, customROM: false },
    'VIVO_Y20': { root: true, customROM: false },
    'VIVO_Y30': { root: true, customROM: false },
    'VIVO_V15': { root: true, customROM: false },
    'VIVO_V17_NEO': { root: true, customROM: false },
    'VIVO_S1': { root: true, customROM: false },
    'VIVO_S1_PRO': { root: true, customROM: false }

};


// Fungsi untuk memeriksa apakah perangkat didukung
function checkDeviceSupport() {
    let deviceName = document.getElementById("deviceInput").value.trim().toUpperCase(),
        notification = document.getElementById("notification"),
        result = document.getElementById("result");

    // Mengosongkan hasil dan menyembunyikan notifikasi sebelumnya
    result.innerHTML = "";
    notification.style.display = "none";

    // Memeriksa apakah input perangkat kosong
    if (!deviceName) {
        showNotification("❌ Harap masukkan nama perangkat.", "#f44336");
        return;
    }

    // Memeriksa apakah perangkat ada dalam daftar yang didukung
    let device = devicesSupport[deviceName];
    if (device) {
        showNotification("✅ Perangkat ditemukan!", "#4CAF50");

        // Menampilkan informasi dukungan root dan custom ROM
        let supportInfo = `<strong>ROOT:</strong> ${device.root ? "Tersedia ✅" : "Tidak Tersedia ❌"}<br>`;
        supportInfo += `<strong>CUSTOM ROM:</strong> ${device.customROM ? "Tersedia ✅" : "Tidak Tersedia ❌"}`;
        result.innerHTML = supportInfo;

    } else {
        showNotification("❌ Perangkat tidak ditemukan atau tidak didukung.", "#f44336");
    }
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message, bgColor) {
    let notification = document.getElementById("notification");
    notification.style.display = "block";
    notification.style.backgroundColor = bgColor;
    notification.textContent = message;

    // Menyembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}


// Mendapatkan jumlah pengunjung dari Local Storage
// Mendapatkan tanggal saat ini dan mengonversinya ke format timestamp untuk perhitungan waktu
const now = new Date().getTime();
const oneWeek = 7 * 24 * 60 * 60 * 1000; // Satu minggu dalam milidetik

// Mendapatkan data pengunjung dari Local Storage
let totalVisitors = parseInt(localStorage.getItem('totalVisitors')) || 0;
let dailyVisitors = parseInt(localStorage.getItem('dailyVisitors')) || 0;
let weeklyVisitors = parseInt(localStorage.getItem('weeklyVisitors')) || 0;
let lastVisitTime = parseInt(localStorage.getItem('lastVisitTime')) || 0;

// Mendapatkan tanggal saat ini dan bulan untuk reset pengunjung harian dan bulanan
const today = new Date().toISOString().slice(0, 10);
const currentMonth = new Date().toISOString().slice(0, 7);

// Mendapatkan tanggal terakhir pengunjung harian dan bulanan
let lastVisitDate = localStorage.getItem('lastVisitDate') || '';
let lastVisitMonth = localStorage.getItem('lastVisitMonth') || '';

// Cek apakah satu minggu telah berlalu sejak kunjungan terakhir
if (now - lastVisitTime >= oneWeek) {
    // Pengunjung baru dihitung hanya setelah lebih dari satu minggu
    totalVisitors++;
    weeklyVisitors++;
    localStorage.setItem('lastVisitTime', now); // Update waktu kunjungan terakhir
}

// Reset pengunjung harian jika hari baru dimulai
if (today !== lastVisitDate) {
    dailyVisitors = 1; // Mulai dari 1 untuk kunjungan hari ini
    localStorage.setItem('lastVisitDate', today); // Perbarui tanggal terakhir
} else {
    dailyVisitors++; // Tambahkan untuk kunjungan hari ini
}

// Reset pengunjung bulanan jika bulan baru dimulai
if (currentMonth !== lastVisitMonth) {
    weeklyVisitors = 1; // Reset untuk minggu pertama bulan baru
    localStorage.setItem('lastVisitMonth', currentMonth); // Perbarui bulan terakhir
} else {
    weeklyVisitors++; // Tambahkan untuk minggu yang masih berjalan
}

// Simpan data pengunjung kembali ke Local Storage
localStorage.setItem('totalVisitors', totalVisitors);
localStorage.setItem('dailyVisitors', dailyVisitors);
localStorage.setItem('weeklyVisitors', weeklyVisitors);

// Tampilkan jumlah pengunjung di halaman
document.getElementById('visitorCount').textContent = totalVisitors;


