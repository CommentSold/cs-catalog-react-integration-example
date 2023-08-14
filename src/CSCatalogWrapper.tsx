import { memo, useEffect, useRef } from "react";
import { mountCSCatalog } from "@commentsold/cs-catalog";
import "@commentsold/cs-catalog/css";
export const CSCatalogWrapper = memo(function () {
	const mountElement = useRef<HTMLElement | null>(null);
	useEffect(() => {
		const app = mountCSCatalog(mountElement.current, {
			apiUrl: "https://openapi.commentsold.com",
			baseUrl: "path/to/cs-catalog",
			shopId: "14",
			isShopOwner: true,
			isSuperAdmin: true,
			shopOwnerInfo: {
				name: "jim bob",
				streetAddress: "123 w test st",
				city: "dayton",
				state: "oh",
				zip: 45459,
				countryCode: "1",
				email: "seth.white@commentsold.com",
				phoneNumber: "513-285-3365",
			},
			jwtToken:
				"eyJpdiI6ImpZaWVMYnVuRGVhWk84YzNvcm1ONGc9PSIsInZhbHVlIjoidkI0QnBwNU41Qm9FekN0d0dHWFl3R09sNjZ0OGdZbUV6K1UrcTVSSGloWUlTM1BCMy9HbVdqYytoRnFzeW0ySDRnWkdJLzIydksxb0M2YW00MDU0bDhaWWRFUEw3bE1POGh1MllRMmVjaEIvKytRZ25mRElIUnJ5T1FiRHZ5cTIiLCJtYWMiOiJhYjQ5N2M5MDFjMDZhYTUzYWE4MzM0NjA4MGI0OGNjZDU4MDg4YTc5MjhmMGI2NDA1YTU3MjAzYTk5ZmIxYzA5IiwidGFnIjoiIn0=",
		});
		return () => app.unmount();
	}, []);

	return <div ref={mountElement}></div>;
});
