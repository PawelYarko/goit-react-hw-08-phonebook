const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUsername
}

export default authSelectors;