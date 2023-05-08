<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // $productSuffixes = ['Sweater', 'Pants', 'Shirt', 'Glasses', 'Hat', 'Socks'];
        // $name = $this->faker->company . ' ' . Arr::random($productSuffixes);
        //     $product = new Product;
        //     $product->name = 'Example Product';
        //     $product->slug = 'example-product';
        //     $product->description = 'This is an example product.';
        //     $product->price = 10.99;
        //     $product->imgUrl = 'https://example.com/image.jpg';
        //     $product->save();
        // return [
        //     'name' => $name,
        //     'slug' => Str::slug($name),
        //     'description' => $this->faker->realText(320),
        //     'price' => $this->faker->numberBetween(10000, 100000),
        // ];
        return [
            'name' => $this->faker->words(3, true),
            'description' => $this->faker->paragraph(2),
            'price' => $this->faker->numberBetween(10, 100),
            'imgUrl' => $this->faker->imageUrl(),
        ];
       
    }
}
