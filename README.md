# Ready! — React Native Take-Home Assignment

Welcome to my submission for the **React Native Engineer** role at Grapevine. 

This is the implementation of **Ready!**, an AI-powered interview practice app. The focus of this project was on pixel-perfect UI fidelity, robust architecture, and strict TypeScript adherence, built purely from the provided Figma specifications.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Expo CLI (or npm to use `npx expo`)

### Running Locally

Since this project has `expo-dev-client` installed, you can launch it in a standard web browser/iOS Simulator easily, or use standard Expo Go.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npx expo start 

# 3. Press 'i' to run on the iOS simulator (Mac only)
# OR Press 's' to switch to Expo Go mode and scan the QR code with your phone
```

*(Note: To test using the physical Android/iOS Expo Go application, you must press `s` in the terminal to switch the dev server to Expo Go mode, then scan the presented QR code.)*

---

## 🎨 UI Fidelity & Design Decisions

This repository was meticulously built using the Figma design as the single source of truth. As such, some decisions were made that deviated from the original README to ensure 100% visual parity:

### 1. OTP Input Specifications
- **README stated:** 4-digit OTP.
- **Figma showed:** 6 OTP input boxes (`1 2 3 4 - -`).
- **Implementation:** Following the Figma design, the app implements a 6-digit auto-advancing, backspace-aware local state OTP system. 

### 2. Bottom Tab Labels
- **Figma discrepancies:** The Figma showed "Settings" for the middle tab on the Home screen, but "Progress" on the Open State screen. Both used the same easel/presentation board icon.
- **Implementation:** Built using the "Settings" label (matching the README instruction) and the precise easel icon from Figma.

### 3. FlashList API Updates
- The `@shopify/flash-list` version 2.0.2 is installed, which no longer requires (or possesses) the previously necessary `estimatedItemSize` property. The layout is handled natively without the deprecated prop.

### 4. "AI VS AI" Button
- This was marked as "DUMMY" in the Figma file. It is implemented as a gracefully disabled button utilizing the `#806B26` hex background at `.7` opacity to closely match the visual output without interaction overhead.

---

## 🏗️ Technical Architecture & Stack

### Core Technologies
- **React Native / Expo SDK 55**
- **TypeScript:** Configured with `strict: true` (no `any` logic allowed).
- **React Navigation v7:** Implementing a `NativeStack` Auth Navigator and a `BottomTabs` Main Navigator.

### UI & Performance Libraries
- **Lists:** `@shopify/flash-list` — strictly used for all scrollable rendering.
- **Images:** `expo-image` — utilized everywhere with `cachePolicy="memory-disk"` to ensure instant subsequent generic loading.
- **Modal Overlays:** `@gorhom/bottom-sheet` — powers the Question Detail view on the Home screen seamlessly.
- **Animations:** Fully scaffolded `react-native-reanimated`.
- **System Fonts:** Inter Google Font cleanly dynamically loaded in `App.tsx`.

### Mock Data & Assets
- Local JSON layers cleanly map robust typescript models `Question | Company | SessionResult` inside a central data access pattern (`/src/data/index.ts`).
- Clearbit dynamically loads company resources, alongside robust fallback components. 
- All component sizes, gaps, and absolute token spacings meticulously trace the `@/theme/` configurations.

---

## 📁 Repository Structure

Following a strict feature-based isolation pattern:

```text
src/
├── components/            # Reusable core (button, text, screen-wrapper) 
├── features/
│   ├── auth/              # Splash, Welcome, Kickstart Login flow
│   ├── home/              # FlashList lists, Switchers, bottom-sheet Logic
│   ├── session-result/    # Smart tab router, Mock Audio Player
│   └── settings/          # Premium Cards, user metadata lists
├── mock-data/             # JSON data faithfully recreating Figma content
├── navigation/            # Root configs with localized TS ParamLists
└── theme/                 # Absolute sizing tokens
```

---

Thank you for your time and the opportunity! I look forward to your feedback.
