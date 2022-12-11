import Image from 'react-random-image';

const Mision = () => {
    return(
        <div className="div-image-random">
            <h1 className='fotos-text'>Actualiza para mas imagenes</h1>
            <br></br>
            <br></br>
            
                <div className="ramdom">
                    <h2 className='segmento'>Segmento #1</h2>
                    <br></br>
                    <Image width={25} height={25}/>
                    <Image width={50} height={50}/>
                    <Image width={75} height={75}/>
                    <Image width={100} height={100}/>
                    <Image width={110} height={110}/>
                    <Image width={120} height={120}/>
                    <Image width={135} height={135}/>
                </div>
                <br></br>
                <br></br>
                <div className="ramdom">
                    <h2 className='segmento1'>Segmento #2</h2>
                    <br></br>
                    <Image width={20} height={20}/>
                    <Image width={55} height={55}/>
                    <Image width={80} height={80}/>
                    <Image width={95} height={95}/>
                    <Image width={105} height={105}/>
                    <Image width={125} height={125}/>
                    <Image width={140} height={140}/>
                </div>
                <br></br>
                <br></br>
                <div className="ramdom">
                    <h2 className='segmento2'>Segmento #3</h2>
                    <br></br>
                    <Image width={30} height={30}/>
                    <Image width={60} height={60}/>
                    <Image width={87} height={87}/>
                    <Image width={100} height={100}/>
                    <Image width={115} height={115}/>
                    <Image width={130} height={130}/>
                    <Image width={150} height={150}/>
                </div>
           
        </div>
    )
}
export default Mision;