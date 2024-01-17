import { useEffect, useRef } from "react";

const useIsMounted = (): React.MutableRefObject<boolean> => {
	const isMounted = useRef<boolean>(false);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);

	return isMounted;
};

export default useIsMounted;
