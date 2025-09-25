# stupid-chatgpt-app

A dumbass app I made just for me, but hey, if you want it, take it.  

This is a **minimal frameless ChatGPT wrapper** for Linux, built with Electron.  
- No draggable top bar  
- No buttons  
- Just opens ChatGPT in a plain window  
- No API key required  

---


## Installation & Running from Source

### 1. Install Node.js and npm

- **Debian / Ubuntu**:
```bash
sudo apt update
sudo apt install nodejs npm

```

- **Arch Based Distros**:
```bash
sudo pacman -Syu nodejs npm
```

- Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/stupid-chatgpt-app.git
cd stupid-chatgpt-app
```
- Install dependencies:

```bash
npm install
```

## Optional: Package into a Standalone App

1. Install Electron Packager:
```bash
npm install --save-dev electron-packager
npm run package
./stupid-chatgpt-app
```

