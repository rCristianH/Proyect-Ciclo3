import '../components/Estilos/StyleRegistro.css';


function registro(){

    return(
        <section className='form'>
        <div id="usercircle2" className="fas fa-user-circle">              
        </div>
        <div className={'Regis'}>
        <label>Correo Electrónico</label>
        <input
        type={'text'}
        name={'Correo'}
        placeholder={'Ingrese correo Gmail'}
        />
        <label>Validar Correo</label>
        <input 
        type={'text'}
        />        
        </div>
        </section>
        );
}

export default registro;