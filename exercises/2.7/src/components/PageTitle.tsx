
interface PageTitleProps {
    titre: string;
  }
  
  const PageTitle = (props: PageTitleProps) => {
    return (
    <h1>{props.titre}</h1>);
  };
  
  export default PageTitle;
  