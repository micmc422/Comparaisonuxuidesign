import { AlertTriangle, Smartphone, Monitor } from "lucide-react";

export function BadResponsiveExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Problèmes identifiés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Pas d'adaptation mobile</li>
            <li>Texte trop petit sur mobile</li>
            <li>Éléments qui dépassent</li>
            <li>Navigation desktop fixe</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Desktop view simulation */}
        <div className="bg-slate-100 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Monitor className="w-4 h-4 text-slate-600" />
            <p className="text-xs text-slate-700">Vue Desktop (OK)</p>
          </div>
          <div className="bg-white border border-slate-300 p-4 text-xs">
            <div className="flex gap-4 mb-3">
              <div className="flex-1">
                <div className="bg-blue-100 p-2 mb-2">Header avec logo</div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-slate-200 p-3">
                    <p className="text-xs mb-2">Contenu principal</p>
                    <p className="text-[10px] text-slate-600">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="w-24 bg-slate-200 p-2">
                    <p className="text-[10px]">Sidebar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view simulation - BAD */}
        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="w-4 h-4 text-red-600" />
            <p className="text-xs text-red-700">Vue Mobile (Problématique)</p>
          </div>
          <div className="max-w-[200px] bg-white border-2 border-red-300 overflow-hidden">
            <div className="bg-blue-100 p-1 text-[8px] whitespace-nowrap overflow-hidden">
              Header logo navigation contact about services
            </div>
            <div className="p-2 overflow-hidden">
              <div className="flex gap-1">
                <div className="flex-1 bg-slate-200 p-1">
                  <p className="text-[7px] mb-1">Contenu</p>
                  <p className="text-[6px] text-slate-600">Texte illisible sur mobile, trop petit</p>
                </div>
                <div className="w-12 bg-slate-200 p-1">
                  <p className="text-[6px]">Side</p>
                </div>
              </div>
              <div className="mt-1 flex gap-1">
                <button className="text-[6px] bg-blue-500 text-white px-1 py-0.5">Bouton</button>
                <button className="text-[6px] bg-blue-500 text-white px-1 py-0.5">Bouton</button>
                <button className="text-[6px] bg-blue-500 text-white px-1 py-0.5">Bouton</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ Layout desktop forcé sur mobile</p>
        <p>❌ Texte et boutons trop petits pour être utilisables</p>
        <p>❌ Contenu qui déborde de l'écran</p>
        <p>❌ Navigation horizontale compressée</p>
        <p>❌ Sidebar inutile qui prend de l'espace précieux</p>
      </div>
    </div>
  );
}
