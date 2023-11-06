

const Footer = () => {
  return (
    <section className="border h-[80px] absolute bottom-0 w-full rounded-t-2xl bg-gray-800 border-gray-900 flex justify-around items-center">
        <div className="hover:border-[3px] hover:rounded-3xl relative hover:bottom-8 hover:bg-blue-900 hover:border-gray-900 ">
            <img className="w-12" src="/public/images/cas.png" alt="" />
        </div>
        <div className="hover:border-[3px] hover:rounded-3xl relative hover:bottom-8 hover:bg-blue-900 hover:border-gray-900 ">
            <img className="w-12" src="/public/images/tro.png" alt="" />
        </div>
        <div className="hover:border-[3px] hover:rounded-3xl relative hover:bottom-8 hover:bg-blue-900 hover:border-gray-900 ">
            <img className="w-12" src="/public/images/bols.png" alt="" />
        </div>
        <div className="hover:border-[3px] hover:rounded-3xl relative hover:bottom-8 hover:bg-blue-900 hover:border-gray-900 ">
            <img className="w-12" src="/public/images/conf.png" alt="" />
        </div>
    </section>
  )
}

export default Footer