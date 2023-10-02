const inputNode = document.querySelector('input');
const taskBoxNode = document.querySelector('.taskBox');


inputNode.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const taskNode = document.createElement('div');
        const checkedNode = document.createElement('span');
        const crossNode = document.createElement('span')
        checkedNode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" fill="white"/></svg>`;
        crossNode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.001 512.001"><path fill="grey" d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>`;
        const newInputNode = document.createElement('input');
        newInputNode.setAttribute('type', 'text');
        newInputNode.value = inputNode.value;
        taskNode.appendChild(checkedNode)
        taskNode.appendChild(newInputNode);
        taskNode.appendChild(crossNode);
        taskBoxNode.appendChild(taskNode)
        inputNode.value = "";
    }
    checkTask()
})

let checkTask = () => {
    let taskNodes = Array.from(taskBoxNode.children);
    taskNodes.forEach((taskNode) => {
        taskNode.children[0].addEventListener('click', () => {
            taskNode.children[0].style.backgroundColor = "aqua";
            taskNode.children[1].classList.add('fontStyle')
        })
        taskNode.children[2].addEventListener('click', () => {
            taskNode.remove()
        })
    })
}
