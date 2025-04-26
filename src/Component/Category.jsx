const Category = ({img,name})=>{
return(
    <>
    
  <span className="font-pacifico border border-pink-200 text-white h-86">
     <img className="h-32  w-42 object-fit  mb-2 transform transition duration-300 hover:scale-110 rounded p-2 "  src={img}/>
     {name}
  </span>

    </>
)
}

export default Category