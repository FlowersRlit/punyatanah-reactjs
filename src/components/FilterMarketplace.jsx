import { useState } from "react";

export default function FilterMarketplace() {
	const [listWilayah, setListWilayah] = useState([
		"Sumatera",
		"Jawa",
		"Kalimantan",
		"Sulawesi",
		"Papua",
		"Bali",
	]);

	return (
		<div className="w-full p-1">
			<div className="relative">
				<input
					type="text"
					placeholder="Search"
					className="w-full rounded-lg border py-3 px-4 shadow focus:outline-0"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					className="bi bi-search absolute inset-y-0 right-0 mr-3 h-full fill-gray1 align-middle"
					viewBox="0 0 16 16"
				>
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
				</svg>
			</div>

			<div className="my-2 rounded-lg border bg-hijau1 shadow">
				<div className="m-6 max-lg:hidden">
					<div>
						<h1 className="text-xl font-medium text-white">Wilayah :</h1>
						<div>
							<ul className="flex flex-col">
								{listWilayah.map((item, i) => {
									return (
										<label
											className="label mb-1 cursor-pointer justify-start p-0"
											key={i}
										>
											<input
												checked
												type="checkbox"
												className="checkbox checkbox-xs bg-white"
												value={item}
											/>
											<span className="label-text ml-2 text-start text-base text-white">
												{item}
											</span>
										</label>
									);
								})}
							</ul>
						</div>

						<div className="my-1 flex w-full flex-col">
							<h1 className="my-2 mr-4 text-xl font-medium text-white">
								Sort :
							</h1>
							<select className="rounded bg-slate-200 p-2 text-black1">
								<option defaultValue="Recomended">Recomended</option>
								<option value="LowToHigh">Terendah ke Tertinggi</option>
								<option value="HighToLow">Tertinggi ke Terendah</option>
							</select>
						</div>

						<div className="my-1 flex w-full flex-col">
							<h1 className="mr-4 mt-2 text-xl font-medium text-white">
								Struktur :
							</h1>
							<div className="form-control">
								{new Array(3).fill("").map((x, i) => {
									const arr = ["Rawa", "Bukit", "Entahla"];
									return (
										<label
											className="label my-1 cursor-pointer justify-start p-0"
											key={i}
										>
											<input
												checked
												type="checkbox"
												className="checkbox checkbox-xs bg-white"
												value={arr[i]}
											/>
											<span className="label-text ml-2 text-start text-base text-white">
												{arr[i]}
											</span>
										</label>
									);
								})}
							</div>
						</div>

						<div className="my-1 mt-4 w-full">
							<h3 className="text-xl font-medium text-white">Luas (m²):</h3>
							<div className="flex w-full items-center justify-between">
								<div className="flex-1">
									<input
										type="text"
										placeholder="Min"
										className="mt-2 w-full rounded bg-slate-200 px-4 py-2 text-sm text-black1 transition ease-in-out
                    focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
									/>
								</div>

								<p className="mx-1 mt-2 flex-none text-2xl font-medium text-white">
									-
								</p>

								<div className="flex-1">
									<input
										type="text"
										placeholder="Max"
										className="mt-2 w-full rounded bg-slate-200 px-4 py-2 text-sm text-black1 transition ease-in-out 
                    focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
									/>
								</div>
							</div>
						</div>

						<div className="mt-4 w-full">
							<h3 className="text-xl font-medium text-white">Harga(Jt):</h3>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-sm text-white">Minimum</span>
								</label>
								<label className="input-group">
									<span className="">Rp.</span>
									<input
										type="number"
										placeholder="0"
										className="input-bordered input w-full bg-slate-200 text-black1"
									/>
								</label>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text text-sm text-white">Maximum</span>
								</label>
								<label className="input-group">
									<span className="">Rp.</span>
									<input
										type="number"
										placeholder="10000"
										className="input-bordered input w-full bg-slate-200 text-black1"
									/>
								</label>
							</div>
						</div>

						<div className="flex items-baseline justify-center">
							<button className="mt-4 w-full rounded bg-orange1 px-6 py-2 text-white transition ease-in-out hover:bg-orange1/70">
								Apply
							</button>
						</div>
					</div>
				</div>
				<button className="p-4 px-6 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="white"
						className="h-6 w-6 "
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
