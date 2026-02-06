import { Check, Play, Image as ImageIcon, Loader2, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export function GoodMediaExample() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Améliorations appliquées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Ratio d'aspect préservé</li>
            <li>États de chargement visuels</li>
            <li>Contrôles utilisateur pour médias</li>
            <li>Images responsive et optimisées</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Proper aspect ratio */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Ratio d'aspect préservé:</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg overflow-hidden flex items-center justify-center border border-slate-200">
              <ImageIcon className="w-6 h-6 text-blue-700" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 rounded-lg overflow-hidden flex items-center justify-center border border-slate-200">
              <ImageIcon className="w-6 h-6 text-green-700" />
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 to-purple-400 rounded-lg overflow-hidden flex items-center justify-center border border-slate-200">
              <ImageIcon className="w-6 h-6 text-purple-700" />
            </div>
          </div>
          <p className="text-[9px] text-slate-600 mt-2">
            Utilisation de aspect-ratio pour préserver les proportions
          </p>
        </div>

        {/* Loading state */}
        <div>
          <p className="text-sm text-slate-700 mb-2">État de chargement visible:</p>
          <div className="bg-white border border-slate-200 rounded-lg p-3">
            <div className="w-full aspect-video bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              {!imageLoaded ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                  <p className="text-xs text-slate-600">Chargement...</p>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-indigo-400 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-indigo-700" />
                </div>
              )}
            </div>
            <button
              onClick={() => setImageLoaded(!imageLoaded)}
              className="mt-2 text-xs text-blue-600 hover:text-blue-700"
            >
              {imageLoaded ? "Réinitialiser" : "Simuler chargement"}
            </button>
          </div>
        </div>

        {/* Video with controls */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Vidéo avec contrôles utilisateur:</p>
          <div className="bg-slate-900 rounded-lg overflow-hidden">
            <div className="w-full aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
              {!videoPlaying && (
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="bg-white/90 rounded-full p-3">
                    <Play className="w-6 h-6 text-slate-900" />
                  </div>
                </button>
              )}
              {videoPlaying && (
                <p className="text-white text-xs">Vidéo en lecture</p>
              )}
            </div>
            <div className="bg-slate-800 px-3 py-2 flex items-center justify-between">
              <button
                onClick={() => setVideoPlaying(!videoPlaying)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Play className="w-4 h-4" />
              </button>
              <button
                onClick={() => setVideoMuted(!videoMuted)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {videoMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="bg-slate-800 px-3 pb-2">
              <p className="text-[9px] text-slate-400">
                ✓ Lecture manuelle • {videoMuted ? "Son coupé par défaut" : "Son activé"}
              </p>
            </div>
          </div>
        </div>

        {/* Images with context */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Images avec contexte et légendes:</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-orange-700" />
              </div>
              <div className="p-2">
                <p className="text-xs text-slate-900">Produit A</p>
                <p className="text-[9px] text-slate-600">Description contextuelle</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-teal-700" />
              </div>
              <div className="p-2">
                <p className="text-xs text-slate-900">Produit B</p>
                <p className="text-[9px] text-slate-600">Description contextuelle</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-pink-400 flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-pink-700" />
              </div>
              <div className="p-2">
                <p className="text-xs text-slate-900">Produit C</p>
                <p className="text-[9px] text-slate-600">Description contextuelle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive images */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Images responsive dans conteneur:</p>
          <div className="bg-white border border-slate-200 rounded-lg p-3">
            <div className="w-full max-w-full aspect-[16/9] bg-gradient-to-br from-violet-200 to-violet-400 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="w-8 h-8 text-violet-700 mx-auto mb-1" />
                <p className="text-xs text-violet-900">Image s'adapte au conteneur</p>
              </div>
            </div>
            <p className="text-[9px] text-slate-600 mt-2">
              Utilisation de max-w-full pour éviter les débordements
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ Ratio d'aspect préservé avec aspect-ratio</p>
        <p>✅ États de chargement avec skeleton ou spinner</p>
        <p>✅ Contrôles utilisateur pour vidéos (pas d'autoplay)</p>
        <p>✅ Légendes et contexte pour l'accessibilité</p>
        <p>✅ Images responsive qui ne débordent jamais</p>
        <p>✅ Fallbacks gracieux en cas d'erreur de chargement</p>
      </div>
    </div>
  );
}
