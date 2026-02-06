import { AlertTriangle } from "lucide-react";

export function BadNavigationExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Problèmes identifiés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Navigation confuse et non intuitive</li>
            <li>Pas d'indication de page active</li>
            <li>Trop d'options au même niveau</li>
            <li>Liens peu visibles</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Bad navigation bar */}
        <div className="bg-slate-200 p-2">
          <div className="flex gap-1 text-xs flex-wrap">
            <a href="#" className="text-blue-800 underline">accueil</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">about</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">services</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">produits</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">portfolio</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">team</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">blog</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">faq</a>
            <span>|</span>
            <a href="#" className="text-blue-800 underline">contact</a>
          </div>
        </div>

        {/* Messy content area */}
        <div className="border border-slate-300 p-3">
          <div className="space-y-2">
            <p className="text-xs text-slate-600">
              Vous êtes ici: Page &gt; Sous-page &gt; Autre page &gt; Contenu
            </p>
            <div className="flex gap-2 flex-wrap">
              <button className="text-xs bg-slate-300 px-2 py-1">Bouton 1</button>
              <button className="text-xs bg-slate-300 px-2 py-1">Bouton 2</button>
              <button className="text-xs bg-slate-300 px-2 py-1">Bouton 3</button>
              <button className="text-xs bg-slate-300 px-2 py-1">Bouton 4</button>
              <button className="text-xs bg-slate-300 px-2 py-1">Bouton 5</button>
            </div>
          </div>
        </div>

        {/* Sidebar with too many options */}
        <div className="border border-slate-300 p-2">
          <p className="text-xs mb-2">Menu:</p>
          <div className="space-y-1 text-xs">
            <a href="#" className="block text-blue-800 underline">Option A</a>
            <a href="#" className="block text-blue-800 underline">Option B</a>
            <a href="#" className="block text-blue-800 underline">Option C</a>
            <a href="#" className="block text-blue-800 underline">Option D</a>
            <a href="#" className="block text-blue-800 underline">Option E</a>
            <a href="#" className="block text-blue-800 underline">Option F</a>
            <a href="#" className="block text-blue-800 underline">Option G</a>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ Navigation surchargée avec trop d'options</p>
        <p>❌ Pas d'indication visuelle de la page active</p>
        <p>❌ Hiérarchie de l'information peu claire</p>
        <p>❌ Espacement minimal, sensation de désordre</p>
      </div>
    </div>
  );
}
