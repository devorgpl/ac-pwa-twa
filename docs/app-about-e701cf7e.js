import{s as e,r as a,p as r,_ as s,n as t}from"./app-index-e34c813f.js";let o=class extends e{static get styles(){return a`

    fluent-card {
      padding: 0px 18px 18px;
    }

    @media(prefers-color-scheme: light) {
      fluent-card {
        --fill-color: #edebe9;
      }
    }

    @media(prefers-color-scheme: dark) {
      fluent-card {
        --fill-color: #4e4e4e;
        color: white;
        border: none;
      }
    }

    @media (min-width: 1024px) {
      fluent-card {
        width: 54%;
      }
    }
    `}constructor(){super()}render(){return r`
      <app-header enableBack="${!0}"></app-header>

      <div>
        <h2>About Page</h2>

        <fluent-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games, apps that use machine learning and more!
          </p>

          <p>Check out <fluent-anchor href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these docs</fluent-anchor> to learn more about the advanced features that you can use in your PWA</p>
        </fluent-card>
      </div>
    `}};o=s([t("app-about")],o);export{o as AppAbout};
