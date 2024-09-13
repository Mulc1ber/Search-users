export const renderUsers = (users, list) => {
    // list.innerHTML = "";
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    if (users.length === 0) {
        list.innerText = "No matched users!";
    } else {
        users.forEach((user) => {
            const elementLi = document.createElement("li");
            elementLi.className = "list-group-item";
            elementLi.textContent = user.name;
            list.append(elementLi);
        });
    }
};
