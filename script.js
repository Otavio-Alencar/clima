document.querySelector('.busca').addEventListener('submit',async(event)=>{
    event.preventDefault()
    let input = document.querySelector('#searchInput').value
    if(input !== ''){
        console.log(input)
        
        showWarning('Carregando...')
        setTimeout(() => {
            showWarning('')   
                }, 3000);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=8692eea5e2cb30666cf185a094dc248e&units=metric&lang=pt_br`

        let result = await fetch(url)
        let json = await result.json()
        
        console.log(json)

        if(json.cod === 200){
            setTimeout(() => {
            document.querySelector('.resultado').style.display= 'block'
            
        }, 3000);
        document.querySelector('.titulo').innerHTML = json.name+','+json.sys.country
        document.querySelector('.tempInfo').innerHTML = json.main.temp+ '<sup> ºC</sup>'
        document.querySelector('.ventoInfo').innerHTML = json.wind.speed+'<span> km/h</span>'
        document.querySelector('.ventoPonto').style.transform = `rotate(${json.wind.deg}deg)`
        document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`) 
        }else{
            showWarning('Não encontramos essa localização')
        }
    }
    
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
    document.querySelector('.resultado').style.display= 'none'
}
