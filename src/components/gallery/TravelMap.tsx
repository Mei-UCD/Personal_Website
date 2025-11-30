// import React, { useEffect } from 'react';
// import maplibregl from 'maplibre-gl';
// import travelData from '@/gallery.json';

// const TravelMap: React.FC = () => {
//   useEffect(() => {
//     const map = new maplibregl.Map({
//       container: 'travel-map',
//       style: 'https://demotiles.maplibre.org/style.json',
//       center: [0, 20],
//       zoom: 1.5,
//     });

//     travelData.forEach(country => {
//       if (country.coords) {
//         new maplibregl.Marker()
//           .setLngLat([country.coords[0], country.coords[1]])
//           .setPopup(new maplibregl.Popup().setText(country.name))
//           .addTo(map);
//       }
//     });

//     return () => map.remove();
//   }, []);

//   return <div id="travel-map" className="w-full h-full" />;
// };

// export default TravelMap;





// import React, { useRef, useEffect } from 'react';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';

// interface TravelCountry {
//   name: string;
//   slug: string;
//   cover: string;
//   lat: number;
//   lng: number;
// }

// interface Props {
//   travelData: TravelCountry[];
// }

// const TravelMap: React.FC<Props> = ({ travelData }) => {
//   const mapContainer = useRef<HTMLDivElement>(null);
//   const mapRef = useRef<maplibregl.Map | null>(null);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     if (mapRef.current) return; // 防止重复初始化

//     if (mapContainer.current) {
//       mapRef.current = new maplibregl.Map({
//         container: mapContainer.current,
//         style: 'https://demotiles.maplibre.org/style.json', // MapLibre 官方示例样式
//         center: [0, 20], // 默认中心点
//         zoom: 2
//       });

//       travelData.forEach(country => {
//         // 使用 [lng, lat] 顺序
//         new maplibregl.Marker()
//           .setLngLat([country.lng, country.lat])
//           .setPopup(new maplibregl.Popup().setText(country.name))
//           .addTo(mapRef.current!);
//       });

//       // 可选：添加缩放控件
//       mapRef.current.addControl(new maplibregl.NavigationControl());
//     }

//     return () => {
//       mapRef.current?.remove();
//     };
//   }, [travelData]);

//   return (
//     <div
//       ref={mapContainer}
//       style={{
//         width: '90%',
//         maxWidth: '1000px',
//         height: '300px',
//         margin: '0 auto',
//         borderRadius: '8px',
//         overflow: 'hidden'
//       }}
//     />
//   );
// };

// export default TravelMap;



import React, { useRef, useEffect } from "react";

interface TravelCountry {
  name: string;
  slug: string;
  cover: string;
  lat: number;
  lng: number;
}

interface Props {
  travelData: TravelCountry[];
}

declare global {
  interface Window {
    maplibregl?: any;
  }
}

const TravelMap: React.FC<Props> = ({ travelData }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current || typeof window === "undefined") return;

    // --- 动态加载 CSS ---
    if (!document.querySelector('link[data-maplibre-css]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/maplibre-gl@5.13.0/dist/maplibre-gl.css";
      link.setAttribute("data-maplibre-css", "1");
      document.head.appendChild(link);
    }

    // --- 动态加载 JS ---
    function loadScript(callback: () => void) {
      if (window.maplibregl) {
        callback();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://unpkg.com/maplibre-gl@5.13.0/dist/maplibre-gl.js";
      script.async = true;
      script.onload = callback;
      script.onerror = () => console.error("Failed to load MapLibre GL");
      document.head.appendChild(script);
    }

    loadScript(() => {
      if (!mapContainer.current) return;
      const maplibregl = window.maplibregl;

      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: [0, 20],
        zoom: 2,
      });

      mapRef.current = map;

      map.on("load", () => {
        travelData.forEach((c) => {
          new maplibregl.Marker()
            .setLngLat([c.lng, c.lat])
            .setPopup(new maplibregl.Popup().setText(c.name))
            .addTo(map);
        });
        map.addControl(new maplibregl.NavigationControl());
      });
    });
  }, [travelData]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "90%",
        maxWidth: "1000px",
        height: "300px",
        margin: "0px auto",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    />
  );
};

export default TravelMap;


