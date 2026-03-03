function login(user) {
    if (user.role === "admin") {
        return "Admin Dashboard";
    }
    if (user.role === "student") {
        return "Student Panel";
    }
    return "Unauthorized";
}

module.exports = login;
