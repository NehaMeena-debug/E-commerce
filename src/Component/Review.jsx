const Review = ({img,name,rating,whatsay}) =>{
    return(
        <>
        <div className="bg-white p-4 shadow-lg rounded-xl text-center">
     <img  className="w-32 h-32 mx-auto object-fit object-cover rounded-full mb-2" src={img}/> 
     <h3 className="font-semibold" >{name} </h3>
     <p className="text-sm text-gray-600">{rating}</p>
     <p className="text-gray-700 mt-2">{whatsay}</p>
     </div>
        </>
    )
}

export default Review