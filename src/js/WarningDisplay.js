export default class WarningDisplay extends HTMLElement {
    constructor() {
      // allow access of properties on the HTMLElement prototype
      super();
  
      // define properties of the warning display
      this.warningHeader = "Warning Header";
      this.warningBody = "this is the warning body.";
    }
  
    // Runs when the custom element is added to the DOM 
    connectedCallback() {
      this.getWarningDisplayMetaData();
      this.renderWarningDisplay();
    }
  
    // get warning header and body text from attributes on the custom element
    // and set them as class properties to be referenced when rendering display
    getWarningDisplayMetaData() {
      this.warningHeader = this.getAttribute('header');
      this.warningBody = this.getAttribute('body')
    }
  
    // put together warning display elements and append to custom element body
    renderWarningDisplay() {
      // clear inner html of custom element before rendering to allow re-rendering.
      this.innerHTML = '';
      let warningContainer = this.createWarningContainer();
      let warningHeader = this.createWarningHeader(this.warningHeader);
      let warningBody = this.createWarningBody(this.warningBody);
  
      warningContainer.append(warningHeader, warningBody);
  
      this.append(warningContainer);
    }
  
    // create warning container div
    createWarningContainer() {
      let warningContainer = document.createElement("div");
      warningContainer.classList.add("warning-container");
      return warningContainer;
    }
    
    // create warning header text node
    createWarningHeader(text) {
      let warningHeader = document.createElement("h1");
      warningHeader.classList.add("warning-header");
      warningHeader.innerText = text;
      return warningHeader;
    }
  
    // create warning body text node
    createWarningBody(text) {
      let warningBody = document.createElement("p");
      warningBody.classList.add("warning-body");
      warningBody.innerText = text;
      return warningBody;
    }
  
    static get observedAttributes() { return ['body', 'header']; }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // if value has not changed do not continue
      if (oldValue === newValue || !newValue) return;
  
  
      // if attribute name is body
      if (name === 'body') {
        this.warningBody = newValue;
      }
  
      // if attribute name is header
      if (name === 'header') {
        this.warningHeader = newValue;
      }
      
      this.renderWarningDisplay();
    }
  }
  
  window.customElements.define('warning-display', WarningDisplay);