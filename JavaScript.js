function My函数名(参数1, 参数2, 参数3) {
    //代码
}
function MyDOM(标签, 内容, ID) {
    //代码
    var para = document.createElement(标签);
    var node = document.createTextNode(内容);
    para.appendChild(node);
    var element = document.getElementById(ID);
    element.appendChild(para);
}