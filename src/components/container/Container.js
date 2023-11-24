import "./Container.css";
const Container = (props) => {
  const containerName = "container " + props.name;
  console.log(containerName);
  return <div className={containerName}>{props.children}</div>;
};
export default Container;
