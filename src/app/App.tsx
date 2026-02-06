import { useState } from "react";
import { BadFormExample } from "./components/bad-form-example";
import { GoodFormExample } from "./components/good-form-example";
import { BadNavigationExample } from "./components/bad-navigation-example";
import { GoodNavigationExample } from "./components/good-navigation-example";
import { BadButtonExample } from "./components/bad-button-example";
import { GoodButtonExample } from "./components/good-button-example";
import { BadLayoutExample } from "./components/bad-layout-example";
import { GoodLayoutExample } from "./components/good-layout-example";
import { BadResponsiveExample } from "./components/bad-responsive-example";
import { GoodResponsiveExample } from "./components/good-responsive-example";
import { BadCardsExample } from "./components/bad-cards-example";
import { GoodCardsExample } from "./components/good-cards-example";
import { BadMediaExample } from "./components/bad-media-example";
import { GoodMediaExample } from "./components/good-media-example";
import { BadCrapExample } from "./components/bad-crap-example";
import { GoodCrapExample } from "./components/good-crap-example";
import { X, Check } from "lucide-react";

export default function App() {
  const [activeExample, setActiveExample] = useState<"form" | "navigation" | "buttons" | "layout" | "responsive" | "cards" | "media" | "crap">("form");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl text-slate-900 mb-2">
            Guide UX/UI : Comparaison des Bonnes Pratiques
          </h1>
          <p className="text-slate-600">
            Découvrez les différences entre un mauvais et un bon design d'interface
          </p>
        </div>
      </header>

      {/* Navigation tabs */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setActiveExample("form")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "form"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Formulaires
          </button>
          <button
            onClick={() => setActiveExample("navigation")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "navigation"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Navigation
          </button>
          <button
            onClick={() => setActiveExample("buttons")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "buttons"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Boutons & Actions
          </button>
          <button
            onClick={() => setActiveExample("layout")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "layout"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Mise en page
          </button>
          <button
            onClick={() => setActiveExample("responsive")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "responsive"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Responsive
          </button>
          <button
            onClick={() => setActiveExample("cards")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "cards"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Cards & Grilles
          </button>
          <button
            onClick={() => setActiveExample("media")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "media"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Images & Médias
          </button>
          <button
            onClick={() => setActiveExample("crap")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeExample === "crap"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            Principes CRAP
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bad Example */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-200">
            <div className="bg-red-50 border-b border-red-200 px-6 py-4 flex items-center gap-3">
              <div className="bg-red-500 rounded-full p-1">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl text-slate-900">Mauvais Design</h2>
                <p className="text-sm text-slate-600">Ce qu'il faut éviter</p>
              </div>
            </div>
            <div className="p-6">
              {activeExample === "form" && <BadFormExample />}
              {activeExample === "navigation" && <BadNavigationExample />}
              {activeExample === "buttons" && <BadButtonExample />}
              {activeExample === "layout" && <BadLayoutExample />}
              {activeExample === "responsive" && <BadResponsiveExample />}
              {activeExample === "cards" && <BadCardsExample />}
              {activeExample === "media" && <BadMediaExample />}
              {activeExample === "crap" && <BadCrapExample />}
            </div>
          </div>

          {/* Good Example */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-200">
            <div className="bg-green-50 border-b border-green-200 px-6 py-4 flex items-center gap-3">
              <div className="bg-green-500 rounded-full p-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl text-slate-900">Bon Design</h2>
                <p className="text-sm text-slate-600">Les bonnes pratiques</p>
              </div>
            </div>
            <div className="p-6">
              {activeExample === "form" && <GoodFormExample />}
              {activeExample === "navigation" && <GoodNavigationExample />}
              {activeExample === "buttons" && <GoodButtonExample />}
              {activeExample === "layout" && <GoodLayoutExample />}
              {activeExample === "responsive" && <GoodResponsiveExample />}
              {activeExample === "cards" && <GoodCardsExample />}
              {activeExample === "media" && <GoodMediaExample />}
              {activeExample === "crap" && <GoodCrapExample />}
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl text-slate-900 mb-4">Points clés à retenir</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                👁️
              </div>
              <h3 className="text-lg text-slate-900">Visibilité</h3>
              <p className="text-sm text-slate-600">
                Les éléments importants doivent être clairement visibles et accessibles
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                💬
              </div>
              <h3 className="text-lg text-slate-900">Feedback</h3>
              <p className="text-sm text-slate-600">
                Donnez toujours un retour clair sur les actions de l'utilisateur
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                ✨
              </div>
              <h3 className="text-lg text-slate-900">Simplicité</h3>
              <p className="text-sm text-slate-600">
                Gardez l'interface simple et intuitive, sans surcharge cognitive
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}