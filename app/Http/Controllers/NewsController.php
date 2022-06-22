<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data= News::all();
        return response()->json(['data'=>$data]);
    }
    public function index2()
    {
        $data= News::orderby('id', 'asc')->limit(4)->get();
        return response()->json(['data'=>$data]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function Addnews(Request $request)
    {
        if ($request->has('upload')) {
            $img_name = $request->upload->getClientOriginalName();
            $request->upload->move(public_path('uploads'), $img_name);
            $request->merge(['image' => $img_name]);
        }
        $add = News::create($request->all());
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function editNews(Request $request,$id)
    {
        $add = News::where('id',$id)->update($request->all());
        if ($add){
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
    public function getIdValue($id){
       $data = News::where('id',$id)->get();
       return response()->json(['data'=>$data]);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function DeleteNews($id)
    {
        $news = News::find($id);
        $news->delete();
        return response()->json([
            'success'=>true,
            'message'=>'News deleted successfully',
        ]);
    }
}
