import { useEffect, useRef } from "react";

/**
 * Identical to React.useEffect, except that it never runs on mount.
 * This is the equivalent of the `componentDidUpdate` lyfecycle function.
 */
const useEffectExceptOnMount = (
  effect: React.EffectCallback,
  deps?: React.DependencyList
): void => {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      const unmount = effect();
      return () => {
        mounted.current = false;
        unmount && unmount();
      };
    } else {
      mounted.current = true;
    }
  }, deps);
};

export default useEffectExceptOnMount;
