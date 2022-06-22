<?php

namespace App\Http\Controllers;

use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class ServiceCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ServiceCategory::all();
        return response()->json(['data'=>$data]);
    }
    public function getIdReactCategoryEdit($id){
       $data = ServiceCategory::where('id',$id)->get();
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
    public function addNewCategory(Request $request)
    {
        $categoryService = new ServiceCategory();
        $categoryService->name = $request->name;
        $categoryService->service_type = $request->service_type;
        $categoryService->status = $request->status;
        $data = $categoryService->save();
        if($data) {
            return response()->json([
                'success' => true,
                'message' =>'add categoryService successfully',
                'status'=>'true',
            ]);
        }
        return response()->json([
            'success' => false,
            'message' =>'add categoryService unsuccessful',
            'status'=>'false',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceCategory  $serviceCategory
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceCategory $serviceCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceCategory  $serviceCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceCategory $serviceCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ServiceCategory  $serviceCategory
     * @return \Illuminate\Http\Response
     */
    public function EditCategory(Request $request, ServiceCategory $serviceCategory,$id)
    {
        $name = $request->name;
        $service_type = $request->service_type;
        $status = $request->status;
        $data = ServiceCategory::where('id',$id)->update(['name'=>$name,'service_type' => $service_type,'status' => $status]);
        if($data){
            return response()->json([
                'success' => true,
                'message' =>'add categoryService successfully',
                'status'=>'true',
            ]);
        }
        return response()->json([
            'success' => false,
            'message' =>'add categoryService unsuccessfully',
            'status'=>'false',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceCategory  $serviceCategory
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $categoryService = ServiceCategory::find($id);
        $categoryService ->delete();
        return response()->json([
            'success' => true,
            'message'=>'delete successfully',
        ]);
    }
}
