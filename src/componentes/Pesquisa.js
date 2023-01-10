import './Pesquisa.css';
import { useState } from 'react';
import { filmes } from './DadosPesquisa'
import { series } from './DadosPesquisa'

const Pesquisa = () => {

    const [filmesPesquisados, setFilmesPesquisados] = useState ([])
    const [seriesPesquisados, setSeriesPesquisados] = useState ([])


  return (
    <section>

        <input type="text" placeholder="Digite uma série ou filme favorito :)"
        
        onBlur={evento => {

            // FILMES
            const textoDigitado = evento.target.value
            const resultadoPesquisa = filmes.filter( filmes => filmes.nome.includes (textoDigitado) )

            setFilmesPesquisados (resultadoPesquisa)


            // SERIES
            const textoDigitado2 = evento.target.value
            const resultadoPesquisa2 = series.filter( series => series.nome.includes (textoDigitado2) )

            setSeriesPesquisados (resultadoPesquisa2)



        }} />
        
            { filmesPesquisados.map( filmes => (

                <div className='estilo-filme'>
                    <img src={filmes.src} alt='Imagem de filme'/>
                    
                </div>
                
            ))}


            { seriesPesquisados.map( series => (

            <div className='estilo-filme'>
                <img src={series.src} alt='Imagem de série' />
                
            </div>

    ))}





            


        
        


    </section>
  )
}

export default Pesquisa