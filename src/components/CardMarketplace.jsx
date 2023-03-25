import { Link } from "react-router-dom";
import Tags from "./Tags";

export default function CardMarketplace(props) {
	return (
		<Link
			to="/marketplace/1"
			className="h-full w-full cursor-pointer p-1 hover:scale-105"
		>
			<div
				className="grid h-full grid-cols-4 
          justify-between overflow-hidden rounded-lg border bg-white shadow-lg"
			>
				<div className="span-1 overflow-hidden">
					<img
						className="h-full object-cover"
						src={props.item.ImagePath}
						alt=""
					/>
				</div>

				<div className="col-span-3 flex h-full flex-col justify-between">
					<div className="px-4 pt-2">
						<div>
							<h4 className="text-lg font-semibold text-orange1 sm:text-2xl">
								{props.item.LuasTanah} m²
							</h4>
						</div>

						<h4 className="text-lg font-medium text-black1 sm:text-xl">
							Rp {props.item.Harga.toLocaleString(["ban", "id"])}
						</h4>
						<h4 className="font-base text-sm text-gray1">
							{props.item.Kecamatan}, {props.item.Kota}
						</h4>
					</div>

					<div className="mb-4 flex px-3">
						{props.item.Tags.map((x, i) => {
							return <Tags tag={x} key={i} />;
						})}
					</div>

					<div>
						<div className="align-center flex min-h-fit w-full justify-between bg-hijau1 py-3 px-4">
							<a
								className="text-sm font-medium text-white sm:text-base"
								href="#"
							>
								{props.item.Penjual}
							</a>
							<button type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="white"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path>
									<path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
