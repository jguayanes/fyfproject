

const Main = () => {
  return (
    <section className="flex flex-wrap gap-4 p-2 md:justify-center">
        <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
            <img className="w-16" src="/public/fami.png" alt="" />
            <h2 className="underline decoration-2 ">familiares y amigos </h2>
            <h2>33/33</h2>
        </div>
        <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
            <img className="w-16" src="/public/abu.png" alt="" />
            <h2 className="underline decoration-2">Edad y etapas</h2>
            <h2>0/29</h2>
        </div>
        <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
            <img className="w-16" src="/public/cuer.png" alt="" />
            <h2 className="underline decoration-2">Partes del cuerpo</h2>
            <h2>0/25</h2>
        </div>
        <div className="text-white border-[5px] rounded-md h-[170px] border-gray-700 w-[150px] grid place-items-center hover:bg-gray-700">
            <img className="w-16" src="/public/lage.png" alt="" />
            <h2 className="underline decoration-2">Describiendo</h2>
            <h2>0/46</h2>
        </div>
    </section>
  )
}

export default Main