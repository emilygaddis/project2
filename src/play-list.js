import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class PlayList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.image = [];
    this.currImageNum = 0;
    this.totalImageNum = this.image.length;
    this.isVisible = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        opacity: .9;
        font-family: var(--ddd-font-primary);
      }

      .top-elements {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
        z-index: 1;

      }
    
      .image-counter {
        position: fixed;
        left: 0;
        z-index: 1;
      }

      .close-button-wrapper {
        align-items: center;

      }

      .close-button {
        position: fixed;
        font-family: var(--ddd-font-primary);
        font-size: 16px;
        right: 0;
        z-index: 1;
        display: flex;
        align-items: center;
      }

      .close-icon {
        width: 24px;
        height: 24px;
      }

      .close-button-text {
        display: flex;
        align-items: center;
      }

      .image-wrapper {
        position: relative;
        display: block;
        align-items: center;
        text-align: center;
      }

      .image-wrapper img {
        display: block;
        margin: 0 auto;
      }

      .back-arrow,
      .next-arrow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .back-arrow {
        display: flex;
        align-items: center; /* Align items vertically */
        justify-content: center; /* Center content horizontally */
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
      }

      .back-arrow-design-wrap {
        width: 100%;
        height: 100%;
        position: fixed;
      }

      .next-arrow {
        display: flex;
        align-items: center; 
        justify-content: center; 
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
      }

      .next-arrow-design-wrap {
        width: 100%;
        height: 100%;
      }

      .current-image {
        width: 70%;
        height: auto;
        margin: 0 auto; 
        display: block;
      }

      .image-description {
        position: fixed;
        text-align: center;
      }
    `;
  }

  firstUpdated() {
    document.addEventListener( 'image-clicked', (e) => {
      var url = e.target.attributes.imageurl.nodeValue;
      this.imageNumber = this.image.indexOf(url);

      if(this.isVisible == false) {
        this.visible = true;
      }

    })

    var data = document.querySelectorAll('media-image');
    data.forEach(element => {
      console.log(element.getAttribute("imageurl"))
      this.imageList.push(element.getAttribute("imageurl"))
    });

    this.requestUpdate();
  }

  makeVisible() {
    this.isVisible = !this.isVisible;
  }

  openGallery() {
    let prevIndex = this.currImageNum - 1;
    let nextIndex = this.currImageNum + 1;

    if (prevIndex < 0) {
      prevIndex = (prevIndex + this.image.length) % (this.image.length);
    }

    if (nextIndex >= this.totalImageNum) {
      nextIndex = (nextIndex) % (this.image.length);
    }

    return html`
        <div class="gallery-wrapper">
            <div class="top-elements">
                <div class="image-counter">
                    ${this.currImageNum + 1}
                    / 
                    ${this.totalImageNum}
                </div>

                <div class="close-button-wrapper">
                  <button class="close-button">
                    <svg class="close-icon" viewbox="0 0 24 24">
                        <path d="M8.939 7.224l5.162-5.162A1.21 1.21 0 1012.39.351l-5.161 5.16L2.067.349A1.21 1.21 0 10.356 2.06l5.159 5.164-5.162 5.162a1.21 1.21 0 101.711 1.711l5.162-5.162 5.162 5.162a1.21 1.21 0 101.711-1.711z" data-name="Icon ionic-ios-close"></path>
                    </svg>
                    <p class="close-button-text">Close</p>
                  </button>
                </div>
            </div>

            <div class="button-wrapper">
              <button class="back-arrow">
                <div class="back-arrow-design-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"></path>
                  </svg>
                </div>
              </button>
              
              <button class="next-arrow">
                <div class="next-arrow-design-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"></path>
                  </svg>
                </div>
              </button>
            </div>

            <div class="image-wrapper">
              <img class="current-image" src=${this.image[this.currImageNum].imageurl}>
              <p class="image-description">Italy</p>
            </div>
        </div>
    `;
  }

  closedGallery() {
    return html`
    `;
  }

  render() {
    if(this.isVisible == true) {
      return this.openGallery();
    } else {
      return this.closedGallery();
    }
  }

  static get properties() {
    return {
        ...super.properties,
        image: { type: Array },
        currImageNum: { type: Number, attribute: "current-image-number" },
        totalImageNum: { type: Number, attribute: "total-image-number" },
        isVisible: { type: Boolean, attribute: "is-visible" },
    };
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);