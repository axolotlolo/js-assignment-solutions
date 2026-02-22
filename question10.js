function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Alice Johnson",
        email: "alice@example.com",
        age: 32
      });
    }, 2000);
  });
}

async function getUserData() {
  const userData = await fetchUserData();
  console.log(userData);
}

getUserData();
