// HTML elementlarini olish
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const logoutBtn = document.getElementById("logout-btn");
const userSection = document.getElementById("user-section");
const loginSection = document.getElementById("login-section");
const userLoginDisplay = document.getElementById("user-login");

// LocalStorage dan foydalanuvchilar ro'yxatini va hozirgi foydalanuvchini olish
const users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// Agar foydalanuvchi tizimda bo'lsa, uni tizimga kirganday qilish
if (currentUser) {
    loginUser(currentUser);
}

// Loginni tekshirish funksiyasi
function isValidLogin(login) {
    return login.startsWith("+998") && login.length === 13;
}

// Foydalanuvchini tizimga kirgizish
function loginUser(user) {
    userSection.style.display = "block";
    loginSection.style.display = "none";
    userLoginDisplay.textContent = user.login;
    localStorage.setItem("currentUser", JSON.stringify(user));
}

// Ro'yxatdan o'tish tugmasi bosilganda
registerBtn.addEventListener("click", function() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if (!isValidLogin(login)) {
        alert("Login +998 bilan boshlanishi kerak va 13 ta belgidan iborat bo'lishi zarur!");
        return;
    }

    if (users.some(u => u.login === login)) {
        alert("Bu login allaqachon mavjud!");
    } else {
        const newUser = { login, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Ro'yxatdan o'tish muvaffaqiyatli!");
        loginUser(newUser);
    }
});

// Tizimga kirish tugmasi bosilganda
loginBtn.addEventListener("click", function() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        loginUser(user);
    } else {
        alert("Login yoki parol noto'g'ri!");
    }
});

// Chiqish tugmasi bosilganda
logoutBtn.addEventListener("click", function() {
    userSection.style.display = "none";
    loginSection.style.display = "block";
    localStorage.removeItem("currentUser");
});