class Form{
    constructor(){
       this.input = createInput("Name")
       this.start = createButton('PLAY')
       this.greeting = createElement('h2')
       this.title = createElement('h2')
       this.reset = createButton('Reset')
       this.save = createButton('Save')
    }
    hide() {
        this.greeting.hide()
        this.start.hide()
        this.input.hide()
        this.title.hide()
    }
    display() {
        this.title.html("FRUIT CATCHER")
        this.title.position(150,20)
        this.title.style('font-size', '50px')
        this.title.style('color', 'cyan')
    
        this.input.position(180,200)
        this.input.style('width', '200px')
        this.input.style('height', '35px')
        this.input.style('background', 'red')
        this.input.style('font-size', '20px')

        this.save.position(420,201)
        this.save.style('height','42px')
        this.save.style('width','90px')
        this.save.style('font-size','20px')
        this.save.style('background','red')

        this.start.position(300,300)
        this.start.style('width', '100px')
        this.start.style('height', '40px')
        this.start.style('background', 'orange')
        this.start.style('font-size','23px')

        this.reset.position(310, 467)
        this.reset.style('width', '85px')
        this.reset.style('height', '35px')
        this.reset.style('background', 'pink')
        this.reset.style('font-size', '21px')

        this.save.mousePressed(() => {
          this.input.hide()
          this.save.hide()
          player.name = this.input.value()
          this.greeting.html("Hello " + player.name)
          this.greeting.position(210,150)
          this.greeting.style('color', 'pink')
          this.greeting.style('font-size', '45px')
        })
        this.start.mousePressed(()=>{
          playerCount += 1
          player.index = playerCount
          player.update()
          player.updateCount(playerCount)
        })
        this.reset.mousePressed(() => {
          player.updateCount(0)
          game.update(0)
          var playerInfo = database.ref('players')
          playerInfo.remove() 
          this.greeting.hide()
          this.input.value("Name")
          this.start.show()
          this.save.show()
          this.input.show()
          this.title.show()

          this.save.mousePressed(() => {
            this.input.hide()
            this.save.hide()
            this.greeting.show()
            player.name = this.input.value()
            this.greeting.html("Hello " + player.name)
            this.greeting.position(210,150)
            this.greeting.style('color', 'pink')
            this.greeting.style('font-size', '45px')
          })
        })

    }
}