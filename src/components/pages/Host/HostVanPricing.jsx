import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { price } = useOutletContext();

  const h3 = {
    fontSize: "24px",
    fontWeight: "500",
  };

  const span = {
    fontSize: "16px",
    fontWeight: "500",
  };

  return (
    <>
      <h3 style={h3}>
        ${price}
        <span style={span}>/day</span>
      </h3>
    </>
  );
}
