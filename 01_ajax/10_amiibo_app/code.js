// When page loads, get all amiibos
getData ()
async function getData () {
  // Endpoint for all gameseries
  const url_gameseries = 'https://www.amiiboapi.com/api/gameseries'
  // Fetch GET Request
  const response = await fetch(url_gameseries)
  const data = await response.json()
  //console.log(data)
  showGames(data)
}

function showGames (data) {
  const names = []
  data.amiibo.forEach(game => {
    names.push(game.name)  
  });
  //console.log(names)
  const uniqueNames = [...new Set(names)]
  //1. Go through all names. For each game:
  uniqueNames.forEach(gameName => {
    //2. Create an <li>
    const li = document.createElement('li')
    //3. Add the current game name to the <li> as content
    li.innerText = gameName
    //4. Append the current <li> in the <ul> in the HTML
    document.querySelector('.gameseries').appendChild(li)
  })

  getAmiibos()
}

function getAmiibos () {
  // Getting Amiibos
  // Click event for the <li>

  const listItems = document.querySelectorAll('.gameseries > li')
  listItems.forEach( item => {
    item.addEventListener('click', async (e) => {
      // console.log(item.innerText)
      const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${item.innerText}`)
      const data = await response.json()
      console.log(data)
    })
  })

}