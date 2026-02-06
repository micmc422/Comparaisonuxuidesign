import { Check, Star, Package, TrendingUp, Users, DollarSign } from "lucide-react";

export function GoodCardsExample() {
  return (
    <div className="space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Améliorations appliquées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Cards uniformes et cohérentes</li>
            <li>Grilles de données lisibles</li>
            <li>Hiérarchie visuelle claire</li>
            <li>Design adaptatif</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Good cards - Consistent */}
        <div>
          <p className="text-sm text-slate-700 mb-3">Cards cohérentes avec grille:</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-full h-20 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div className="p-3 space-y-2">
                <h3 className="text-xs text-slate-900">Produit Premium</h3>
                <p className="text-[10px] text-slate-600">Description concise du produit</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-900">99€</p>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-[9px] text-slate-600">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-full h-20 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div className="p-3 space-y-2">
                <h3 className="text-xs text-slate-900">Produit Excellence</h3>
                <p className="text-[10px] text-slate-600">Description concise du produit</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-900">149€</p>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-[9px] text-slate-600">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-full h-20 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <div className="p-3 space-y-2">
                <h3 className="text-xs text-slate-900">Produit Luxe</h3>
                <p className="text-[10px] text-slate-600">Description concise du produit</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-900">199€</p>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-[9px] text-slate-600">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Good stats cards */}
        <div>
          <p className="text-sm text-slate-700 mb-3">Cards statistiques:</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-slate-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-600">Ventes totales</p>
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-lg text-slate-900">24,590€</p>
              <p className="text-[9px] text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +12% ce mois
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-600">Clients actifs</p>
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-lg text-slate-900">1,248</p>
              <p className="text-[9px] text-blue-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +5% ce mois
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-600">Commandes</p>
                <Package className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-lg text-slate-900">342</p>
              <p className="text-[9px] text-purple-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +8% ce mois
              </p>
            </div>
          </div>
        </div>

        {/* Good data list */}
        <div>
          <p className="text-sm text-slate-700 mb-3">Liste de données structurée:</p>
          <div className="space-y-2">
            <div className="bg-white border border-slate-200 rounded-lg p-3 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs text-slate-900">Jean Dupont</p>
                  <p className="text-[10px] text-slate-600">jean.dupont@email.com</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-900">1,250€</p>
                  <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[9px] rounded-full">
                    En cours
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-3 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs text-slate-900">Marie Martin</p>
                  <p className="text-[10px] text-slate-600">marie.m@email.com</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-900">890€</p>
                  <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[9px] rounded-full">
                    Livré
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-3 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs text-slate-900">Pierre Durand</p>
                  <p className="text-[10px] text-slate-600">p.durand@email.com</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-900">2,140€</p>
                  <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[9px] rounded-full">
                    En attente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ Cards avec dimensions et espacements cohérents</p>
        <p>✅ Grille structurée et alignée</p>
        <p>✅ Hiérarchie visuelle claire pour scanner rapidement</p>
        <p>✅ États visuels distincts (hover, statuts)</p>
        <p>✅ Informations organisées logiquement</p>
      </div>
    </div>
  );
}
