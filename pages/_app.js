import '../src/app/globals.css'; // این خط برای استایل‌های جهانی است
import 'flowbite/dist/flowbite.min.js'; // این خط را اضافه کنید

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;