import styled from "styled-components";
import HostVans from "../../pages/Host/HostVans";

const StyledHostVans = styled(HostVans)`
  .host-van-link-wrapper {
    color: unset;
    text-decoration: unset;
  }

  .host-vans-list {
    padding-inline: 26px;
  }

  .host-vans-title {
    padding-inline: 26px;
  }

  .host-van-single {
    display: flex;
    align-items: center;
    background-color: white;
    margin-bottom: 15px;
    padding-block: 18px;
    padding-left: 24px;
  }

  .host-van-single > img {
    height: 70px;
    border-radius: 5px;
    margin-right: 17px;
  }

  .host-van-info h3 {
    font-size: 20px;
    font-weight: 600;
    margin-block: 10px;
  }

  .host-van-info p {
    margin-block: 10px;
  }
`;

export default StyledHostVans;