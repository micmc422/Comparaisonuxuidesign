import { AlertTriangle } from "lucide-react";

export function BadCrapExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Violation des principes CRAP :</strong>
          </p>
          <p className="text-xs text-slate-600">
            CRAP = Contraste, Répétition, Alignement, Proximité
          </p>
        </div>
      </div>

      {/* Bad Contrast */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-xs">
            C
          </div>
          <h3 className="text-sm text-slate-900">Contraste - Problème</h3>
        </div>
        <div className="space-y-2">
          <div className="bg-slate-300 p-3 rounded">
            <p className="text-slate-400 text-sm mb-2">
              Titre important peu visible
            </p>
            <p className="text-slate-500 text-xs">
              Texte gris sur fond gris, difficile à lire. Aucune hiérarchie visuelle.
            </p>
            <button className="mt-2 bg-slate-400 text-slate-300 px-3 py-1 text-xs rounded">
              Bouton invisible
            </button>
          </div>
          <p className="text-[10px] text-red-600">
            ❌ Faible contraste entre texte et fond, pas de hiérarchie
          </p>
        </div>
      </div>

      {/* Bad Repetition */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-xs">
            R
          </div>
          <h3 className="text-sm text-slate-900">Répétition - Problème</h3>
        </div>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-2">
            <p className="text-xs text-slate-900">Section 1</p>
            <p className="text-[10px] text-slate-600">Contenu avec bordure bleue</p>
          </div>
          <div className="bg-green-100 p-2 rounded-full">
            <p className="text-xs text-slate-900">Section 2</p>
            <p className="text-[10px] text-slate-600">Contenu avec fond vert arrondi</p>
          </div>
          <div className="border-2 border-dashed border-purple-500 p-2">
            <p className="text-xs text-slate-900">Section 3</p>
            <p className="text-[10px] text-slate-600">Contenu avec bordure pointillée</p>
          </div>
          <p className="text-[10px] text-red-600">
            ❌ Styles différents pour chaque section, pas de cohérence
          </p>
        </div>
      </div>

      {/* Bad Alignment */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-xs">
            A
          </div>
          <h3 className="text-sm text-slate-900">Alignement - Problème</h3>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-slate-900 text-center">Titre Centré</p>
          <p className="text-[10px] text-slate-600 pl-4">Paragraphe avec indentation aléatoire</p>
          <p className="text-[10px] text-slate-600 text-right">Texte aligné à droite</p>
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-2 py-1 text-[9px] rounded">OK</button>
            <button className="bg-green-500 text-white px-3 py-1 text-[9px] rounded ml-8">Valider</button>
          </div>
          <p className="text-[10px] text-red-600">
            ❌ Alignements chaotiques, aucune structure visuelle
          </p>
        </div>
      </div>

      {/* Bad Proximity */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-xs">
            P
          </div>
          <h3 className="text-sm text-slate-900">Proximité - Problème</h3>
        </div>
        <div className="space-y-4">
          <p className="text-xs text-slate-900">Nom:</p>
          <p className="text-[10px] text-slate-600">Jean Dupont</p>
          <p className="text-xs text-slate-900">Email:</p>
          <p className="text-[10px] text-slate-600">jean@email.com</p>
          <p className="text-xs text-slate-900">Téléphone:</p>
          <p className="text-[10px] text-slate-600">0612345678</p>
          <p className="text-[10px] text-red-600 mt-4">
            ❌ Espacement uniforme, labels séparés de leurs valeurs
          </p>
        </div>
      </div>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ <strong>Contraste:</strong> Éléments importants noyés, pas de hiérarchie</p>
        <p>❌ <strong>Répétition:</strong> Styles incohérents, pas d'identité visuelle</p>
        <p>❌ <strong>Alignement:</strong> Positionnements anarchiques</p>
        <p>❌ <strong>Proximité:</strong> Éléments liés éloignés les uns des autres</p>
      </div>
    </div>
  );
}
