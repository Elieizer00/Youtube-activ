// Foydalanuvchilar ma'lumotlari
let users = [];

// Ro'yxatdan o'tish funksiyasi
function register() {
    const login = document.getElementById('reg-login').value;
    const password = document.getElementById('reg-password').value;

    if (login && password) {
        // Foydalanuvchini qo'shish
        users.push({ login, password });
        alert("Ro'yxatdan o'tdingiz!");
        document.getElementById('reg-login').value = '';
        document.getElementById('reg-password').value = '';
    } else {
        alert("Iltimos, login va parolni to'ldiring!");
    }
}

// Tizimga kirish funksiyasi
function login() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Foydalanuvchini tekshirish
    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        alert("Tizimga muvaffaqiyatli kirildi!");
        // Saytga kirgandan so'ng kerakli sahifaga yo'naltirish
        window.location.href = "dashboard.html"; // Bu sahifani o'zingiz belgilashingiz mumkin
    } else {
        alert("Login yoki parol xato!");
    }
}