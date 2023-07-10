import {
    BrowserVideo,
    ChatSmile,
    EditRectangle,
    Facebook,
    Clapperboard,
    InRectangle,
    Instagram,
    Mail,
    PencilPaper,
    Receipt,
    Report,
    Search,
    Setting,
    Shield,
    Telegram,
    Ticket,
    TwitterSparrow,
    User,
    UserPolygon,
    UsersTriple,
    VerticalFilmstripDashed,
    Wallet,
    MedalStar,
} from 'react-huge-icons/outline';
import { Routes } from '@/constant/Routes';

export const userMenuItem = [
    { id: 1, href: Routes.dashboardWallet, label: 'کیف پول', role: 'user', Icon: Wallet },
    { id: 2, href: Routes.dashboardEditProfile, label: 'اطلاعات کاربری', role: 'user', Icon: EditRectangle },
    { id: 3, href: Routes.dashboardAuthentication, label: 'احراز هویت', role: 'user', Icon: Shield },
    { id: 4, href: Routes.dashboardTransactions, label: 'تراکنش ها', role: 'user', Icon: Receipt },
    { id: 5, href: Routes.dashboardTickets, label: 'بلیط های من', role: 'user', Icon: Ticket },
];

export const adminMenuItem = [
    { id: 1, href: Routes.adminDashboardCelebrity, label: 'سلبریتی', role: 'user', Icon: MedalStar },
    { id: 2, href: Routes.adminDashboardFilm, label: 'فیلم', role: 'user', Icon: Clapperboard },
    { id: 3, href: Routes.adminDashboardComment, label: 'کامنت', role: 'user', Icon: ChatSmile },
    { id: 4, href: Routes.adminDashboardReview, label: 'ریویو', role: 'user', Icon: PencilPaper },
    { id: 5, href: Routes.adminDashboardReports, label: 'گزارشات', role: 'user', Icon: Report },
    { id: 6, href: Routes.adminDashboardUsers, label: 'کاربران', role: 'user', Icon: UsersTriple },
    { id: 7, href: Routes.adminDashboardSetting, label: 'تنظیمات', role: 'user', Icon: Setting },
];
export const footerMenu = [
    { id: 1, href: '', label: 'جدول فروش' },
    { id: 2, href: '', label: 'سوالات متداول' },
    { id: 3, href: '', label: 'برنامه‌های آینده' },
    { id: 4, href: '', label: 'آرشیو فیلم‌ها' },
    { id: 5, href: '', label: 'قوانین و مقررات' },
    { id: 6, href: '', label: 'درباره ما' },
    { id: 7, href: '', label: 'تماس با سینماتیکت' },
    { id: 8, href: '', label: 'مجله سینماتیکت' },
];

export const footerSocils = [
    { id: 1, href: 'https://www.instagram.com/cinematicket', label: 'اینستاگرام', Icon: Instagram },
    { id: 2, href: 'https://telegram.me/cinematicketorg', label: 'تلگرام', Icon: Telegram },
    { id: 3, href: 'https://twitter.com/CinemaTicket', label: 'تویتر', Icon: TwitterSparrow },
    { id: 4, href: 'https://www.facebook.com/cinematicket', label: 'فیسبوک', Icon: Facebook },
    { id: 5, href: 'support@cinematicket.org', label: 'ایمیل', Icon: Mail },
];

export const footerMobile = [
    { id: 1, href: '/home/movie', label: 'فیلم', Icon: VerticalFilmstripDashed },
    { id: 2, href: 'https://telegram.me/cinematicketorg', label: 'سینما', Icon: BrowserVideo },
    { id: 3, href: 'https://twitter.com/CinemaTicket', label: 'جستجو', Icon: Search },
];

export const notLoggedIn = [
    { id: 1, href: '/auth/login?returnUrl=%2f', label: 'ورود', Icon: InRectangle },
    { id: 2, href: '/auth/register?returnUrl=%2f', label: 'ثبت نام', Icon: User },
    { id: 3, href: '/auth/admin?returnUrl=%2f', label: 'پنل ادمین', Icon: UserPolygon },
];

export const userLoggedIn = [
    { id: 1, href: Routes.dashboardWallet, label: 'کیف پول', role: 'user', Icon: Wallet },
    { id: 2, href: Routes.dashboardEditProfile, label: 'اطلاعات کاربری', role: 'user', Icon: EditRectangle },
    { id: 3, href: Routes.dashboardAuthentication, label: 'احراز هویت', role: 'user', Icon: Shield },
    { id: 4, href: Routes.dashboardTransactions, label: 'تراکنش ها', role: 'user', Icon: Receipt },
    { id: 5, href: Routes.dashboardTickets, label: 'بلیط های من', role: 'user', Icon: Ticket },
];
export const adminLoggedIn = [{ id: 1, href: Routes.adminDashboard, label: 'داشبورد ادمین', Icon: Wallet, role: 'user' }];
