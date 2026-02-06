import { Check, Mail, Phone, User } from "lucide-react";

export function GoodCrapExample() {
  return (
    <div className="space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Application des principes CRAP :</strong>
          </p>
          <p className="text-xs text-slate-600">
            Les 4 piliers fondamentaux du design efficace
          </p>
        </div>
      </div>

      {/* Good Contrast */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-green-600 text-white rounded flex items-center justify-center text-xs">
            C
          </div>
          <div>
            <h3 className="text-sm text-slate-900">Contraste</h3>
            <p className="text-[9px] text-slate-600">Créer une hiérarchie visuelle claire</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-lg">
            <h2 className="text-white text-lg mb-2">
              Titre Principal Bien Visible
            </h2>
            <p className="text-blue-100 text-sm mb-3">
              Texte secondaire avec bon contraste, facile à lire
            </p>
            <button className="bg-white text-blue-700 px-4 py-2 text-sm rounded-lg hover:bg-blue-50 transition-colors">
              Bouton d'action clair
            </button>
          </div>
          <div className="flex gap-2 text-[10px]">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-700 rounded"></div>
              <span className="text-slate-600">Primaire</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-100 rounded"></div>
              <span className="text-slate-600">Secondaire</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-white border border-slate-300 rounded"></div>
              <span className="text-slate-600">Accent</span>
            </div>
          </div>
          <p className="text-[10px] text-green-600">
            ✅ Contraste fort entre éléments, hiérarchie évidente
          </p>
        </div>
      </div>

      {/* Good Repetition */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-green-600 text-white rounded flex items-center justify-center text-xs">
            R
          </div>
          <div>
            <h3 className="text-sm text-slate-900">Répétition</h3>
            <p className="text-[9px] text-slate-600">Unifier avec des éléments cohérents</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-600 bg-blue-50 p-3 rounded-r">
            <p className="text-xs text-slate-900 mb-1">Section Fonctionnalité 1</p>
            <p className="text-[10px] text-slate-600">Style cohérent répété pour toutes les sections</p>
          </div>
          <div className="border-l-4 border-blue-600 bg-blue-50 p-3 rounded-r">
            <p className="text-xs text-slate-900 mb-1">Section Fonctionnalité 2</p>
            <p className="text-[10px] text-slate-600">Même style, reconnaissance visuelle immédiate</p>
          </div>
          <div className="border-l-4 border-blue-600 bg-blue-50 p-3 rounded-r">
            <p className="text-xs text-slate-900 mb-1">Section Fonctionnalité 3</p>
            <p className="text-[10px] text-slate-600">Cohérence qui renforce l'identité</p>
          </div>
          <p className="text-[10px] text-green-600">
            ✅ Style uniforme répété, identité visuelle forte
          </p>
        </div>
      </div>

      {/* Good Alignment */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-green-600 text-white rounded flex items-center justify-center text-xs">
            A
          </div>
          <div>
            <h3 className="text-sm text-slate-900">Alignement</h3>
            <p className="text-[9px] text-slate-600">Organiser avec une grille invisible</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="border border-slate-200 p-3 rounded-lg">
            <h4 className="text-sm text-slate-900 mb-2">Titre aligné à gauche</h4>
            <p className="text-[10px] text-slate-600 mb-2">
              Tout le contenu suit le même alignement à gauche, créant une ligne verticale invisible qui guide l'œil.
            </p>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-3 py-1 text-[10px] rounded">
                Action
              </button>
              <button className="bg-white border border-slate-300 text-slate-700 px-3 py-1 text-[10px] rounded">
                Annuler
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-100 p-2 rounded text-center">
              <p className="text-xs text-slate-900">Item 1</p>
            </div>
            <div className="bg-slate-100 p-2 rounded text-center">
              <p className="text-xs text-slate-900">Item 2</p>
            </div>
            <div className="bg-slate-100 p-2 rounded text-center">
              <p className="text-xs text-slate-900">Item 3</p>
            </div>
          </div>
          <p className="text-[10px] text-green-600">
            ✅ Alignements cohérents, structure claire et professionnelle
          </p>
        </div>
      </div>

      {/* Good Proximity */}
      <div className="bg-white border border-slate-300 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-green-600 text-white rounded flex items-center justify-center text-xs">
            P
          </div>
          <div>
            <h3 className="text-sm text-slate-900">Proximité</h3>
            <p className="text-[9px] text-slate-600">Grouper les éléments liés</p>
          </div>
        </div>
        <div className="space-y-4">
          {/* Contact info grouped */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
            <h4 className="text-xs text-slate-900 mb-3">Informations de contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-[9px] text-slate-500">Nom</p>
                  <p className="text-xs text-slate-900">Jean Dupont</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-[9px] text-slate-500">Email</p>
                  <p className="text-xs text-slate-900">jean@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-[9px] text-slate-500">Téléphone</p>
                  <p className="text-xs text-slate-900">06 12 34 56 78</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-green-600">
            ✅ Labels proches de leurs valeurs, groupes visuels logiques
          </p>
        </div>
      </div>

      {/* Combined example */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm">
            ✨
          </div>
          <div>
            <h3 className="text-sm text-slate-900">Exemple combinant les 4 principes</h3>
            <p className="text-[9px] text-slate-600">Un design qui applique CRAP ensemble</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm space-y-3">
          {/* Header with Contrast */}
          <div>
            <h2 className="text-lg text-slate-900 mb-1">Offre Premium</h2>
            <p className="text-sm text-slate-600">Débloquez toutes les fonctionnalités</p>
          </div>

          {/* Features with Repetition + Proximity */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-900">Fonctionnalité avancée 1</p>
                <p className="text-[10px] text-slate-600">Description courte</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-900">Fonctionnalité avancée 2</p>
                <p className="text-[10px] text-slate-600">Description courte</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-900">Fonctionnalité avancée 3</p>
                <p className="text-[10px] text-slate-600">Description courte</p>
              </div>
            </div>
          </div>

          {/* Price with Alignment */}
          <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-600">À partir de</p>
              <p className="text-xl text-slate-900">29€<span className="text-sm text-slate-600">/mois</span></p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg transition-colors">
              Commencer
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ <strong>Contraste:</strong> Hiérarchie claire avec tailles et couleurs distinctes</p>
        <p>✅ <strong>Répétition:</strong> Styles cohérents renforcent l'identité</p>
        <p>✅ <strong>Alignement:</strong> Grille invisible organise le contenu</p>
        <p>✅ <strong>Proximité:</strong> Éléments liés regroupés logiquement</p>
      </div>
    </div>
  );
}
