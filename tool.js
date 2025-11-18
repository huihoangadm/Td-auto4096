(async () => {
  const CONFIG_URL = "https://raw.githubusercontent.com/huhoangadm/Td-auto4096/main/config.json";

  // --- Tải mật khẩu từ GitHub ---
  const res = await fetch(CONFIG_URL);
  const cfg = await res.json();

  const pass = prompt("🔐 Nhập mật khẩu để chạy tool:");
  if (pass !== cfg.password) {
    alert("❌ Sai mật khẩu!");
    throw new Error("Wrong password");
  }

  alert("✅ Mật khẩu đúng! Tool đang khởi chạy...");

  // --- Code tool của bạn ---
  console.log("%cTool 2048 Auto Test đang hoạt động...", "color: lime; font-weight: 700;");
  // Bạn có thể dán toàn bộ code 2048 auto bot của bạn ở đây ↓↓↓
})();
