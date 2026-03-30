// Loop through an object and print the key-value pairs with their types





let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true,
}

const keys = Object.keys(myObject);

for (const key of keys) {
    const type = typeof myObject[key];
    console.log("key: " + key + " | type: " + type);
}