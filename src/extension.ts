import * as vscode from "vscode";
import { OpenRouterProvider } from "./provider";

export function activate(ctx: vscode.ExtensionContext) {
	const log = vscode.window.createOutputChannel('openrouter-vscode', {
		log: true,
	})
	const provider = new OpenRouterProvider(ctx.secrets, log);

	ctx.subscriptions.push(
		vscode.lm.registerLanguageModelChatProvider(
			"dra11y.openrouter",
			provider,
		),
		vscode.commands.registerCommand("openrouter.resetApiKey", async () => {
			await ctx.secrets.delete("openrouter.apiKey");
			vscode.window.showInformationMessage("OpenRouter API key cleared.");
		}),
	);
}

export function deactivate() { }
