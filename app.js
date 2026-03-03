function login(user) {
    if (user.type === "student") {
        return "Student Portal";
    }
    if (user.type === "admin") {
        return "Admin Portal";
    }
    return "No Access";
}

module.exports = login;
