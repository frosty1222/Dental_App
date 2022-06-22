<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Auth;
class UserController extends Controller
{
    public function setCookie(Request $request,$email) {
        $response = new Response('Hello World');
        $response->withCookie(cookie('email',$email));
        return $response;
     }
     function checkOldPassword($oldPassword, $user) {
        if (\Hash::check($oldPassword, $user)) {
           return true;
        }
        else {
            return back()->withErrors([
                'message' => 'Your old password is incorrect.'
            ]);
        }
    }
    public function myLogin(Request $request){
           setcookie('email',$request->email);
           $email = $request->email;
           $password = $request->password;
           $data = User::where('email',$email)->get();
           foreach($data as $row){
             $this->checkOldPassword($password,$row['password']);
           }
            return response()->json([
                'success'=>true,
                'message'=>'login successful',
                'status'=>'true',
            ]);
    }
    public function myRegister(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'password' => 'required|min:7',
            'email' => 'required|email|unique:users',
        ], [
            'name.required' => 'Name field is required.',
            'password.required' => 'Password field is required.',
            'email.required' => 'Email field is required.',
            'email.email' => 'Email field must be email address.',
        ]);
    $validatedData['password'] = bcrypt($validatedData['password']);
    $user = User::create($validatedData);
    if($user){
        return response()->json([
            'success' => true,
            'message'=>'You have successfully registered',
        ]);
    }
    return response()->json([
        'success' =>false,
        'message'=>'You have not successfully registered',
    ]);
    }
}
