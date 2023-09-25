export const initCanvas = (requestAnimation:number|null) => {
    const canvasEl = <HTMLCanvasElement>document.querySelector('#login-canvas')
    if(!canvasEl) return
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight
    const ctx = <CanvasRenderingContext2D>canvasEl.getContext('2d')
    const fontSize = 20
    ctx.font = `${fontSize}px 微软雅黑`
    const { width, height } = ctx.canvas
    const rates:any = {}, startRates:any = {}, endRates:any = {}, textObj:any = {}
    const drow = () => {
      requestAnimation && cancelAnimationFrame(requestAnimation)
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < width; i += fontSize ) {
        ctx.beginPath()
        const gradient = ctx.createLinearGradient(0, 0, 0, height)
        const s1 = 0.2 * Math.random() , s2 = 0.8 * Math.random(), step = 0.05 * Math.random()
        rates[i] = rates[i] || -s1
        startRates[i] = startRates[i] || s2
        endRates[i] = endRates[i] || 0
        gradient.addColorStop(0, '#000')
        gradient.addColorStop(startRates[i]< 0 ? 0 : startRates[i], '#000')
        gradient.addColorStop(rates[i]< 0 ? 0 : rates[i], '#0ee30e')
        gradient.addColorStop(endRates[i], '#000')
        gradient.addColorStop(1, '#000')
        ctx.fillStyle = gradient
        ctx.textBaseline = 'top'
        for(let j = 0 ;j < height; j += fontSize) {
          textObj[`${i}-${j}`] = textObj[`${i}-${j}`] || getRandomText()
          ctx.fillText(textObj[`${i}-${j}`], i, j)
        }
        rates[i] += step
        startRates[i] += step
        endRates[i] += step
        if (startRates[i] > 1) {
          startRates[i] = -s2
        }
        if(rates[i] > 1) {
          if(startRates[i] === -s2){
            rates[i] = -s1
          } else {
            rates[i] = 1
          }
        }
        if( endRates[i] > 1) {
          if(rates[i] === -s1 && startRates[i] === -s2) {
            endRates[i] = step
          } else {
            endRates[i] = 1
          }
        }
      }
      requestAnimation = requestAnimationFrame(drow)
    }
    drow()
    
  }
  function getRandomText () {
    const text = 'abcdefghijklmnopqrstuvwxyz1234567890'
    const res = text[Math.floor(Math.random() * text.length)]
    return res
  }