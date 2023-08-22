import { axisLeft, ScaleLinear, select } from "d3";
import React, { useEffect, useRef } from "react";

export interface AxisLeftProps {
  scale: ScaleLinear<number, number, number>;
}

export function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);
  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}
