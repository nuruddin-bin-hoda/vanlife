import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { description, name, type } = useOutletContext();

  const h4 = {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "21px",
  };

  const span = {
    fontWeight: "500",
  };

  return (
    <section>
      <h4 style={h4}>
        Name: <span style={span}>{name}</span>
      </h4>
      <h4 style={h4}>
        Description: <span style={span}>{description}</span>
      </h4>
      <h4 style={h4}>
        Category: <span style={span}>{type}</span>
      </h4>
      <h4 style={h4}>
        Visibility: <span style={span}>Public</span>
      </h4>
    </section>
  );
}
