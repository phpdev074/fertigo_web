(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sahil/fertigo_web/app/api/api.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "IMAGE_BASE_URL",
    ()=>IMAGE_BASE_URL,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST,
    "PROVIDER",
    ()=>PROVIDER,
    "PUT",
    ()=>PUT,
    "SERVICES",
    ()=>SERVICES,
    "UPLOAD",
    ()=>UPLOAD
]);
const BASE_URL = 'http://85.31.234.205:5200';
const IMAGE_BASE_URL = 'http://85.31.234.205:5200';
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const UPLOAD = '/upload';
const SERVICES = '/service';
const PROVIDER = '/providers';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/api/ApiHelper/serviceHelper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetServices",
    ()=>GetServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/api.tsx [app-client] (ecmascript)");
;
;
const GetServices = ({ page = 1, limit = 100 } = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
        method: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET"],
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"]}?page=${page}&limit=${limit}`
    });
_c = GetServices;
var _c;
__turbopack_context__.k.register(_c, "GetServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/api/ApiHelper/uploadHelper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadProviderLogo",
    ()=>UploadProviderLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/api.tsx [app-client] (ecmascript)");
;
;
const UploadProviderLogo = (file)=>{
    const formData = new FormData();
    formData.append("file", file);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
        method: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POST"],
        url: __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPLOAD"],
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};
_c = UploadProviderLogo;
var _c;
__turbopack_context__.k.register(_c, "UploadProviderLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPickerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* Fix default marker icon */ delete __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});
function MapPickerModal({ initialLat, initialLng, onSelect, onClose }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLat !== null && initialLng !== null ? [
        initialLat,
        initialLng
    ] : null);
    function LocationMarker() {
        _s1();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
            click (e) {
                const { lat, lng } = e.latlng;
                setPosition([
                    lat,
                    lng
                ]);
            }
        });
        return position ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
            position: position
        }, void 0, false, {
            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
            lineNumber: 46,
            columnNumber: 27
        }, this) : null;
    }
    _s1(LocationMarker, "Ld/tk8Iz8AdZhC1l7acENaOEoCo=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl w-[90%] max-w-3xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-4 py-3 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold",
                            children: "Select Location"
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-sm text-gray-500",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                    center: position ?? [
                        20.5937,
                        78.9629
                    ],
                    zoom: position ? 15 : 5,
                    style: {
                        height: "400px",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationMarker, {}, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3 p-4 border-t",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 rounded-lg border",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: !position,
                            onClick: ()=>{
                                if (position) onSelect(position[0], position[1]);
                            },
                            className: "px-4 py-2 rounded-lg bg-pink-600 text-white disabled:opacity-50",
                            children: "Confirm Location"
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_s(MapPickerModal, "RqstAwObGYKIblZf/oieenc/Th8=");
_c = MapPickerModal;
var _c;
__turbopack_context__.k.register(_c, "MapPickerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProviderScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$serviceHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/ApiHelper/serviceHelper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$uploadHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/api/ApiHelper/uploadHelper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$main$2f$Map$2f$MapPickerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sahil/fertigo_web/app/main/Map/MapPickerModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const SERVICES = [
    {
        id: 'ivf-medications',
        label: 'IVF Medications'
    },
    {
        id: 'fertility-supplements',
        label: 'Fertility Supplements'
    },
    {
        id: 'hormone-injections',
        label: 'Hormone Injections'
    },
    {
        id: 'prescription-services',
        label: 'Prescription Services'
    }
];
const TREATMENT_TYPES = [
    {
        id: 'ivf',
        label: 'IVF (In Vitro Fertilization)'
    },
    {
        id: 'iui',
        label: 'IUI (Intrauterine Insemination)'
    },
    {
        id: 'egg-freezing',
        label: 'Egg Freezing'
    },
    {
        id: 'embryo-transfer',
        label: 'Embryo Transfer'
    },
    {
        id: 'fertility-testing',
        label: 'Fertility Testing'
    },
    {
        id: 'genetic-testing',
        label: 'Genetic Testing'
    }
];
const SERVICE_CATEGORIES = [
    {
        id: 'blood-test-labs',
        label: 'Blood Test Laboratories',
        icon: '🧪'
    },
    {
        id: 'ultrasound-clinics',
        label: 'Ultrasound Clinics',
        icon: '📡'
    },
    {
        id: 'injection-nurses',
        label: 'Injection Nurses / Home Nurses',
        icon: '💉'
    },
    {
        id: 'fertility-clinics',
        label: 'Fertility Clinics (IVF)',
        icon: '🏥'
    },
    {
        id: 'ivf-clinics',
        label: 'IVF Clinics',
        icon: '🧬'
    },
    {
        id: 'diagnostic-centers',
        label: 'Diagnostic & Imaging Centers',
        icon: '⚕️'
    },
    {
        id: 'home-sample',
        label: 'Home Sample Collection',
        icon: '🏠'
    },
    {
        id: 'wellness-support',
        label: 'Wellness Support Services',
        icon: '✨'
    }
];
const URGENCY_TYPES = [
    {
        id: 'scheduled',
        label: 'Scheduled',
        color: 'blue'
    },
    {
        id: 'same-day',
        label: 'Same Day',
        color: 'orange'
    },
    {
        id: 'emergency',
        label: 'Emergency',
        color: 'red'
    }
];
const DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
function AddProviderScreen({ onBack, provider }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        // Basic Info
        name: provider?.name || '',
        email: provider?.email || '',
        phone: provider?.phone || '',
        website: '',
        password: '',
        confirmPassword: '',
        // Company Info
        serviceType: '',
        treatmentTypes: [],
        treatmentSupport: false,
        urgencySupport: false,
        description: '',
        treatmentPrices: {},
        treatmentType: '',
        // Services with prices
        selectedServices: [],
        servicePrices: {},
        selectedCategories: [],
        // Location
        address: provider?.address || '',
        city: '',
        country: '',
        postalCode: '',
        mapLocation: {
            lat: null,
            lng: null
        },
        // Service Details
        urgencyOptions: [],
        languagesSupported: '',
        areas: '',
        // Business Hours
        businessHours: DAYS.reduce({
            "AddProviderScreen.useState": (acc, day)=>({
                    ...acc,
                    [day]: {
                        enabled: true,
                        startTime: '09:00',
                        endTime: '17:00'
                    }
                })
        }["AddProviderScreen.useState"], {}),
        verified: provider?.verified || false
    });
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [logoFile, setLogoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoPreview, setLogoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoUrl, setLogoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingLogo, setUploadingLogo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMap, setOpenMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLocationSelected = typeof formData.mapLocation.lat === "number" && typeof formData.mapLocation.lng === "number";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddProviderScreen.useEffect": ()=>{
            const fetchServices = {
                "AddProviderScreen.useEffect.fetchServices": async ()=>{
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$serviceHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetServices"])();
                        console.log(res.data.data);
                        if (res.data?.status) {
                            setServices(res.data.data);
                        }
                    } catch (error) {
                        console.error('Failed to fetch services', error);
                    }
                }
            }["AddProviderScreen.useEffect.fetchServices"];
            fetchServices();
        }
    }["AddProviderScreen.useEffect"], []);
    const handleInputChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
    };
    const toggleService = (serviceId)=>{
        // Only allow adding services, not removing them
        if (!formData.selectedServices.includes(serviceId)) {
            handleInputChange('selectedServices', [
                ...formData.selectedServices,
                serviceId
            ]);
        }
    };
    const removeService = (serviceId)=>{
        const updated = formData.selectedServices.filter((id)=>id !== serviceId);
        handleInputChange('selectedServices', updated);
        // Remove price when service is removed
        const updatedPrices = {
            ...formData.servicePrices
        };
        delete updatedPrices[serviceId];
        handleInputChange('servicePrices', updatedPrices);
    };
    const updateServicePrice = (serviceId, price)=>{
        handleInputChange('servicePrices', {
            ...formData.servicePrices,
            [serviceId]: price
        });
    };
    const toggleTreatmentType = (treatmentId)=>{
        const updated = formData.treatmentTypes.includes(treatmentId) ? formData.treatmentTypes.filter((id)=>id !== treatmentId) : [
            ...formData.treatmentTypes,
            treatmentId
        ];
        handleInputChange('treatmentTypes', updated);
    };
    const toggleCategory = (categoryId)=>{
        const updated = formData.selectedCategories.includes(categoryId) ? formData.selectedCategories.filter((id)=>id !== categoryId) : [
            ...formData.selectedCategories,
            categoryId
        ];
        handleInputChange('selectedCategories', updated);
    };
    const toggleUrgency = (urgencyId)=>{
        const updated = formData.urgencyOptions.includes(urgencyId) ? formData.urgencyOptions.filter((id)=>id !== urgencyId) : [
            ...formData.urgencyOptions,
            urgencyId
        ];
        handleInputChange('urgencyOptions', updated);
    };
    const toggleDay = (day)=>{
        handleInputChange('businessHours', {
            ...formData.businessHours,
            [day]: {
                ...formData.businessHours[day],
                enabled: !formData.businessHours[day].enabled
            }
        });
    };
    const updateDayTime = (day, field, value)=>{
        handleInputChange('businessHours', {
            ...formData.businessHours,
            [day]: {
                ...formData.businessHours[day],
                [field]: value
            }
        });
    };
    const handleLogoUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }
        setLogoFile(file);
        setLogoPreview(URL.createObjectURL(file));
        try {
            setUploadingLogo(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$api$2f$ApiHelper$2f$uploadHelper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadProviderLogo"])(file);
            console.log(res);
            // assuming API returns: { status: true, data: { url: "https://..." } }
            if (res.data?.status) {
                setLogoUrl(res.data.data.url);
            }
        } catch (error) {
            console.error('Logo upload failed', error);
            alert('Failed to upload logo');
        } finally{
            setUploadingLogo(false);
        }
    };
    const buildProviderPayload = ()=>{
        // 1️⃣ services with prices
        const serviceType = Object.entries(formData.treatmentPrices).map(([serviceId, price])=>({
                serviceId,
                price: Number(price)
            }));
        // 2️⃣ treatment support
        let treatmentSupport = [];
        if (formData.treatmentSupport) {
            if (formData.treatmentType === 'both') {
                treatmentSupport = [
                    'IVF',
                    'IUI'
                ];
            } else if (formData.treatmentType === 'ivf') {
                treatmentSupport = [
                    'IVF'
                ];
            } else if (formData.treatmentType === 'iui') {
                treatmentSupport = [
                    'IUI'
                ];
            }
        }
        // 3️⃣ urgency support
        const urgencySupport = formData.urgencySupport ? formData.urgencyOptions.map((u)=>u === 'same-day' ? 'Same Day' : u === 'next-day' ? 'Next Day' : u === 'emergency' ? 'Emergency' : 'Scheduled') : [];
        // 4️⃣ operating hours
        const operatingHours = Object.entries(formData.businessHours).map(([day, value])=>({
                day: day.toLowerCase(),
                isAvailable: value.enabled,
                slots: value.enabled ? [
                    {
                        startTime: value.startTime,
                        endTime: value.endTime
                    }
                ] : []
            }));
        return {
            name: formData.name,
            email: formData.email,
            countryCode: '+91',
            mobileNumber: Number(formData.phone),
            webSiteUrl: formData.website,
            providerDescription: formData.description,
            providerLogo: logoUrl,
            isActive: true,
            providerVerificationStatus: false,
            serviceType,
            treatmentSupport,
            urgencySupport,
            languageSupport: formData.languagesSupported.split(',').map((l)=>l.trim()),
            operatingHours,
            address: {
                fullAddress: formData.address,
                city: formData.city,
                country: formData.country,
                postalCode: formData.postalCode
            },
            location: {
                lat: formData.mapLocation.lat,
                lng: formData.mapLocation.lng
            },
            isVerified: formData.verified
        };
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const payload = buildProviderPayload();
        console.log('Form submitted:', payload);
        onBack?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-2 -mt-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/main/Provider"),
                            className: "w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-gray-900",
                                    children: provider ? 'Edit Provider' : 'Add New Provider'
                                }, void 0, false, {
                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-1",
                                    children: provider ? 'Update provider information' : 'Fill in the details to add a new service provider'
                                }, void 0, false, {
                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "text-gray-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Basic Information"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Provider Name ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 416,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            required: true,
                                                                            value: formData.name,
                                                                            onChange: (e)=>handleInputChange('name', e.target.value),
                                                                            placeholder: "Enter provider name",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 420,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Email Address ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 433,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 432,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 436,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "email",
                                                                            required: true,
                                                                            value: formData.email,
                                                                            onChange: (e)=>handleInputChange('email', e.target.value),
                                                                            placeholder: "contact@provider.com",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 437,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Phone Number ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 450,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 453,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            required: true,
                                                                            value: formData.phone,
                                                                            onChange: (e)=>handleInputChange('phone', e.target.value),
                                                                            placeholder: "+1 (555) 123-4567",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 454,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: "Website URL"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 470,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "url",
                                                                            value: formData.website,
                                                                            onChange: (e)=>handleInputChange('website', e.target.value),
                                                                            placeholder: "https://www.provider.com",
                                                                            className: "w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 471,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 465,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Service Type & Features"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-3",
                                                                children: "Services Types Supported"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                                children: services.map((treatment)=>{
                                                                    const isSelected = formData.treatmentTypes.includes(treatment._id);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `p-3 rounded-xl border-2 transition-all ${isSelected ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300 hover:bg-gray-50'}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-3 cursor-pointer",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: isSelected,
                                                                                        onChange: ()=>toggleTreatmentType(treatment._id),
                                                                                        className: "w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 570,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm font-medium text-gray-900",
                                                                                        children: treatment.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 576,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 569,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "number",
                                                                                    placeholder: `Enter ${treatment.name} price`,
                                                                                    value: formData.treatmentPrices[treatment._id] || '',
                                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                                ...prev,
                                                                                                treatmentPrices: {
                                                                                                    ...prev.treatmentPrices,
                                                                                                    [treatment._id]: e.target.value
                                                                                                }
                                                                                            })),
                                                                                    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 584,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 583,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, treatment._id, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 27
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-bold text-gray-900",
                                                                                        children: "Treatment Support"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 612,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-600 mt-1",
                                                                                        children: "Provide IVF/IUI treatment"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 613,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 611,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.treatmentSupport,
                                                                                        onChange: (e)=>handleInputChange('treatmentSupport', e.target.checked),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 616,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 622,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 623,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 615,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.treatmentSupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-4",
                                                                            children: [
                                                                                {
                                                                                    id: 'ivf',
                                                                                    label: 'IVF'
                                                                                },
                                                                                {
                                                                                    id: 'iui',
                                                                                    label: 'IUI'
                                                                                },
                                                                                {
                                                                                    id: 'both',
                                                                                    label: 'Both'
                                                                                }
                                                                            ].map((treatment)=>{
                                                                                const isSelected = formData.treatmentType === treatment.id;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: `px-8 py-3 rounded-full cursor-pointer transition-all font-bold text-sm border-2 ${isSelected ? 'bg-white text-pink-600 border-pink-500 shadow-md' : 'bg-white text-pink-400 border-transparent hover:border-pink-300'}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: isSelected,
                                                                                            onChange: ()=>handleInputChange('treatmentType', treatment.id),
                                                                                            className: "hidden"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                            lineNumber: 645,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        treatment.label
                                                                                    ]
                                                                                }, treatment.id, true, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 638,
                                                                                    columnNumber: 33
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 609,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center justify-between cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-bold text-gray-900",
                                                                                        children: "Urgency Support"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 665,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-600 mt-1",
                                                                                        children: "Urgent delivery available"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 666,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.urgencySupport,
                                                                                        onChange: (e)=>handleInputChange('urgencySupport', e.target.checked),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 669,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 675,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 676,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 668,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 663,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.urgencySupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-4",
                                                                            children: [
                                                                                {
                                                                                    id: 'same-day',
                                                                                    label: 'Same Day'
                                                                                },
                                                                                {
                                                                                    id: 'next-day',
                                                                                    label: 'Next Day'
                                                                                },
                                                                                {
                                                                                    id: 'emergency',
                                                                                    label: 'Emergency'
                                                                                },
                                                                                {
                                                                                    id: 'scheduled',
                                                                                    label: 'Scheduled'
                                                                                }
                                                                            ].map((urgency)=>{
                                                                                const isSelected = formData.urgencyOptions.includes(urgency.id);
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>toggleUrgency(urgency.id),
                                                                                    className: `px-8 py-3 rounded-full font-bold text-sm transition-all border-2 ${isSelected ? 'bg-white text-pink-600 border-pink-500 shadow-md' : 'bg-white text-pink-400 border-transparent hover:border-pink-300'}`,
                                                                                    children: urgency.label
                                                                                }, urgency.id, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 691,
                                                                                    columnNumber: 33
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 681,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 680,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                                children: [
                                                                    "Description ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pink-600",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 713,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 712,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                required: true,
                                                                value: formData.description,
                                                                onChange: (e)=>handleInputChange('description', e.target.value),
                                                                placeholder: "Provide a detailed description of the services offered...",
                                                                rows: 4,
                                                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 715,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Location Details"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 827,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-bold text-gray-700 mb-2",
                                                                children: [
                                                                    "Full Address ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-pink-600",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 836,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                required: true,
                                                                value: formData.address,
                                                                onChange: (e)=>handleInputChange('address', e.target.value),
                                                                placeholder: "123 Medical Plaza, Suite 100",
                                                                rows: 2,
                                                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 838,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "City ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 851,
                                                                                columnNumber: 30
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 850,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: formData.city,
                                                                        onChange: (e)=>handleInputChange('city', e.target.value),
                                                                        placeholder: "City",
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 849,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Country ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 865,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 864,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        required: true,
                                                                        value: formData.country,
                                                                        onChange: (e)=>handleInputChange('country', e.target.value),
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 873,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "us",
                                                                                children: "United States"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 874,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "uk",
                                                                                children: "United Kingdom"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 875,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "ca",
                                                                                children: "Canada"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 876,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "au",
                                                                                children: "Australia"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 877,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 867,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Postal Code ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 883,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 882,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        required: true,
                                                                        value: formData.postalCode,
                                                                        onChange: (e)=>handleInputChange('postalCode', e.target.value),
                                                                        placeholder: "12345",
                                                                        className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 885,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 881,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-bold text-gray-700 mb-2",
                                                                        children: [
                                                                            "Map Pin Location ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-pink-600",
                                                                                children: "*"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 897,
                                                                                columnNumber: 42
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 896,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setOpenMap(true),
                                                                        className: `w-full flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl border-2 transition-all font-bold
                            ${isLocationSelected ? "border-green-400 bg-green-50 text-green-700 hover:bg-green-100" : "border-pink-300 bg-pink-50 text-pink-600 hover:bg-pink-100"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                        className: "w-5 h-5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 910,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    isLocationSelected ? "Location Selected" : "Pin My Location"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 909,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            isLocationSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs font-medium",
                                                                                children: [
                                                                                    "Lat: ",
                                                                                    formData.mapLocation.lat?.toFixed(5),
                                                                                    ", Lng:",
                                                                                    " ",
                                                                                    formData.mapLocation.lng?.toFixed(5)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 915,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 900,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 mt-2 text-center",
                                                                        children: isLocationSelected ? "Click to change the selected location" : "Use map to select the exact business location"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 922,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    openMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$app$2f$main$2f$Map$2f$MapPickerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        initialLat: formData.mapLocation.lat,
                                                                        initialLng: formData.mapLocation.lng,
                                                                        onClose: ()=>setOpenMap(false),
                                                                        onSelect: (lat, lng)=>{
                                                                            setFormData((prev)=>({
                                                                                    ...prev,
                                                                                    mapLocation: {
                                                                                        lat: Number(lat),
                                                                                        lng: Number(lng)
                                                                                    }
                                                                                }));
                                                                            setOpenMap(false);
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 929,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 895,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-bold text-gray-700 mb-2",
                                                                    children: [
                                                                        "Languages Supported ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-pink-600",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 973,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    required: true,
                                                                    value: formData.languagesSupported,
                                                                    onChange: (e)=>handleInputChange('languagesSupported', e.target.value),
                                                                    placeholder: "e.g., English, Spanish, French",
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 975,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 833,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.4
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-[#EC4899] to-[#EC4899] px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1011,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Business Hours"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 1010,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: DAYS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-gray-200 rounded-xl p-4 hover:border-pink-300 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-3 cursor-pointer flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: formData.businessHours[day].enabled,
                                                                                        onChange: ()=>toggleDay(day),
                                                                                        className: "sr-only peer"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 1022,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition-colors"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 1028,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                        lineNumber: 1029,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1021,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-bold text-gray-900",
                                                                                children: day
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1031,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1020,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 1019,
                                                                    columnNumber: 25
                                                                }, this),
                                                                formData.businessHours[day].enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-3 pl-14",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                                                    children: "Start"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1038,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "time",
                                                                                    value: formData.businessHours[day].startTime,
                                                                                    onChange: (e)=>updateDayTime(day, 'startTime', e.target.value),
                                                                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1039,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 1037,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                                                    children: "End"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1047,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "time",
                                                                                    value: formData.businessHours[day].endTime,
                                                                                    onChange: (e)=>updateDayTime(day, 'endTime', e.target.value),
                                                                                    className: "w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                    lineNumber: 1048,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                            lineNumber: 1046,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                    lineNumber: 1036,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, day, true, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                    lineNumber: 1016,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 1003,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-900 mb-4",
                                                children: "Provider Logo"
                                            }, void 0, false, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1072,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-32 h-32 rounded-2xl shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center",
                                                        children: logoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: logoPreview,
                                                            alt: "Provider Logo",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1076,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full bg-gradient-to-br from-[#EC4899] to-[#EC4899] flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                className: "w-16 h-16 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1083,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                            lineNumber: 1082,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1074,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "w-full cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: handleLogoUpload,
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1088,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-pink-500 hover:bg-pink-50 transition-all font-semibold text-gray-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1096,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    logoPreview ? 'Change Logo' : 'Upload Logo'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1095,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1087,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-center text-gray-500",
                                                        children: [
                                                            "PNG, JPG or SVG",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1101,
                                                                columnNumber: 36
                                                            }, this),
                                                            "Recommended 500x500px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1073,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-6 border-t border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-gray-900 mb-3",
                                                        children: "Verification Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-start gap-3 cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: formData.verified,
                                                                        onChange: (e)=>handleInputChange('verified', e.target.checked),
                                                                        className: "sr-only peer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1109,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1115,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1116,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1108,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "w-5 h-5 text-green-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1120,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-bold text-gray-900",
                                                                                children: "Verified Provider"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                                lineNumber: 1121,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1119,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-600 mt-1",
                                                                        children: "Display verification badge on profile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                        lineNumber: 1123,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1118,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1107,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-6 border-t border-gray-200 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "w-full py-3 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#EC4899] text-white font-bold hover:from-[#f02287] hover:to-[#f02287] transition-all shadow-lg hover:shadow-xl",
                                                        children: provider ? 'Update Provider' : 'Add Provider'
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: onBack,
                                                        className: "w-full py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1137,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 1067,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-200 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-bold text-gray-900 mb-3 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-4 h-4 text-pink-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1155,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Form Progress"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Basic Info"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1160,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.name && formData.email && formData.phone ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.name && formData.email && formData.phone ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1161,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Service Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1166,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.serviceType ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.serviceType ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1167,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Services"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1172,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.selectedServices.length > 0 ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.selectedServices.length > 0 ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1173,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1178,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-bold ${formData.address && formData.city ? 'text-green-600' : 'text-gray-400'}`,
                                                                children: formData.address && formData.city ? '✓' : '○'
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1179,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-700",
                                                                children: "Business Hours"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                                lineNumber: 1185,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                        lineNumber: 1183,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                        lineNumber: 1148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                                lineNumber: 1065,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
                    lineNumber: 394,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
            lineNumber: 375,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sahil/fertigo_web/app/main/AddProvider/page.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
_s(AddProviderScreen, "2QjItdSmGX82EEgMWfbHr2xdYfU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sahil$2f$fertigo_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddProviderScreen;
var _c;
__turbopack_context__.k.register(_c, "AddProviderScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sahil_fertigo_web_app_8e627170._.js.map