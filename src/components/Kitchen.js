import Oven from "./childComponents/Oven";
import Sink from "./childComponents/Sink";

function Kitchen() {
  return (
    <div className="kitchen">
      <div className="kitchen-equipment">
        <Oven />
        <Sink />
      </div>
      <p>Kitchen</p>
    </div>
  );
}

export default Kitchen;
