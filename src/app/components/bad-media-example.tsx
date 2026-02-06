import { AlertTriangle, Play } from "lucide-react";

export function BadMediaExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Problèmes identifiés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Images déformées ou mal recadrées</li>
            <li>Pas de fallback ou état de chargement</li>
            <li>Vidéos en autoplay intrusives</li>
            <li>Pas d'optimisation responsive</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Distorted images */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Images déformées:</p>
          <div className="flex gap-2">
            <div className="w-24 h-32 bg-gradient-to-br from-blue-200 to-blue-400 border border-slate-300">
              <div className="w-full h-full flex items-center justify-center text-[8px] text-white text-center p-1">
                Image étirée verticalement
              </div>
            </div>
            <div className="w-32 h-16 bg-gradient-to-br from-green-200 to-green-400 border border-slate-300">
              <div className="w-full h-full flex items-center justify-center text-[8px] text-white text-center p-1">
                Image compressée
              </div>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-purple-400 border border-slate-300">
              <div className="w-full h-full flex items-center justify-center text-[8px] text-white text-center p-1">
                OK
              </div>
            </div>
          </div>
        </div>

        {/* No loading state */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Pas d'état de chargement:</p>
          <div className="bg-white border border-slate-300 p-3">
            <div className="w-full h-32 bg-white border border-slate-300 flex items-center justify-center">
              <p className="text-xs text-slate-400">...</p>
            </div>
            <p className="text-xs text-slate-700 mt-2">L'image charge mais rien ne l'indique</p>
          </div>
        </div>

        {/* Autoplay video */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Vidéo en autoplay:</p>
          <div className="bg-slate-900 p-2 relative">
            <div className="w-full h-24 bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center">
              <Play className="w-8 h-8 text-white animate-pulse" />
            </div>
            <p className="text-[9px] text-white mt-1">Vidéo qui démarre automatiquement avec son 🔊</p>
          </div>
        </div>

        {/* No alt text or context */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Images sans contexte:</p>
          <div className="flex gap-2">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-300 to-slate-400 border border-slate-300"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-slate-300 to-slate-400 border border-slate-300"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-slate-300 to-slate-400 border border-slate-300"></div>
          </div>
          <p className="text-[9px] text-slate-500 mt-1">Aucune description, légende ou contexte</p>
        </div>

        {/* Images breaking layout */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Images qui cassent le layout:</p>
          <div className="border border-slate-300 p-2 overflow-hidden">
            <p className="text-xs text-slate-700 mb-1">Contenu de la page</p>
            <div className="w-[400px] h-16 bg-gradient-to-r from-blue-300 to-purple-300 border border-slate-300 flex items-center justify-center">
              <p className="text-[8px] text-white">Image trop large qui déborde</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ Images déformées sans respect du ratio d'aspect</p>
        <p>❌ Pas d'indicateur de chargement</p>
        <p>❌ Vidéos intrusives en autoplay</p>
        <p>❌ Manque de contexte et d'accessibilité</p>
        <p>❌ Images qui débordent du conteneur</p>
      </div>
    </div>
  );
}
