<template>

    <div class="w-full">
        <div class="lg:w-1/2 w-full mx-auto mt-8 overflow-auto">

            <div class="lg:w-2/3 w-full mx-auto mt-8">
                <div class="flex flex-wrap -mx-2 mt-8">

                    <!-- Start getting user information-->
                    <form @submit.prevent="createProduct">
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    v-model="form.name"
                                    :disabled="loading"
                                >
                            </div>
                        </div>

                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="description" class="leading-7 text-sm text-gray-600">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    v-model="form.description"
                                    :disabled="loading"
                                >
                            </div>
                        </div>

                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="price" class="leading-7 text-sm text-gray-600">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    v-model="form.price"
                                    :disabled="loading"
                                >
                            </div>
                        </div>
                        
                        <div class="p-2 w-full">

                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="image" class="leading-7 text-sm text-gray-600">Image</label>
                                    <input type="text" name="imgUrl" v-model="form.imgUrl">
                                <div class="h-64 w-full border-dashed border-2 border-gray-400 rounded-lg">
                                     <img class="h-full w-full object-contain" :src="form.imgUrl || 'https://via.placeholder.com/640x480.png?text=Add+an+image'" :alt="form.name">
                                </div>
                                <div class="mt-2">
                                    <input type="text" id="imgUrl" name="imgUrl" v-model="form.imgUrl" placeholder="Enter image URL" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                                </div>
                            </div>
                         </div>


                        <div class="p-2 w-full">
                            <button
                                type="submit"
                                class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                :disabled="this.loading"
                                v-text="this.loading ? 'Loading...' : 'Create'"
                            ></button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import validate from 'validate.js';

export default {
    name: "register",
    data() {
        return {
            loading: false,
            form: {
                name: '',
                description: '',
                price: '',
                imgUrl: ''
            },
            errors: ''
        }
    },

    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },
    methods: {
    handleImageChange(event) {
        const file = event.target.files[0];
    //   if (!file) return;

      const reader = new FileReader();
    //   reader.readAsDataURL(file);

    //   reader.onload = (event) => {
    //     this.$set(this.form, 'image', event.target.result);
    //   };
        reader.onload = (event) => {
             this.form.imgUrl = event.target.result;
        };
        reader.readAsDataURL(file);
    }
  },
    methods: {
        createProduct() {
  const { name, price, description, imgUrl = ""} = this.$data.form;

  if (!imgUrl) {
    this.formErrors.imgUrl = ["Image URL can't be blank"];
    return;
  }
  
  axios
    .post('/api/products', {
      name,
      price,
      description,
      imgUrl: imgUrl.trim() // trim the value here
    })
    .then(response => {
      this.$router.push({ name: 'products.show', params: { id: response.data.id } });
    })
    .catch(error => {
      if (error.response.status === 422) {
        this.formErrors = error.response.data.errors;
      } else {
        console.error(error);
      }
    });
},



        // createProduct() {
        //     this.errors = null;

        //     const constraints = this.getConstraints();

        //     const errors = validate(this.$data.form, constraints)

        //     if (errors) {
        //         this.errors = errors;
        //         this.$toaster.error(errors);
        //         return;
        //     }

        //     if (!imgUrl) {
        // this.errors = { imgUrl: ["Img url can't be blank"] };
        // this.$toaster.error(this.errors);
        // return;
    // }


//     axios.post('/api/products', {
//   name: this.$data.form.name,
//   description: this.$data.form.description,
//   price: this.$data.form.price,
//   img_url: this.$data.form.image_url
// }).then((response) => {
//   this.$toaster.success(
//     `Product: ${this.$data.form.name}, Created successfully.`
//   );
//   this.$router.push('/');
// });


            // axios.post('/api/products', this.$data.form)
            //     .then((response) => {
            //         this.$toaster.success(
            //             `Product: ${this.$data.form.name}, Created successfully.`
            //         );
            //         this.$router.push('/')
            //     });







        //     this.errors = null;

        //     const constraints = this.getConstraints();

        //     const errors = validate(this.$data.form, constraints)

        //     if (errors) {
        //         this.errors = errors;
        //         this.$toaster.error(errors);
        //     return;
        //     }

        //   axios.post('/api/products', {
        //     name: this.$data.form.name,
        //     description: this.$data.form.description,
        //      price: this.$data.form.price,
        //     imgUrl: this.$data.form.imgUrl, // pass in the URL directly
        //     }).then((response) => {
        //         this.$toaster.success(
        //         `Product: ${this.$data.form.name}, Created successfully.`
        //     );
        //     this.$router.push('/');
    // });

        // },
        getConstraints() {
            return {
                name: {
                    presence: true,
                    length: {
                        minimum: 3,
                        message: 'Must be at least 3 characters long'
                    }
                },
                description: {
                    presence: true,
                    length: {
                        minimum: 15,
                        message: 'Must be at least 15 characters long'
                    }
                },
                price: {
                    presence: true,
                    numericality: true,
                },
                imgUrl: {
                    presence: true,
                    // url:{
                        url: {
    allowLocal: true,
    schemes: ['http', 'https', 'ftp'],
    message: 'Must be a valid URL'
  },
                    length: {
                        allowLocal: true,
                        message: 'Must be a valid URL'
                        }
                }
            }
        },
    }

}
</script>

<style scoped>

</style>
