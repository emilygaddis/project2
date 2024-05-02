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
            box-shadow: var(--ddd-boxShadow-md);
        }

        #dialog-title {
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
            justify-content: space-between;
        }

        .toggle {
            display: flex;
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

        .drag-toggle-option,
        .type-toggle-option {
            flex-grow: 1; 
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

        .expand-collapse {
            display: flex;
        }

        .expand-all-button {
            width: 130px;
            margin-right: var(--ddd-spacing-3);
        }

        .collapse-all-button {
            width: 140px;
            margin-right: var(--ddd-spacing-6);
        }

        .expand-all-button, 
        .collapse-all-button {
            display: flex;
            justify-content: left;
            align-items: center;    
            flex-grow: 1;
            height: 30px;
            background-color: transparent;
            border: var(--ddd-border-xs);
            border-color: var(--ddd-theme-default-potentialMidnight);
            border-radius: var(--ddd-radius-xs);
            margin-top: var(--ddd-spacing-8);
        }

        #expand-icon {
            margin-left: var(--ddd-spacing-4);
            margin-right: var(--ddd-spacing-2);
        }

        #expand-text {
            font-family: var(--ddd-font-navigation);
            color: var(--ddd-theme-default-potentialMidnight);
            font-size: 14px;
            text-align: center;
            margin: var(--ddd-spacing-0);
        }

        #collapse-text {
            font-family: var(--ddd-font-navigation);
            color: var(--ddd-theme-default-potentialMidnight);
            font-size: 14px;
            text-align: center;
            margin: var(--ddd-spacing-0);
        }       

        .outline-nodes {
            margin-left: var(--ddd-spacing-6);
            margin-right: var(--ddd-spacing-6);
            margin-top: var(--ddd-spacing-3);
            margin-bottom: var(--ddd-spacing-3);
            height: 60%;
            border: var(--ddd-border-xs);
            border-color: var(--ddd-theme-default-potentialMidnight);
            border-radius: var(--ddd-radius-sm);

        }

        .exit-bar {
            width: 100%;
            display: flex;
            align-items: center;
        }

        .cancel-button,
        .save-button {
            align-items: center;   
            flex-grow: 1;
            height: 30px;
            background-color: var(--ddd-theme-default-skyBlue);
            border-radius: var(--ddd-radius-xs);

        }

        .cancel-button {
            background-color: var(--ddd-theme-default-white);
            width: 130px;
            justify-content: center;
        }

        .save-button {
            background-color: var(--ddd-theme-default-skyBlue);
        }

        #cancel-text, 
        #save-text {
            font-family: var(--ddd-font-navigation);
            font-size: 14px;
            text-align: center;
            margin: 0;
        }

        #cancel-text {
            color: var(--ddd-theme-default-skyBlue);
        }

        #save-text {
            color: var(--ddd-theme-default-white);
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
                    <p id="dialog-title">Outline Designer</p>
                </div>

                <div class="edit-bar">
                    <div class="toggle">
                        <div class="drag-toggle-option">
                            <p id="drag-text">DRAG</p>
                        </div>
                        <div class="type-toggle-option">
                            <p id="type-text">TYPE</p>
                        </div>
                    </div>

                    <div class="expand-collapse">
                        <button class="expand-all-button">
                            <svg id="expand-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="16px" viewBox="0 0 24 24" version="1.1">
                                <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                    <g transform="translate(-751.000000, -748.000000)" id="Group" stroke="#000000" stroke-width="2">
                                        <g transform="translate(745.000000, 746.000000)" id="Shape">
                                            <path d="M17.0020846,16 L12,20.9980217 L6.99551,16 M6.99551,8 L12,3.00077787 L17.0020846,8">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p id="expand-text">Expand All</p>
                        </button>
                        <button class="collapse-all-button">
                            <svg id="expand-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0 0 16 16" version="1.1">
                                <rect width="16" height="16" id="icon-bound" fill="none"/>
                                <path id="expand-collapse" d="M4.414,15.414L8,11.828L11.586,15.414L13,14L8,9L3,14L4.414,15.414ZM11.586,0.586L8,4.172L4.414,0.586L3,2L8,7L13,2L11.586,0.586Z" style="fill-rule:nonzero;"/>
                            </svg>
                            <p id="collapse-text">Collapse All</p>
                        </button>
                    </div>
                </div>

                <div class="outline-nodes">
                </div>

                <div class="exit-bar">
                    <div class="cancel-button">
                        <p id="cancel-text">Cancel</p>
                    </div>

                    <div class="save-button">
                        <p id="save-text">Save</p>
                    </div>
                </div>
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