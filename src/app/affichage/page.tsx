"use client";

import { useSearchParams } from "next/navigation";

export default function Affichage() {
  const params = useSearchParams();
  const titre = params.get("titre") ?? "";
  const description = params.get("description") ?? "";
  const technologies = params.get("technologies") ?? "";
  const equipe = params.get("equipe") ?? "";

  return (
    <div>
      <p><strong>Titre:</strong> {titre}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Technologies:</strong> {technologies}</p>
      <p><strong>Équipe:</strong> {equipe}</p>
    </div>
  );
}
