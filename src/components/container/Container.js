import "./Container.css"
const Container = (props) => {
    const containerName = "container " + props.name;
    console.log(containerName);
    return (
        <div className={containerName}>
            {props.children}
        </div>
    )
};
export default Container;

//container fih 2 classes fel div wahda esmha container nestamlouha fel css global lel les containers lkol mithel border radius
// class okhra props.name teb3ath fiha esm el container eli tekhdem alih mithel food_items