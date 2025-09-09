🎬 Anime & Film Explorer

Proyek ini adalah aplikasi Next.js yang menampilkan daftar Anime & Film dengan integrasi API:

Jikan API
untuk data Anime

OMDb API
untuk data Film

Dibangun menggunakan:

⚡ Next.js 15+ (App Router)
🎨 Tailwind CSS
🗂 Zustand untuk state management
🧩 Atomic Design Pattern (atoms, molecules, organisms, templates, pages)

🚀 Fitur Utama

1. Profile Page → menampilkan info user (email, telepon, foto, dsb)
2. Anime Page
   - List Anime dengan pagination (1, 2, 3, ... Last)
   - Filter berdasarkan genre
   - Search Anime by name
   - Klik card untuk masuk ke halaman detail anime
3. Film Page
   - List Film dari OMDb API
   - Pagination seperti Anime
   - Filter menggunakan modal
   - Klik card untuk lihat detail Film
4. Responsive Layout
   - Desktop → sidebar kiri
   - Mobile → bottom navigation

📂 Struktur Project
/src
-/app
--/profile/page.tsx
--/anime/page.tsx
--/anime/[id]/page.tsx
--/film/page.tsx
--/film/[id]/page.tsx
-/components
--/atoms
---ImageDetailList.tsx
--/molecules
---InfoDetailList.tsx
--/organisms
---FotoProfile.tsx
---NameProfile.tsx
--/templates
---CardList.tsx
---CardProfile.tsx
---DescProfile.tsx
---DetailList.tsx
---HeaderProfile.tsx
-/store
--animeStore.ts
--filmStore.ts

⚙️ Instalasi

1. Clone repository
2. Install dependencies (npm install)
3. Run app (npm run dev)
4. Open browser (http://localhost:3000)
