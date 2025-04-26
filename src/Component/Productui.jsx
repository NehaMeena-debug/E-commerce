import Productcard from "./Productcard"
import { useState } from 'react';



const Productui = ({ likedProducts, setLikedProducts }) =>{
    

    return (
            <> 
            <h1 className="font-monoton text-center m-12 text-3xl">Product's</h1>
            <div className="grid grid-cols-3 gap-6 mt-8 mb-12">
<Productcard
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
                    img="/products_view/eye liner golden.webp"
                    name="Eye Liner Golden"
                    like=""
                    price="560"
                    atc=""
                    buy="Shop"
                />
                
                <Productcard
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



// import Productcard from "./Productcard";

// const Productui = ({ likedProducts, setLikedProducts }) => {
//   // ✅ 1. Saare products ek array me le lo
//   const products = [
//     {
//       id: 1,
//       img: "/products_view/powder_foundation.webp",
//       name: "Lakme Powder Foundation",
//       price: "987",
//     },
//     {
//       id: 2,
//       img: "/products_view/colorbar.webp",
//       name: "Color Bar",
//       price: "995",
//     },
//     {
//       id: 3,
//       img: "/products_view/eye liner golden.webp",
//       name: "Eye Liner Golden",
//       price: "560",
//     },
//     {
//       id: 4,
//       img: "/products_view/facescanada.webp",
//       name: "FaceCanada",
//       price: "440",
//     },
//     {
//       id: 5,
//       img: "/products_view/gloss nail.webp",
//       name: "Gloss Nail",
//       price: "870",
//     },
//     {
//       id: 6,
//       img: "/products_view/Intense matte lips.webp",
//       name: "Matte Lips",
//       price: "360",
//     },
//     {
//       id: 7,
//       img: "/products_view/lip_cheek_tint.webp",
//       name: "Lip Cheek Tint",
//       price: "295",
//     },
//     {
//       id: 8,
//       img: "/products_view/makeup revolution.webp",
//       name: "Makeup Revolution",
//       price: "540",
//     },
//     {
//       id: 9,
//       img: "/products_view/matte lipstick.webp",
//       name: "Matte Lipstic",
//       price: "345",
//     },
//     {
//       id: 10,
//       img: "/products_view/moisturizer.webp",
//       name: "Moisturizer",
//       price: "995",
//     },
//     {
//       id: 11,
//       img: "/products_view/compact_powder.webp",
//       name: "Compact Powder",
//       price: "567",
//     },
//     {
//       id: 12,
//       img: "/products_view/makeup_oil_primer.webp",
//       name: "Oil Primer",
//       price: "337",
//     },
//     {
//       id: 13,
//       img: "/products_view/eye_palette.webp",
//       name: "Eya Palette",
//       price: "876",
//     },
//     {
//       id: 14,
//       img: "/products_view/eye_liner.webp",
//       name: "Eya Liner",
//       price: "666",
//     },
//     {
//       id: 15,
//       img: "/products_view/tinted_powder.webp",
//       name: "Tinted Powder",
//       price: "546",
//     },
//     {
//       id: 16,
//       img: "/products_view/concealer.webp",
//       name: "Concealer",
//       price: "456",
//     },
//     {
//       id: 17,
//       img: "/products_view/pencile_liner.webp",
//       name: "Pencile Liner",
//       price: "876",
//     },
//     {
//       id: 18,
//       img: "/products_view/mono blush.webp",
//       name: "Mono Blush",
//       price: "568",
//     },
//   ];

//   return (
//     <> 
//       <h1 className="font-monoton text-center m-12 text-3xl">Product's</h1>
//       <div className="grid grid-cols-3 gap-6 mt-8 mb-12">
//         {/* ✅ 2. Map se cards render karo */}
//         {products.map((product) => (
//           <Productcard
//             key={product.id}
//             img={product.img}
//             name={product.name}
//             price={product.price}
//             likedProducts={likedProducts}
//             setLikedProducts={setLikedProducts}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Productui;
