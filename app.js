let provider;
let signer;

async function connectWallet() {
  console.log("▶️ connectWallet dipanggil...");

  if (typeof window.ethereum !== "undefined") {
    console.log("✅ MetaMask terdeteksi:", window.ethereum);

    try {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("Provider:", provider);

      // Minta akses akun
      const accounts = await provider.send("eth_requestAccounts", []);
      console.log("Accounts:", accounts);

      signer = provider.getSigner();
      const address = await signer.getAddress();

      alert("✅ Wallet connected: " + address);
    } catch (err) {
      console.error("❌ Error connect:", err);
      alert("Gagal connect: " + err.message);
    }
  } else {
    console.error("❌ MetaMask tidak terdeteksi");
    alert("MetaMask tidak terdeteksi. Gunakan Chrome/Brave dengan extension MetaMask.");
  }
}
