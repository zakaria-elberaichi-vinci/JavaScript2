
interface HeaderProps{
    urlLogo:string;
    children: React.ReactNode;
}

const Header = (props : HeaderProps) =>{
    return(

        <footer className="header">
            <div>{props.children}</div>
            <img src ={props.urlLogo} alt="logo" className="logo" />
        </footer>
    );
};

export default Header;