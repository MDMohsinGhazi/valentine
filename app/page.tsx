"use client";

import { Suspense, useEffect, useState } from "react";
import Home from "./Home";

const page = () => {

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Suspense fallback={null}>
      <Home isMobile={isMobile} />
    </Suspense>
  )
}

export default page