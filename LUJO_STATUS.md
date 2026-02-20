# Lujo (Clean Starter Kit) - Status Report

**Date:** 2026-02-20 02:45 UTC  
**Commit:** 7bc0f96 (fix(imports): remove spaces from @midday imports)

## ✅ Erledigt (Heute Nacht)

### 1. Code Pull & Setup
- Repository erfolgreich gepullt (`johannesludloff/clean-starter-kit`)
- Massiver Codebase: 3 Apps (web, dashboard, api) + 28 Packages
- `bun install` erfolgreich durchgeführt

### 2. Rebranding: Midday → Lujo
- **164 Dateien** geändert
- Alle User-facings Brand-Referenzen ersetzt:
  - `Midday` → `Lujo`
  - `midday.ai` → `lujo.app`  
  - `middaybot@midday.ai` → `support@lujo.app`
  - `midday://` → `lujo://` (MCP URIs)
  - `MIDDAY_*` → `LUJO_*` (Env Variablen)
  - `middayUserId` → `lujoUserId` (Variablen)
- **Interne Package-Namen belassen:** `@midday/*` (für Build-Stabilität)

### 3. Environment Files Erstellt
```
apps/dashboard/.env.local  → Dashboard Konfiguration
apps/api/.env.local        → API Konfiguration  
apps/web/.env.local        → Web Konfiguration
```

## ❌ Blocker: Build schlägt fehl

86 Module-Not-Found Fehler. Die Packages existieren, aber ihre **Export-Konfigurationen** stimmen nicht mit den Imports überein.

### Beispiel-Probleme:

**packages/events/package.json:**
```json
{
  "exports": {
    "./client": "./src/client.tsx"  // Nur ./client exportiert
  }
}
```

**Aber Dashboard importiert:**
```typescript
import { LogEvents } from "@midday/events/events";  // ❌ Pfad existiert nicht!
```

**packages/ui/package.json:**
```json
{
  "exports": {
    "./accordion": "./src/components/accordion.tsx",
    "./avatar": "./src/components/avatar.tsx",
    // ... 50+ einzelne Exports
  }
}
```

**Aber Dashboard importiert vermutlich:**
```typescript
import { Button } from "@midday/ui";  // ❌ Root-Export existiert nicht!
```

## 🔧 Lösungsansätze

### Option A: Package Exports korrigieren (Empfohlen)
Alle 28 Packages durchgehen und die `exports` in `package.json` korrigieren:
- Entweder Wildcard-Exports hinzufügen: `"./*": "./*"`  
- Oder spezifische fehlende Exports ergänzen

**Aufwand:** 2-3 Stunden systematische Arbeit

### Option B: Imports im Code anpassen
Alle Import-Statements im Dashboard/API Code an die existierenden Exports anpassen.

**Aufwand:** Sehr hoch (1000+ Imports), fehleranfällig

### Option C: Index-Dateien erstellen
In jedem Package eine `src/index.ts` erstellen, die alle Komponenten re-exports.

**Aufwand:** Mittel (28 Packages)

## 📋 Nächste Schritte (Empfohlen)

1. **Package-Export-Skript erstellen:**
   Automatisiertes Tool, das fehlende Exports erkennt und korrigiert

2. **Dashboard bauen:**
   Nach Export-Fix: `bun run --filter "@midday/dashboard" build`

3. **API bauen:**
   `bun run --filter "@midday/api" build`

4. **Neon DB verbinden:**
   - `DATABASE_URL` in `.env.local` eintragen (aus luyo.def Projekt)
   - Schema prüfen/migrieren

5. **Clerk Auth testen:**
   - `CLERK_SECRET_KEY` und `CLERK_PUBLISHABLE_KEY` in `.env.local`
   - Login-Flow testen

## 📝 Notion Tasks

**Lujo Tasks:**
- [ ] Stage 2: Stripe Integration (Recurring Payments) - wartet auf Build

**WEID Tasks:**
- 14 offene Todos (siehe Notion)

---

**Zusammenfassung:** Das Rebranding ist erfolgreich durchgeführt. Der Build scheitert an inkonsistenten Package-Exports, nicht am Code selbst. Das ist ein systematisches Monorepo-Problem, das systematisch gelöst werden muss.
