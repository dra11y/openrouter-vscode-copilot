@list:
    just --list

install:
    pnpm run vsce-package
    code --install-extension *.vsix
    echo 'Reload VS Code windows!'
