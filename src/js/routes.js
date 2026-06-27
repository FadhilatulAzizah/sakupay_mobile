import LoginPage from '../pages/login.f7';
import RegisterPage from '../pages/register.f7';
import HomePage from '../pages/home.f7';
import QRTerimaPage from '../pages/qr-terima.f7';
import QRScanPage from '../pages/qr-scan.f7';
import RiwayatPage from '../pages/riwayat.f7';
import EstatementPage from '../pages/estatement.f7';
import IsiSaldoPage from '../pages/isi-saldo.f7';
import SmartBudgetPage from '../pages/smart-budget.f7';

var routes = [
  { path: '/', component: LoginPage },
  { path: '/login/', component: LoginPage },
  { path: '/register/', component: RegisterPage },
  { path: '/home/', component: HomePage },
  { path: '/qr-terima/', component: QRTerimaPage },
  { path: '/qr-scan/', component: QRScanPage },
  { path: '/riwayat/', component: RiwayatPage },
  { path: '/estatement/', component: EstatementPage },
  { path: '/isi-saldo/', component: IsiSaldoPage },
  { path: '/smart-budget/', component: SmartBudgetPage },
];

export default routes;