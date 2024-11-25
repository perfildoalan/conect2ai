import Logo_Conecta from './assets/logos/logo_conecta.svg';

export default function Menu() {
    return <div className="flex flex-row flex-nowrap gap-x-10 justify-center items-center w-full h-14 bg-white text-black">
        <img width={175} src={Logo_Conecta}/>
        <ul className="flex flex-row flex-nowrap gap-x-4">
            <li className="hover:text-blue transition duration-300"><a href="">Home</a></li>
            <li className="hover:text-blue transition duration-300"><a href="">Sobre</a></li>
            <li className="hover:text-blue transition duration-300"><a href="">Publicações</a></li>
            <li className="hover:text-blue transition duration-300"><a href="">Divulgação</a></li>
            <li className="hover:text-blue transition duration-300"><a href="">Contato</a></li>
        </ul>
    </div>
}