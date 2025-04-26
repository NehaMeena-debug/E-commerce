const Liked = () =>{
return(
    <>
    <h1 className="font-monoton text-center m-12 text-3xl">Liked Product</h1>
    

    </>
)
}

export default Liked;



// const Liked = ({ likedProducts }) => {
//     return (
//       <>
//         <h1 className="font-monoton text-center m-12 text-3xl">Liked Product</h1>
//         {likedProducts.length === 0 ? (
//           <p className="text-center text-gray-500">You haven't liked any products yet.</p>
//         ) : (
//           <div className="grid grid-cols-3 gap-6 p-4">
//             {likedProducts.map((product, index) => (
//               <div key={index} className="bg-white rounded-xl shadow p-4">
//                 <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded" />
//                 <h2 className="font-bold mt-2">{product.name}</h2>
//                 <p className="text-gray-600">₹ {product.price}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </>
//     );
//   };
  
//   export default Liked;
  