const Main = () => {
  return (
    <section className="flex flex-wrap gap-4 p-3 justify-center md:justify-center text-lg">
      <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
        <img className="w-16" src="./fami.png" alt="" />
        <h2 className="underline decoration-2 ">Entona1 </h2>
        <h2>33/33</h2>
      </div>
      <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
        <img className="w-16" src="./abu.png" alt="" />
        <h2 className="underline decoration-2">Entona2</h2>
        <h2>0/29</h2>
      </div>
      <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
        <img className="w-16" src="./cuer.png" alt="" />
        <h2 className="underline decoration-2">Entona3</h2>
        <h2>0/25</h2>
      </div>
      <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
        <img className="w-16" src="./lage.png" alt="" />
        <h2 className="underline decoration-2">Entona4</h2>
        <h2>0/46</h2>
      </div>
    </section>
  );
};

export default Main;
