
const Profile = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-6 py-12 bg-[url('pbg.jpg')] bg-cover bg-center  h-screen">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">
        <h2 className="text-4xl font-semibold text-rose-gold text-center mb-8">
          Create Your Profile
        </h2>

        <form className="space-y-6">

          <div>
            <label className="block text-sm text-dark-grey mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
            />
          </div>


          <div>
            <label className="block text-sm text-dark-grey mb-1">Email or Phone Number</label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-gold"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-rose-gold text-white py-3 rounded-xl hover:bg-pink-200  hover:text-black transition duration-300 text-lg font-semibold"
          >
            Create Profile
          </button>
        </form>


      </div>
    </div>
  );
};

export default Profile;
