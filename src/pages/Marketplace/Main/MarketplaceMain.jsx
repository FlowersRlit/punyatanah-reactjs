
import { useEffect, useState } from "react";
import Stepper from "../../../components/MarketComponents/Stepper";
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
import { useNavigate } from "react-router-dom";
import PartForm from "../../../components/MarketComponents/FormPages/PartForm";
import ProvinceForm from "../../../components/MarketComponents/FormPages/ProvinceForm";
import DetailedForm from "../../../components/MarketComponents/FormPages/DetailedForm";

function SearchBar(){
    const navigate = useNavigate()

    return(
        <div className="relative mb-4 flex w-full flex-wrap items-stretch px-2">
            <input
                type="search"
                className="focus:shadow-te-primary relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l-md border border-solid border-hijau1 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-hijau1/60 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:outline-none"
                placeholder="Enter a State, County, City, or ID"
                aria-label="Search"
                aria-describedby="button-addon1"
            />
            <button
                className="hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r-md bg-hijau1 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
                onClick={() => navigate('/marketplace/catalog')}>
                <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            </div>
    )
}



export default function MarketplaceMain(){
    const navigate = useNavigate()
    // const [chosenProv, setChosenProv] = useState({
    //     'Aceh': false,
    //     'KalTim': false,
    //     'JaBar': false,
    //     'JaTeng': false,
    //     'Bengkulu': false,
    //     'Banten': false,
    //     'Jakarta': false,
    //     'KalBar': false,
    //     'Lampung': false,
    //     'SumSel': false,
    //     'BangBel': false,
    //     'Bali': false,
    //     'Jatim': false,
    //     'KalSel': false,
    //     'NTT': false,
    //     'SulSel': false,
    //     'SulBar': false,
    //     'KepRiau': false,
    //     'Gorontal': false,
    //     'Jambi': false,
    //     'KalTeng': false,
    //     'IrianJayaBarat': false,
    //     'SumUt': false,
    //     'Riau': false,
    //     'SulUt': false,
    //     'MalUt': false,
    //     'SumBar': false,
    //     'DIY': false,
    //     'NTB': false,
    //     'Maluku': false,
    //     'SulTengg': false,
    //     'SulTeng': false,
    //     'Papua': false
    // });

    const [choosingState, setChoosingState] = useState(1); // 1-3

    const pages= [
        ({ style }) => 
        <animated.div style={{ ...style}} className="w-full">
            <PartForm choosingState={choosingState} setChoosingState={setChoosingState} 
            chosenPart={chosenPart} setChosenPart={setChosenPart}/>
        </animated.div>,
        ({ style }) => 
        <animated.div style={{ ...style}} className="w-full">
            <ProvinceForm setChoosingState={setChoosingState} 
            chosenPart={chosenPart} chosenProv={chosenProv} setChosenProv={setChosenProv}/>
        </animated.div>,
        ({ style }) => 
        <animated.div style={{ ...style}} className="w-full">
            <DetailedForm />
        </animated.div>,
    ]
    
    const transRef = useSpringRef();
    const transitions = useTransition((choosingState - 1) % 3, {
      ref: transRef,
      keys: null,
      from: { opacity: 0 , x: 200},
      enter: { opacity: 1 , x: 0},
    //   leave: { opacity: 0 , x: -200},
    });

    const [chosenPart, setChosenPart] = useState('');
    const [chosenProv, setChosenProv] = useState('');

    useEffect(()=> {
        console.log('chosenpart : ' + chosenPart);
        setChosenProv('');
    }, [chosenPart])

    useEffect(()=> {
        console.log('chosenProv : ' + chosenProv);
    }, [chosenProv])
    
    useEffect(()=> {
        console.log(choosingState);
        transRef.start()

    }, [choosingState])

    return(
        <div className="container flex flex-col items-center min-h-screen">

            <div className="form-control w-full md:w-4/5 lg:w-3/5 xl:w-2/5 my-4">
                <SearchBar />
            </div>
            
            <div className="flex w-10/12 items-center justify-center mb-6">
                <span className="w-5/12 h-1 bg-gray1 rounded-full m-0 p-0"></span>
                <h1 className="text-center text-gray1 text-xl mx-4 md:mx-12">OR</h1>
                <span className="w-5/12 h-1 bg-gray1 rounded-full m-0 p-0"></span>
            </div>

            <div className="w-full flex flex-col items-center">
                <Stepper choosingState={choosingState} chosenPart={chosenPart} chosenProv={chosenProv} setChoosingState={setChoosingState}/>

                <div className={`flex fill w-full`}>
                {transitions((style, i) => {
                    const Page = pages[i]
                    return <Page style={style} />
                })}
                </div>
                {/* {
                    choosingState === 1 ? 
                    <PartForm choosingState={choosingState} setChoosingState={setChoosingState} 
                    chosenPart={chosenPart} setChosenPart={setChosenPart}/> : ''
                }
                {
                    choosingState === 2 ?
                    <ProvinceForm setChoosingState={setChoosingState} 
                    chosenPart={chosenPart}
                    chosenProv={chosenProv} setChosenProv={setChosenProv}/> : ''
                }
                {
                    choosingState === 3 ?
                    <DetailedForm /> : ''
                } */}
            </div>
        </div>
    )
}