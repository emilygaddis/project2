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
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          //z-index: 1000;
          align-items: center;
          justify-content: center;
        }

        .dialog-container {
            width: 85vw;
            height: 85vh;
            border-radius: var(--ddd-radius-sm);
            background-color: var(--ddd-theme-default-white);
        }

        .title-bar {
            width: 100%;
            height: 15%;
            background-color: var(--ddd-theme-default-skyBlue);
            display: flex;
            align-items: center;
            border-radius: var(--ddd-radius-sm) var(--ddd-radius-sm) 0px 0px;
            box-shadow: var(--ddd-boxShadow-sm);
        }

        .dialog-title {
            font-family: var(--ddd-font-navigation);
            color: var(--ddd-theme-default-white);
            font-size: 32px;
            font-weight: var(--ddd-font-navigation-bold);
            margin: var(--ddd-spacing-0);
            margin-left: var(--ddd-spacing-6);
        }

        .edit-bar {
            width: 100%;
            display: flex;
            flex-direction: row;
        }

        .drag-toggle-option {
            width: 90px;
            height: 30px;
            background-color: var(--ddd-theme-default-potential50);
            border-radius: var(--ddd-radius-xs) 0px 0px var(--ddd-radius-xs);
            margin-left: var(--ddd-spacing-6);
            margin-top: var(--ddd-spacing-8);
        }

        .type-toggle-option {
            width: 90px;
            height: 28px;
            background-color: transparent;
            border: var(--ddd-border-xs);
            border-color: var(--ddd-theme-default-potential50);
            border-radius: 0px var(--ddd-radius-xs) var(--ddd-radius-xs) 0px;
            margin-top: var(--ddd-spacing-8);
        }

        #drag-text {
            font-family: var(--ddd-font-navigation);
            color: var(--ddd-theme-default-white);
            font-size: 16px;
            text-align: center;
            justify-content: center;
            margin: var(--ddd-spacing-0);
            margin-top: 5px;
        }

        #type-text {
            font-family: var(--ddd-font-navigation);
            color: var(--ddd-theme-default-potential50);
            font-size: 16px;
            text-align: center;
            margin: var(--ddd-spacing-0);
            margin-top: 4px;
        }

        .expand-all-button {
            width: 100px;
            height: 30px;
            background-color: transparent;
            border: var(--ddd-border-xs);
            border-color: var(--ddd-theme-default-potentialMidnight);
            border-radius: var(--ddd-radius-xs);
            margin-top: var(--ddd-spacing-8);
        }

        .collapse-all-button {
            width: 100px;
            height: 30px;
            background-color: transparent;
            border: var(--ddd-border-xs);
            border-color: var(--ddd-theme-default-potentialMidnight);
            border-radius: var(--ddd-radius-xs);
            margin-top: var(--ddd-spacing-8);
        }

        

        .exit-bar {
            width: 100%;
        }

      `;
    }

    render() {
      return this.isVisible ? this.openDesigner() : html``;
    }

    
    firstUpdated() {
      const outlineMenuWrapper = document.querySelector('.outline-menu-wrapper');
      outlineMenuWrapper.addEventListener('click', () => {
        this.isVisible = !this.isVisible;
      });
    }

    openDesigner() {
      return html `
        <div class="designer-wrapper">
            <div class="dialog-container">
                <div class="title-bar">
                    <p class="dialog-title">Outline Designer</p>
                </div>
                <div class="edit-bar">
                    <div class="drag-toggle-option">
                        <p id="drag-text">DRAG</p>
                    </div>
                    <div class="type-toggle-option">
                        <p id="type-text">TYPE</p>
                    </div>
                    <button class="expand-all-button">
                        <p id="expand-text">Expand</p>
                    </button>
                    <button class="collapse-all-button">
                        <p id="collapse-text">Collapse</p>
                    </button>
                </div>
                <div class="outline-nodes"></div>
                <div class="exit-bar"></div>
            </div>
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