import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // better-sqlite3 to moduł natywny — musi zostać po stronie Node, nie może
  // trafić do bundla webpacka/turbopacka.
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
