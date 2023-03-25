import React from "react";
import Comendetails from "./childdetails/Comendetails";
import Deksripsit from "./childdetails/Deksripsit";
import Pckategori from "./childdetails/Pckategori";
import Pictdetails from "./childdetails/Pictdetails";
import Ratingdetails from "./childdetails/Ratingdetails";
import Upjdetails from "./childdetails/Upjdetails";
import SpesefikasiTanah from "./childdetails/SpesefikasiTanah";
const Detailsi = () => {
	return (
		<>
			<div className="container flex p-2 shadow ">
				<div className="w-full flex-[3] text-black1">
					<div className="pl-8">
						<p className="text-md mb-2 text-gray1 sm:text-base">
							HOME/banten/tanggerang kota/tanahpakarto
						</p>
						<p className="mb-4 text-xl font-semibold sm:text-3xl">
							TANAH Pak Karto
						</p>
					</div>
					<div className="pl-8">
						<Pictdetails />
					</div>
					<div className="pt-4 pl-4">
						<Ratingdetails />
					</div>
					<div>
						<Deksripsit />
					</div>
					<div>
						<SpesefikasiTanah />
					</div>
					<div className="w-full border-b pl-8 pb-20">
						<Upjdetails />
					</div>
					<div>
						<Comendetails />
					</div>
				</div>
				<div className="flex-1 pl-20">
					<Pckategori />
				</div>
			</div>
		</>
	);
};

export default Detailsi;
