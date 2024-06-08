# etc-reminder

This is ETC (Easier To Change) Reminder.  
Each time you save a file, the message "Is the 'filename' ETC?" message is displayed.

https://github.com/kattsun44/etc-reminder-for-vscode/assets/22269140/f20d4fb1-cb9b-4fd5-87ba-925cc7fe018e

## Usage
```shell
git clone https://github.com/kattsun44/etc-reminder-for-vscode.git
cd etc-reminder-for-vscode
```

1. Create a vsix file.
```shell
npm install
```
```shell
# Make etc-reminder-x.x.x.vsix
npx vsce package
```

2. Click `[Extentions]` > `"…"` > `[Install from TSIX]` and choose the vsix file.
3. Select "Remind ETC" in the command palette.
