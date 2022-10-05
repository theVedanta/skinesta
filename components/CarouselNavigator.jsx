import { useCallback, useEffect, useState } from "react";

const CarouselNavigator = ({ embla }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const scrollTo = useCallback(
		(index) => embla && embla.scrollTo(index),
		[embla]
	);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
	}, [embla, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		setScrollSnaps(embla.scrollSnapList());
		embla.on("select", onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<>
			<ul className="embla__navigation product">
				{scrollSnaps.map((_, ind) => {
					return (
						<li
							key={ind}
							onClick={() => scrollTo(ind)}
							className={selectedIndex === ind ? "active" : ""}
						></li>
					);
				})}
			</ul>
		</>
	);
};

export default CarouselNavigator;
