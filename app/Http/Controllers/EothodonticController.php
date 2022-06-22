<?php

namespace App\Http\Controllers;

use App\Models\Eothodontic;
use Illuminate\Http\Request;

class EothodonticController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $data =  Eothodontic::all();
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
         $add =Eothodontic::create($request->all());
         if($add){
            return response()->json([
                'success' => true,
                'message' => 'Eothodontic created successfully',
            ]);
         }
        return response()->json([
            'success' =>false,
            'message' => 'Eothodontic not created successfully',
        ]);
    }

    public function edit(Request $request,$id)
    {
        $name = $request->name;
        $image = $request->image;
        $advantage = $request->advantage;
        $disadvantage = $request->disadvantage;
        $another = $request->another;
        $add = Eothodontic::where('id',$id)->update([
            'name' => $name,
            'image' => $image,
            'advantage' => $advantage,
            'disadvantage' => $disadvantage,
            'another' => $another,
        ]);
        if ($add){
            return  response()->json([
                'success'=>true,
                'message'=>'the Eothodontic edited successfully',
            ]);
        }
        return  response()->json([
            'success'=>false,
            'message'=>'the Eothodontic edited unsuccessful',
        ]);
    }

    public function getID($id)
    {
        $data = Eothodontic::where('id',$id)->get();
        return response()->json([
            'data' => $data,
        ]);
    }
    public function Delete($id)
    {
        $data = Eothodontic::find($id);
        $data->delete();
        return response()->json([
            'success' => true,
            'message' => 'Eothodontic deleted successfully',
        ]);
    }
}
