import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    new ResizeObserver((entries) => {
      console.log("resize", entries);
    }).observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning={true}
      style={{ display: "inline-block" }}
    >
      aaa
    </div>
  );
}
