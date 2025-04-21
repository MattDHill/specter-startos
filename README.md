# Wrapper for specter

Specter is a GUI for Bitcoin Core optimized to work with hardware wallets. This repository creates the `s9pk` package that is installed to run `specter` on [EmbassyOS](https://github.com/Start9Labs/embassy-os/).

## Embassy Service Pre-Requisites

- [Bitcoin Core](https://github.com/Start9Labs/bitcoind-wrapper)

## Dependencies

To build this project, a properly configured environment is necessary. Start9 provides a comprehensive guide that ensures compatibility with the latest SDK:

🔗 **Recommended Guide**: [Start9 Packaging Docs](https://docs.start9.com/0.3.5.x/developer-docs/packaging)

## ✅ Build Environment (Ubuntu-based Quickstart)

1. **Install Docker**
```bash
curl -fsSL https://get.docker.com -o- | bash
sudo usermod -aG docker "$USER"
exec sudo su -l $USER
```

2. **Set buildx as the default builder**
```bash
docker buildx install
docker buildx create --use
```

3. **Enable cross-arch emulation**
```bash
docker run --privileged --rm linuxkit/binfmt:v0.8
```

4. **Install yq**
```bash
sudo snap install yq
```

5. **Install essential build packages**
```bash
sudo apt-get install -y build-essential openssl libssl-dev libc6-dev clang libclang-dev ca-certificates
```

6. **Install Rust & toml-cli**
```bash
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
cargo install toml-cli
```

7. **Install embassy-sdk**
```bash
cd ~ && git clone https://github.com/Start9Labs/embassy-os.git
cd embassy-os/backend/
./install-sdk.sh
```

## Cloning the Project

Clone this repository and its submodules:
```bash
git clone https://github.com/Funman2/specter-startos.git
cd specter-startos
git submodule update --init --recursive
```

## Building

Simply run:
```bash
make
```

This will create `specter.s9pk`, the package for EmbassyOS.

## Installing on EmbassyOS

If you have the `embassy-cli` tool:

```bash
embassy-cli auth login
embassy-cli --host https://embassy-server-name.local package install specter.s9pk
```

Or with configured host:
```bash
make install
```

📦 You can also sideload the `.s9pk` file through the **Embassy > Settings > Sideload Service** UI.

## Verify Install

Go to your Embassy Services dashboard, select **Specter**, configure and start the service. Then, verify its interfaces are accessible.

---

🎉 Done!
