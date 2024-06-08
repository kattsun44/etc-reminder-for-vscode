import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
    vscode.window.showInformationMessage(`${document.fileName} is ETC?`);
  });

  const disposable = vscode.commands.registerCommand('etc-reminder.remindEtc', () => {
    vscode.window.showInformationMessage('etc-reminder is activated!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
