import { AlertTriangle } from "lucide-react";

export function BadLayoutExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Problèmes identifiés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Espacement incohérent</li>
            <li>Hiérarchie visuelle confuse</li>
            <li>Couleurs mal utilisées</li>
            <li>Alignement chaotique</li>
          </ul>
        </div>
      </div>

      {/* Bad layout example */}
      <div className="border border-slate-300 bg-white">
        {/* Header cramped */}
        <div className="bg-gradient-to-r from-red-400 via-yellow-400 to-pink-400 p-2">
          <h1 className="text-2xl text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            BIENVENUE SUR NOTRE SITE!!!
          </h1>
          <p className="text-xs text-white">Le meilleur site du monde</p>
        </div>

        {/* Chaotic content area */}
        <div className="p-2">
          <div className="flex gap-1 mb-2">
            <div className="bg-yellow-200 p-1 text-xs w-1/3">
              <p className="text-red-600">PROMOTION!</p>
              <p className="text-xs text-slate-700">-50% sur tout</p>
            </div>
            <div className="bg-pink-200 p-2 text-xs w-1/3">
              <p className="text-blue-600">NOUVEAU</p>
            </div>
            <div className="bg-green-200 p-1 text-xs w-1/3">
              <p className="text-purple-600">SOLDES</p>
            </div>
          </div>

          {/* Mixed content */}
          <div className="space-y-1">
            <p className="text-base text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
            <p className="text-xs text-slate-600">
              Sed do eiusmod tempor incididunt ut labore
            </p>
            <p className="text-lg text-slate-800">
              Et dolore magna aliqua
            </p>
          </div>

          {/* Cards with inconsistent sizes */}
          <div className="flex gap-1 mt-2">
            <div className="bg-blue-100 p-2 w-1/4">
              <div className="w-full h-12 bg-blue-300 mb-1"></div>
              <p className="text-xs">Produit 1</p>
              <p className="text-sm">99€</p>
            </div>
            <div className="bg-blue-100 p-1 w-1/3">
              <div className="w-full h-16 bg-blue-300 mb-1"></div>
              <p className="text-xs">Produit 2</p>
              <p className="text-xs">149€</p>
            </div>
            <div className="bg-blue-100 p-3 w-1/2">
              <div className="w-full h-20 bg-blue-300 mb-2"></div>
              <p className="text-sm">Produit 3</p>
              <p className="text-lg">199€</p>
            </div>
          </div>

          {/* Footer with no breathing room */}
          <div className="bg-slate-700 text-white p-1 mt-2">
            <p className="text-xs">Contact: email@site.com | Tel: 0123456789 | Adresse: 123 Rue Example</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ Espacement minimal créant une sensation d'étouffement</p>
        <p>❌ Couleurs criardes et incohérentes</p>
        <p>❌ Tailles de police aléatoires sans hiérarchie</p>
        <p>❌ Éléments mal alignés et de tailles incohérentes</p>
        <p>❌ Trop d'informations condensées sans structure claire</p>
      </div>
    </div>
  );
}
