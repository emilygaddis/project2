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

      .top-elements {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .image-wrapper {
        align-items: center;
        text-align: center;
      }

      .current-image {
        width: 60%;
        height: auto;
      }
    `;
  }

  render() {
    return html`
        <div class="gallery-wrapper">
            <div class="top-elements">
                <div class="image-counter">
                    1/5
                </div>

                <div class="close-button-wrapper">
                    <button class="close-button">Close</button>
                </div>
            </div>

            <div class="image-wrapper">
                <button class="back-arrow"><-</button>
                <img class="current-image" src="https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg">
                <button class="next-arrow">-></button>
                <p class="image-description">Italy</p>
            </div>
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
