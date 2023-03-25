import { useState } from "react"

export default function FilterMarketplace(){

    const [listWilayah, setListWilayah] = useState(['Sumatera', 'Jawa', 'Kalimantan', 'Sulawesi', 'Papua', 'Bali']);

    return(
        <div className="w-full p-1">
        <div className="relative">
          <input type="text" placeholder="Search" 
          className="border py-3 px-4 rounded-lg shadow w-full focus:outline-0"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          className="bi bi-search absolute inset-y-0 right-0 align-middle h-full mr-3 fill-gray1" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
        
        <div className="shadow my-2 border rounded-lg bg-hijau1">
          <div className="max-lg:hidden m-6">
            <div>
              <h1 className="font-medium text-xl text-white">Wilayah :</h1>
              <div>
                <ul className="flex flex-col">
                  {
                    listWilayah.map((item, i) => {
                        return(
                            <label className="cursor-pointer mb-1 label p-0 justify-start" key={i}>
                                <input checked type="checkbox" className="checkbox checkbox-xs bg-white" value={item}/>
                                <span className="label-text text-base text-white text-start ml-2">{item}</span>
                            </label>
                        )
                    })
                  }
                  
                </ul>
              </div>

              <div className="flex flex-col my-1 w-full">
                <h1 className="font-medium text-xl mr-4 my-2 text-white">Sort :</h1>
                <select className="rounded p-2">
                  <option defaultValue="Recomended">Recomended</option>
                  <option value="LowToHigh">Terendah ke Tertinggi</option>
                  <option value="HighToLow">Tertinggi ke Terendah</option>
                </select>
              </div>
              
              <div className="flex flex-col my-1 w-full">
                <h1 className="font-medium text-xl mr-4 mt-2 text-white">Struktur :</h1>
                <div className="form-control">
                    {
                        new Array(3).fill('').map((x, i) => {
                            const arr = ['Rawa', 'Bukit', 'Entahla'];
                            return (
                                <label className="cursor-pointer my-1 label p-0 justify-start" key={i}>
                                    <input checked type="checkbox" className="checkbox checkbox-xs bg-white" value={arr[i]}/>
                                    <span className="label-text text-base text-white text-start ml-2">{arr[i]}</span>
                                </label>
                            )
                        })
                    }
                    
                </div>
              </div>

              <div className="my-1 mt-4 w-full">
                <h3 className="text-xl font-medium text-white">Luas (m²):</h3>
                <div className="flex justify-between items-center w-full">
                  <div className="flex-1">
                    <input type="text" placeholder="Min" 
                    className="text-sm w-full px-4 py-2 mt-2 rounded transition ease-in-out
                    focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                  </div>

                  <p className="flex-none text-2xl font-medium text-white mt-2 mx-1">-</p>
                  
                  <div className="flex-1">
                    <input type="text" placeholder="Max" 
                    className="text-sm px-4 w-full py-2 mt-2 rounded transition ease-in-out 
                    focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                  </div>
                </div>
              </div>

              <div className="mt-4" >
                <h3 className="text-xl font-medium text-white">Harga (Rp):</h3>
                <div>
                  <label className="block text-white" htmlFor="minimum">Minimum</label>
                  <input type="number" className="text-sm w-full px-4 py-2 mt-2 rounded-md transition ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                </div>
    
                <div>
                  <label className="block text-white" htmlFor="maximum">Maximum</label>
                  <input type="number" className="text-sm w-full px-4 py-2 mt-2 rounded-md transition ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                </div>
              </div>

              <div className="flex items-baseline justify-center">
                <button className="px-6 py-2 mt-4 text-white transition ease-in-out bg-sky-600 rounded hover:bg-sky-900 w-full">Apply</button>
              </div>
              
            </div>
          </div>
          <button className="lg:hidden p-4 px-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
      </div>
    )
}