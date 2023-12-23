# FlipCoinContract

## System Overview
This project implements a flip coin on the Azle platform, allowing users test their luck !
## Prerequisites
- Node
- Typescript
- DFX

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/gregoriusyuristama/FlipCoinContract.git
    cd FlipCoinContract
    nvm install 18
    nvm use 18
    npm install
    ```
2. **INSTALL DFX**
    ```bash
    DFX_VERSION=0.14.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
    ```
3. **Add DFX to your path**
    ```bash
    echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
    ```

## Testing Instructions 

- Make sure you have the required environment for running ICP canisters and the dfx is running in background `dfx start --background --clean`
- Deploy the canisters `dfx deploy`
- Open the URL for Backend canister via Candid interface
