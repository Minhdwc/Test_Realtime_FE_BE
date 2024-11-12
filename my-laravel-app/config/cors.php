<?php

return [

    /*
    |----------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |----------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    */

    // Định nghĩa các đường dẫn sẽ áp dụng CORS (bao gồm cả API và broadcasting)
    'paths' => ['api/*', 'broadcasting/auth'],  // Thêm đường dẫn broadcasting/auth cho Pusher

    // Định nghĩa các nguồn (origins) được phép truy cập
    'allowed_origins' => ['http://localhost:3000'],  // Địa chỉ của frontend React (thay đổi nếu cần)

    // Các phương thức HTTP được phép (ở đây cho phép tất cả)
    'allowed_methods' => ['*'],  // Bạn có thể giới hạn các phương thức như ['GET', 'POST'] nếu cần

    // Các header mà frontend có thể gửi
    'allowed_headers' => ['*'],  // Cho phép tất cả headers

    // Các header mà frontend có thể nhìn thấy từ server
    'exposed_headers' => [],  // Nếu cần, bạn có thể thêm các header lộ ra ở đây

    // Thời gian cache preflight request (0 có nghĩa là không cache)
    'max_age' => 0,

    // Hỗ trợ cookie và xác thực qua CORS (nếu sử dụng)
    'supports_credentials' => false,  // Nếu cần cookie, chuyển thành true

];
