import { Check, AlertCircle } from "lucide-react";
import { useState } from "react";

export function GoodFormExample() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
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
            <li>Labels explicites et clairs</li>
            <li>Messages d'erreur informatifs</li>
            <li>Espacement généreux</li>
            <li>États visuels distincts</li>
          </ul>
        </div>
      </div>

      {showSuccess && (
        <div className="bg-green-50 border border-green-300 rounded-lg p-4 flex items-center gap-3">
          <Check className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-800">Formulaire envoyé avec succès !</p>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm mb-2 text-slate-700">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Entrez votre nom"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@email.com"
            className="w-full px-4 py-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />
          {email && !email.includes("@") && (
            <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              <p>Veuillez entrer une adresse email valide (ex: nom@domaine.com)</p>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-2 text-slate-700">
            Téléphone <span className="text-slate-400 text-xs">(optionnel)</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+33 6 12 34 56 78"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2 text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Décrivez votre demande..."
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors shadow-sm hover:shadow-md"
        >
          Envoyer le message
        </button>
      </form>

      <div className="bg-slate-100 rounded-lg p-3 text-xs text-slate-600 space-y-1">
        <p>✅ Labels clairs avec indication des champs obligatoires</p>
        <p>✅ Messages d'erreur explicites et utiles</p>
        <p>✅ Espacement confortable entre les éléments</p>
        <p>✅ États de focus visibles et feedback immédiat</p>
      </div>
    </div>
  );
}
