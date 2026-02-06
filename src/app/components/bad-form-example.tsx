import { AlertTriangle } from "lucide-react";

export function BadFormExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Problèmes identifiés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Pas de labels clairs</li>
            <li>Messages d'erreur peu utiles</li>
            <li>Espacement insuffisant</li>
            <li>Validation non claire</li>
          </ul>
        </div>
      </div>

      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="nom"
          className="w-full px-2 py-1 border border-slate-300 text-sm"
        />
        
        <input
          type="text"
          placeholder="email"
          className="w-full px-2 py-1 border border-red-500 text-sm"
        />
        <p className="text-xs text-red-600">Erreur</p>

        <input
          type="text"
          placeholder="telephone"
          className="w-full px-2 py-1 border border-slate-300 text-sm"
        />

        <textarea
          placeholder="message"
          className="w-full px-2 py-1 border border-slate-300 text-sm"
          rows={2}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-1 text-sm"
        >
          ENVOYER
        </button>
      </form>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ Pas de distinction visuelle entre champs obligatoires et optionnels</p>
        <p>❌ Message d'erreur vague qui n'aide pas l'utilisateur</p>
        <p>❌ Manque d'espacement, sensation de compacité</p>
        <p>❌ Placeholders en minuscules et pas de labels</p>
      </div>
    </div>
  );
}
