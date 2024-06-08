import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
    vscode.window.showInformationMessage(`Is the ${path.basename(document.fileName)} ETC?`);
  });

  const disposable = vscode.commands.registerCommand('etc-reminder.remindEtc', () => {
    vscode.window.showInformationMessage('etc-reminder is activated!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
