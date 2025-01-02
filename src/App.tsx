import ReactSkinview3d from "react-skinview3d";
import React, { useState } from "react";

const App = () => {
  const totalImages = 230; // Tổng số skin
  const imagesPerPage = 6; // Số lượng skin mỗi trang
  const skinUrls = [];

  // Tạo URL cho các skin từ 1 đến 230
  for (let i = 1; i <= totalImages; i++) {
    skinUrls.push(`/textures/skin/${i}.png`);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState(1);
  const [capeEnabled, setCapeEnabled] = useState(Array(totalImages).fill(false)); // Mảng theo dõi cape cho mỗi skin
  const [searchTerm, setSearchTerm] = useState("");

  const totalPages = Math.ceil(skinUrls.length / imagesPerPage);
  const currentImages = skinUrls
    .filter((url) => url.toLowerCase().includes(searchTerm.toLowerCase())) // Tìm kiếm qua tên skin
    .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage);

  // Cập nhật trang khi nhập số trang
  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = value.trim();

    // Nếu giá trị là số hợp lệ, cập nhật số trang
    if (value && !isNaN(Number(value))) {
      const page = Math.max(1, Math.min(totalPages, parseInt(value) || 1));
      setPageInput(page);
      setCurrentPage(page);
    } else {
      setPageInput(1); // Nếu không phải số hợp lệ, đặt lại về trang 1
    }
  };

  // Hàm chuyển đổi cape cho từng skin
  const toggleCape = (index: number) => {
    setCapeEnabled((prev) => {
      const newCapeEnabled = [...prev];
      newCapeEnabled[index] = !newCapeEnabled[index];
      return newCapeEnabled;
    });
  };

  return (
    <div>
      {/* Tìm kiếm */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm kiếm skin..."
          style={{
            padding: "5px",
            width: "200px",
            textAlign: "center",
            margin: "10px",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          width: "100%",
          boxSizing: "border-box",
          padding: "10px",
        }}
      >
        {currentImages.map((url, index) => (
          <div
            key={index}
            style={{
              width: "120px",
              height: "350px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <ReactSkinview3d
              skinUrl={url}
              width={120}
              height={300}
              capeUrl={capeEnabled[(currentPage - 1) * imagesPerPage + index] ? "/textures/mojang-classic-cape.png" : ""} // Sử dụng cape cho skin hiện tại
            />
            <button
              onClick={() => toggleCape((currentPage - 1) * imagesPerPage + index)} // Chỉ bật/tắt cape cho skin hiện tại
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                padding: "8px",
                borderRadius: "50%",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              🌟
            </button>
            <a
              href={url}
              download={`skin-${index + 1}.png`}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              Tải xuống
            </a>
          </div>
        ))}
      </div>

      {/* Nút điều khiển trang */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ margin: "0 10px", padding: "5px 10px" }}
        >
          Trang trước
        </button>
        <span style={{ margin: "0 10px" }}>
          Trang {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ margin: "0 10px", padding: "5px 10px" }}
        >
          Trang sau
        </button>
      </div>

      {/* Ô nhập số trang */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="number"
          value={pageInput}
          min="1"
          max={totalPages}
          onChange={handlePageChange}
          style={{
            padding: "5px",
            width: "50px",
            textAlign: "center",
            margin: "0 10px",
          }}
        />
        <span> / {totalPages}</span>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <span>{`Số lượng Skin: ${totalImages}`} </span>
      </div>
    </div>
  );
};

export default App;