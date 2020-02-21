import { html } from 'lit-html';

export default {
  title: 'ボタンのネイティブ HTML 要素の拡張',
  component: 'fancy-button',
};

export const Normal = () => {
  return html`<button is="fancy-button">Fancy button!</button>`;
}