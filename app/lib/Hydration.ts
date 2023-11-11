"use client";

import { useState, useEffect } from "react";

function Hydration({ children }: { children: React.ReactNode | any }) {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated ? children : null;
}

export default Hydration;
