function login(user) {
    if (user.role === "admin") {
        return "Admin Dashboard";
    }
    if (user.role === "student") {
        return "Student Dashboard";
    }
    return "Unauthorized";
}

module.exports = login;
