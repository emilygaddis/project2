import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class ImageGallery extends DDD {

  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
        <div class="gallery-wrapper">
            <media-image image-url="https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg"></media-image>
        </div>
    `;
  }

  static get properties() {
    return {
        ...super.properties,

    };
  }
}

globalThis.customElements.define(ImageGallery.tag, ImageGallery);
