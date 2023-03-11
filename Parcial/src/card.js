class card extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({mode:"open"});
        
    }
    connectedCallback(){
        this.render;
    }

    atributeChangeCallback(propName, oldName, newName){
        this[propName]=newName;
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML=`
        
    <link rel="stylesheet" href="./src./">
    <section></section>
        `
    }

}

