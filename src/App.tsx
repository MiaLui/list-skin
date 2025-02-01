import ReactSkinview3d from "react-skinview3d";
import React, { useState } from "react";

const App = () => {
  const totalImages = 242;
  const imagesPerPage = 8;
  const current_skin = [];
  const skinUrls = [];
  for (let i = 1; i <= totalImages; i++) {
    skinUrls.push(`/textures/skin/${i}.png`);
    current_skin.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [capeEnabled, setCapeEnabled] = useState(Array(totalImages).fill(false));

  const totalPages = Math.ceil(skinUrls.length / imagesPerPage);

  const filteredImages = skinUrls.filter((url) => {
    const imageName = url.split("/").pop()?.replace(".png", "").toLowerCase() || '';
    return imageName.includes(searchTerm.toLowerCase());
  });

  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageNumber = parseInt(event.target.value);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const toggleCape = (index: number) => {
    setCapeEnabled((prev) => {
      const newCapeEnabled = [...prev];
      newCapeEnabled[index] = !newCapeEnabled[index];
      return newCapeEnabled;
    });
  };

  return (
    <div className="app-container">
      <img src="/textures/page/bg.1f1e1cd2bf13917f60f8.png" alt="Top Image" className="top-image" />
      <img src="/textures/page/lp-banner-left-right.gif" alt="Left Image" className="left-image" />
      <img src="/textures/page/lp-banner-left-right.gif" alt="Right Image" className="right-image" />
      <img src="/textures/page/lp-banner-cat.gif" alt="Right Image" className="cat-image" />
      <div className="mia-skin-button">MIA-SKIN</div>
      <div className="content-box">
        <img src="/textures/page/lp-content-swimming-dog.gif" alt="topLeft Image" className="top-left-image" />
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm tên hình ảnh..."
            className="search-input"
          />
        </div>
        <div className="image-grid">
          {currentImages.map((url, index) => {
            const imageName = url.split("/").pop()?.replace(".png", "");
            return (
              <div key={index} className="image-container">
                <ReactSkinview3d
                  skinUrl={url}
                  width={120}
                  height={300}
                  capeUrl={capeEnabled[(currentPage - 1) * imagesPerPage + index] ? "/textures/mojang-classic-cape.png" : ""}
                />
                <button
                  onClick={() => toggleCape((currentPage - 1) * imagesPerPage + index)}
                  className="cape-button"
                >
                  🌟
                </button>
                <a
                  href={url}
                  download={`skin-${imageName}.png`}
                  className="download-link"
                >
                  Tải xuống
                </a>
                <div className="image-name">{imageName}</div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Trang Trước
          </button>
          <input
            type="number"
            value={currentPage}
            onChange={handlePageInputChange}
            min={1}
            max={totalPages}
            className="page-input"
          />
          <span style={{ margin: "0 5px", color: "#a3a2a2" }}>/ {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Trang Sau
          </button>
        </div>
        <div className="skin-count">
          <span>{`Số lượng Skin: ${Math.max(...current_skin)}`}</span>
        </div>
      </div>
    </div>
  );
};

export default App;