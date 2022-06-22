<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GalleryModel;
use Illuminate\Support\Facades\Validator;
class GalleryController extends Controller
{
    public function index() {
        $images = GalleryModel::all();
        return response()->json(["status" => "success","data" => $images]);
    }
    public function upload(Request $request) {
        if ($request->has('upload')) {
            $img_name = $request->upload->getClientOriginalName();
            $request->upload->move(public_path('uploads'), $img_name);
            $request->merge(['image' => $img_name]);
        }
        $add = GalleryModel::create($request->all());
        if ($add) {
            return  response()->json([
                'success'=>true,
                'message'=>'the image added successfully',
                'status'=>'success',
            ]);
        }
        return  response()->json([
            'success'=>false,
            'message'=>'the image added unsuccessful',
            'status'=>'failed',
        ]);

    }
    public function edit(Request $request,$id) {
        if ($request->has('upload')) {
            $img_name = $request->upload->getClientOriginalName();
            $request->upload->move(public_path('uploads'), $img_name);
            $request->merge(['image' => $img_name]);
        }
        $edit =GalleryModel::where('id',$id)->update(['image'=>$img_name]);
        if ($edit) {
            return  response()->json([
                'success'=>true,
                'message'=>'the image added successfully',
                'status'=>'success',
            ]);
        }
        return  response()->json([
            'success'=>false,
            'message'=>'the image added unsuccessful',
            'status'=>'failed',
        ]);

    }
    public function delete($id){
        $item = GalleryModel::find($id);
        $item->delete();
        return response()->json([
            'message'=>'the image deleted successfully',
        ]);
    }
}
