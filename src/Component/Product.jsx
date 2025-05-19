const Product = ({ img, name, description, button }) => {
  return (
    <>

      <div class="bg-gray-200 p-4 m-4 rounded-lg shadow-md flex flex-col gap-2 items-center">

        <img className="h-64  w-64  rounded-xl" src={img}></img>
        <h2 className="font-bold  text-lg ">{name}</h2>
        <p className="text-md ">{description}</p>
        <button className="hover:bg-pink-300  bg-rose-gold text-center rounded-lg px-12 py-2 ">{button}</button>

      </div>
    </>
  )
}

export default Product;