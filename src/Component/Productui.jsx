import Productcard from "./Productcard"
import { useState } from 'react';

const Productui = ({ likedProducts, setLikedProducts }) =>{
 
    return (
            <> 
           
            <h1 className="font-monoton text-center m-12 text-3xl">Product's</h1>
            <div className="grid grid-cols-3 gap-6 mt-8 mb-12">
<Productcard
                    id = {1}
                    img="/products_view/powder_foundation.webp"
                    name="Lakme Powder Foundation"
                    like=""
                    price="987"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />
            


             <Productcard
              id = {2}
                    img="/products_view/colorbar.webp"
                    name="Color Bar"
                    like=""
                    price="995"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

               <Productcard
               id = {3}
                    img="/products_view/eye liner golden.webp"
                    name="Eye Liner Golden"
                    like=""
                    price="560"
                    atc=""
                    buy="Shop"
                />
                
                <Productcard
                id = {4}
                    img="/products_view/facescanada.webp"
                    name="FaceCanada"
                    like=""
                    price="440"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

             <Productcard
             id = {5}
                    img="/products_view/gloss nail.webp"
                    name="Gloss Nail"
                    like=""
                    price="870"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {6}
                    img="/products_view/Intense matte lips.webp"
                    name="Matte Lips"
                    like=""
                    price="360"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />


<Productcard
id = {7}
                    img="/products_view/lip_cheek_tint.webp"
                    name="Lip Cheek Tint"
                    like=""
                    price="295"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {8}
                    img="/products_view/makeup revolution.webp"
                    name="Makeup Revolution"
                    like=""
                    price="540"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {9}
                    img="/products_view/matte lipstick.webp"
                    name="Matte Lipstic"
                    like=""
                    price="345"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />


<Productcard
id = {10}
                    img="/products_view/moisturizer.webp"
                    name="Moisturizer"
                    like=""
                    price="995"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {11}
                    img="/products_view/compact_powder.webp"
                    name="Compact Powder"
                    like=""
                    price="567"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />


<Productcard
id = {12}
                    img="/products_view/makeup_oil_primer.webp"
                    name="Oil Primer"
                    like=""
                    price="337"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />


<Productcard
id = {13}
                    img="/products_view/eye_palette.webp"
                    name="Eya Palette"
                    like=""
                    price="876"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {14}
                    img="/products_view/eye_liner.webp"
                    name="Eya Liner"
                    like=""
                    price="666"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {15}
                    img="/products_view/tinted_powder.webp"
                    name="Tinted Powder"
                    like=""
                    price="546"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {16}
                    img="/products_view/concealer.webp"
                    name="Concealer"
                    like=""
                    price="456"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />


<Productcard
id = {17}
                    img="/products_view/pencile_liner.webp"
                    name="Pencile Liner"
                    like=""
                    price="876"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />

<Productcard
id = {18}
                    img="/products_view/mono blush.webp"
                    name="Mono Blush"
                    like=""
                    price="568"
                    atc=""
                    buy="Shop"
                    likedProducts={likedProducts}
  setLikedProducts={setLikedProducts}
                />



                </div>

                
           
         
        </>
    )
}


export default Productui;



