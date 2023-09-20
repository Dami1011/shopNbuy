import { Image, Modal } from "react-bootstrap";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";

export default function ImageModal({
  showModal,
  setShowModal,
  current,
  setCurrent,
  data,
}) {
  
  const handleClose = () => setShowModal(false);
  const imgPics = data?.images?.map((image) => image);
  const length = imgPics?.length;

  const nextSlide = () => {
    setCurrent(current === imgPics.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? imgPics.length - 1 : current - 1);
  };
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      fullscreen={true}
      backdrop="static"
    >
      <div className="text-end w-100">
        <AiOutlineClose
          size="1.8rem"
          style={{ cursor: "pointer" }}
          onClick={handleClose}
        />
      </div>
      <div className="position-relative w-100 h-100">
        {/* <Carousel>
        <Carousel.Item key={imgPics._id}> */}
          <Image
            src={imgPics[current]}
            alt="imgs"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "relative",
            }}
          />
          {/* </Carousel.Item>
        </Carousel> */}
        <BsArrowLeftCircle
          className="position-absolute top-50 start-0 translate-middle text-black z-2"
          size="1.8rem"
          style={{ cursor: "pointer" }}
          onClick={prevSlide}
        />
        <BsArrowRightCircle
          className="position-absolute top-50 start-100 translate-middle text-black z-2"
          size="1.8rem"
          style={{ cursor: "pointer" }}
          onClick={nextSlide}
        />
      </div>

      <Modal.Body />
    </Modal>
  );
}
