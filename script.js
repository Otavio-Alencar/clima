document.querySelector('.busca').addEventListener('submit',async(event)=>{
    event.preventDefault()
    let input = document.querySelector('#searchInput').value
    if(input !== ''){
        console.log(input)
        showWarning('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=8692eea5e2cb30666cf185a094dc248e&units=metric&lang=pt_br`

        let result = await fetch(url)
        let json = await result.json()
        console.log(json)
    }else{

    }
    
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
    setTimeout(() => {
        document.querySelector('.aviso').innerHTML = ''
    }, 3000);
}
