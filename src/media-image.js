import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class MediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.imageURL = "";
    this.caption = "#";
    this.description = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --ddd-primary-color: var(--ddd-theme-default-accent);
        --ddd-secondary-color: var(--ddd-theme-default-potentialMidnight);
        font-family: var(--ddd-font-primary);
      }

      .image-wrapper {
        align-items: center;      
        padding: var(--ddd-spacing-6);
        background-color: var(--ddd-primary-color);
        border: var(--ddd-border-sm);
        border-color: var(--ddd-secondary-color);
        border-radius: var(--ddd-radius-sm);   
        transition: all ease-in .3s;    
      }

      .image-wrapper img {
        width: 500px;
        height: auto;
        border: var(--ddd-border-md);
        border-color: var(--ddd-theme-default-potentialMidnight);
        border-radius: var(--ddd-radius-sm);
      }

      .image-wrapper:hover,
      .image-wrapper:focus {
        transform: translate(8px, -8px);
        box-shadow: -8px 8px var(--ddd-theme-default-potentialMidnight);
      }

      .image-caption {
        text-align: center;        
      }

    `;
  }

  imageClicked() {
    const evt = new CustomEvent("image-clicked", {
        bubbles: true,
        composed: true,
        canceleable: true,
        detail: {
            opened: true,
            invokedBy: this.invokedBy,
        },
    });
    this.dispatchEvent(evt);
  }

  render() {
    return html`
        <div class="image-wrapper" @click = "${this.imageClicked}"> 
            <img class="image" src="${this.imageURL}">
        </div>
        <p class="image-caption">${this.caption}</p>
    `;
  }

  static get properties() {
    return {
        ...super.properties,
        imageURL: { type: String },
        caption: { type: String },
        description: { type: String },
    };
  }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);
