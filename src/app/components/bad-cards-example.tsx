import { AlertTriangle } from "lucide-react";

export function BadCardsExample() {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">
          <p className="mb-2">
            <strong>Problèmes identifiés :</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Cards de tailles incohérentes</li>
            <li>Informations mal organisées</li>
            <li>Tableau non responsive</li>
            <li>Données difficiles à scanner</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {/* Bad cards */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Cards incohérentes:</p>
          <div className="flex gap-2">
            <div className="bg-white border border-slate-300 p-2 w-32">
              <div className="w-full h-16 bg-slate-200 mb-1"></div>
              <p className="text-xs text-slate-900">Produit A</p>
              <p className="text-[10px] text-slate-600">Description courte</p>
              <p className="text-xs text-slate-900 mt-1">99€</p>
            </div>
            <div className="bg-white border border-slate-300 p-3 w-24">
              <div className="w-full h-20 bg-slate-200 mb-2"></div>
              <p className="text-[10px] text-slate-900">B</p>
              <p className="text-sm text-slate-900">149€</p>
            </div>
            <div className="bg-white border border-slate-300 p-1 w-28">
              <div className="w-full h-12 bg-slate-200"></div>
              <p className="text-xs text-slate-900">Produit C avec nom très long</p>
              <p className="text-[11px] text-slate-900">199€</p>
            </div>
          </div>
        </div>

        {/* Bad table */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Tableau non adapté:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[9px]">
              <thead>
                <tr className="bg-slate-200">
                  <th className="border border-slate-300 p-1">Nom complet du client</th>
                  <th className="border border-slate-300 p-1">Email</th>
                  <th className="border border-slate-300 p-1">Téléphone</th>
                  <th className="border border-slate-300 p-1">Adresse complète</th>
                  <th className="border border-slate-300 p-1">Montant</th>
                  <th className="border border-slate-300 p-1">Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-1">Jean Dupont</td>
                  <td className="border border-slate-300 p-1">jean.dupont@email.com</td>
                  <td className="border border-slate-300 p-1">0612345678</td>
                  <td className="border border-slate-300 p-1">123 Rue Example Paris</td>
                  <td className="border border-slate-300 p-1">1250€</td>
                  <td className="border border-slate-300 p-1">En cours</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-1">Marie Martin</td>
                  <td className="border border-slate-300 p-1">marie.m@email.com</td>
                  <td className="border border-slate-300 p-1">0698765432</td>
                  <td className="border border-slate-300 p-1">456 Avenue Test Lyon</td>
                  <td className="border border-slate-300 p-1">890€</td>
                  <td className="border border-slate-300 p-1">Livré</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bad data grid */}
        <div>
          <p className="text-sm text-slate-700 mb-2">Grille désorganisée:</p>
          <div className="space-y-1">
            <div className="flex gap-1 text-[9px] bg-slate-100 p-1">
              <span className="w-16">ID: 001</span>
              <span className="flex-1">Client: Jean Dupont - Email: jean@email.com - Tel: 0612345678</span>
              <span>1250€</span>
            </div>
            <div className="flex gap-1 text-[9px] bg-white p-1">
              <span className="w-20">ID: 002</span>
              <span className="flex-1">Marie Martin / marie@email.com / 0698765432</span>
              <span>890€</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded p-3 text-xs text-slate-600 space-y-1">
        <p>❌ Cards avec dimensions et styles incohérents</p>
        <p>❌ Tableau surchargé avec trop de colonnes</p>
        <p>❌ Informations non alignées et difficiles à comparer</p>
        <p>❌ Pas de hiérarchie visuelle dans les données</p>
        <p>❌ Contenu qui déborde sur petits écrans</p>
      </div>
    </div>
  );
}
