(async () => {
  const CONFIG_URL = "https://raw.githubusercontent.com/huhoangadm/Td-auto4096/main/config.json";
  
  // Tải mật khẩu từ GitHub
  const res = await fetch(CONFIG_URL);
  const cfg = await res.json();

  // Nhập mật khẩu từ console
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('🔐 Nhập mật khẩu để tiếp tục: ', (inputPassword) => {
    if (inputPassword === cfg.password) {
      console.log("✅ Mật khẩu đúng!");
      // Bắt đầu chạy tool 2048
      console.log("Tool 2048 auto bắt đầu chạy...");
      // (Code chạy game 2048 tự động ở đây)
    } else {
      console.log("❌ Sai mật khẩu!");
    }
    rl.close();
  });
})();
