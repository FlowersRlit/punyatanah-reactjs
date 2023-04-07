import { useState, useRef, lazy, Suspense, useEffect } from "react";
import Alerts from "../../Alerts/Alert.jsx";

const componentMapping = {
  Jawa: () => import('./Provinces/Jawa'),
  Kalimantan: () => import('./Provinces/Kalimantan'),
  Papua: () => import('./Provinces/Papua'),
  NusaTenggara: () => import('./Provinces/NusaTenggara'),
  Sumatera: () => import('./Provinces/Sumatera'),
  Maluku: () => import('./Provinces/Maluku'),
  Sulawesi: () => import('./Provinces/Sulawesi'),
};

export default function ProvinceForm(props){
    const [warning, setWarning] = useState(false);
    const Component = lazy(componentMapping[props.chosenPart]);

    useEffect(() => {
        console.log(props);
    }, [])

    const listProv = {
        Jawa: ['Banten', 'Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Bali', 'Jawa Timur', 'Yogyakarta'],
        Sumatera: ['Aceh', 'Lampung', 'Sumatera Selatan', 'Bangka Belitung', 'Bengkulu', 'Kep. Riau', 'Jambi', 'Sumatera Utara', 'Riau', 'Sumatera Barat'],
        NusaTenggara: ['Nusa Tenggara Timur', 'Nusa Tenggara Barat'],
        Maluku: ['Maluku Utara', 'Maluku'],
        Sulawesi: ['Sulawesi Selatan', 'Sulawesi Barat', 'Gorontalo', 'Sulawesi Tenggara', 'Sulawesi Tengah', 'Sulawesi Utara'],
        Kalimantan: ['Kalimantan Timur', 'Kalimantan Barat', 'Kalimantan Selatan', 'Kalimantan Tengah'],
        Papua: ['Irian Jaya Barat', 'Papua']
    }

    return(
        <div className="w-full flex flex-col items-center justify-center">
            
            <div className="w-full flex justify-center align-center mt-6">
                <select className="select select-bordered border border-gray1 font-normal text-black col-span-3 w-4/6 md:w-2/6 mr-2" defaultValue={props.chosenProv !== '' ? props.chosenProv : "select"}
                placeholder="Select"
                onChange={(e) => {
                    console.log(e.target.value);
                    props.setChosenProv(e.target.value);
                }}>
                    <option className="text-gray1" disabled value={"select"}>Pilih Provinsi</option>
                    {
                        listProv[props.chosenPart].map((key, i) => {
                            return <option value={listProv[props.chosenPart][i]} key={i}>{ key }</option>
                        })
                    }
                </select>
                <button className="btn bg-orange1 text-white border border-gray1 border-l-0 hover:scale-105 hover:bg-orange1"
                onClick={() => {
                    if(props.chosenProv) props.setChoosingState(3)
                    else setWarning(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            </div>
            
            <Suspense fallback={<div>Loading...</div>}>
                <div className='w-2/6 xl:px-4'>
                    <Component chosenProv={props.chosenProv}/>
                </div>
            </Suspense>

        


            <Alerts visible={warning} setVisible={setWarning} message={'Pilih Satu Provinsi'} type={warning}/>

        </div>
    )
}