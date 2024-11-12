<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function sendMessage(Request $request)
    {
        $message = $request->input('message');
        broadcast(new MessageSent($message));  // Broadcast sự kiện đến Pusher

        return response()->json(['status' => 'Message sent successfully']);
    }
}
