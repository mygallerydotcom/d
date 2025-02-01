// Glitch Text Effect
class GlitchText {
    constructor(element) {
        this.element = element;
        this.originalText = element.textContent;
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
        this.isGlitching = false;
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }

    async glitch() {
        if (this.isGlitching) return;
        this.isGlitching = true;

        const originalText = this.element.textContent;
        const length = originalText.length;

        for (let i = 0; i < 10; i++) {
            let glitchedText = '';
            for (let j = 0; j < length; j++) {
                if (Math.random() < 0.3) {
                    glitchedText += this.randomChar();
                } else {
                    glitchedText += originalText[j];
                }
            }
            this.element.textContent = glitchedText;
            await new Promise(resolve => setTimeout(resolve, 50));
        }

        this.element.textContent = originalText;
        this.isGlitching = false;
    }
}

// Terminal Effect
class Terminal {
    constructor(element) {
        this.element = element;
        this.lines = [
            'INITIALIZING WIRED CONNECTION...',
            'ACCESSING LAYER 7...',
            'PROTOCOL SYNC: OK',
            'MEMORY CHECK: OK',
            'CONSCIOUSNESS DRIFT: DETECTED',
            'LOADING NEURAL INTERFACE...',
            'CONNECTION ESTABLISHED'
        ];
        this.currentLine = 0;
        this.currentChar = 0;
    }

    async type() {
        if (this.currentLine >= this.lines.length) return;

        const line = this.lines[this.currentLine];
        if (this.currentChar < line.length) {
            this.element.innerHTML += line.charAt(this.currentChar);
            this.currentChar++;
            setTimeout(() => this.type(), 50);
        } else {
            this.element.innerHTML += '<br>';
            this.currentLine++;
            this.currentChar = 0;
            setTimeout(() => this.type(), 500);
        }
    }
}

// Initialize effects when document loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize terminal effect
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
        const terminal = new Terminal(terminalContent);
        terminal.type();
    }

    // Initialize glitch effect on headers
    document.querySelectorAll('.terminal-header').forEach(header => {
        const glitcher = new GlitchText(header);
        header.addEventListener('mouseover', () => glitcher.glitch());
    });
}); 