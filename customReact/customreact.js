function customRender(reactElement,container){
    /*const dom=document.createElement(reactElement.type);
    dom.innerHTML=reactElement.children;
    dom.setAttribute('href',reactElement.props.href);
    dom.setAttribute('target',reactElement.props.target);
    container.appendChild(dom);
*/ 
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop=='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactEle= {
    type:'a',
    props:{
        href:"www.google.com",
        target:'_blank'
    },
    children:'click me to visit google'
}

const main=document.querySelector('#root');

customRender(reactEle,main);
