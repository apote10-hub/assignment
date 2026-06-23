//Task 1
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Ram" });
  }, 2000);
}

// Call getUser and print the user name
getUser(1, function(user) {
  console.log("User name: " + user.name);
});

//Task 2
function getUser(id, callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: id, name: "Ram" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(["post1", "post2"]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(["nice", "good"]);
  }, 1000);
}

getUser(1, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0], function(comments) {
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});

//Task 3
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: id, name: "Ram" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["nice", "good"]);
    }, 1000);
  });
}

getUser(1)
  .then((user) => {
    return getPosts(user.id).then((posts) => ({ user, posts }));
  })
  .then(({ user, posts }) => {
    return getComments(posts[0]).then((comments) => ({ user, posts, comments }));
  })
  .then(({ user, posts, comments }) => {
    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//Task 4
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: id, name: "Ram" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["nice", "good"]);
    }, 1000);
  });
}

async function showData() {
  try {
    const user     = await getUser(1);
    const posts    = await getPosts(user.id);
    const comments = await getComments(posts[0]);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.log("Error:", error);
  }
}

showData();





