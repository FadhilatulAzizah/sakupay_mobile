import HomePage from '../pages/home.f7';
import LoginPage from '../pages/login.f7';
import RegisterPage from '../pages/register.f7';
import QRTerimaPage from '../pages/qr-terima.f7';
import QRScanPage from '../pages/qr-scan.f7';
import RiwayatPage from '../pages/riwayat.f7';
import EstatementPage from '../pages/estatement.f7';

var routes = [
    { path: '/', component: LoginPage },
    { path: '/login/', component: LoginPage },
    { path: '/register/', component: RegisterPage },
    { path: '/home/', component: HomePage },
    { path: '/qr-terima/', component: QRTerimaPage },
    { path: '/qr-scan/', component: QRScanPage },
    { path: '/riwayat/', component: RiwayatPage },
    { path: '/estatement/', component: EstatementPage },
];

export default routes;