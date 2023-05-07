
import { Fragment , useEffect, useState } from "react";
import Alerts from "../Alerts/Alert";

export default function Stepper(props) {
    const instruksi = ['Pilih Lokasi', 'Pilih Provinsi', 'Penyaringan Detail'];
    const [warning, setWarning] = useState(false);

    return(
        <div className="flex align-center justify-center">
            {
                instruksi.map((item,i) => {
                    return <Fragment key={i}>
                        <div className="flex flex-col md:flex-row rounded-full items-center w-1/5 mx-1">
                            <button className={`rounded-full aspect-square w-10 h-10 grid place-items-center m-2 md:mx-4 ${i + 1 > props.choosingState ? 'bg-hijau1' : 'bg-orange1'}`}
                            onClick={() => {
                                if(props.choosingState === 1 && (i + 1 === 2 || i + 1 === 3) && props.chosenPart === '') setWarning(true);
                                else if(props.choosingState === 2 && (i + 1 === 3) && props.chosenProv === '') setWarning(true);
                                else props.setChoosingState(i + 1);
                            }}>
                                <h4 className="text-white font-medium">{ i + 1 }</h4>
                            </button>
                            <div className="grid col-span-2 place-items-center">
                                <h4 className="text-black text-xs md:text-sm text-center md:text-left font-medium">{ item }</h4>
                            </div>
                        
                        </div>
                        {
                            i !== instruksi.length-1 ? 
                            <span className="grid place-items-center mx-2 md:mx-4">
                                <div className={`h-1 w-8 md:w-8 ${i + 2 > props.choosingState ? 'bg-hijau1' : 'bg-orange1'} rounded-full mb-10 sm:mb-6 md:mb-0`}></div>
                            </span> : ''
                        }
                    </Fragment>
                })
            }
            
            <Alerts visible={warning} setVisible={setWarning} message={instruksi[props.choosingState-1]} type={warning}/>
        </div>
    )
}