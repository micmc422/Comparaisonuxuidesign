import { Check, Smartphone, Monitor, Menu } from "lucide-react";

export function GoodResponsiveExample() {
  return (
    <div className="space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Améliorations appliquées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Adaptation fluide aux écrans</li>
            <li>Tailles tactiles appropriées</li>
            <li>Navigation mobile optimisée</li>
            <li>Contenu réorganisé intelligemment</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Desktop view simulation */}
        <div className="bg-slate-100 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Monitor className="w-4 h-4 text-slate-600" />
            <p className="text-xs text-slate-700">Vue Desktop</p>
          </div>
          <div className="bg-white border border-slate-300 rounded-lg overflow-hidden">
            <div className="bg-blue-600 px-4 py-2 flex items-center justify-between">
              <div className="text-white text-xs">Logo</div>
              <div className="flex gap-3 text-[10px] text-white">
                <span>Accueil</span>
                <span>Services</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="p-3">
              <div className="flex gap-3">
                <div className="flex-1 space-y-2">
                  <div className="bg-slate-100 rounded p-2">
                    <p className="text-xs mb-1">Contenu principal</p>
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      Texte lisible avec bon espacement et hiérarchie claire
                    </p>
                  </div>
                </div>
                <div className="w-24">
                  <div className="bg-slate-100 rounded p-2">
                    <p className="text-[9px] text-slate-700">Sidebar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view simulation - GOOD */}
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="w-4 h-4 text-green-600" />
            <p className="text-xs text-green-700">Vue Mobile (Optimisée)</p>
          </div>
          <div className="max-w-[200px] mx-auto bg-white border-2 border-green-300 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-blue-600 px-3 py-2 flex items-center justify-between">
              <div className="text-white text-xs">Logo</div>
              <Menu className="w-4 h-4 text-white" />
            </div>
            <div className="p-3 space-y-3">
              <div className="bg-slate-100 rounded-lg p-3">
                <p className="text-xs mb-2">Contenu principal</p>
                <p className="text-[9px] text-slate-600 leading-relaxed">
                  Texte lisible avec taille adaptée au mobile
                </p>
              </div>
              <div className="bg-slate-100 rounded-lg p-3">
                <p className="text-[9px] text-slate-700 mb-2">Infos complémentaires</p>
                <p className="text-[8px] text-slate-600">Sidebar déplacée en bas</p>
              </div>
              <div className="space-y-2">
                <button className="w-full text-xs bg-blue-600 text-white px-3 py-2 rounded-lg">
                  Action principale
                </button>
                <button className="w-full text-xs border border-slate-300 text-slate-700 px-3 py-2 rounded-lg">
                  Action secondaire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ Navigation repensée pour mobile avec menu hamburger</p>
        <p>✅ Contenu empilé verticalement sur mobile</p>
        <p>✅ Tailles de texte et boutons adaptées au tactile (min 44px)</p>
        <p>✅ Sidebar repositionnée en bas sur mobile</p>
        <p>✅ Espacement généreux pour faciliter l'interaction</p>
      </div>
    </div>
  );
}
