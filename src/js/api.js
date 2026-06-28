const API_URL = 'https://azizah.co-id.id/sakupay/api';

const Api = {
    simpanToken(token) { localStorage.setItem('sakupay_token', token); },
    ambilToken() { return localStorage.getItem('sakupay_token'); },
    hapusToken() { localStorage.clear(); },
    simpanUser(user) { localStorage.setItem('sakupay_user', JSON.stringify(user)); },
    ambilUser() { return JSON.parse(localStorage.getItem('sakupay_user') || '{}'); },
    headers() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.ambilToken()}`
        };
    },
    async daftar(data) {
        const res = await fetch(`${API_URL}/daftar`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        return res.json();
    },
    async masuk(data) {
        const res = await fetch(`${API_URL}/masuk`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        return res.json();
    },
    async cekSaldo() {
        const res = await fetch(`${API_URL}/saldo`, { headers: this.headers() });
        return res.json();
    },
    async buatQR(nominal) {
        const res = await fetch(`${API_URL}/buat-qr`, { method: 'POST', headers: this.headers(), body: JSON.stringify({ nominal }) });
        return res.json();
    },
    // BARU: Buat QR untuk isi saldo (di-scan oleh merchant)
    async buatQRIsiSaldo(nominal) {
        const res = await fetch(`${API_URL}/buat-qr-isi-saldo`, { method: 'POST', headers: this.headers(), body: JSON.stringify({ nominal }) });
        return res.json();
    },
    async transfer(token) {
        const res = await fetch(`${API_URL}/transfer`, { method: 'POST', headers: this.headers(), body: JSON.stringify({ token }) });
        return res.json();
    },
    async riwayat() {
        const res = await fetch(`${API_URL}/riwayat`, { headers: this.headers() });
        return res.json();
    },

    // ===== SMART BUDGET =====
    async ambilBudget(bulan, tahun) {
        const res = await fetch(`${API_URL}/budget?bulan=${bulan}&tahun=${tahun}`, { headers: this.headers() });
        return res.json();
    },
    async buatBudget(data) {
        const res = await fetch(`${API_URL}/budget`, { method: 'POST', headers: this.headers(), body: JSON.stringify(data) });
        return res.json();
    },
    async hapusBudget(id) {
        const res = await fetch(`${API_URL}/budget/${id}`, { method: 'DELETE', headers: this.headers() });
        return res.json();
    },
    async ambilPengeluaran(idKategoriBudget) {
        const res = await fetch(`${API_URL}/pengeluaran?id_kategori_budget=${idKategoriBudget}`, { headers: this.headers() });
        return res.json();
    },
    async tambahPengeluaran(data) {
        const res = await fetch(`${API_URL}/pengeluaran`, { method: 'POST', headers: this.headers(), body: JSON.stringify(data) });
        return res.json();
    }
};

export default Api;