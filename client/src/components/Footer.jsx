import { PiGitlabLogoSimpleLight } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="layout-container mt-5 p-3">
      <div className="border-0 border-top border-dark mb-3" />
      <div className="d-flex justify-content-between align-items-center">
        <span>© 2023 ShopNBuy™. All Rights Reserved.</span>
        <a href="https://github.com/Dami1011" target="_blank" rel="noreferrer">
          <PiGitlabLogoSimpleLight color="black" className="fw-bold fs-2" />
        </a>
      </div>
    </div>
  );
}
