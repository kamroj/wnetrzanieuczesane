import ReactImageGallery from "react-image-gallery";
import logo from "../../assets/images/logo-white.png";
import "./Home.scss";
import "./Gallery.scss";

function Home() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="home-container">
      <div className="gallery-container">
        <ReactImageGallery
          autoPlay={true}
          slideInterval={5000}
          additionalClass="gallery-container_gallery"
          items={images}
          showNav={false}
          showThumbnails={false}
          slideDuration={0}
          disableSwipe={true}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        <img src={logo} alt="dimensions" className="gallery-container__logo" />
      </div>
    </div>
  );
}

export default Home;
