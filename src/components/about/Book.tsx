

import image from "@/assets/images/trash/about-book.png";

const Book = () => {
  return (
    <div className="relative py-10">
      <img src={image} className="w-full"/>
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
      <button className="bg-secondary py-2 px-6 rounded-xs text-foreground text-xl hover:bg-foreground hover:text-white transition-all ease-in-out cursor-pointer">
             Book Now
          </button>
      </div>
    </div>
  )
}

export default Book