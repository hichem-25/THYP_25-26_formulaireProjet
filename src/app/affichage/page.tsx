"use client";

import { useSearchParams } from "next/navigation";

export default function Affichage() {
  const params = useSearchParams();
  const data = ["titre", "description", "technologies", "equipe"].reduce((acc, key) => {
    acc[key] = params.get(key) ?? "";
    return acc;
  }, {} as Record<string, string>);

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", padding: 20, fontFamily: "Arial, sans-serif", border: "1px solid #ddd", borderRadius: 10, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Détails du projet</h1>
      {Object.entries(data).map(([key, value]) => (
        <p key={key} style={{ marginBottom: 10 }}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
        </p>
      ))}
    </div>
  );
}
