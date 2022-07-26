const getIsLoggerIn = state => state.auth.auth.isLoggerIn;

const getUsername = state => state.auth.auth.user.name;

export { getUsername, getIsLoggerIn };