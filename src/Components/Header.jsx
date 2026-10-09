
import Image from "next/image";
import NavLinks from "./NavLinks";


const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header>
      <div className="container mx-auto flex items-center gap-3 p-3">
        
        {/* Logo */}
        <div className="w-[60px] h-[60px] bg-green-600 rounded-xl flex items-center justify-center">
          <Image
            src="/assets/logo-icon.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        {/* Website Title + Date */}
        <div>
          <div className="text-3xl font-bold">
            বাজার দর
          </div>

          <div>
            {date}
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="ml-auto flex items-center gap-3">
          <button className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
            সাইন ইন
          </button>

          <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
            সাইন আউট
          </button>
        </div>

      </div>
      <NavLinks/>
      
    </header>
  );
};

export default Header;