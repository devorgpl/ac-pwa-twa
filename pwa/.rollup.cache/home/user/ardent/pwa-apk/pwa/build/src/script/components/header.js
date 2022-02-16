import { __decorate } from "tslib";
import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
let AppHeader = class AppHeader extends LitElement {
    constructor() {
        super();
        this.title = 'PWA Starter';
        this.enableBack = false;
    }
    static get styles() {
        return css `
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav fluent-anchor {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 11em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav fluent-anchor::part(control) {
          color: initial;
        }
      }
    `;
    }
    updated(changedProperties) {
        if (changedProperties.has('enableBack')) {
            console.log('enableBack', this.enableBack);
        }
    }
    render() {
        return html `
      <header>
        <div id="back-button-block">
          ${this.enableBack ? html `<fluent-anchor appearance="accent" href="">
            Back
          </fluent-anchor>` : null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `;
    }
};
__decorate([
    property({ type: String })
], AppHeader.prototype, "title", void 0);
__decorate([
    property()
], AppHeader.prototype, "enableBack", void 0);
AppHeader = __decorate([
    customElement('app-header')
], AppHeader);
export { AppHeader };
//# sourceMappingURL=header.js.map