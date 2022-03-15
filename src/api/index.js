const URL_NOW = "https://api.github.com";
const LANGUAGE_COLOR_URL = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
const URL = URL_NOW;

export const getAllRepos = async (user, page) => {
    try {
        const response = await fetch(`${URL}/users/${user}/repos?page=${page}&per_page=10`, {
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

export const getRepoByName = async (user, repoName) => {
    try {
        const response = await fetch(`${URL}/repos/${user}/${repoName}`, {
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

export const getUser = async (user) => {
    try {
        const response = await fetch(`${URL}/users/${user}`, {
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
