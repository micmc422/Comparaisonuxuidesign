import { Check, Save, Trash2, X, Loader2, AlertTriangle, Info } from "lucide-react";
import { useState } from "react";

export function GoodButtonExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Améliorations appliquées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Hiérarchie claire des actions</li>
            <li>Feedback visuel immédiat</li>
            <li>États désactivés expliqués</li>
            <li>Actions destructives distinctes</li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        {/* Clear action hierarchy */}
        <div className="space-y-3">
          <p className="text-sm text-slate-700">Actions utilisateur avec hiérarchie claire:</p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
              <Save className="w-4 h-4" />
              Sauvegarder
            </button>
            <button className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg border border-slate-300 transition-colors">
              <X className="w-4 h-4" />
              Annuler
            </button>
          </div>
        </div>

        {/* Disabled state with explanation */}
        <div className="space-y-3">
          <p className="text-sm text-slate-700">Bouton désactivé avec explication:</p>
          <div className="space-y-2">
            <button 
              disabled 
              className="bg-slate-200 text-slate-400 px-4 py-2 rounded-lg cursor-not-allowed flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              Confirmer
            </button>
            <div className="flex items-start gap-2 text-xs text-slate-600 bg-blue-50 border border-blue-200 rounded p-2">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p>Veuillez remplir tous les champs obligatoires pour activer ce bouton</p>
            </div>
          </div>
        </div>

        {/* Loading state */}
        <div className="space-y-3">
          <p className="text-sm text-slate-700">Feedback de chargement:</p>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors shadow-sm disabled:cursor-wait"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                Envoyer
              </>
            )}
          </button>
        </div>

        {/* Destructive action with confirmation */}
        <div className="space-y-3">
          <p className="text-sm text-slate-700">Action destructive avec confirmation:</p>
          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-lg border border-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Supprimer le compte
            </button>
          ) : (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-red-900">Êtes-vous sûr ?</p>
                  <p className="text-xs text-red-700 mt-1">Cette action est irréversible et supprimera toutes vos données.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  <Trash2 className="w-4 h-4" />
                  Confirmer la suppression
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg border border-slate-300 text-sm transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Consistent styling */}
        <div className="space-y-2">
          <p className="text-sm text-slate-700">Cohérence visuelle:</p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Action primaire
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg border border-slate-300 text-sm transition-colors">
              Action secondaire
            </button>
            <button className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm transition-colors">
              Action tertiaire
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ Hiérarchie visuelle claire (primaire, secondaire, tertiaire)</p>
        <p>✅ Actions destructives identifiables avec confirmation</p>
        <p>✅ États de chargement avec animation et texte explicite</p>
        <p>✅ États désactivés accompagnés d'explications</p>
        <p>✅ Style cohérent avec transitions fluides</p>
      </div>
    </div>
  );
}
