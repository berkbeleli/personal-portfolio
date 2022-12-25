import DownloadIcon from "../../assets/images/download.svg";
import Resume from "../../assets/documents/BerkBeleliCV.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Berk-Beleli">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
