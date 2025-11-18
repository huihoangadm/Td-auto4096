#!/bin/bash
# 🔰 Tool 2048 Auto - Bản Test từ GitHub

echo "🔄 Đang tải tool từ GitHub..."
URL="https://raw.githubusercontent.com/huhoangadm/Td-auto4096/main/tool.js"

CODE=$(curl -s $URL)

if [ -z "$CODE" ]; then
  echo "❌ Lỗi: Không thể tải tool từ GitHub"
  exit 1
fi

echo "✅ Tool tải thành công!"
echo "👉 Đang khởi chạy trên console..."

node -e "$CODE"
