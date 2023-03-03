const homepage = document.querySelector('.homepage')
const scoreboard = document.querySelector('.scoreboard')
const gameboard = document.querySelector('.gameboard')

const addPlayerBtn = document.querySelector('#addPlayerBtn')
const addPlayerInput = document.querySelector('#addPlayerInput')
const playersList = document.querySelector('#playersList')

const startGameBtn = document.querySelector('#startGameBtn')
const screen = document.querySelector('.screen')
const playerboard = document.querySelector('.playerboard') 

let players = []
let activePlayerIndex = 0
let playerOnMove


//add players
addPlayerBtn.addEventListener('click', ()=>{

  if (players.length > 3) {
    alert('Max 4 players') 
} else if(!addPlayerInput.value){
    alert('Must enter name')
} else if(addPlayerInput.value.length > 8){
  alert('Max 8 characters name')
} else {
  players.push({name: addPlayerInput.value, p15 : [], p16 : [], p17 : [], p18 : [], p19 : [], p20 : [], pBull : []})
  let newPlayerDiv = document.createElement('h4')
  newPlayerDiv.innerHTML = `${addPlayerInput.value}`
  newPlayerDiv.id = `${addPlayerInput.value}`
  let removePlayer = document.createElement('span')
  removePlayer.classList.add('remove-player')
  removePlayer.innerHTML = '&nbsp❌'
  removePlayer.addEventListener('click', (e)=>{
    players.splice(players.indexOf(newPlayerDiv.id), 1)
    e.target.parentElement.remove()
    console.log(players)
  })
  newPlayerDiv.append(removePlayer)
  playersList.append(newPlayerDiv)
  addPlayerInput.value = ''
  console.log(players);
  addPlayerInput.focus()
}
})
//make table
function makeTable() {
  let table = '<table border="1">';
  table += `<tr><th>Name</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>Bull</th></tr>`;
  players.forEach(player => {
    table = table + `<tr>`;
    table = table + `<td>${player.name}</td>`;
    table = table + `<td>${player.p15}</td>`;
    table = table + `<td>${player.p16}</td>`;
    table = table + `<td>${player.p17}</td>`;
    table = table + `<td>${player.p18}</td>`;
    table = table + `<td>${player.p19}</td>`;
    table = table + `<td>${player.p20}</td>`;
    table = table + `<td>${player.pBull}</td>`;  
    table += `</tr>`;
  });
  table += "</table>";
  document.querySelector(".scoreboard").innerHTML = table;
}

//start game
startGameBtn.addEventListener('click', ()=>{
  if(players.length < 2) {
    alert('Must add 2 players')
  } else {
    console.log('START!!!!!!!!!!!');

    makeTable()
    screen.innerHTML = `${players[0].name} move`
    playerOnMove = players[activePlayerIndex].name

    homepage.style.display = 'none'
    document.body.style.backgroundImage = 'none'
    scoreboard.style.display = 'block'
    gameboard.style.display = 'flex'
  }
})




//game
const allfields = document.querySelectorAll('.dartsfield')
let allHits = []
for (let i = 0; i < allfields.length; i++) {
    allfields[i].addEventListener('click', (e) => {
      playerboard.innerHTML = ''
      console.log(playerOnMove);
      console.log(e.target.id);   
      let hitValue = e.target.id
      
      allHits.push(hitValue)
      if(allHits.length == 4) {

        // if(allHits.includes('50')) {
        //   players[activePlayerIndex].pBull.push('.')
        //   makeTable()
        // }

        const counts = {};
        
        allHits.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        players[activePlayerIndex].pBull.push(counts['50'])
        makeTable()
        
     


        
        hitValue = '🎯🎯🎯🎯'
        alert('next player')      
        allHits = []
        activePlayerIndex < players.length-1 ? activePlayerIndex += 1 : activePlayerIndex = 0
        
        playerOnMove = players[activePlayerIndex].name
        screen.innerHTML = `${players[activePlayerIndex].name} move`
      }
    

      const playermove = document.createElement('p')

      let removeMove = document.createElement('span')
      removeMove.innerHTML = '&nbsp❎'
      removeMove.classList.add('remove-move')
      removeMove.addEventListener('click', (e)=>{
        e.target.parentElement.remove()
        hitValue = null
        allHits.pop()
      })

      playermove.innerHTML = `${playerOnMove} - ${hitValue}`
      playermove.append(removeMove)
      playerboard.append(playermove)
      console.log(allHits);
    })
  
}

