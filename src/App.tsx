import ReactSkinview3d from "react-skinview3d";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const totalImages = 230;
  const imagesPerPage = 8;
  const skinUrls = [];
  for (let i = 1; i <= totalImages; i++) {
    skinUrls.push(`/textures/skin/${i}.png`);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [capeEnabled, setCapeEnabled] = useState(Array(totalImages).fill(false));

  const totalPages = Math.ceil(skinUrls.length / imagesPerPage);

  // Tìm kiếm theo tên hình ảnh
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
    <div
      style={{
        background: 'linear-gradient(135deg, #FF7E5F, #feb47b)',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* Hình ảnh ở trên cùng */}
      <img
        src="/textures/page/bg.1f1e1cd2bf13917f60f8.png"
        alt="Top Image"
        style={{
          position: "absolute",
          top: "-320px", // Để nút xuất hiện trên cùng của box
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FF7E5F",
          width: "99.2%",
          height: "auto",
          opacity: 0.1,
        }}
      />
      {/* Hình ảnh ở bên trái */}
      <img
        src="/textures/page/lp-banner-left-right.gif"
        alt="Left Image"
        style={{
          position: "absolute",
          top: "50%",
          left: "-8%",
          transform: "translateY(-50%)",
          zIndex: 0,
          width: "500px",
          height: "100%",
          opacity: 0.8
        }}
      />

      {/* Hình ảnh ở bên phải */}
      <img
        src="/textures/page/lp-banner-left-right.gif"
        alt="Right Image"
        style={{
          position: "absolute",
          top: "50%",
          right: "-8%",
          transform: "translateY(-50%)",
          zIndex: 0,
          width: "500px",
          height: "100%",
          opacity: 0.8
        }}
      />
      <img
        src="/textures/page/lp-banner-cat.gif"
        alt="Right Image"
        style={{
          position: "absolute",
          top: "3.5%",
          right: "47%",
          transform: "translateY(-50%)",
          zIndex: 0,
          width: "100px",
          height: "10%",
          opacity: 1,
        }}
      />

      {/* Nút và tiêu đề MIA-SKIN */}
      <div
        style={{
          position: "absolute",
          top: "60px", // Để nút xuất hiện trên cùng của box
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#FF7E5F",
          padding: "10px 20px",
          borderRadius: "30px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease, transform 0.1s ease", // Thêm hiệu ứng khi hover và click
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.backgroundColor = "#800080"; // Đổi màu sang tím khi hover
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLDivElement;
          target.style.backgroundColor = "#FF7E5F"; // Đổi lại màu ban đầu khi không hover
        }}
      >
        MIA-SKIN
      </div>

      {/* Container Box cho nội dung chính */}
      <div style={{
        position: "relative",
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.9)",  // Đặt nền màu trắng trong suốt
        padding: "20px",
        width: "80%",
        maxWidth: "1200px",  // Đặt độ rộng tối đa cho box
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}>
        <img
          src="/textures/page/lp-content-swimming-dog.gif"
          alt="topLeft Image"
          style={{
            position: "absolute",
            top: "-3%",
            right: "80%",
            transform: "translateY(-50%)",
            zIndex: 0,
            width: "200px",
            height: "25%",
            opacity: 1,
          }}
        />
        {/* Tìm kiếm */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm tên hình ảnh..."
            style={{
              padding: "10px",
              width: "300px",
              textAlign: "center",
              margin: "10px",
              color: "aqua",
              borderRadius: "30px", // Bo tròn thanh tìm kiếm
              border: "2px solid #ffb94b", // Màu viền
              backgroundColor: "#ffffff",
              transition: "all 0.3s ease", // Thêm hiệu ứng chuyển tiếp
            }}
            onFocus={(e) => e.target.style.borderColor = "#FF7E5F"} // Đổi màu viền khi focus
            onBlur={(e) => e.target.style.borderColor = "#ffb94b"} // Đổi lại màu viền khi mất focus
          />
        </div>

        {/* Hiển thị các hình ảnh */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "20px",
            justifyItems: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            padding: "20px",
          }}
        >
          {currentImages.map((url, index) => {
            const imageName = url.split("/").pop()?.replace(".png", "");
            
            return (
              <div
                key={index}
                style={{
                  width: "120px",
                  height: "400px",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  background: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "8px",
                  border: "2px solid #ffb94b", // Màu viền
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Thêm hiệu ứng khi hover
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} // Tăng kích thước khi hover
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} // Khôi phục kích thước khi không hover
              >
                <ReactSkinview3d
                  skinUrl={url}
                  width={150}
                  height={350}
                  capeUrl={capeEnabled[index] ? "/textures/cape/1.png" : undefined}
                />
                <div style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0",
                  right: "0",
                  padding: "5px",
                  textAlign: "center",
                  backgroundColor: "#FF7E5F",
                  color: "#fff",
                  fontWeight: "bold",
                  borderBottomLeftRadius: "6px",
                  borderBottomRightRadius: "6px",
                  transition: "background-color 0.3s ease, transform 0.1s ease", // Thêm hiệu ứng khi hover và click
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#800080"} // Đổi màu sang tím khi hover
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#FF7E5F"} // Đổi lại màu ban đầu khi không hover
                onClick={() => toggleCape(index)}>
                  {imageName}
                </div>
              </div>
            );
          })}
        </div>

        {/* Điều khiển trang */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Trang trước
          </button>
          <input
            type="number"
            value={currentPage}
            onChange={handlePageInputChange}
            style={{ width: "40px", margin: "0 10px", textAlign: "center" }}
          />
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Trang sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;