"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Formulaire() {
  const router = useRouter();
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [equipe, setEquipe] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      titre,
      description,
      technologies,
      equipe,
    });
    router.push(`/affichage?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre:</label>
        <input value={titre} onChange={e => setTitre(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Technologies:</label>
        <input value={technologies} onChange={e => setTechnologies(e.target.value)} />
      </div>
      <div>
        <label>Équipe:</label>
        <input value={equipe} onChange={e => setEquipe(e.target.value)} />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}
