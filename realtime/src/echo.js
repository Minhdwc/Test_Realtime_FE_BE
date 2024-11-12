// echo.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'pusher',
    key: '64940ba62e7f545bd4c8',  // Thay bằng `PUSHER_APP_KEY` trong .env của Laravel
    cluster: 'ap2',  // Thay bằng `PUSHER_APP_CLUSTER` trong .env
    forceTLS: true,
});

export default echo;
