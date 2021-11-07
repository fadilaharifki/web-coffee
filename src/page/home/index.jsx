import { useState } from "react";
import { AnimateOnChange } from "react-animation";

function Home() {
	const [countCarousel, setCountCarousel] = useState(0);

	const img = [
		"https://ik.imagekit.io/prbjdtauk2z/097400900_1511149460-Mana-Lebih-Aman-Kopi-Arabika-atau-Robusta_ra0aXgL9i.jpg",
		"https://ik.imagekit.io/prbjdtauk2z/biji-kopi-1024x600_bGS22us8C.jpg",
		"https://ik.imagekit.io/prbjdtauk2z/pexels-jamal-yahya-4085266_wV7jMEcsF.jpg",
		"https://ik.imagekit.io/prbjdtauk2z/1200x680_tasse_de_cafe_-_fotolia_-_marco_mayer_DdOjTBKdH.jpg",
	];

	const plus = () => {
		if (countCarousel > 0) {
			setCountCarousel(countCarousel - 1);
		} else {
			setCountCarousel(3);
		}
	};

	const min = () => {
		if (countCarousel < 3) {
			setCountCarousel(countCarousel + 1);
		} else {
			setCountCarousel(0);
		}
	};

	return (
		<div>
			<div className="w-full carousel">
				<div id="slide1" className="w-full carousel-item">
					<AnimateOnChange durationOut="500">
						<img
							src={img[countCarousel]}
							className="w-screen h-screen"
							alt="img"
						/>
					</AnimateOnChange>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<button onClick={min} className="btn btn-circle">
							❮
						</button>
						<button className="btn btn-circle" onClick={plus}>
							❯
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
