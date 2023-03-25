import React from "react";

const Ratingdetails = () => {
	return (
		<>
			<div className="rating flex px-4">
				<input
					type="radio"
					name="rating-1"
					className="mask mask-star bg-yellow-400"
				/>
				<input
					type="radio"
					name="rating-1"
					className="mask mask-star bg-yellow-400"
				/>
				<input
					type="radio"
					name="rating-1"
					className="mask mask-star bg-yellow-400"
				/>
				<input
					type="radio"
					name="rating-1"
					className="mask mask-star bg-yellow-400"
				/>
				<input
					type="radio"
					name="rating-1"
					className="mask mask-star bg-yellow-400"
					checked
				/>
				<div className="flex"> (99999) menyukai </div>
			</div>
			<div className="pt-2 pl-4">
				<h1 className="text-3xl font-bold">Tanah Pak Karto 1 Hektar Medan</h1>
				<h2 className="text-orange1">
					Pasir endah, Kec.Ujung berung, kota Bandung, Jawa Bara
				</h2>
			</div>
		</>
	);
};

export default Ratingdetails;
