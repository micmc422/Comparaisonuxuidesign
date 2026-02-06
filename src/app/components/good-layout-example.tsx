import { Check, Star, ShoppingCart } from "lucide-react";

export function GoodLayoutExample() {
  return (
    <div className="space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Améliorations appliquées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Espacement cohérent et généreux</li>
            <li>Hiérarchie visuelle claire</li>
            <li>Palette de couleurs harmonieuse</li>
            <li>Alignement et grille structurés</li>
          </ul>
        </div>
      </div>

      {/* Good layout example */}
      <div className="border border-slate-200 bg-white rounded-lg overflow-hidden shadow-sm">
        {/* Clean header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
          <h1 className="text-2xl text-white mb-2">
            Bienvenue sur notre boutique
          </h1>
          <p className="text-sm text-blue-100">
            Découvrez nos produits soigneusement sélectionnés
          </p>
        </div>

        {/* Well-spaced content area */}
        <div className="p-6">
          {/* Promotional banners with consistent styling */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-sm text-amber-900 mb-1">Promotion</p>
              <p className="text-xs text-amber-700">Jusqu'à -50%</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-sm text-blue-900 mb-1">Nouveautés</p>
              <p className="text-xs text-blue-700">Collection 2026</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-sm text-green-900 mb-1">Livraison</p>
              <p className="text-xs text-green-700">Gratuite dès 50€</p>
            </div>
          </div>

          {/* Clear typography hierarchy */}
          <div className="space-y-4 mb-6">
            <h2 className="text-xl text-slate-900">
              Nos produits phares
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Découvrez notre sélection de produits premium, soigneusement choisis pour leur qualité exceptionnelle et leur design innovant.
            </p>
          </div>

          {/* Consistent product cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-slate-400" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm text-slate-900">Produit Premium</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-slate-500 ml-1">(4.9)</span>
                </div>
                <p className="text-lg text-slate-900">99€</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-slate-400" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm text-slate-900">Produit Excellence</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 text-slate-300" />
                  <span className="text-xs text-slate-500 ml-1">(4.2)</span>
                </div>
                <p className="text-lg text-slate-900">149€</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-slate-400" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm text-slate-900">Produit Luxe</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-slate-500 ml-1">(5.0)</span>
                </div>
                <p className="text-lg text-slate-900">199€</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clean footer with proper spacing */}
        <div className="bg-slate-50 border-t border-slate-200 px-8 py-6">
          <div className="grid grid-cols-3 gap-6 text-sm text-slate-600">
            <div>
              <p className="text-xs text-slate-500 mb-1">Email</p>
              <p>contact@boutique.com</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Téléphone</p>
              <p>01 23 45 67 89</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Adresse</p>
              <p>123 Rue de l'Exemple, Paris</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ Espacement généreux créant une respiration visuelle</p>
        <p>✅ Palette de couleurs cohérente et apaisante</p>
        <p>✅ Hiérarchie typographique claire et logique</p>
        <p>✅ Grille structurée avec alignement parfait</p>
        <p>✅ Regroupement logique des informations</p>
        <p>✅ Utilisation appropriée des contrastes</p>
      </div>
    </div>
  );
}
