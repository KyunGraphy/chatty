const users = [];

const addNewUser = ({ id, userName, roomId }) => {
    userName = userName.trim().toLowerCase();
    roomId = roomId.trim().toLowerCase();

    const existUser = users.find(
        (user) => user.roomId === roomId && user.userName === userName
    );

    if (!userName || !roomId) return { error: "Nick name and roomId are required." };
    
    if (existUser) return { error: "Nick Name & roomId id is taken." };

    const user = { id, userName, roomId };

    users.push(user);

    return { user };
};

const removeExistUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInARoom = (roomId) =>
    users.filter((user) => user.roomId === roomId);

module.exports = { addNewUser, removeExistUser, getUser, getUsersInARoom };
