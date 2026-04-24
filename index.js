async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/static/spotify.json')
    const json = await data.json()
    renderPlaylist(json)
}
function renderPlaylist(json) {
    const statsContainer = document.querySelector('#statsContainer')
    statsContainer.innerHTML = `
        <span>Треков: ${json.length}</span>
    `
    const container = document.querySelector('#tracksContainer')
    const html = json
        .map(
            (item, index) => `
        <li class="track-item">
            <div class="track-number">${index + 1}</div>
            <div class="track-main">
                <img
                    src="${item.track.album.images[2].url}"
                    alt="${item.track.name}"
                    class="album-art"
                    loading="lazy" />
                <div class="track-info">
                    <div class="track-name">${item.track.name}</div>
                    <div class="track-artists">${item.track.artists.map(a => a.name).join(', ')}</div>
                    <div class="track-album">${item.track.album.name}</div>
                </div>
            </div>
            <div class="track-meta">
                <div class="popularity">♪ ${item.track.popularity}</div>
            </div>
        </li>
    `,
        )
        .join('')

    container.innerHTML = html
}
fetchData()

