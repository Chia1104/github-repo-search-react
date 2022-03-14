const URL_NOW = "https://api.github.com/users";
const URL = URL_NOW;

export const getAllRepos = async (user, page) => {
    try {
        const response = await fetch(`${URL}/${user}?page=${page}&per_page=10`, {
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
