import { useState, useRef } from "react";
import Alerts from "../../Alerts/Alert";
import MapOfId from "../Map";

export default function PartForm(props){
    const [warning, setWarning] = useState(false);

    const listPart = {
        key: ['Sumatera & Kep.Riau', 'Jawa & Bali', 'Kalimantan', 'Nusa Tenggara', 'Sulawesi', 'Papua', 'Kep.Maluku'],
        value: ['Sumatera', 'Jawa', 'Kalimantan', 'NusaTenggara', 'Sulawesi', 'Papua', 'Maluku']
    }

    return(
        <div className="w-full flex flex-col items-center justify-center">

            <br />

            <MapOfId
            chosenPart={props.chosenPart} setChosenPart={props.setChosenPart} 
            choosingState={props.choosingState} setChoosingState={props.setChoosingState} />

            <br />


            <div className="w-full flex justify-center align-center mt-8">
                <select className="select select-bordered border border-gray1 font-normal text-black col-span-3 w-8/12 md:w-2/6 mr-2" defaultValue={props.chosenPart}
                onChange={(e) => {
                    console.log(e.target.value);
                    props.setChosenPart(e.target.value);
                }}>
                    <option disabled value={""}>Pilih Lokasi</option>
                    {
                        listPart['key'].map((key, i) => {
                            return <option value={listPart.value[i]} key={i}>{ key }</option>
                        })
                    }
                </select>
                <button className="btn bg-orange1 text-white border border-gray1 border-l-0 hover:scale-105 hover:bg-orange1"
                onClick={() => {
                   if(props.chosenPart) props.setChoosingState(2)
                   else setWarning(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            </div>

            <Alerts visible={warning} setVisible={setWarning} message={'Pilih Satu Lokasi'} type={warning}/>
        </div>
    )
}