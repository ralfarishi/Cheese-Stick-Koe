import { useEffect, useRef } from "react";

/**
 * A shared hook for managing scroll lock with reference counting.
 * Multiple modals/panels can use this simultaneously without conflicts.
 *
 * @param isLocked - Whether the scroll should be locked
 */
export function useScrollLock(isLocked: boolean): void {
	const wasLockedRef = useRef(false);

	useEffect(() => {
		if (isLocked && !wasLockedRef.current) {
			// Lock scroll
			wasLockedRef.current = true;

			const currentCount = parseInt(document.body.getAttribute("data-scroll-lock-count") || "0");
			document.body.setAttribute("data-scroll-lock-count", (currentCount + 1).toString());

			// Only apply styles if this is the first lock
			if (currentCount === 0) {
				const scrollY = window.scrollY;
				document.body.setAttribute("data-scroll-position", scrollY.toString());
				document.body.style.position = "fixed";
				document.body.style.top = `-${scrollY}px`;
				document.body.style.width = "100%";
				document.body.style.overflow = "hidden";
			}
		} else if (!isLocked && wasLockedRef.current) {
			// Unlock scroll
			wasLockedRef.current = false;
			unlockScroll();
		}

		return () => {
			// Cleanup on unmount (only if this instance was locking)
			if (wasLockedRef.current) {
				wasLockedRef.current = false;
				unlockScroll();
			}
		};
	}, [isLocked]);
}

/**
 * Helper function to unlock scroll and restore position
 */
function unlockScroll() {
	const currentCount = parseInt(document.body.getAttribute("data-scroll-lock-count") || "0");

	if (currentCount > 0) {
		const newCount = currentCount - 1;
		document.body.setAttribute("data-scroll-lock-count", newCount.toString());

		// Only restore styles if this is the last unlock
		if (newCount === 0) {
			const scrollY = parseInt(document.body.getAttribute("data-scroll-position") || "0");
			document.body.removeAttribute("data-scroll-position");

			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
			document.body.style.overflow = "";

			// Immediately restore scroll position in the same synchronous execution
			// Using scrollTo with instant behavior to prevent any visible jump
			window.scrollTo({
				top: scrollY,
				left: 0,
				behavior: "instant",
			});
		}
	}
}
