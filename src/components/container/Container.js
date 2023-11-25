import "./Container.css";
const Container = (props) => {
  const containerName = "container " + props.name;
  if (props.containerType != "button") {
    return <div className={containerName}>{props.children}</div>;
  }
  else {
    return <button className={containerName}>{props.children}</button>;
  }
};
export default Container;
