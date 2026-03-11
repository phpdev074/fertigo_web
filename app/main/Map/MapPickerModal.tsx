"use client";

import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

interface Props {
  initialLat: number | null;
  initialLng: number | null;
  onSelect: (lat: number, lng: number, addressDetails?: any) => void;
  onClose: () => void;
}

/* Fix default marker icon */
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapPickerModal({
  initialLat,
  initialLng,
  onSelect,
  onClose,
}: Props) {
  const [position, setPosition] = useState<[number, number] | null>(
    initialLat !== null && initialLng !== null ? [initialLat, initialLng] : null
  );

  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [addressDetails, setAddressDetails] = useState<any>(null);

  const fetchAddressDetails = async (lat: number, lng: number) => {
    setIsLoadingAddress(true);
    try {
      // Using our own API route proxy to bypass client-side CORS from Nominatim
      const res = await fetch(`/api/geocode?lat=${lat}&lon=${lng}`);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      if (data && data.address) {
        const addr = data.address;
        
        const fullAddressParts = [];
        if (addr.house_number) fullAddressParts.push(addr.house_number);
        if (addr.road) fullAddressParts.push(addr.road);
        if (addr.suburb || addr.neighbourhood) fullAddressParts.push(addr.suburb || addr.neighbourhood);

        const fullAddress =
          fullAddressParts.length > 0
            ? fullAddressParts.join(", ")
            : (data.display_name ? data.display_name.split(",").slice(0, 2).join(", ") : "");

        setAddressDetails({
          address: fullAddress,
          city: addr.city || addr.town || addr.village || addr.county || addr.state || "",
          country: addr.country || "",
          countryCode: addr.country_code || "",
          postalCode: addr.postcode || "",
        });
      } else {
        setAddressDetails(null);
      }
    } catch (error) {
      console.error("Failed to fetch address details directly:", error);
      // Fallback: If absolutely needed, keep partial data or null
      setAddressDetails(null);
    } finally {
      setIsLoadingAddress(false);
    }
  };

  useEffect(() => {
    // If no initial coordinates are passed (i.e. first time opening the map),
    // automatically try to get and pin the user's current location once.
    if (initialLat === null && initialLng === null && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          fetchAddressDetails(latitude, longitude);
        },
        (err) => {
          console.warn("Could not automatically fetch user location on map load", err);
        }
      );
    }
  }, [initialLat, initialLng]);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        fetchAddressDetails(lat, lng);
      },
    });

    return position ? <Marker position={position} /> : null;
  }

  function MapUpdater({ center }: { center: [number, number] | null }) {
    const map = useMap();
    useEffect(() => {
      if (center) {
        map.flyTo(center, 15);
      }
    }, [center, map]);
    return null;
  }

  function SearchControl({
    onSelectLocation,
  }: {
    onSelectLocation: (lat: number, lng: number) => void;
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
        onSelectLocation(y, x);
      });

      return () => {
        map.removeControl(searchControl);
      };
    }, [map, onSelectLocation]);

    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center">
      <div className="bg-white rounded-xl w-[90%] max-w-4xl overflow-hidden shadow-2xl m-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 border-b gap-4">
          <h3 className="font-bold text-lg text-gray-900">Select Location</h3>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const { latitude, longitude } = pos.coords;
                      setPosition([latitude, longitude]);
                      fetchAddressDetails(latitude, longitude);
                    },
                    (err) => {
                      alert("Unable to fetch your location. Please check your browser permissions.");
                    }
                  );
                } else {
                  alert("Geolocation is not supported by your browser.");
                }
              }}
              className="flex-1 sm:flex-none text-sm font-bold text-pink-600 hover:text-pink-700 flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 px-4 py-2 rounded-xl transition-colors border border-pink-100"
            >
              📍 Pin My Location
            </button>
            <button onClick={onClose} className="text-sm font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-xl transition-colors">
              Cancel
            </button>
          </div>
        </div>

        <div className="relative">
            <MapContainer
            center={position ?? [20.5937, 78.9629]}
            zoom={position ? 15 : 5}
            style={{ height: "450px", width: "100%" }}
            >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            <SearchControl
                onSelectLocation={(lat, lng) => {
                setPosition([lat, lng]);
                fetchAddressDetails(lat, lng);
                }}
            />
            
            <LocationMarker />
            <MapUpdater center={position} />
            </MapContainer>
            
            {isLoadingAddress && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-[1000] flex items-center justify-center">
                    <div className="bg-white px-6 py-3 rounded-xl shadow-xl font-bold text-sm text-pink-600 animate-pulse flex items-center gap-3 border border-pink-100">
                        <div className="w-5 h-5 rounded-full border-2 border-pink-600 border-t-transparent animate-spin"></div>
                        Fetching address details...
                    </div>
                </div>
            )}
        </div>

        <div className="p-5 border-t bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1 text-sm text-gray-600 min-h-[48px] flex items-center">
                {addressDetails ? (
                    <div>
                        <p className="font-bold text-gray-900 text-base">{addressDetails.address}</p>
                        <p className="text-sm text-gray-500 font-medium tracking-wide mt-0.5">
                            {[addressDetails.city, addressDetails.country, addressDetails.postalCode]
                                .filter(Boolean)
                                .join(', ')}
                        </p>
                    </div>
                ) : position ? (
                    <p className="font-medium">Selected Coordinates: Lat {position[0].toFixed(5)}, Lng {position[1].toFixed(5)}</p>
                ) : (
                    <p className="text-gray-400 font-medium">Click on the map or search to select a precise location</p>
                )}
            </div>
            
            <div className="flex justify-end w-full sm:w-auto mt-2 sm:mt-0">
                <button
                disabled={!position || isLoadingAddress}
                onClick={() => {
                    if (position) onSelect(position[0], position[1], addressDetails);
                }}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-[#EC4899] hover:from-[#f02287] hover:to-[#f02287] text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
                >
                Confirm Location
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
