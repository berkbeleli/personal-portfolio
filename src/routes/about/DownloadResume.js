import DownloadIcon from "../../assets/images/download.png";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href="">
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
