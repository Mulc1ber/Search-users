import { fetchData } from "./fetch-data.js";
import { renderUsers } from "./render-users.js";
import { URL_USERS, USERS } from "./constants.js";
import { filteredUsers } from "./filtered-users.js";

(function () {
    const list = document.querySelector("#list");
    const input = document.querySelector("#filter");

    list.innerText = "Loading...";

    input.addEventListener("input", ({ target }) => {
        const currentInputValue = target.value;
        const filtered = filteredUsers(USERS, currentInputValue);
        renderUsers(filtered, list);
    });

    fetchData(URL_USERS)
        .then((data) => {
            setTimeout(() => {
                USERS.push(...data);
                renderUsers(data, list);
            }, 2000);
        })
        .catch((err) => {
            console.log(err);
        });
})();
