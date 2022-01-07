<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function homesData()
    {
        $homesData = Home::all();
        return response()->json(["homesData" => $homesData], 200);
    }

    public function homeData()
    {
        $homeData = Home::latest("updated_at")->first();
        return response()->json(["homeData" => $homeData], 200);
    }
    public function editData($id)
    {
        $editData = Home::find($id);
        return response()->json(["editData" => $editData], 200);
    }

    public function index()
    {
        return view('users');
    }

    public function adminHome()
    {
        return view('admin');
    }
    public function add(Request $request)
    {
        $img = $request->file('bgImg');
        $imgName = time() . rand() . '.' . $img->extension();
        $img->move(public_path('frontEnd/assets/img/home/bg'), $imgName);
        $bgImg = 'frontEnd/assets/img/home/bg/' . $imgName;
        $home = new Home();
        $home->bgImg = $bgImg;
        $home->bgColor = $request->bgColor;
        $home->bgOpacity = $request->bgOpacity;
        $home->name = $request->name;
        $home->focusTitle = $request->focusTitle;
        $home->shortDescription = $request->shortDescription;
        $home->save();
    }
    public function edit(Request $request,$id)
    {
        $home = Home::find($id);
        // return response()->json(["editHome" => $editHome], 200);
        // return $editHome;
    }
}
