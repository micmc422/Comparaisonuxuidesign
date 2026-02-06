import { AlertTriangle } from "lucide-react";

export function BadButtonExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Problèmes identifiés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Actions critiques peu distinguées</li>
            <li>Pas de feedback visuel</li>
            <li>États désactivés peu clairs</li>
            <li>Hiérarchie d'actions confuse</li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        {/* All buttons look the same */}
        <div className="space-y-2">
          <p className="text-sm text-slate-700">Actions utilisateur:</p>
          <div className="flex gap-2 flex-wrap">
            <button className="bg-blue-500 text-white px-3 py-1 text-sm">
              Sauvegarder
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 text-sm">
              Supprimer
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 text-sm">
              Annuler
            </button>
          </div>
        </div>

        {/* Unclear disabled state */}
        <div className="space-y-2">
          <p className="text-sm text-slate-700">Bouton désactivé:</p>
          <button className="bg-blue-500 text-white px-3 py-1 text-sm opacity-50 cursor-not-allowed">
            Confirmer
          </button>
          <p className="text-xs text-slate-500">Pourquoi je ne peux pas cliquer?</p>
        </div>

        {/* No visual feedback */}
        <div className="space-y-2">
          <p className="text-sm text-slate-700">Envoi de formulaire:</p>
          <button className="bg-blue-500 text-white px-4 py-2 text-sm">
            ENVOYER
          </button>
          <p className="text-xs text-slate-500">En train d'envoyer...</p>
        </div>

        {/* Destructive action not emphasized */}
        <div className="space-y-2">
          <p className="text-sm text-slate-700">Supprimer votre compte:</p>
          <button className="bg-slate-300 text-slate-700 px-3 py-1 text-xs">
            supprimer compte
          </button>
        </div>

        {/* Inconsistent styling */}
        <div className="flex gap-2 flex-wrap">
          <button className="bg-green-600 text-white px-2 py-1 text-xs rounded">OK</button>
          <button className="bg-red-500 text-white px-4 py-2 text-sm">Cancel</button>
          <button className="border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded-full">Next</button>
        </div>
      </div>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ Toutes les actions ont la même importance visuelle</p>
        <p>❌ Actions destructives non signalées</p>
        <p>❌ Pas de feedback lors du chargement</p>
        <p>❌ État désactivé sans explication</p>
        <p>❌ Styles incohérents entre les boutons</p>
      </div>
    </div>
  );
}
