document.addEventListener('DOMContentLoaded', () => {
    // 1. Fungsionalitas Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // Toggle class 'active' untuk menampilkan/menyembunyikan menu
            nav.classList.toggle('active');
            // Ganti ikon hamburger menjadi ikon close (opsional)
            menuToggle.classList.toggle('fa-bars');
            menuToggle.classList.toggle('fa-times');
        });

        // Tutup menu jika link di dalamnya diklik (di mobile)
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    nav.classList.remove('active');
                    menuToggle.classList.add('fa-bars');
                    menuToggle.classList.remove('fa-times');
                }
            });
        });
    }

    // 2. Fungsionalitas Tombol Beli Sekarang (Kartu Produk)
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Mencegah navigasi ke atas jika tombol berada dalam link
            event.preventDefault();
            const productName = button.closest('.product-card').querySelector('h3').textContent;
            alert(`Anda memilih untuk membeli '${productName}'! Silakan lanjutkan ke checkout.`);
        });
    });
    
    // 3. Fungsionalitas Tombol Tambah ke Keranjang
    const addCartButtons = document.querySelectorAll('.add-cart-btn');
    addCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productName = button.closest('.product-card').querySelector('h3').textContent;
            alert(`'${productName}' telah ditambahkan ke Keranjang Belanja Anda.`);
        });
    });

    // 4. Fungsionalitas Mobile Buy Bar
    const mobileBuyBtn = document.getElementById('mobile-buy');
    const mobileCartBtn = document.getElementById('mobile-cart');

    if (mobileBuyBtn) {
        mobileBuyBtn.addEventListener('click', () => {
            alert('Aksi Beli Semua di Mobile: Mengarahkan Anda ke halaman ringkasan keranjang!');
        });
    }
    
    if (mobileCartBtn) {
        mobileCartBtn.addEventListener('click', () => {
            alert('Aksi Lihat Keranjang di Mobile: Menampilkan isi keranjang belanja!');
        });
    }
});