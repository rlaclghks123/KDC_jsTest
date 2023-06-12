class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $darkModeBtn = document.createElement('input');
    this.$darkModeBtn = $darkModeBtn;
    this.$darkModeBtn.type = 'checkbox';

    $darkModeBtn.className = 'DarkModeBtn';
    $target.appendChild($darkModeBtn);

    $darkModeBtn.addEventListener('change', (e) => {
      this.setColorMode(e.target.checked);
    });

    // 업데이트
    this.initialColorMode();
  }

  initialColorMode() {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.$darkModeBtn.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode) {
    document.documentElement.setAttribute('color-mode', isDarkMode ? 'dark' : 'light');
  }
  render() {}
}
