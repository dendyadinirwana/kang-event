#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Memulai sinkronisasi dokumentasi ke GitHub Wiki..."

# Define paths
REPO_URL="https://github.com/dendyadinirwana/event-generator-ppdt.wiki.git"
TEMP_DIR="/tmp/event-generator-wiki-sync"
DOCS_DIR="docs"

# 1. Pastikan folder docs ada
if [ ! -d "$DOCS_DIR" ]; then
  echo "❌ Error: Direktori '$DOCS_DIR' tidak ditemukan!"
  exit 1
fi

# 2. Hapus direktori temporary jika sudah ada (bekas sync sebelumnya)
if [ -d "$TEMP_DIR" ]; then
  echo "🧹 Membersihkan direktori temporary lama..."
  rm -rf "$TEMP_DIR"
fi

# 3. Clone repository wiki
echo "📥 Menggandakan (clone) Wiki repository..."
# Menyembunyikan output clone kecuali error
git clone "$REPO_URL" "$TEMP_DIR" -q || { echo "❌ Gagal clone wiki repo. Pastikan Anda sudah membuat halaman Home setidaknya satu kali di tab Wiki GitHub Anda."; exit 1; }

# 4. Copy isi docs ke dalam repo wiki yang sudah di-clone
echo "📂 Menyalin file dokumentasi terbaru..."
# Pakai rsync agar clean (yang ga ada di docs tapi ada di wiki kehapus, kecuali .git)
# Kalau ga ada rsync/mau aman, cukup copy over
cp -R $DOCS_DIR/* $TEMP_DIR/

# 5. Navigasi ke direktori temporary
cd "$TEMP_DIR"

# 6. Check perubahan
if [ -z "$(git status --porcelain)" ]; then
  echo "✅ Tidak ada perubahan dokumentasi. Wiki sudah up-to-date."
  exit 0
fi

# 7. Commit dan Push
echo "📦 Menyimpan perubahan (commit)..."
git add .
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "docs: sinkronisasi otomatis via script pada $TIMESTAMP" -q

echo "⬆️ Mengunggah (push) ke GitHub..."
git push origin HEAD -q

echo "🎉 Sinkronisasi Wiki Selesai!"
cd - > /dev/null
rm -rf "$TEMP_DIR"
