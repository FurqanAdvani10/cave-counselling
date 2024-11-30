import React from "react";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
    const images = [
        { id: 1, src: "gallery/0b6339a9-31d8-4b18-babf-720bb1ca3b10.JPG", title: "Beautiful Landscape" },
        { id: 2, src: "gallery/e39312cf-43c5-4147-b64b-8f97a2aea251.JPG", title: "Sunset View" },
        { id: 3, src: "gallery/3e9d7a2f-387c-4023-9732-78d75899cc8c.JPG", title: "Mountain Peaks" },
        { id: 4, src: "gallery/5a826b50-ee72-479f-9c1c-270c0847b2ee.JPG", title: "Ocean Waves" },
        { id: 5, src: "gallery/43ce7054-d5d3-4f72-8b86-380794e7680c.JPG", title: "Serene Forest" },
        { id: 6, src: "gallery/8be799d1-0139-4df6-8712-0610e6dd0d27.JPG", title: "City Skyline" },
        { id: 7, src: "gallery/746cf40b-17fc-48c6-b149-8a6dc2af67f9.JPG", title: "City Skyline" },
        { id: 8, src: "gallery/d32ed149-d827-447b-b39a-31977e133cf5.JPG", title: "City Skyline" },
        { id: 9, src: "gallery/44cd01ab-e3e4-43e5-a495-e535106de80d.JPG", title: "City Skyline" },
        { id: 10, src: "gallery/31b8e25c-93c6-49ed-9db4-0fe21984ab31.JPG", title: "City Skyline" },
        { id: 11, src: "gallery/5f0a02a3-29eb-473c-9bb7-34f0bff20834.JPG", title: "City Skyline" },
        { id: 12, src: "gallery/13b296d8-3088-4aa7-8d7c-327d2c151b6e.JPG", title: "City Skyline" },
        { id: 13, src: "gallery/9399b82b-cf37-4aff-b8be-d1765e4db1be.JPG", title: "City Skyline" },
        { id: 14, src: "gallery/9405ed8a-cc0c-4fc5-8854-410435d03fed.JPG", title: "City Skyline" },
        { id: 15, src: "gallery/43701fc7-c96e-4099-bcd5-a3f9f4609573.JPG", title: "City Skyline" },
        { id: 16, src: "gallery/b4e18f7b-139b-4877-ac6c-c03af8099c80.JPG", title: "City Skyline" },
        { id: 17, src: "gallery/c89dd500-c740-4a9b-9e2f-dce51492da4c.JPG", title: "City Skyline" },
        { id: 18, src: "gallery/e22de32d-6182-4657-abd6-fc76a155482f.JPG", title: "City Skyline" },
        { id: 19, src: "gallery/fe6d5197-1fa2-45df-ae32-97cb69c9c990.JPG", title: "City Skyline" },
        { id: 20, src: "gallery/cbd30d29-a3f8-45fa-acb2-d6fe20687139.JPG", title: "City Skyline" },
    ];

    return (
        <div className="gallery-slider-container">
            <h2 className="gallery-title">Image Gallery</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="gallery-item">
                            <img
                                src={require(`../../Assets/${image.src}`)}
                                alt={image.title}
                                className="gallery-image"
                            />
                            <div className="gallery-overlay">
                                {/* <h3>{image.title}</h3> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;
