import { Check, Home, Briefcase, Mail, ChevronRight } from "lucide-react";
import { useState } from "react";

export function GoodNavigationExample() {
  const [activePage, setActivePage] = useState("accueil");

  return (
    <div className="space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Améliorations appliquées :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Navigation claire et organisée</li>
            <li>Page active bien identifiable</li>
            <li>Hiérarchie visuelle évidente</li>
            <li>Espacement approprié</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Good navigation bar */}
        <nav className="bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="flex gap-1 p-2">
            <button
              onClick={() => setActivePage("accueil")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activePage === "accueil"
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Accueil</span>
            </button>
            <button
              onClick={() => setActivePage("services")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activePage === "services"
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="text-sm">Services</span>
            </button>
            <button
              onClick={() => setActivePage("contact")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activePage === "contact"
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Contact</span>
            </button>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Accueil</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Design UX/UI</span>
        </div>

        {/* Content area with clear hierarchy */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
          <h3 className="text-lg text-slate-900">Contenu principal</h3>
          <p className="text-sm text-slate-600">
            Navigation claire avec indication visuelle de la page active.
          </p>
          
          <div className="flex gap-3 pt-2">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Action principale
            </button>
            <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors">
              Action secondaire
            </button>
          </div>
        </div>

        {/* Sidebar with clear structure */}
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h4 className="text-sm text-slate-900 mb-3">Navigation secondaire</h4>
          <div className="space-y-2">
            <a href="#" className="block text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all">
              Option principale A
            </a>
            <a href="#" className="block text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all">
              Option principale B
            </a>
            <a href="#" className="block text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all">
              Option principale C
            </a>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ Navigation épurée avec options essentielles</p>
        <p>✅ État actif clairement visible avec couleur et fond</p>
        <p>✅ Hiérarchie claire entre navigation primaire et secondaire</p>
        <p>✅ Fil d'Ariane pour situer l'utilisateur</p>
      </div>
    </div>
  );
}
