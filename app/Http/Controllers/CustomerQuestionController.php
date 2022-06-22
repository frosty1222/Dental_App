<?php

namespace App\Http\Controllers;

use App\Models\CustomerQuestion;
use Illuminate\Http\Request;

class CustomerQuestionController extends Controller
{
    public function index()
    {
       $data = CustomerQuestion::all();
       return response()->json([
        'data' => $data,
       ]);
    }
    public function add(Request $request)
    {
        if ($request->has('upload')) {
            $img_name = $request->upload->getClientOriginalName();
            $request->upload->move(public_path('uploads'), $img_name);
            $request->merge(['image' => $img_name]);
        }
         $add = CustomerQuestion::create($request->all());
         if($add){
            return response()->json([
                'success' => true,
                'message' => 'Customer Question created successfully',
            ]);
         }
        return response()->json([
            'success' =>false,
            'message' => 'Customer Question not created successfully',
        ]);
    }

    public function edit(Request $request,$id)
    {
        $name = $request->name;
        $image = $request->image;
        $advantage = $request->advantage;
        $disadvantage = $request->disadvantage;
        $another = $request->another;
        $add =CustomerQuestion::where('id',$id)->update([
            'name' => $name,
            'image' => $image,
            'advantage' => $advantage,
            'disadvantage' => $disadvantage,
            'another' => $another,
        ]);
        if ($add){
            return  response()->json([
                'success'=>true,
                'message'=>'the Customer Question:: edited successfully',
            ]);
        }
        return  response()->json([
            'success'=>false,
            'message'=>'the Customer Question:: edited unsuccessful',
        ]);
    }

    public function getID($id)
    {
        $data =CustomerQuestion::where('id',$id)->get();
        return response()->json([
            'data' => $data,
        ]);
    }
    public function Delete($id)
    {
        $data =CustomerQuestion::find($id);
        $data->delete();
        return response()->json([
            'success' => true,
            'message' => 'Customer question deleted successfully',
        ]);
    }
}
