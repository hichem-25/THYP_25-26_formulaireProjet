"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Formulaire() {
  const router = useRouter();
  const [data, setData] = useState({
    titre: "",
    description: "",
    technologies: "",
    equipe: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(data);
    router.push(`/affichage?${params.toString()}`);
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", padding: 20, fontFamily: "Arial, sans-serif", border: "1px solid #ddd", borderRadius: 10, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Projet Hypermedia</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 15 }}>
        {["titre", "description", "technologies", "equipe"].map((field) => (
          <div key={field}>
            <label style={{ display: "block", marginBottom: 5, fontWeight: "bold", textTransform: "capitalize" }}>{field} :</label>
            {field === "description" ? (
              <textarea
                name={field}
                value={data[field as keyof typeof data]}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
              />
            ) : (
              <input
                type="text"
                name={field}
                value={data[field as keyof typeof data]}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: 8, borderRadius: 5, border: "1px solid #ccc" }}
              />
            )}
          </div>
        ))}
        <button type="submit" style={{ padding: 10, borderRadius: 5, background: "#0070f3", color: "#fff", border: "none", cursor: "pointer" }}>
          Envoyer
        </button>
      </form>
    </div>
  );
}
