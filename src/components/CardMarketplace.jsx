import Tags from "./Tags";

export default function CardMarketplace(props){
    return(
        <div className="p-1 w-full hover:scale-105 cursor-pointer h-full" key={props.i}>
          <div className="grid grid-cols-4 justify-between 
          rounded-lg shadow-lg overflow-hidden border bg-white h-full">
            <div className='span-1 overflow-hidden'>
                <img className="object-cover h-full"
                src={props.item.ImagePath} alt=""/>
            </div>    
        
            <div className="flex flex-col justify-between h-full col-span-3"> 
                <div className="px-4 pt-2">
                    <div>
                        <h4 className="font-semibold text-lg sm:text-2xl text-orange1">
                            {props.item.LuasTanah} m²
                        </h4>
                        
                    </div>
                    
                    <h4 className="font-medium text-lg sm:text-xl">Rp {props.item.Harga.toLocaleString(
                        ["ban", "id"]
                    )}</h4>
                    <h4 className="font-base text-sm text-gray1">
                        {props.item.Kecamatan}, {props.item.Kota}
                    </h4>
                </div>

                <div className="flex px-3 mb-4">
                    {
                        props.item.Tags.map((x, i) => {
                            return(
                                <Tags tag={x} i={i}/>
                            )
                        })
                    }
                </div>

                <div>
                    <div className="bg-hijau1 min-h-fit w-full py-3 px-4 flex align-center justify-between">
                        <a className="text-white text-sm sm:text-base font-medium" href="#">
                            {props.item.Penjual}
                        </a>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
  }