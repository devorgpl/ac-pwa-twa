import { __decorate } from "tslib";
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './app-home';
import { Router } from '@vaadin/router';
import '../components/header';
let AppIndex = class AppIndex extends LitElement {
    static get styles() {
        return css `
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
    }
    constructor() {
        super();
    }
    firstUpdated() {
        // this method is a lifecycle even in lit
        // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
        var _a;
        // For more info on using the @vaadin/router check here https://vaadin.com/router
        const router = new Router((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#routerOutlet'), {
            baseUrl: '/ac-pwa-twa/'
        });
        router.setRoutes([
            // temporarily cast to any because of a Type bug with the router
            {
                path: '',
                animate: true,
                children: [
                    { path: '/', component: 'app-home' },
                    {
                        path: '/about',
                        component: 'app-about',
                        action: async () => {
                            await import('./app-about.js');
                        },
                    },
                ],
            },
        ]);
    }
    render() {
        return html `
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
    }
};
AppIndex = __decorate([
    customElement('app-index')
], AppIndex);
export { AppIndex };
//# sourceMappingURL=app-index.js.map