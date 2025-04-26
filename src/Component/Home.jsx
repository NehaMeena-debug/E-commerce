import Category from "./Category"
 import Product from "./Product"
 import Review from "./Review"
const Home = () =>{
    return(
        <>
        <div className="bg-gray-100  relative overflow-hidden w-full">
       <div className=" overflow-x-auto whitespace-nowrap scrollbar-hide flex flex-wrap  animate-scroll overflow-hidden   justify-center shadow-lg text-center rounded-xl  bg-gray-400 gap-4 p-2  space-x-4">
        <Category
          img="./catagory/BBcream.jpeg"
          name="BB creame"
        />
        <Category
          img="./catagory/blush.jpeg"
          name="Blush"
        />
        <Category
          img="./catagory/eyeshadow.jpeg"
          name="Eyeshadow"
        />
        <Category
          img="./catagory/maybeline.jpeg"
          name="Maybeline"
        />
  
        <Category
          img="./catagory/lip_plumber.jpeg"
          name="Lip plumber"
        />
        <Category
          img="./catagory/fluid_f.jpeg"
          name="Foundation"
        />
         <Category
          img="./catagory/valvet.jpeg"
          name="Valvet shadow"
        />
        <Category
          img="./catagory/lip_oil.jpeg"
          name="Lip oil"
        />
        

        <Category
          img="./catagory/BBcream.jpeg"
          name="BB creame"
        />
        <Category
          img="./catagory/blush.jpeg"
          name="Blush"
        />
        <Category
          img="./catagory/eyeshadow.jpeg"
          name="Eyeshadow"
        />
        <Category
          img="./catagory/maybeline.jpeg"
          name="Maybeline"
        />
  
        <Category
          img="./catagory/lip_plumber.jpeg"
          name="Lip plumber"
        />
        <Category
          img="./catagory/fluid_f.jpeg"
          name="Foundation"
        />
         <Category
          img="./catagory/valvet.jpeg"
          name="Valvet shadow"
        />
        <Category
          img="./catagory/lip_oil.jpeg"
          name="Lip oil"
        />
         
        
        </div>
        </div>


        <h1 className="font-monoton text-center m-12 text-3xl">Featured Product </h1>
        <div className="grid grid-cols-3 gap-6 mt-8 mb-12">
 
       <Product
        img="/product/product_1.jpg"
        name="Irresistible givenchy"
        description="Perfume, lipstick, and cream for elegance."
        button="Buy"
       />
        <Product
        img="/product/product_2.jpg"
        name="Becca Lipstick"
        description="Smooth, creamy,  and richly pigmented."
        button="Buy"
       />
        <Product
        img="/product/product_3.jpg"
        name="Get the Baby Brown kit"
        description="Foundation, Highlighter, Lipstick."
        button="Buy"
       />
        <Product
        img="/product/product_5.jpg"
        name="Foundatoin kit"
        description="Flawless coverage for a radiant, smooth finish"
        button="Buy"
       />
        <Product
        img="/product/product_4.jpg"
        name="Baby Brown Lipstick"
        description="Hydrating, smooth, nourishing, and rich color"
        button="Buy"
       />
        <Product
        img="/product/perfume.jpg"
        name="Eau de Parfum"
        description="Timeless, elegant, and iconic fragrance"
        button="Buy"
       />
       
       
        </div>

        <h1 className="font-monoton text-center m-12 text-3xl">What our customer's say</h1>
        <div className="bg-gray-100 py-10">

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
     
    <Review
      img="./Review/customer_1.avif"
      name="Emily Johnson"
      rating="⭐⭐⭐⭐🌟"
      whatsay="Love the lipsticks! The quality is amazing and lasts all day!"
    />
     <Review
      img="./Review/customer_2.avif"
      name="Olivia Brown"
      rating="⭐⭐⭐🌟🌟"
      whatsay="Amazing blush colors! Perfect for my skin tone."
    />
     <Review
      img="./Review/customer_3.png"
      name="Sophia Lee"
      rating="⭐⭐🌟🌟🌟"
      whatsay="Glow Cosmetics never disappoints! The foundation is flawless."
    />

  </div>
</div> 

        </>
    )
}

export default  Home ;