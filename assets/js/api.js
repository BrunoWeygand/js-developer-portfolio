async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/BrunoWeygand/js-developer-portfolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}