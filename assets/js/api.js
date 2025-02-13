async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/BrunoWeygand/js-developer-portfolio/refs/heads/main/data/profile.json'
    const fetching = fetch(url)
    return await fetching.json()
}