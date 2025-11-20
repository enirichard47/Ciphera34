## 🔥 Overview

**Noventra AI** is a production-ready blockchain intelligence platform for scanning tokens and wallets and computing a detailed on-chain risk score in real time.

Noventra AI aggregates data from multiple Web3 providers, analyzes liquidity, contract health, holder distribution, transaction patterns, taxes, and known rug-pull signatures, then generates a **0–100 risk score** for each token.

The platform consists of:

- A modern React + TypeScript front-end dashboard
- A Node.js/Express API layer
- A modular blockchain provider engine
- A scoring engine with configurable weights

---

## ✨ Key Features

- 🔍 **Token Scanner**
  - Scan any EVM-compatible token by contract address
  - View liquidity, market data, contract status, and holders
  - Detect common red flags (blacklists, mint permissions, trading toggles)

- 🧠 **Risk Scoring Engine**
  - 0–100 risk score for each token
  - Weighted factors including:
    - Liquidity depth & stability
    - Locked vs unlocked liquidity
    - Contract verification & ownership
    - Max buy/sell tax
    - Holder concentration
    - Sudden volume and supply anomalies
  - Easy to extend with new rules and signals

- 📊 **Wallet & Portfolio View**
  - Scan any wallet address
  - Aggregate per-token risk into a portfolio-level risk overview
  - Highlight the most dangerous holdings

- 📡 **Provider-Agnostic Blockchain Layer**
  - Integrated support for:
    - Etherscan
    - Moralis
    - Alchemy
    - Custom RPC endpoints
  - Pluggable strategy pattern so you can swap or combine providers

- 🖥 **Production-Ready Dashboard**
  - Clean, dark theme with gradients matching the Noventra AI brand
  - Responsive layout
  - Real-time status indicators and loading states
  - Error handling & fallbacks for provider outages

---

## 🏗 Architecture

```text
          ┌───────────────────────────────┐
          │          Frontend             │
          │  React + TS, Tailwind, UI     │
          │  /token, /wallet dashboards   │
          └──────────────┬────────────────┘
                         │ HTTPS (REST)
          ┌──────────────▼────────────────┐
          │            Backend            │
          │       Node.js + Express       │
          │  Auth, routing, validation    │
          └──────────────┬────────────────┘
                         │
          ┌──────────────▼────────────────────────────────────┐
          │             Core Services                         │
          │  • BlockchainService (providers, caching)         │
          │  • RiskScoringService (rules + weights)           │
          │  • PortfolioService                               │
          └──────────────┬────────────────────────────────────┘
                         │
          ┌──────────────▼────────────┐
          │   Web3 Providers          │
          │  Etherscan / Moralis /    │
          │  Alchemy / RPC / TheGraph │
          └───────────────────────────┘
````

---

## 🧰 Tech Stack

### Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* ShadCN UI
* Axios

### Backend

* Node.js
* Express
* TypeScript
* Zod (validation)
* Winston (logging)

---

## 📁 Project Structure

```text
noventra-ai/
│
├── client/                      # Frontend app (React + TS)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── types/
│   │   └── main.tsx
│   ├── public/
│   └── vite.config.ts
│
├── server/                      # Backend API (Express + TS)
│   ├── src/
│   │   ├── routes/
│   │   │   ├── token.routes.ts
│   │   │   ├── wallet.routes.ts
│   │   │   └── health.routes.ts
│   │   ├── controllers/
│   │   ├── services/
│   │   │   ├── blockchain.service.ts
│   │   │   ├── scoring.service.ts
│   │   │   └── portfolio.service.ts
│   │   ├── providers/
│   │   │   ├── etherscan.provider.ts
│   │   │   ├── moralis.provider.ts
│   │   │   └── alchemy.provider.ts
│   │   ├── db/
│   │   │   ├── index.ts
│   │   │   └── migrations/
│   │   ├── config/
│   │   │   └── env.ts
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
│
├── docs/
│   ├── API.md                   # REST API documentation
│   └── ARCHITECTURE.md          # Deep dive into architecture
│
├── .env.example
├── README.md
├── CONTRIBUTING.md
├── package.json                 # Root (scripts / tooling)
└── LICENSE
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/enirichard47/NoventraAI.git
cd noventra-ai
```

### Install dependencies

**Client:**

```bash
cd client
npm install
```

**Server:**

```bash
cd ../server
npm install
```

### Configure environment

Create a `.env` file in the **server** directory based on `.env.example`:

```bash
cp .env.example .env
```

Fill in your keys:

```env
ETHERSCAN_API_KEY=your_etherscan_key
MORALIS_API_KEY=your_moralis_key
ALCHEMY_API_KEY=your_alchemy_key
RPC_URL=https://mainnet.infura.io/v3/your_project_id

JWT_SECRET=super-secret-key
```

### Run the backend

```bash
cd server
npm run dev
```

Backend by default runs on:

```text
http://localhost:5000
```

### Run the frontend

```bash
cd ../client
npm run dev
```

Frontend by default runs on:

```text
http://localhost:5173
```

---

## 📡 API Overview

Full API reference is in [`/docs/API.md`](./docs/API.md), but here is a quick summary:

### Health

```http
GET /api/health
```

### Token Scan

```http
GET /api/token/:address
```

**Response (simplified):**

```json
{
  "address": "0x...",
  "symbol": "TOKEN",
  "name": "Token Name",
  "network": "ethereum",
  "liquidity": {
    "usd": 120000,
    "lockedPercent": 92.5
  },
  "tax": {
    "buy": 5,
    "sell": 5
  },
  "holders": {
    "total": 3250,
    "top10Percent": 63.4
  },
  "contract": {
    "verified": true,
    "canMint": false,
    "canBlacklist": false,
    "canPauseTrading": true
  },
  "riskScore": 78,
  "riskLevel": "medium",
  "signals": [
    "Locked liquidity > 90%",
    "Moderate holder concentration",
    "Verified contract"
  ]
}
```

### Wallet Scan

```http
GET /api/wallet/:address
```

**Response (simplified):**

```json
{
  "address": "0x...",
  "network": "ethereum",
  "tokens": [
    {
      "address": "0x...",
      "symbol": "TOKEN",
      "balance": "123.45",
      "usdValue": 550.12,
      "riskScore": 22,
      "riskLevel": "high"
    }
  ],
  "portfolioRiskScore": 41,
  "portfolioRiskLevel": "medium-high"
}
```

---

## 🔐 Security & Considerations

* Do not expose your private API keys in the frontend.
* Rotate provider keys if you suspect abuse.
* Configure CORS properly before exposing the API publicly.
* Rate limit external-facing endpoints in production.

---

## 🤝 Contributing

We welcome contributions from devs, auditors, and data engineers.
See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for details.

---

## 📜 License

This project is licensed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

## 💡 Contact

For integration, partnerships, or enterprise usage:

* Email: [contact@noventra.ai](mailto:contact@noventra.ai) (example)
* Twitter / X: @NoventraAI (example)
* Telegram / Discord: to be added

---

**Noventra AI** — scan first, ape smarter.

```

This is fully cleaned up, begins from **Overview**, and removes all Data & Screenshots sections.  

If you want, I can also **add a super minimal, visually appealing badge/header section** at the very top that fits this clean style. Do you want me to do that?
```
