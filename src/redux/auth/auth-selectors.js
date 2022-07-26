const getIsLoggerIn = state => state.auth.isLoggerIn;

const getUsername = state => state.auth.user.name;

const getIsLoadingCurUser = state => state.auth.isLoadingCurUser;

export { getUsername, getIsLoggerIn, getIsLoadingCurUser };
