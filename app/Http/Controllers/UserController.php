<?php

namespace App\Http\Controllers;
use Auth;
use App\User;
use Validator;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request){        
        $status = 401;
        $response = ['error' => 'Unauthorised'];
        if (Auth::attempt($request->only(['email','password']))) {
            $status = 200;
            $response = [
                'user' => Auth::user(),
                'token' => Auth::user()->createToken('token')->accessToken,
            ];
        }
        return response()->json($response, $status);
    }
    public function register(Request $request){
        $request->validate([
            'email' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        $user = new User([
            'email' => $request->email,
            'name'  => $request->name,
            'password' => bcrypt($request->password),             
        ]);
        $user->save();
        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);   
    }
    public function getUser(User $user){
        return response()->json($user,200); 
    }
    public function addScore(Request $request,User $user){
        $status = $user->update(
            $request->only(['score'])
        );
        return response()->json([
            'status' => $status,
            'message' => $status ? 'Score Updated!' : 'Error Updating Score'
        ]);         
    }
}