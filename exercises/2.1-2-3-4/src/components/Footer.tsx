import "./Footer.css"

interface FooterProps {
    urlLogo : string;
    children: React.ReactNode;
  }  

  const Footer = (props: FooterProps) => {
    return  ( 
      <footer className="footer" >
        <div>{props.children}</div>
        <img src={props.urlLogo}  className="logo"/>
      </footer>
    );
  };

  export default Footer;