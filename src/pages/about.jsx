import Image from "next/image"
import sampleImage from "../../public/Filippi 3.jpeg"


export default function About() {
    return (
        
            <div>
                <div>
                    <h1>Sobre o autor</h1>
                </div>
                <div>
                    <p>Eu Filippi Fernandes de Souza Sgreccia, estudo atualmente a lib React.js e sou desenvolvedor de software junior, criei este Blog para treinar meus conhecimentos em React, e para contar um pouco da história de Castlevania.</p>
                </div>

                <div>
                <Image                  
            src={sampleImage}
            alt="Picture of Filippi Sgreccia"     
            width="360"
            height="640" 
          />
        </div>
                </div>

                
    )
}