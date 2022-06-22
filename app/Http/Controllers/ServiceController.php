<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data =Service::all();
        return response()->json(['data'=>$data]);
    }
    public function index2()
    {
        $data =Service::orderby('id', 'asc')->limit(4)->get();
        return response()->json(['data'=>$data]);
    }
    public function getIdReactServiceEdit($id){
        $data = Service::find($id)->get();
        return response()->json(['data'=>$data]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addNewService(Request $request)
    {
        if ($request->has('upload')) {
            $img_name = $request->upload->getClientOriginalName();
            $request->upload->move(public_path('uploads'), $img_name);
            $request->merge(['image' => $img_name]);
        }
        $add = Service::create($request->all());
        if ($add) {
            return  response()->json([
                'success'=>true,
                'message'=>'the service added successfully',
            ]);
        }
        return  response()->json([
            'success'=>false,
            'message'=>'the service added unsuccessful',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function EditService(Request $request,$id)
    {
        $name =$request->name;
        $image =$request->image;
        $description =$request->description;
        $type =$request->type;
        $advantage_text =$request->advantage_text;
        $add =Service::where('id',$id)->update([
            'name'=>$name,
            'image'=>$image,
            'description'=>$description,
            'type'=>$type,
            'advantage_text'=>$advantage_text,
        ]);
        if ($add) {
            return  response()->json([
                'success'=>true,
                'message'=>'the service edited successfully',
            ]);
        }
        return  response()->json([
            'message'=>'the service edited unsuccessful',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $item= Service::find($id);
        $item->delete();
        return response()->json([
            'success'=>true,
            'message'=>'Successfully destroyed',
        ]);
    }
}
