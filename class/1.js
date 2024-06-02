class Tab {
  constructor() {
    let oDiv = document.getElementsByClassName('main')[0],
        oItem  = oDiv.getElementsByClassName('list-item');
    this.name = 'Tab';
    this.oDiv = oDiv;
    this.oItem = oItem;
    this.init()
  }
  init(){
    this.bindEvent()
  }
  bindEvent(){
    this.oDiv.addEventListener('click',this.onDivClick.bind(this),false);
  }
  onDivClick(ev){
    console.log(ev.target)
  }
}
let a = new Tab()
console.log(a)