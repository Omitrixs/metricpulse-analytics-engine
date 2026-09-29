"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Tells React the component has securely mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleModeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Prevents the hydration mismatch by rendering a consistent default on the server
  if (!mounted) {
    return (
      <Button size="icon">
        <RiSunLine />
      </Button>
    );
  }

  return (
    <Button size="icon" onClick={handleModeToggle}>
      {theme === "light" ? <RiSunLine /> : <RiMoonLine />}
    </Button>
  );
}

export default ModeToggle;