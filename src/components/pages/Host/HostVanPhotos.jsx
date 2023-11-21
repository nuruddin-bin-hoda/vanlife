import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { imageUrl } = useOutletContext();

  const imgStyle = {
    height: "100px",
    borderRadius: "5px",
  };

  return (
    <>
      <img src={imageUrl} style={imgStyle} />
    </>
  );
}
