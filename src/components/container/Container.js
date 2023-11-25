import "./Container.css";
const Container = (props) => {
  const containerName = "container " + props.name;
  if (props.containerType != "button") {
    return <div className={containerName}>{props.children}</div>;
  }
  if(props.onClick) {
    return <button className={containerName} onClick={props.onClick}>{props.children}</button>;
  }
  return <button className={containerName}>{props.children}</button>;
  
};
export default Container;
