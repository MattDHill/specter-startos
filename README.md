# Specter for Start9

This project wraps [Specter Desktop](https://github.com/cryptoadvance/specter-desktop) into an installable `.s9pk` for [Start9's EmbassyOS](https://start9.com).

Specter is a GUI for Bitcoin Core optimized to work with hardware wallets and airgapped devices. It simplifies multisig setups and Bitcoin wallet management.

## 🚀 Features

- 📦 Buildable with `make` using the Start9 SDK
- 🔒 Works with Bitcoin Core v28+ (tested)
- 🧩 Multisig-friendly GUI with hardware wallet support
- 📡 Runs on your local Start9 server via Tor or LAN

---

## 🧱 Building the Package

### 1. Install the [Start9 SDK](https://docs.start9.com/0.3.5.x/developer-docs/dev-tools/embassy-sdk)

Follow the official instructions to install and set up the `start-sdk` on your machine.

### 2. Build the `.s9pk` package

```bash
make
```

After a successful build, the file `specter.s9pk` will be created in your project directory.

---

## 📲 Installing on EmbassyOS

If you already use the [Embassy CLI](https://docs.start9.com/latest/embassy-cli), you can sideload the package:

```bash
embassy-cli auth login
embassy-cli --host https://<your-embassy.local> package install specter.s9pk
```

Or use the **Sideload Service** feature in your Embassy UI (under Settings).

---

## ✅ Dependencies

Specter requires:

- 📦 [Bitcoin Core](https://github.com/Start9Labs/bitcoind-wrapper)
- (Optional) ⚡ [Electrs](https://github.com/Start9Labs/electrs-wrapper)

These are auto-detected and configured on Start9 when you install Specter.

---

## ⚙️ Advanced: Manual Build Environment (Optional)

If you're building without the SDK or on custom architectures, you may need:

- Docker + Buildx
- Rust + toml-cli
- yq, clang, etc.

Refer to the [Start9 Developer Docs](https://docs.start9.com) for full environment setup.

---

## 🛠️ License

[MIT](LICENSE)

---

## 🙌 Contributing

Fork, build, test — and feel free to open a pull request or issue! You can also find the upstream GUI at [Specter Desktop](https://github.com/cryptoadvance/specter-desktop).

---

Made with ❤️ for sovereignty.

