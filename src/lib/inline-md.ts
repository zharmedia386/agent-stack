const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Escape first, then re-enable only the tiny tag set Notion emits, so nothing else can inject markup.
export function inlineMd(src: string): string {
  return escapeHtml(src.replace(/\\([^\w\s])/g, '$1'))
    .replace(/&lt;b&gt;([\s\S]*?)&lt;\/b&gt;/g, '<strong>$1</strong>')
    .replace(/&lt;code&gt;([\s\S]*?)&lt;\/code&gt;/g, '<code>$1</code>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, text: string, url: string) =>
      // Notion auto-links file names like CLAUDE.md to http://CLAUDE.md, which are unrelated domains.
      url.replace(/^https?:\/\//, '').replace(/\/$/, '') === text
        ? text
        : `<a href="${url}" rel="noopener" target="_blank">${text}</a>`,
    );
}
