// -------------------------------------
// task 2
// -------------------------------------
function secondTask() {
    const givenArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C', 'Rust', 'Go'];
    function mapForEach(arr, fn) {
        const itemLenArray = [];
        arr.forEach(item => {
            itemLenArray.push(
                fn(item)
            );
        })
        return itemLenArray;
    }
    const lenArray = mapForEach(givenArray, (item) => {
        // console.log(item.length)
        return item.length;
    });

    // append the output to the html body
    let taskHeader = document.createElement("H1");
    let headerContent = document.createTextNode("Task 2");
    taskHeader.appendChild(headerContent);
    document.body.appendChild(taskHeader);

    let ul = document.createElement("UL");
    lenArray.forEach((item, index) => {
        let outputContent = document.createElement("LI");
        let content = document.createTextNode('Length of ' + givenArray[index] + ' is ' + item + '\n');
        outputContent.appendChild(content);
        ul.appendChild(outputContent);

    })
    document.body.appendChild(ul);
};

secondTask();