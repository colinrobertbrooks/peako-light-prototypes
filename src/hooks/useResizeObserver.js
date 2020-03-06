import { useEffect, useState, useRef, useMemo } from "react";
import { ResizeObserver as Polyfill } from "@juggle/resize-observer";

const ResizeObserver = window.ResizeObserver || Polyfill;

// https://github.com/ZeeCoder/use-resize-observer/blob/master/src/index.js
const useResizeObserver = ({ ref, onResize } = {}) => {
  const defaultRef = useRef(null);
  ref = ref || defaultRef;
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });

  const previous = useRef({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    if (
      typeof ref !== "object" ||
      ref === null ||
      !(ref.current instanceof Element)
    ) {
      return;
    }

    const element = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) {
        return;
      }

      if (!entries.length) {
        return;
      }

      const entry = entries[0];

      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);
      if (
        previous.current.width !== newWidth ||
        previous.current.height !== newHeight
      ) {
        const newSize = { width: newWidth, height: newHeight };
        if (onResize) {
          onResize(newSize);
        } else {
          previous.current.width = newWidth;
          previous.current.height = newHeight;
          setSize(newSize);
        }
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, [ref, onResize]);

  return useMemo(() => ({ ref, ...size }), [
    ref,
    size ? size.width : null,
    size ? size.height : null
  ]);
};

export default useResizeObserver;
