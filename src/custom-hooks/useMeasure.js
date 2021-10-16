import { useState, useLayoutEffect } from "react";

export const useMeasure = (ref) => {
	const [rect, setRect] = useState({});

	useLayoutEffect(() => {
		setRect(ref.current.getBoundingClientRect());
	}, []);

	return rect;
};
