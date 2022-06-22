<?php

namespace App\Http\Controllers;

use App\Models\Discount;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public function index()
    {
        $data = Discount::all();
        return response()->json(['data' => $data]);
    }

    public function add(Request $request)
    {
        if ($request->has('upload')) {
            $img_name = $request->upload->getClientOriginalName();
            $request->upload->move(public_path('uploads'), $img_name);
            $request->merge(['image' => $img_name]);
        }
         $add =Discount::create($request->all());
         if($add){
            return response()->json([
                'success' => true,
                'message' => 'discount created successfully',
            ]);
         }
        return response()->json([
            'success' =>false,
            'message' => 'discount not created successfully',
        ]);
    }

    public function editDiscount(Request $request,$id)
    {
        $name = $request->name;
        $image = $request->image;
        $description = $request->description;
        $expired_date = $request->expired_date;
        $discount_percent = $request->discount_percent;
        $add = Discount::where('id',$id)->update([
            'name' => $name,
            'image' => $image,
            'description' => $description,
            'expired_date' => $expired_date,
            'discount_percent' => $discount_percent,
        ]);
        if ($add){
            return  response()->json([
                'success'=>true,
                'message'=>'the discount edited successfully',
            ]);
        }
        return  response()->json([
            'success'=>false,
            'message'=>'the discount edited unsuccessful',
        ]);
    }

    public function getID($id)
    {
        $data = Discount::where('id',$id)->get();
        return response()->json([
            'data' => $data,
        ]);
    }
    public function Delete($id)
    {
        $data = Discount::find($id);
        $data->delete();
        return response()->json([
            'success' => true,
            'message' => 'Discount deleted successfully',
        ]);
    }
}
