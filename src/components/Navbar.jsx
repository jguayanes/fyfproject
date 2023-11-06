

const Navbar = () => {
  return (
    <section className="flex items-center justify-center gap-1 pt-2 text-white shadow-2xl shadow-blue-950 border-transparent h-[100px] rounded-b-3xl md:gap-20">
        <div className="flex border border-black w-[150px] h-[50px] justify-center items-center gap-7 bg-green-500 rounded-s-2xl">
            <i className="border rounded-full bg-white h-10 w-10 "></i> 
            <h2 className="font-bold">Prueba</h2>
        </div>
        <div className="flex border border-black w-[150px] h-[50px] justify-center items-center gap-7 bg-blue-500 rounded-r-2xl">
            <h2 className="font-bold">Nuestras</h2>
            <i className="border rounded-full bg-white h-10 w-10 "></i> 
        </div>
    </section>
  )
}

export default Navbar