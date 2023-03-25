export default function FilterMarketplace(){

    return(
        <div class="w-full lg:w-2/6 xl:2/12 p-1">
        <div class="relative">
          <input type="text" placeholder="Search" 
          class="border py-3 px-4 rounded-xl shadow w-full focus:outline-0"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          class="bi bi-search absolute inset-y-0 right-0 align-middle h-full mr-3 fill-gray1" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
        
        <div class="shadow my-2 border rounded-2xl bg-hijau1">
          <div class="max-lg:hidden m-6">
            <div>
              <h1 class="font-medium text-xl text-white">Wilayah :</h1>
              <div>
                <ul class="flex flex-col">
                  <li>
                    <input id="Wilayah" class="peer/draft" type="radio" name="status" value="Sumatera"/>
                    <label for="Wilayah" class="peer-checked/draft:text-white text-black1">Sumatera</label>
                  </li>
                  <li>
                    <input id="Wilayah" class="peer/draft" type="radio" name="status" value="Jawa"/>
                    <label for="Wilayah" class="peer-checked/draft:text-white text-black1">Jawa</label>
                  </li>
                  <li>
                    <input id="Wilayah" class="peer/draft" type="radio" name="status" value="Kalimantan"/>
                    <label for="Wilayah" class="peer-checked/draft:text-white text-black1">Kalimantan</label>
                  </li>
                  <li>
                    <input id="Wilayah" class="peer/draft" type="radio" name="status" value="Sulawesi"/>
                    <label for="Wilayah" class="peer-checked/draft:text-white text-black1">Sulawesi</label>
                  </li>
                  <li>
                    <input id="Wilayah" class="peer/draft" type="radio" name="status" value="Papua"/>
                    <label for="Wilayah" class="peer-checked/draft:text-white text-black1">Papua</label>
                  </li>
                  <li>
                    <input id="Wilayah" class="peer/draft" type="radio" name="status" checked />
                    <label for="Wilayah" class="peer-checked/draft:text-white text-black1">Bali</label>
                  </li>
                </ul>
              </div>

              <div class="flex flex-col my-1 w-full">
                <h1 class="font-medium text-xl mr-4 my-2 text-white">Sort :</h1>
                <select class="rounded p-2">
                  <option selected class="text-gray1"> Pilih Sorting</option>
                  <option value="1">Terendah</option>
                  <option value="2">Tertinggi</option>
                  <option value="3">Kredit</option>
                </select>
              </div>
              
              <div class="flex flex-col my-1 w-full">
                <h1 class="font-medium text-xl mr-4 my-2 text-white">Struktur :</h1>
                <select class="rounded p-2">
                  <option selected class="text-gray1"> Pilih Struktur</option>
                  <option value="1">Hamparan</option>
                  <option value="2">Bukit</option>
                  <option value="3">Rawa</option>
                </select>
              </div>

              <div class="my-1 mt-4 w-full">
                <h3 class="text-xl font-medium text-white">Luas (m²):</h3>
                <div class="flex justify-between items-center w-full">
                  <div class="flex-1">
                    <input type="text" placeholder="Min" 
                    class="text-sm w-full px-4 py-2 mt-2 rounded transition ease-in-out
                    focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                  </div>

                  <p class="flex-none text-2xl font-medium text-white mt-2">-</p>
                  
                  <div class="flex-1">
                    <input type="text" placeholder="Max" 
                    class="text-sm px-4 w-full py-2 mt-2 rounded transition ease-in-out 
                    focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                  </div>
                </div>
              </div>

              <div class="mt-4" >
                <h3 class="text-xl font-medium text-white">Harga (Rp):</h3>
                <div>
                  <label class="block text-white" for="minimum">Minimum</label>
                  <input type="text" class="text-sm w-full px-4 py-2 mt-2 rounded-md transition ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                </div>
    
                <div>
                  <label class="block text-white" for="maximum">Maximum</label>
                  <input type="text" class="text-sm w-full px-4 py-2 mt-2 rounded-md transition ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" />
                </div>
              </div>

              <div class="flex items-baseline justify-center">
                <button class="px-6 py-2 mt-4 text-white transition ease-in-out bg-sky-600 rounded hover:bg-sky-900 w-full">Apply</button>
              </div>
              
            </div>
          </div>
          <button class="lg:hidden p-4 px-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>
      </div>
    )
}