import { html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class PlayList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.images = [];
    this.captions = [];
    this.descriptions = [];
    this.currImageNum = 0;
    this.totalImageNum = this.images.length;
    this.isVisible = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: var(--ddd-font-primary);
      }

      .gallery-wrapper {
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .opened-wrapper {
        width: 900px;
        height: auto;
        background-color: var(--ddd-theme-default-accent);
        box-sizing: border-box;
        border: var(--ddd-border-sm);
        border-color: var(--ddd-theme-default-potentialMidnight);
        border-radius: var(--ddd-radius-sm);
        align-items: center;
        justify-content: center;
      }

      .image-wrapper2 {
        align-items: center;
        justify-content: center;
      }

      .image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
      }

      .image-wrapper img {
        display: block;
        position: relative;
        width: auto;
        height: 300px;
        border: var(--ddd-border-md);
        border-color: var(--ddd-theme-default-potentialMidnight);
        border-radius: var(--ddd-radius-sm);
        margin-top: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-2);
      }

      .image-caption {
        top: 0;
        bottom: 0;
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
        margin-top: var(--ddd-spacing-10);
      }

      .image-description {
        text-align: center;
        justify-content: center;  
        display: flex;
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0 var(--ddd-spacing-18);
        box-sizing: border-box;
        margin-top: var(--ddd-spacing-6);
        margin-bottom: var(--ddd-spacing-10);
      }

      .top-elements {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
      }
    
      .image-counter {
        margin: var(--ddd-spacing-2);
        justify-content: left;
        position: fixed;
        font-size: 16px;
        color: var(--ddd-theme-default-limestoneGray);
        left: var(--ddd-spacing-1);
        top: var(--ddd-spacing-1);
        z-index: 1;
      }

      .close-button {
        margin: var(--ddd-spacing-2);
        justify-content: right;
        cursor: pointer;
        position: fixed;
        font-family: var(--ddd-font-primary);
        background-color: transparent;
        border-width: 0px;
        color: var(--ddd-theme-default-limestoneGray);
        font-size: 16px;
        top: var(--ddd-spacing-1);
        right: var(--ddd-spacing-1);
        z-index: 1;
        display: flex;
        align-items: center;
      }

      .close-icon {
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        fill: var(--ddd-theme-default-limestoneGray);
      }

      .close-button:hover {
        .close-button-text {
          color: var(--ddd-theme-default-white);
        }

        .close-icon {
          fill: var(--ddd-theme-default-white);
        }
      }

      .close-button-text {
        display: flex;
        align-items: center;
        margin: 0;
      }

      .back-button-wrapper,
      .next-button-wrapper {
        display: flex;
        
      }

      .back-arrow,
      .next-arrow {
        display: flex;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
      }

      .back-icon,
      .next-icon {
        fill: var(--ddd-theme-default-limestoneGray);
        width: 24px;
        height: 24px;
      }

      .back-arrow {
        display: flex;
        top: 50%;
        left: 0;
        width: 38px;
        height: 38px;
        border-width: 0px;
      }

      .back-arrow-design-wrap,
      .next-arrow-design-wrap {
        display: flex;
        align-items: center;
        justify-content: center; 
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: var(--ddd-theme-default-potentialMidnight);
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      .back-arrow:hover .back-icon, 
      .next-arrow:hover .next-icon{
        fill: var(--ddd-theme-default-white);
      }

      .next-arrow {
        display: flex;
        align-items: center; 
        justify-content: center; 
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 38px;
        height: 38px;
        border-width: 0px;
      }

    `;
  }

  firstUpdated() {

    // listens for when an image is clicked, then finds the url to indicate which image is clicked
    document.addEventListener('image-clicked', (e) => {
      var url = e.target.attributes.imageUrl.nodeValue;
      this.currImageNum = this.images.indexOf(url);
  
      // makes gallery visible
      if(this.isVisible == false) {
        this.isVisible = true;
      }

      this.openGallery();
    })

    // takes all current images on the page and puts them into the image array
    var data = document.querySelectorAll('media-image');
    data.forEach(element => {
      console.log(element.getAttribute("imageUrl"))
      this.images.push(element.getAttribute("imageUrl"))
      this.captions.push(element.getAttribute("caption"))
      this.descriptions.push(element.getAttribute("description"))
    });
    this.totalImageNum = this.images.length;
  }

  openGallery() {
    //prevents from going to an unknown index
    let prevIndex = (this.currImageNum - 1 + this.totalImageNum) % this.totalImageNum;
    let nextIndex = (this.currImageNum + 1) % this.totalImageNum;

    return html`
        <div class="gallery-wrapper">
          <div class="opened-wrapper">
            <div class="top-elements">

                <div class="image-counter">
                    ${this.currImageNum + 1} / ${this.totalImageNum}
                </div>

                <div class="close-button-wrapper">
                  <button class="close-button" @click="${this.closeGallery}">
                    <svg class="close-icon" viewbox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                      <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                    </svg>
                    <p class="close-button-text">Close</p>
                  </button>
                </div>

            </div>

            <div class="back-button-wrapper">
              <button class="back-arrow" @click="${this.leftClick}">
                <div class="back-arrow-design-wrap">
                  <svg class="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"></path>
                  </svg>
                </div>
              </button>
            </div>
              
            <div class="next-button-wrapper">
              <button class="next-arrow" @click="${this.rightClick}">
                <div class="next-arrow-design-wrap">
                  <svg class="next-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon2">
                    <path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"></path>
                  </svg>
                </div>
              </button>
            </div>

            <div class="image-wrapper"> 
              <div class="image-caption">${this.captions[this.currImageNum]}</div>
              <div class="image-wrapper2">
                <img class="current-image" src=${this.images[this.currImageNum]}>
              </div>
              <div class="image-description">${this.descriptions[this.currImageNum]}</div>
            </div>
          
          </div>
        </div>
    `;
  }

  closeGallery() {
    this.isVisible = false;
  }

  leftClick() {
    this.currImageNum = (this.currImageNum - 1 + this.totalImageNum) % this.totalImageNum; // Circular decrement
    this.requestUpdate();
  }

  rightClick() {
    this.currImageNum = (this.currImageNum + 1) % this.totalImageNum; // Circular increment
    this.requestUpdate();
  }

  render() {
    return this.isVisible ? this.openGallery() : html``; // Conditionally render gallery

  }

  static get properties() {
    return {
        ...super.properties,
        images: { type: Array },
        captions: { type: Array },
        descriptions: {type: Array },
        currImageNum: { type: Number, attribute: "current-image-number" },
        totalImageNum: { type: Number, attribute: "total-image-number" },
        isVisible: { type: Boolean, attribute: "is-visible" },
    };
  }
}

globalThis.customElements.define(PlayList.tag, PlayList);