import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { site } from "@/lib/content";

const markerIcon = L.divIcon({
  className: "baguette-map-marker",
  html: `<span style="
    display:block;
    width:18px;
    height:18px;
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    background:var(--color-forest,#1a5c3a);
    border:2px solid #fff;
    box-shadow:0 1px 4px rgba(0,0,0,.35);
  "></span>`,
  iconSize: [18, 18],
  iconAnchor: [9, 18],
});

export function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    const map = L.map(el, {
      scrollWheelZoom: true,
      dragging: true,
      doubleClickZoom: true,
      touchZoom: true,
      boxZoom: true,
      keyboard: true,
      zoomControl: true,
    }).setView([site.mapCenter.lat, site.mapCenter.lng], site.mapZoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    L.marker([site.mapCenter.lat, site.mapCenter.lng], { icon: markerIcon })
      .addTo(map)
      .bindPopup(`<strong>${site.name}</strong><br/>${site.address}`);

    mapRef.current = map;

    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);
    requestAnimationFrame(() => map.invalidateSize());

    return () => {
      window.removeEventListener("resize", onResize);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 h-full w-full [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full [&_.leaflet-container]:bg-[var(--color-cream)]"
      aria-label="Map showing BaguetteSub location"
    />
  );
}
