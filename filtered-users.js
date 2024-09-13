export const filteredUsers = (users, currentInputValue) => {
    const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(currentInputValue.toLowerCase())
    );
    return filtered;
};
