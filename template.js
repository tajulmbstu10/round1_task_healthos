// -------------------------------------
// task 1
// -------------------------------------

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let form = document.querySelector("#form");
    let data = {
        name: form.querySelector('input[name="name"]').value,
        email: form.querySelector('input[name="email"]').value,
        homepage: form.querySelector('input[name="homepage"]').value,
    }
    append_to_div("#contacts", data);
    form.reset();
})

// append formdata as a template format with target div
function append_to_div(div_name, data) {
    // console.log(data)
    let temp = document.querySelector("#contact-template").content;
    let targetContainer = document.querySelector(div_name);
    let clone = temp.cloneNode(true);

    if (data.name) {
        clone.querySelector("div.contact>h2").textContent = data.name;
    }
    if (data.email) {
        clone.querySelector("div.contact > p.email").textContent = data.email;

    } if (data.homepage) {
        clone.querySelector("div.contact > p.homepage >a").textContent = data.homepage;
    }
    return targetContainer.appendChild(clone);
};

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