import Protected from "components/Protected";
import Image from "next/image";
import BASE_API_URL from "../constants";

const Upload = ({ user, authed }) => {
	const getStats = async (e) => {
		e.preventDefault();
		// const file = e.target.querySelector("input").files[0];
		// const params = new FormData();
		// params.append("max_face_num", "1");
		// params.append("face_field", [
		//     "smooth", // 1-4 smaller the smoother
		//     // "acnespotmole",
		//     // "wrinkle",
		//     "skinquality", // Array of dry and oily skin fields, example: [“0”,“1”,“0”,“0”,“0”],//“0”:“dry”,“1”:“neutral”, “2”: “oily”, which represents the forehead, nose, left cheek, right cheek, and chin in order.
		// ]);
		// params.append("image", file, "wil.png");

		// const dataJson = await fetch(
		//     "https://skin-analysis.p.rapidapi.com/face/effect/skin_analyze",
		//     {
		//         method: "POST",
		//         headers: {
		//             "X-RapidAPI-Key":
		//                 "c8076650c4mshb06f75825074cb0p1527f8jsnab404d7b230d",
		//             "X-RapidAPI-Host": "skin-analysis.p.rapidapi.com",
		//         },
		//         body: params,
		//     }
		// );

		// const data = await dataJson.json();

		const data = {
			error_code: 0,
			error_msg: "SUCCESS",
			log_id: 2523904286,
			timestamp: 1664980923,
			cached: 0,
			result: {
				face_num: 1,
				face_list: [
					{
						face_token: "c0a74282032310f3fc1a16c920b71645",
						location: {
							left: 58.89,
							top: 410.25,
							width: 537,
							height: 518,
							degree: 0,
							prob: 1,
							conf: 1,
						},
						skin: {
							smooth: 3,
						},
						skinquality: {
							skin_dryoil_check: ["1", "1", "1", "1", "0"],
							skin_sensitive_check: ["0"],
						},
					},
				],
			},
		};

		const face = data.result.face_list[0];

		const { smooth } = face.skin;
		const { skin_dryoil_check } = face.skinquality;

		// Determine count values for checking highest
		const [zerocount, onecount, twocount] = [0, 0, 0];

		for (let i of skin_dryoil_check) {
			if (i.toString() === "0") zerocount++;
			else if (i.toString() === "1") onecount++;
			else if (i.toString() === "2") twocount++;
		}

		// Set the number to maximum instead of the count
		let type = "";
		let smoothness = "";

		// Determine type
		let max = Math.max(zerocount, onecount, twocount);
		if (max === zerocount) type = "dry";
		else if (max === onecount) type = "neutral";
		else if (max === twocount) type = "oily";

		// Determine smoothness
		if (smooth >= 3) smoothness = "hard";
		else smoothness = "smooth";

		// API Query
		const productsJson = await fetch(
			`${BASE_API_URL}/shop/search?smooth=${
				smoothness === "smooth" ? true : false
			}&&type=${type}&&id=${user._id}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
			}
		);
		let products = await productsJson.json();

		console.log(products);

		const schedule = products.schedule;
		products = products.products;

		if (schedule !== null) {
			window.location.href = "/home";
		}
	};

	return (
		<Protected authed={authed}>
			<main className="main">
				<form onSubmit={(eve) => getStats(eve)} className="form cont">
					<input
						type="file"
						name="img"
						id="img"
						style={{ display: "none" }}
					/>
					<label htmlFor="img">
						<Image
							src="/upload@2x.png"
							width={320}
							height={300}
							alt="igm"
						/>
					</label>
					<button type="submit" className="form-btn">
						Submit
					</button>
				</form>
			</main>
		</Protected>
	);
};

export default Upload;

const scheduleAndShop = ({ schedule, products }) => {
	return <></>;
};

/*

{
    "error_code": 0,
    "error_msg": "SUCCESS",
    "log_id": 2523904286,
    "timestamp": 1664980923,
    "cached": 0,
    "result": {
        "face_num": 1,
        "face_list": [
            {
                "face_token": "c0a74282032310f3fc1a16c920b71645",
                "location": {
                    "left": 58.89,
                    "top": 410.25,
                    "width": 537,
                    "height": 518,
                    "degree": 0,
                    "prob": 1,
                    "conf": 1
                },
                "skin": {
                    "smooth": 3
                },
                "skinquality": {
                    "skin_dryoil_check": [
                        "1",
                        "1",
                        "1",
                        "1",
                        "0"
                    ],
                    "skin_sensitive_check": [
                        "0"
                    ]
                }
            }
        ]
    }
}
    
*/
