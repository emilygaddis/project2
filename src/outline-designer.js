import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class OutlineDesigner extends DDD {

    static get tag() {
      return 'outline-designer';
    }

    constructor() {
      super();
      this.isVisible = false;
    }

    static get styles() {
      return css`
        :host {
          display: block;
        }

        .designer-wrapper {
          background-color: rgba(0, 0, 0, 0.8);
        }

      `;
    }

    render() {
      return this.isVisible ? this.openedDesigner() : html``;
    }

    firstUpdated() {
      // listens for when an image is clicked, then finds the url to indicate which image is clicked
      document.addEventListener('designer-clicked', (e) => {

        // makes gallery visible
        if(this.isVisible == false) {
          this.isVisible = true;
        }
  
        this.openedDesigner();
      })
    }

    openedDesigner() {
      return html `
        <div class="designer-wrapper">

        </div>
      `;
    }

    closeDesigner() {
      this.isVisible = false;
    }

    static get properties() {
      return {
        ...super.properties,
        isVisible: { type: Boolean, attribute: "is-visible" },

      };
    }
}

globalThis.customElements.define(OutlineDesigner.tag, OutlineDesigner);