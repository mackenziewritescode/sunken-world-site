import { useState, useEffect } from "react";

function useIntersect(ref, rootMargin = "0%" ) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        }, {rootMargin});

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        }
    }, [])

    return isIntersecting
}

export default useIntersect