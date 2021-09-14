import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function Floorplan() {
  return (
    <div className="floorplan-container">
      <Bedroom cname="bedroom-one" bedNum="1" />
      <Kitchen />
      <Bath bname="full-bath" size="Full" />
      <Bedroom cname="bedroom-two" bedNum="2" />
      <LivingRoom />
      <Bath bname="half-bath" size="Half" />
      <Bedroom cname="bedroom-three" bedNum="3" />
    </div>
  );
}

export default Floorplan;
