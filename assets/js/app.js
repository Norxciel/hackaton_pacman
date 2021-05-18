document.addEventListener('DOMContentLoaded', () => {

    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.gridG')
        // Map
    const layout = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,
            1, 0, 0, 0, 0, 3, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 3, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
        // 0 - bonbon
        // 1 - Mur
        // 3 - palet fruit 
        // 4 - Case vide
    
    const squares = []
    
        //création de tableau
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)

            //ajouter layout sur le board
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')
            }
        }
        startGame.play()
    }
    createBoard()


    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')

    //bouger pacman
    function movePacman(e) {

        switch (e.keyCode) {
            case 37:

                squares[pacmanCurrentIndex].classList.remove('pac-man')
                squares[pacmanCurrentIndex].classList.remove('pac-manL')
                squares[pacmanCurrentIndex].classList.remove('pac-manB')
                squares[pacmanCurrentIndex].classList.remove('pac-manH')

                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= 1
                squares[pacmanCurrentIndex].classList.add('pac-manL')
                break
            case 38:
                squares[pacmanCurrentIndex].classList.remove('pac-man')
                squares[pacmanCurrentIndex].classList.remove('pac-manL')
                squares[pacmanCurrentIndex].classList.remove('pac-manB')
                squares[pacmanCurrentIndex].classList.remove('pac-manH')
                if (
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= width
                squares[pacmanCurrentIndex].classList.add('pac-manH')
                break
            case 39:
                squares[pacmanCurrentIndex].classList.remove('pac-man')
                squares[pacmanCurrentIndex].classList.remove('pac-manL')
                squares[pacmanCurrentIndex].classList.remove('pac-manB')
                squares[pacmanCurrentIndex].classList.remove('pac-manH')
                if (
                    pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += 1
                squares[pacmanCurrentIndex].classList.add('pac-man')
                break
            case 40:
                squares[pacmanCurrentIndex].classList.remove('pac-man')
                squares[pacmanCurrentIndex].classList.remove('pac-manL')
                squares[pacmanCurrentIndex].classList.remove('pac-manB')
                squares[pacmanCurrentIndex].classList.remove('pac-manH')
                if (
                    pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += width
                squares[pacmanCurrentIndex].classList.add('pac-manB')
                break
        }
        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
    }

    document.addEventListener('keyup', movePacman)

    // Mange une gomme
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            pacManMove.play();
            score += 10
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }

    //Mange un palet
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    //arrêter de clignoter (fantôme)
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    //création de fantôme
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    //tous les fantômes 
    ghosts = [
        new Ghost('blinky', 29, 250),
        new Ghost('pinky', 54, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 754, 500)
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
    })

    //bouger le fantôme alétoirement 
    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function() {
            if (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('wall')) {
                //supp les classes des fantômes 
                squares[ghost.currentIndex].classList.remove(ghost.className)
                squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                    //bouger dans l'espace dispo
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                    //sinon trouver une nouvelle direction random
            } else direction = directions[Math.floor(Math.random() * directions.length)]

            //si le fantôme est effrayé
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
                intermission.play()
            }

            //si le pacman peut manger le fantome 
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                eatGhost.play()
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score += 100
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }
            checkForGameOver()
        }, ghost.speed)
    }

    //verif de défaite
    function checkForGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
            !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            death.play();
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function() {
                swal({
                    title: "Perdu !",
                    icon: "error",
                });
            }, 500)
        }
    }

    //verif de victoire
    function checkForWin() {
        if (score === 2680) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function() {
                swal({
                    title: "Gagné !",
                    icon: "success",
                })
            }, 500)
        }
    }
})