# Trainingsapp

**Live:** [trainingsapp-brown.vercel.app](https://trainingsapp-brown.vercel.app)

Eine Progressive Web App zum Protokollieren von Krafttraining. Sie lässt sich auf iOS und Android wie eine native App installieren.

## Funktionen
- **Login und Cloud-Synchronisation** über Supabase (Auth und PostgreSQL)
- **Übungen:** eingebaute Standardübungen plus eigene Übungen
- **Tagespläne:** Trainingstage aus Übungen zusammenstellen, mit empfohlenen Sätzen und Wiederholungen
- **Aktives Training:**
  - Jeder Satz wird als bearbeitbare Zeile erfasst, mit Gewicht, Einheit (kg, lbs, Stufe …), Wiederholungen, Schwierigkeit und Kommentar.
  - Die Werte der letzten Einheit werden direkt angezeigt.
  - Mit einer Übersicht springt man frei zwischen den Übungen hin und her.
- **Statistiken** zum Trainingsverlauf
- **Offline-fähig** per Service Worker, zweisprachig (DE/EN), dunkles Design

## Technik
- Vanilla JavaScript ohne Framework und ohne Build-Schritt
- Beim Login werden alle Daten in einen Cache geladen. Lesen geschieht synchron aus dem Cache, Schreiben aktualisiert den Cache und synchronisiert dann mit Supabase. Dadurch blieb die Darstellungslogik beim Umstieg von `localStorage` auf die Cloud unverändert.
- Tabellen `custom_exercises`, `training_days` und `workout_logs` (Trainings als JSONB). **Row Level Security** sorgt dafür, dass jeder Nutzer nur seine eigenen Daten sieht.
- Deployment auf Vercel

## Lokal starten
```bash
cp config.example.js config.js   # eigene Supabase-URL und Anon-Key eintragen
python3 -m http.server 8000      # dann http://localhost:8000 öffnen
```

`JavaScript` · `PWA` · `Supabase` · `PostgreSQL`
