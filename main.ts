import { Editor, MarkdownView, Plugin } from 'obsidian';

export default class MoveLinePlugin extends Plugin {
	onload() {
		this.addCommand({
			id: 'move-line-up',
			name: 'Move Line Up',
			hotkeys: [
				{
					modifiers: ["Alt"],
					key: "ArrowUp"
				}
			],
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const cursor = editor.getCursor();
				const lineIndex = cursor.line;

				if (lineIndex === 0) {
					return;
				}

				const currentLine = editor.getLine(lineIndex);
				const previousLine = editor.getLine(lineIndex - 1);

				const currentLineRange = {
					from: { line: lineIndex, ch: 0 },
					to: { line: lineIndex, ch: currentLine.length }
				};

				const previousLineRange = {
					from: { line: lineIndex - 1, ch: 0 },
					to: { line: lineIndex - 1, ch: previousLine.length }
				};

				editor.replaceRange(currentLine, previousLineRange.from, previousLineRange.to);
				editor.replaceRange(previousLine, currentLineRange.from, currentLineRange.to);
				editor.setCursor({ line: lineIndex - 1, ch: cursor.ch });
			}
		});

		this.addCommand({
			id: 'move-line-down',
			name: 'Move Line Down',
			hotkeys: [
				{
					modifiers: ["Alt"],
					key: "ArrowDown"
				}
			],
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const cursor = editor.getCursor();
				const lineIndex = cursor.line;
				const totalLines = editor.lineCount();

				if (lineIndex === totalLines - 1) {
					return;
				}

				const currentLine = editor.getLine(lineIndex);
				const nextLine = editor.getLine(lineIndex + 1);

				const currentLineRange = {
					from: { line: lineIndex, ch: 0 },
					to: { line: lineIndex, ch: currentLine.length }
				};

				const nextLineRange = {
					from: { line: lineIndex + 1, ch: 0 },
					to: { line: lineIndex + 1, ch: nextLine.length }
				};

				editor.replaceRange(nextLine, currentLineRange.from, currentLineRange.to);
				editor.replaceRange(currentLine, nextLineRange.from, nextLineRange.to);
				editor.setCursor({ line: lineIndex + 1, ch: cursor.ch });
			}
		});
	}
}
