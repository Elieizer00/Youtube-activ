document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Bu yerda foydalanuvchilarni haqiqiy login ma'lumotlari bilan tekshirish
    if (username === '+998123456789' && password === 'password') {
        // Kirish muvaffaqiyatli bo'lsa, foydalanuvchini asosiy sahifaga yo'naltirish
        window.location.href = 'dashboard.html'; // Asosiy sahifa
    } else {
        // Xato login yoki parol
        document.getElementById('errorMessage').innerText = 'Xato login yoki parol. Iltimos qaytadan urinib ko\'ring.';
    }
});