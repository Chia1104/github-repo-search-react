const URL_NOW = "https://api.github.com";
const LANGUAGE_COLOR_URL = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
const URL = URL_NOW;

export const getAllRepos = async (user, page) => {
    const response = await fetch(`${URL}/users/${user}/repos?page=${page}&per_page=10`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}

export const getRepoByName = async (user, repoName) => {
    const response = await fetch(`${URL}/repos/${user}/${repoName}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}

export const getUser = async (userName) => {
    const response = await fetch(`${URL}/users/${userName}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}

export const getLanguageColor = async () => {
    try {
        const response = await fetch(`${LANGUAGE_COLOR_URL}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
