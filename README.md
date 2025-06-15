Voici un modèle de **README.md** adapté pour ton projet Angular `digital-banking-web` :

---

````markdown
# 💳 Digital Banking Web

Frontend Angular pour l'application **eBanking**, permettant de gérer les clients, comptes et opérations bancaires.

---

## 📦 Technologies

- **Angular** (v14+)
- **TypeScript**
- **Angular CLI**
- **Bootstrap** (ou un framework CSS de ton choix)
- **RxJS** pour la gestion asynchrone
- **HttpClient** pour communiquer avec le backend Spring Boot

---

## 🚀 Prérequis

- Node.js (v16+)
- npm (v8+) ou yarn
- Angular CLI (`npm install -g @angular/cli`)
- Backend Spring Boot en cours d'exécution (par exemple sur `http://localhost:8085`)

---

## 🔧 Installation

1. Clone le repo :
   ```bash
   git clone https://github.com/MohammedEttalbi/digital-banking-web.git
   cd digital-banking-web
````

2. Installe les dépendances :

   ```bash
   npm install
   ```

3. (Optionnel) Modifie l'URL de l'API dans `src/environments/environment.ts` :

   ```ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8085'
   };
   ```

---

## ▶️ Lancement

* Pour lancer le serveur de développement :

  ```bash
  ng serve
  ```
* Accède à l'application via `http://localhost:4200`. Le code se recompile automatiquement à chaque modification.

---

## 🧩 Structure du projet

```
src/
 ├── app/
 │   ├── components/      # Composants Angular (UI, forms…)
 │   ├── services/        # Services pour appels API (auth, customers, accounts)
 │   ├── models/          # Interfaces TypeScript (Customer, Account, Operation)
 │   ├── interceptors/    # Auth interceptor qui injecte le token JWT
 │   ├── guards/          # Route guards (AuthGuard)
 │   └── app-routing.module.ts
 └── environments/        # configs (dev, prod)
```

---

## 🔐 Authentification JWT

* Sur `/auth/login`, envoie username/password → récupération d'un token JWT.
* Ce token est stocké (localStorage/sessionStorage ou un service) et injecté via `AppHttpInterceptor`.
* Routes protégées accessibles seulement si authentifié.

---

## 🔄 Fonctionnalités

* 🔍 Recherche & affichage des clients
* ➕ Ajout / modification / suppression de clients
* 📄 Consultation des comptes bancaires
* 💸 Opérations : débit, crédit et virements
* 📊 Pagination, formulaires réactifs, validation des inputs

---

## 💡 Bonnes pratiques

* Utilise `AuthService` pour le login, logout et stockage du token.
* `AppHttpInterceptor` injecte automatiquement l’en-tête Authorization.
* `AuthGuard` protège les routes critiques.
* `ErrorInterceptor` pour gérer les erreurs globalement.
* Modularisation : sépare feature modules comme `CustomersModule`.

---

## 🧪 Tests

* Unitaires (Karma/Jasmine) :

  ```bash
  ng test
  ```
* End-to-end (Protractor/Cypress) :

  ```bash
  ng e2e
  ```

---

## 📈 À améliorer / fonctionnalités à venir

* 🛠️ Pagination côté backend ou UI
* 📍 Recherche et filtres avancés (date, type opération…)
* 📊 Tableau de bord avec graphiques (Chart.js, ngx-charts…)
* 📱 Design responsive / mobile-first
* 🌐 Internationalisation (i18n)
* 🔒 Refresh Token pour gestion automatique de l'expiration

---

## 🕰️ Lancer en production

1. Construis l’application optimisée :

   ```bash
   ng build --prod
   ```
2. Intègre le dossier `dist/` avec ton backend ou déploie sur un serveur (Netlify, GitHub Pages, etc.).

---

## 🧑‍💻 Contribuer

* Fork ➜ clone ➜ crée une branche (`feature/xyz`) ➜ commit ➜ push ➜ PR
* Merci d'ouvrir une issue avant de commencer une nouvelle grosse fonctionnalité.

---


## 🧾 Auteurs

* **Mohammed Ettalbi** – Développeur Angular / Java backend
  Frontend repo : [https://github.com/MohammedEttalbi/digital-banking-web](https://github.com/MohammedEttalbi/digital-banking-web)
  Backend repo : [https://github.com/MohammedEttalbi/ebankingbackend](https://github.com/MohammedEttalbi/ebankingbackend)


