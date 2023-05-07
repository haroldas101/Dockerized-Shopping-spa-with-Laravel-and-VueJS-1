<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ProductController extends Controller
{ 
    public function index()
    {
        return Product::with('categories:id,name')
            ->get();
    }

    public function store(CreateProductRequest $request)
    {
        $request['slug'] = Str::slug($request['name']);
        $product = Product::create($request->only(['name', 'slug', 'description', 'price','imgUrl']));

        return response()->json([
            "product" => $product
        ], 201);
    }
}
// {

//     public function index()
//     {

//         $products = Product::all();

//         return ProductResource::collection(Product::all());
//         // return Product::with('categories:id,name')
//         //     ->get();
//     }
//     public function show(Product $product)
// {
//     return new ProductResource($product);
// }

//     public function store(CreateProductRequest $request)
//     {
//         // $request['slug'] = Str::slug($request['name']);
//         // $product = Product::create($request->only(['name', 'slug', 'description', 'price','imgUrl']));

//         // return response()->json([
//         //     "product" => $product
//         // ], 201);

//         $validated = $request->validate([
//             'name' => 'required|string|max:255',
//             'description' => 'required|string|max:255',
//             'price' => 'required|numeric',
//             'imgUrl' => 'nullable|string|max:255', // new validation rule for imgUrl
//         ]);
    
//         $product = Product::create($validated);
    
//         // return response()->json([
//         //     'product' => $product,
//         //     'message' => 'Product created successfully'
//         // ], 201);
//         return new ProductResource($product);
//     }
//     public function update(Request $request, Product $product)
//     {
//         $validated = $request->validate([
//             'name' => 'nullable|string|max:255',
//             'description' => 'nullable|string|max:255',
//             'price' => 'nullable|numeric',
//             'imgUrl' => 'nullable|string|max:255', // new validation rule for imgUrl
//         ]);
    
//         $product->update($validated);
    
//         // return response()->json([
//         //     'product' => $product,
//         //     'message' => 'Product updated successfully'
//         // ], 200);
//         return new ProductResource($product);
//     }
//     public function destroy(Product $product)
// {
//     $product->delete();

//     return response()->json([
//         'message' => 'Product deleted successfully'
//     ], 200);
// }
// }
