const t=window.dqcomponents.h;class e{getText(){return this.first+this.middle+this.last}render(){return t("div",null,"Hello, World! I'm ",this.getText())}static get is(){return"component-one"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}}static get style(){return""}}export{e as ComponentOne};