<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return $categories;

        // http://127.0.0.1:8000/api/categories GET
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
     * @param  \App\Http\Requests\StoreCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $category =  Category::create([
            'title' => $request->title,
            'description' => $request->description,
            'location' => $request->location,
            'category_type' => $request->category_type,
            'status' => $request->status,
            'image' => $request->image
        ]);

        return $category;
        // http://127.0.0.1:8000/api/categories POST

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $category = Category::find($category->id);
        return $category;
    }
    public function getCategoryFilter($categoryName)
    {
        $categories = Category::where('category_type', $categoryName)->get();
        return $categories;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        $category = Category::find($category->id);
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category = Category::find($category->id);
        $category->title = $request->title;
        $category->image = $request->image;
        $category->location = $request->location;
        $category->description = $request->description;
        $category->category_type = $request->category_type;
        $category->status = $request->status;

        $category->save();
        return $category;

        // http://127.0.0.1:8000/api/categories/1 PUT
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category = Category::find($category->id);
        $category->delete();
        return $category;

        // http://127.0.0.1:8000/api/categories/1 DELETE

    }
}
