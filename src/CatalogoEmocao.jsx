import ItemEmocao from "./ItensEmocao";

const CatalogoEmocao = ({titulo,catalagos}) => {
    return (
        <>
            <h2 className='sub-title'>{titulo}</h2>
            <div className='section-itens'>
                {
                    catalagos.map((catalago)=>
                        <ItemEmocao titulo={catalago.nome} img={catalago.imagem} cor={catalago.cor}/>
                    )
                }
            </div>
        </>
    )
}
 
 
 
 
export default CatalogoEmocao;