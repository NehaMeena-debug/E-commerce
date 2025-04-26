const Footer = () => {
    return (
      <footer className="bg-light-pink text-dark-grey py-8">
        <div className="container mx-auto text-center">
          
          {/* Brand Name */}
          <h2 className="text-2xl font-semibold text-rose-gold">Glow Cosmetics</h2>
  
          {/* About Section */}
          <p className="mt-4 text-sm text-dark-grey max-w-2xl mx-auto">
            Glow Cosmetic is dedicated to providing high-quality, cruelty-free makeup products that enhance your natural beauty.
          </p>
          
          {/* Links */}
          <div className="mt-6 mb-8 flex flex-wrap justify-center gap-6 text-sm">
            <a href="/home" className="hover:text-rose-gold">Home</a>
            <a href="/shop" className="hover:text-rose-gold">Product</a>
            <a href="/contact" className="hover:text-rose-gold">Contact</a>
            {/* <a href="/faq" className="hover:text-rose-gold">FAQs</a> */}
          </div>

          <div className="mt-6 flex justify-center align-cenetr items-center gap-4">
            <a href="https://www.instagram.com" className="hover:text-rose-gold">
            <img className="h-12 w-12"  src="./insta.png"></img>
            </a>
            <a href="https://www.facebook.com" className="hover:text-rose-gold">
                <img className="h-9 w-9 border-white rounded-full" src="./f.jpg"></img>
            </a> 
            <a href="https://www.pinterest.com" className="hover:text-rose-gold">
            <img className="h-9 w-9 border-white rounded-full" src="./p.jpeg"></img>
            </a>
          </div>
  
          {/* Customer Support Section */}
          <div className="mt-8">
            <p className="text-sm text-dark-grey">
              📧 Email: support@glowcosmetic.com | 📞 Phone: +91 9876543210
            </p>
          </div>
  
          {/* Payment Methods */}
          <div className="mt-4">
            <p className="text-sm text-dark-grey">We accept: Visa, MasterCard, PayPal, UPI, COD</p>
          </div>
  
          {/* Decorative Image */}
          <div className="flex justify-center mt-8">
            <img 
              src="/footer.png" 
              alt="Makeup Illustration" 
              className="w-full h-auto mb-4"
            />
          </div>
  
          {/* Copyright */}
          <div className="mt-4 text-sm text-dark-grey">
            © {new Date().getFullYear()} Glow Cosmetic. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  