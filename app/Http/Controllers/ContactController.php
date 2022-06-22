<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
class ContactController extends Controller
{
    public function index(){
        $data =Contact::all();
        return response()->json(['data'=>$data]);
    }
    public function addContact(Request $request){
      $contact = new Contact();
      $contact->name = $request->name;
      $contact->phone = $request->phone;
      $contact->email = $request->email;
      $contact->title = $request->title;
      $contact->message = $request->message;
      $contact->save();
      return response()->json([
        'success'=>true,
        'notify' =>'Your Concern has been sent successfully,
                     we will contact your as soon as possible',
      ]);
    }

    public function delete($id){
     $item= Contact::find($id);
     $item->delete();
     return response()->json([
        'success'=>true,
        'notify'=>'this has been deleted',
     ]);
    }
}
