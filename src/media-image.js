import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class MediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.imageURL = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .image-wrapper {
        align-items: center;      
      }

      .image-wrapper img {
        width: 300px;
        height: auto;
      }

    `;
  }

  openChanged(e) {

  }

  render() {
    return html`
        <div class="image-wrapper"> 
            <img class="image" src="${this.imageURL}">
        </div>
    `;
  }

  static get properties() {
    return {
        ...super.properties,
        imageURL: { type: String, attribute: "image-url" },
    };
  }
}

globalThis.customElements.define(MediaImage.tag, MediaImage);
