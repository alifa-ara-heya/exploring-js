// write an arrow function that will do the following:
//a) It will take an array where the arrow elements will be the names of your friends.
//b) Check if the length of each element is even, push elements with even length to a new array and return the result.

const arrayOfFriends = (friendsArray) => {
    const friends = [];
    for (let friend of friendsArray){
        if (friend.length % 2 == 0){
            friends.push(friend);
        }
    }
    return friends;
};

// ['alifa', 'fatema', 'asma']
console.log(arrayOfFriends(['alifa', 'fatema', 'asma', 'sakib']))
