const URL_NOW = "https://api.github.com";
const LANGUAGE_COLOR_URL = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
const URL = URL_NOW;

export const getAllRepos = async (user, page) => {
    try {
        const res = await fetch(`${URL}/users/${user}/repos?page=${page}&per_page=10&sort=created`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return { status: res.status, data: await res.json() }
    } catch (err) {
        return { status: err.response.status, data: await err.response.json() };
    }
}

export const getRepoByName = async (user, repoName) => {
    try {
        const res = await fetch(`${URL}/repos/${user}/${repoName}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return { status: res.status, data: await res.json() }
    } catch (err) {
        return { status: err.response.status, data: await err.response.json() };
    }
}

export const getUser = async (userName) => {
    try {
        const res = await fetch(`${URL}/users/${userName}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return { status: res.status, data: await res.json() }
    } catch (err) {
        return { status: err.response.status, data: await err.response.json() };
    }
}

export const getLanguageColor = async () => {
    try {
        const res = await fetch(`${LANGUAGE_COLOR_URL}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return { status: res.status, data: await res.json() }
    } catch (err) {
        return { status: err.response.status, data: await err.response.json() };
    }
}
