import {html, render, svg} from './node_modules/lit-html'

export default class AnytownApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    render(this.render(), this.shadowRoot)	    
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
	  margin: 0px;
        }
	#titleBar {
	  width: 100%;
	  height: 160px;
	  color: rgb(20, 38, 54);
	  background-color: #fff;
	  margin: 0px;
	}
	#bottomBar {
	  width: 100%;
	  height: 20px;
	  background-color: rgb(51, 153, 204);
	  background-color: #222;
	  margin: 0px;
	}
	h3 {
	  font-size: 38px;
	  margin-top: 0px;
	  padding-top: 30px;
	  padding-left: 40px;
	  margin-left: auto;
	  margin-right: auto;
	}
      </style>
      <div>
        <div id='titleBar'>
          <h3>Anytown Independant School District</h3>
        </div>
	<div id='bottomBorder'>
	</div>
       This is a test
      </div>
    `;
  }
}
customElements.define('anytown-app', AnytownApp);
