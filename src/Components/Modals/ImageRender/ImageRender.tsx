import "./ImageRender.scss";
import { ICON_CLOSE } from "../../../Resources/Images/Images";

function ImageRender({
  enableModal,
  close,
  img,
  title,
}: {
  enableModal: boolean;
  close: Function;
  img: string;
  title: string;
}) {
  return (
    <>
      {enableModal ? (
        <div
          className="modalContainer"
          style={{ backgroundColor: "transparent" }}
          onClick={() => close()}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title">{title}</h2>
              <button className="close" onClick={() => close()}>
                <img src={ICON_CLOSE} alt="close" />
              </button>
            </header>
            <main className="modal_content">
              <img src={img} alt="modal" className="modal_content_img" />
            </main>

            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ImageRender;
