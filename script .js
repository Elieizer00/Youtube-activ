const authForm = document.getElementById('auth-form');
const authButton = document.getElementById('auth-button');
const registerButton = document.getElementById('register-button');
const userSection = document.getElementById('user-section');
const userNameSpan = document.getElementById('user-name');

authButton.addEventListener('click', function(event) {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        userSection.style.display = 'block';
        document.getElementById('auth-section').style.display = 'none';
        userNameSpan.textContent = login;
    } else {
        alert('Login yoki parol noto\'g\'ri. Iltimos, qaytadan urinib ko\'ring.');
    }
});

registerButton.addEventListener('click', function() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (!login.startsWith('+998')) {
        alert('Login +998 bilan boshlanishi kerak!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(u => u.login === login);

    if (userExists) {
        alert('Bunday login allaqachon mavjud. Iltimos, boshqa login tanlang.');
    } else {
        users.push({ login, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Ro\'yxatdan o\'tish muvaffaqiyatli! Endi tizimga kiring.');
    }
});