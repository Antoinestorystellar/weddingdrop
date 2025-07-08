import { useEffect, useState } from 'react';
import { UploadButton } from "@uploadthing/react";

const missions = [
{ code: 'Agent Lune', nomMission: 'Code Arrivée', consigne: 'Témoin : Filme les préparatifs côté mariée. ', temps: '15' },
  { code: 'Agent Cosmos', nomMission: 'Code Arrivée', consigne: 'Témoin : Filme les préparatifs côté marié.', temps: '15' },
  { code: 'Agent Émeraude', nomMission: 'Code Arrivée', consigne: 'Montre un détail de la déco ou des tenues.', temps: '6' },
  { code: 'Agent Minuit', nomMission: 'Code Arrivée', consigne: 'Capture l'arrivée d'invités sur le lieu.', temps: '15' },
  { code: 'Agent Mirage', nomMission: 'Code Arrivée', consigne: 'Filme les préparatifs ', temps: '15' },
  { code: 'Agent Carbone', nomMission: 'Code Arrivée', consigne: 'Fais un plan des lieux avant l’arrivée des mariés.', temps: '10' },
  { code: 'Agent Saphir', nomMission: 'Code Arrivée', consigne: 'Montre un détail de la déco ou des tenues.', temps: '5' },
  { code: 'Agent Zéphyr', nomMission: 'Code Arrivée', consigne: 'Montre un détail de la déco ou des tenues.', temps: '5' },
  { code: 'Agent Nébuleuse', nomMission: 'Code Arrivée', consigne: 'Capture l'arrivée d'invités sur le lieu.', temps: '15' },
  { code: 'Agent Quartz', nomMission: 'Code Arrivée', consigne: 'Filme quelqu’un qui aide à préparer.', temps: '5' },
  { code: 'Agent Givre', nomMission: 'Code Arrivée', consigne: 'Montre un détail de la déco ou des tenues.', temps: '5' },
  { code: 'Agent Topaze', nomMission: 'Code Arrivée', consigne: 'Fais un plan des lieux avant l’arrivée des mariés.', temps: '5' },
  { code: 'Agent Atlas', nomMission: 'Code Arrivée', consigne: 'Capture l'arrivée d'invités sur le lieu.', temps: '8' },
  { code: 'Agent Brume', nomMission: 'Code Arrivée', consigne: 'Fais un plan des lieux avant l’arrivée des mariés.', temps: '5' },
  { code: 'Agent Comète', nomMission: 'Code Arrivée', consigne: 'Fais un plan des lieux avant l’arrivée des mariés.', temps: '5' },
  { code: 'Agent Flamme', nomMission: 'Code Arrivée', consigne: 'Filme quelqu’un qui aide à préparer.', temps: '5' },
  { code: 'Agent Obsidienne', nomMission: 'Code Arrivée', consigne: 'Fais un plan des lieux avant l’arrivée des mariés.', temps: '5' },
  { code: 'Agent Nacre', nomMission: 'Code Vœux', consigne: 'Filme les applaudissements ou les pétales.', temps: '10' },
  { code: 'Agent Tempête', nomMission: 'Code Vœux', consigne: 'Capture un moment d’émotion ou de rire.', temps: '8' },
  { code: 'Agent Jade', nomMission: 'Code Vœux', consigne: 'Filme un échange de regards ou de vœux.', temps: '8' },
  { code: 'Agent Galaxie', nomMission: 'Code Vœux', consigne: 'Capture un moment d’émotion ou de rire.', temps: '8' },
  { code: 'Agent Zénith', nomMission: 'Code Vœux', consigne: 'Filme l’entrée de la mariée ou du marié.', temps: '8' },
  { code: 'Agent Nuit', nomMission: 'Code Vœux', consigne: 'Filme un échange de regards ou de vœux.', temps: '5' },
  { code: 'Agent Argent', nomMission: 'Code Vœux', consigne: 'Capture un moment d’émotion ou de rire.', temps: '5' },
  { code: 'Agent Cristal', nomMission: 'Code Vœux', consigne: 'Capture un moment d’émotion ou de rire.', temps: '5' },
  { code: 'Agent Lumière', nomMission: 'Code Vœux', consigne: 'Capture un moment d’émotion ou de rire.', temps: '5' },
  { code: 'Agent Ombre', nomMission: 'Code Vœux', consigne: 'Filme un échange de regards ou de vœux.', temps: '5' },
  { code: 'Agent Vortex', nomMission: 'Code Vœux', consigne: 'Filme un échange de regards ou de vœux.', temps: '5' },
  { code: 'Agent Azur', nomMission: 'Code Vœux', consigne: 'Fais un plan large de l’assemblée.', temps: '7' },
  { code: 'Agent Éclipse', nomMission: 'Code Vœux', consigne: 'Filme l’entrée de la mariée ou du marié.', temps: '8' },
  { code: 'Agent Fusion', nomMission: 'Code Vœux', consigne: 'Capture un moment d’émotion ou de rire.', temps: '5' },
  { code: 'Agent Pétale', nomMission: 'Code Vœux', consigne: 'Fais un plan large de l’assemblée.', temps: '5' },
  { code: 'Agent Rétro', nomMission: 'Code Vœux', consigne: 'Filme un échange de regards ou de vœux.', temps: '5' },
  { code: 'Agent Pixel', nomMission: 'Code Vœux', consigne: 'Fais un plan large de l’assemblée.', temps: '5' },
  { code: 'Agent Silence', nomMission: 'Code Vœux', consigne: 'Filme un échange de regards ou de vœux.', temps: '5' },
  { code: 'Agent Rocket', nomMission: 'Code Vœux', consigne: 'Fais un plan large de l’assemblée.', temps: '5' },
  { code: 'Agent Velours', nomMission: 'Code Vœux', consigne: 'Capture un moment d’émotion ou de rire.', temps: '4' },
  { code: 'Agent Neige', nomMission: 'Code Toast', consigne: 'Capture un moment spontané au buffet.', temps: '5' },
  { code: 'Agent Delta', nomMission: 'Code Toast', consigne: 'Filme des enfants qui jouent dans l’herbe.', temps: '5' },
  { code: 'Agent Plume', nomMission: 'Code Toast', consigne: 'Capture un moment spontané au buffet.', temps: '5' },
  { code: 'Agent Turbo', nomMission: 'Code Toast', consigne: 'Filme des enfants qui jouent dans l’herbe.', temps: '4' },
  { code: 'Agent Cyclone', nomMission: 'Code Toast', consigne: 'Fais un plan des boissons ou de la déco.', temps: '5' },
  { code: 'Agent Dune', nomMission: 'Code Toast', consigne: 'Filme les invités qui trinquent.', temps: '5' },
  { code: 'Agent Nuage', nomMission: 'Code Toast', consigne: 'Capture un moment spontané au buffet.', temps: '5' },
  { code: 'Agent Mistral', nomMission: 'Code Toast', consigne: 'Filme les invités qui trinquent.', temps: '5' },
  { code: 'Agent Songe', nomMission: 'Code Toast', consigne: 'Filme les invités qui trinquent.', temps: '5' },
  { code: 'Agent Pulse', nomMission: 'Code Toast', consigne: 'Capture un moment spontané au buffet.', temps: '5' },
  { code: 'Agent Radar', nomMission: 'Code Toast', consigne: 'Filme les invités qui trinquent.', temps: '5' },
  { code: 'Agent Foudre', nomMission: 'Code Toast', consigne: 'Capture un moment spontané au buffet.', temps: '5' },
  { code: 'Agent Prisma', nomMission: 'Code Toast', consigne: 'Filme un groupe qui rigole ou discute.', temps: '5' },
  { code: 'Agent Focus', nomMission: 'Code Toast', consigne: 'Capture un moment spontané au buffet.', temps: '5' },
  { code: 'Agent Jazz', nomMission: 'Code Toast', consigne: 'Filme des enfants qui jouent dans l’herbe.', temps: '5' },
  { code: 'Agent Éclair', nomMission: 'Code Toast', consigne: 'Fais un plan des boissons ou des apéritifs', temps: '5' },
  { code: 'Agent Radar', nomMission: 'Code Toast', consigne: 'Filme un groupe qui rigole ou discute.', temps: '5' },
  { code: 'Agent Volt', nomMission: 'Code Toast', consigne: 'Filme un groupe qui rigole ou discute.', temps: '5' },
  { code: 'Agent Spectre', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '8' },
  { code: 'Agent Radar', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '8' },
  { code: 'Agent Zoom', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '8' },
  { code: 'Agent Loop', nomMission: 'Code Fiesta', consigne: 'Filme une personne qui danse à fond.', temps: '10' },
  { code: 'Agent Halo', nomMission: 'Code Fiesta', consigne: 'Capture l'ambiance à table', temps: '6' },
  { code: 'Agent Moka', nomMission: 'Code Fiesta', consigne: 'Capture l'ambiance à table', temps: '6' },
  { code: 'Agent Dandy', nomMission: 'Code Fiesta', consigne: 'Fais un plan du gâteau ou de la découpe.', temps: '8' },
  { code: 'Agent Phantom', nomMission: 'Code Fiesta', consigne: 'Filme la première danse ou un moment fort.', temps: '15' },
  { code: 'Agent Ginko', nomMission: 'Code Fiesta', consigne: 'Filme une personne qui danse à fond.', temps: '5' },
  { code: 'Agent Nova', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '8' },
  { code: 'Agent Vega', nomMission: 'Code Fiesta', consigne: 'Filme la première danse ou un moment fort.', temps: '15' },
  { code: 'Agent Nino', nomMission: 'Code Fiesta', consigne: 'Fais un plan du gâteau ou de la découpe.', temps: '8' },
  { code: 'Agent Belle', nomMission: 'Code Fiesta', consigne: 'Filme une personne qui danse à fond.', temps: '8' },
  { code: 'Agent Poésie', nomMission: 'Code Fiesta', consigne: 'Capture l'ambiance de la piste de danse', temps: '6' },
  { code: 'Agent Élan', nomMission: 'Code Fiesta', consigne: 'Capture l'ambiance de la piste de danse', temps: '6' },
  { code: 'Agent Pirate', nomMission: 'Code Fiesta', consigne: 'Capture l'ambiance de la piste de danse', temps: '6' },
  { code: 'Agent Rêverie', nomMission: 'Code Fiesta', consigne: 'Fais un plan du gâteau ou de la découpe.', temps: '5' },
  { code: 'Agent Alpha', nomMission: 'Code Fiesta', consigne: 'Filme la première danse ou un moment fort.', temps: '5' },
  { code: 'Agent Kappa', nomMission: 'Code Fiesta', consigne: 'Filme une personne qui danse à fond.', temps: '5' },
  { code: 'Agent Sirocco', nomMission: 'Code Fiesta', consigne: 'Fais un plan du gâteau ou de la découpe.', temps: '5' },
  { code: 'Agent Lux', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '5' },
  { code: 'Agent Glitch', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '5' },
  { code: 'Agent Pinceau', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '5' },
  { code: 'Agent Boom', nomMission: 'Code Fiesta', consigne: 'Capture une blague ou une réaction à table.', temps: '5' },
  { code: 'Agent Sable', nomMission: 'Code Fiesta', consigne: 'Filme la première danse ou un moment fort.', temps: '5' },
  { code: 'Agent Brise', nomMission: 'Code Fiesta', consigne: 'Fais un plan du gâteau ou de la découpe.', temps: '5' },
  { code: 'Agent Flocon', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '5' },
  { code: 'Agent Pastel', nomMission: 'Code Fiesta', consigne: 'Filme une personne qui danse à fond.', temps: '5' },
  { code: 'Agent Zorro', nomMission: 'Code Fiesta', consigne: 'Capture l’ambiance de la piste de danse.', temps: '5' },
  { code: 'Agent Bingo', nomMission: 'Code Fiesta', consigne: 'Fais un plan du gâteau ou de la découpe.', temps: '5' },
  { code: 'Agent Twist', nomMission: 'Code Micro', consigne: 'Fais un micro-trottoir en te baladant dans la fête.', temps: '2min' },
  { code: 'Agent Disco', nomMission: 'Code Micro', consigne: 'Interroge les invités avec le micro : 1 mot pour les mariés.', temps: '15s-20s par personne' },
  { code: 'Agent Matcha', nomMission: 'Code Micro', consigne: 'Interroge les invités avec le micro : 1 mot pour les mariés.', temps: '15s-20s par personne' },
  { code: 'Agent Pétale', nomMission: 'Code Final', consigne: 'Filme un remerciement collectif des invités.', temps: '10s' },
  { code: 'Agent Hunt', nomMission: 'Code Final', consigne: 'Interroge les invités avec le micro : 1 mot pour les mariés.', temps: '10s / personne' },
  { code: 'Agent Rumba', nomMission: 'Code Final', consigne: 'Capture le lieu à la fin de soirée.', temps: '5' },
  { code: 'Agent Biscuit', nomMission: 'Code Final', consigne: 'Capture le lieu à la fin de soirée.', temps: '5' },
  { code: 'Agent Folie', nomMission: 'Code Final', consigne: 'Filme un message personnel à la caméra.', temps: '20s' },
  { code: 'Agent Tempo', nomMission: 'Code Final', consigne: 'Filme un remerciement collectif des invités. (3-10p)', temps: '15s' },
  { code: 'Agent Chacha', nomMission: 'Code Final', consigne: 'Filme un remerciement collectif des invités. (3-10personnes)', temps: '15s' },
  { code: 'Agent Curl', nomMission: 'Code Fun', consigne: 'Fais un plan artistique (ralenti, contre-plongée).', temps: '10' },
  { code: 'Agent Voltige', nomMission: 'Code Fun', consigne: 'Filme une vue originale du lieu.', temps: '8' },
  { code: 'Agent LuneX', nomMission: 'Code Fun', consigne: 'Capture une surprise ou une réaction.', temps: '8' },
  { code: 'Agent CosmosX', nomMission: 'Code Fun', consigne: 'Filme les gens de dos qui s’éloignent.', temps: '8' },
  { code: 'Agent ÉmeraudeX', nomMission: 'Code Fun', consigne: 'Filme une pancarte, un détail, un symbole. un menu', temps: '5s' },
  { code: 'Agent VelvetX', nomMission: 'Code Fun', consigne: 'Filme quelqu’un qui chante spontanément.', temps: '10s' },
  { code: 'Agent MinuitX', nomMission: 'Code Fun', consigne: 'Fais un plan des pieds qui dansent.', temps: '10s' },
];

export default function App() {
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const mission = missions.find((m) => m.code.toLowerCase() === code?.toLowerCase());
    setAgent(mission);
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">👷️ Mission Vidéo</h1>
      {agent ? (
        <div>
          <p className="mb-2">
            <strong>Agent :</strong> {agent.code} <br />
            <strong>Mission :</strong> {agent.nomMission} <br />
            <strong>Consigne :</strong> {agent.consigne} <br />
            <strong>Durée :</strong> {agent.temps} secondes
          </p>
        </div>
      ) : (
        <p className="text-red-600">Aucune mission trouvée. Veuillez vérifier le lien.</p>
      )}

      <div className="mt-6">
        <UploadButton
          endpoint="videoUploader"
          onClientUploadComplete={() => {
            alert("Vidéo bien reçue ! Merci pour votre participation 🙏");
          }}
          onUploadError={(error) => {
            alert(`Erreur : ${error.message}`);
          }}
        />
      </div>
    </div>
  );
}
