"use client";

import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

interface Props {
    initialLat: number | null;
    initialLng: number | null;
    onSelect: (lat: number, lng: number) => void;
    onClose: () => void;
}

/* Fix default marker icon */
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapPickerModal({
    initialLat,
    initialLng,
    onSelect,
    onClose,
}: Props) {
    const [position, setPosition] = useState<[number, number] | null>(
        initialLat !== null && initialLng !== null
            ? [initialLat, initialLng]
            : null
    );

    function LocationMarker() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setPosition([lat, lng]);
            },
        });

        return position ? <Marker position={position} /> : null;
    }

    function SearchControl({
        onSelect,
    }: {
        onSelect: (lat: number, lng: number) => void;
    }) {
        const map = useMapEvents({});

        useEffect(() => {
            const provider = new OpenStreetMapProvider();

            const searchControl = new (GeoSearchControl as any)({
                provider,
                style: "bar",
                showMarker: false,
                autoClose: true,
                retainZoomLevel: false,
                searchLabel: "Search location...",
            });

            map.addControl(searchControl);

            map.on("geosearch/showlocation", (result: any) => {
                const { x, y } = result.location; // lng, lat
                onSelect(y, x);
                map.setView([y, x], 15);
            });

            return () => {
                map.removeControl(searchControl);
            };
        }, [map, onSelect]);

        return null;
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl w-[90%] max-w-3xl overflow-hidden">
                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <h3 className="font-bold">Select Location</h3>
                    <button onClick={onClose} className="text-sm text-gray-500">
                        Cancel
                    </button>
                </div>

                <MapContainer
                    center={position ?? [20.5937, 78.9629]}
                    zoom={position ? 15 : 5}
                    style={{ height: "400px", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* 🔍 Search */}
                    <SearchControl
                        onSelect={(lat, lng) => {
                            setPosition([lat, lng]);
                        }}
                    />

                    {/* 📍 Click marker */}
                    <LocationMarker />
                </MapContainer>

                <div className="flex justify-end gap-3 p-4 border-t">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border"
                    >
                        Cancel
                    </button>
                    <button
                        disabled={!position}
                        onClick={() => {
                            if (position) onSelect(position[0], position[1]);
                        }}
                        className="px-4 py-2 rounded-lg bg-pink-600 text-white disabled:opacity-50"
                    >
                        Confirm Location
                    </button>
                </div>
            </div>
        </div>
    );
}
