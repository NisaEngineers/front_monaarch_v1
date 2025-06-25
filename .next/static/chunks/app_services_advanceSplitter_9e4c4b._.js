(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_services_advanceSplitter_9e4c4b._.js", {

"[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// AdvanceSplitterClient.tsx
__turbopack_esm__({
    "default": (()=>AdvanceSplitterClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function AdvanceSplitterClient() {
    _s();
    const [uploaded, setUploaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originalAudioURL, setOriginalAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [splitTracks, setSplitTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        vocals: null,
        drums: null,
        bass: null,
        guitar: null,
        piano: null,
        others: null
    });
    // Refs and states for audio elements
    const originalAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vocalsAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drumsAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bassAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const guitarAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pianoAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const othersAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [originalVolume, setOriginalVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [vocalsVolume, setVocalsVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [drumsVolume, setDrumsVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bassVolume, setBassVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [guitarVolume, setGuitarVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pianoVolume, setPianoVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [othersVolume, setOthersVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlayingOriginal, setIsPlayingOriginal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingVocals, setIsPlayingVocals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingDrums, setIsPlayingDrums] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingBass, setIsPlayingBass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingGuitar, setIsPlayingGuitar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingPiano, setIsPlayingPiano] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingOthers, setIsPlayingOthers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOriginalPaused, setIsOriginalPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVocalsPaused, setIsVocalsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDrumsPaused, setIsDrumsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isBassPaused, setIsBassPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isGuitarPaused, setIsGuitarPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPianoPaused, setIsPianoPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isOthersPaused, setIsOthersPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleUpload = (event)=>{
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const url = URL.createObjectURL(file);
            setOriginalAudioURL(url);
            setUploaded(true);
        }
    };
    const handleProcess = ()=>{
        setProcessing(true);
        // Simulate processing delay
        setTimeout(()=>{
            // Simulate split tracks by reusing the original audio URL
            setSplitTracks({
                vocals: originalAudioURL,
                drums: originalAudioURL,
                bass: originalAudioURL,
                guitar: originalAudioURL,
                piano: originalAudioURL,
                others: originalAudioURL
            });
            setProcessing(false);
        }, 3000);
    };
    // Handle play/pause and volume for audio elements
    const handlePlayPause = (audioRef, isPaused, setIsPaused, setIsPlaying, volume, setVolume)=>{
        if (audioRef.current) {
            if (isPaused) {
                audioRef.current.play();
                setIsPlaying(true);
                setIsPaused(false);
                if (volume === 0) setVolume(50);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
                setIsPaused(true);
            }
        }
    };
    const handleVolumeChange = (audioRef, value, setVolume, setIsPlaying, setIsPaused)=>{
        setVolume(value);
        if (audioRef.current) {
            audioRef.current.volume = value / 100;
            if (value === 0) {
                audioRef.current.pause();
                setIsPlaying(false);
                setIsPaused(true);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
                setIsPaused(false);
            }
        }
    };
    // Ensure audio volume is synced initially
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdvanceSplitterClient.useEffect": ()=>{
            if (originalAudioRef.current) {
                originalAudioRef.current.volume = originalVolume / 100;
            }
            // Repeat for other audio refs
            if (vocalsAudioRef.current) {
                vocalsAudioRef.current.volume = vocalsVolume / 100;
            }
            if (drumsAudioRef.current) {
                drumsAudioRef.current.volume = drumsVolume / 100;
            }
            if (bassAudioRef.current) {
                bassAudioRef.current.volume = bassVolume / 100;
            }
            if (guitarAudioRef.current) {
                guitarAudioRef.current.volume = guitarVolume / 100;
            }
            if (pianoAudioRef.current) {
                pianoAudioRef.current.volume = pianoVolume / 100;
            }
            if (othersAudioRef.current) {
                othersAudioRef.current.volume = othersVolume / 100;
            }
        }
    }["AdvanceSplitterClient.useEffect"], [
        originalVolume,
        vocalsVolume,
        drumsVolume,
        bassVolume,
        guitarVolume,
        pianoVolume,
        othersVolume
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-6f7133ecda062492" + " " + "relative min-h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: "/Advanced_BG.mp4",
                autoPlay: true,
                loop: true,
                muted: true,
                className: "jsx-6f7133ecda062492" + " " + "absolute top-0 left-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6f7133ecda062492" + " " + "absolute top-0 left-0 w-full h-full bg-black opacity-50"
            }, void 0, false, {
                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6f7133ecda062492" + " " + "relative z-10 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-6f7133ecda062492" + " " + "container mx-auto px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6f7133ecda062492" + " " + "py-12 md:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6f7133ecda062492" + " " + "pb-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-6f7133ecda062492" + " " + "text-4xl font-bold md:text-5xl text-green-300",
                                        children: "Advanced Splitter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6f7133ecda062492" + " " + "text-lg mt-4 text-gray-300 max-w-3xl mx-auto",
                                        children: "Split your audio into vocals, drums, bass, guitar, piano, and Strings/Pads components with Monaarch's cutting-edge audio separation technology."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            !uploaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "jsx-6f7133ecda062492" + " " + "mx-auto max-w-md bg-transparent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6f7133ecda062492" + " " + "space-y-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6f7133ecda062492" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "upload",
                                                type: "file",
                                                accept: "audio/*",
                                                onChange: handleUpload,
                                                required: true,
                                                className: "jsx-6f7133ecda062492" + " " + "w-full h-12 opacity-0 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 199,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg bg-transparent pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6f7133ecda062492" + " " + "text-gray-200 opacity-80",
                                                    children: [
                                                        "Click to Choose a File",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-6f7133ecda062492" + " " + "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 47
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6f7133ecda062492" + " " + "mt-6",
                                children: !processing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6f7133ecda062492" + " " + "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleProcess,
                                        className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300",
                                        children: "Start Splitting"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 219,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                    lineNumber: 218,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6f7133ecda062492" + " " + "flex justify-center mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-2 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "loader-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 230,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "loader-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 231,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "loader-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 232,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6f7133ecda062492",
                                                children: "Processing..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 233,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 229,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                    lineNumber: 227,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this),
                            uploaded && !processing && splitTracks.vocals && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6f7133ecda062492" + " " + "mt-10 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6f7133ecda062492" + " " + "p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-6f7133ecda062492" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Original Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 245,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handlePlayPause(originalAudioRef, isOriginalPaused, setIsOriginalPaused, setIsPlayingOriginal, originalVolume, setOriginalVolume),
                                                                className: "jsx-6f7133ecda062492" + " " + "play-button focus:outline-none",
                                                                children: isOriginalPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-6f7133ecda062492"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 15
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-6f7133ecda062492"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 15
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: originalVolume,
                                                                onChange: (e)=>handleVolumeChange(originalAudioRef, Number(e.target.value), setOriginalVolume, setIsPlayingOriginal, setIsOriginalPaused),
                                                                className: "jsx-6f7133ecda062492" + " " + "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 9
                                                    }, this),
                                                    isPlayingOriginal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "equalizer mt-4 w-full flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "bar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "bar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "bar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "bar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "bar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 13
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "mt-4 w-full h-8 opacity-0 pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: originalAudioRef,
                                                        src: splitTracks.vocals,
                                                        onEnded: ()=>{
                                                            setOriginalVolume(false);
                                                            setIsPlayingOriginal(true);
                                                            setIsOriginalPaused(0);
                                                        },
                                                        className: "jsx-6f7133ecda062492"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 247,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "mt-6 flex justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: originalAudioURL,
                                                    download: "original_audio.mp3",
                                                    className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            className: "jsx-6f7133ecda062492" + " " + "h-5 w-5 mr-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                    className: "jsx-6f7133ecda062492"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                    className: "jsx-6f7133ecda062492"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 11
                                                        }, this),
                                                        "Download Original"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 9
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 324,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 244,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6f7133ecda062492" + " " + "grid grid-cols-1 md:grid-cols-2 gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-6f7133ecda062492" + " " + "text-xl font-semibold mb-4 text-center",
                                                        children: "Vocals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePlayPause(vocalsAudioRef, isVocalsPaused, setIsVocalsPaused, setIsPlayingVocals, vocalsVolume, setVocalsVolume),
                                                                        className: "jsx-6f7133ecda062492" + " " + "play-button focus:outline-none",
                                                                        children: isVocalsPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-purple-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 371,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 365,
                                                                            columnNumber: 17
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-purple-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 380,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 374,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 351,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: vocalsVolume,
                                                                        onChange: (e)=>handleVolumeChange(vocalsAudioRef, Number(e.target.value), setVocalsVolume, setIsPlayingVocals, setIsVocalsPaused),
                                                                        className: "jsx-6f7133ecda062492" + " " + "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 384,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 11
                                                            }, this),
                                                            isPlayingVocals ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "equalizer mt-4 w-full flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 404,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 13
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "mt-4 w-full h-8 opacity-0 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                ref: vocalsAudioRef,
                                                                src: splitTracks.vocals,
                                                                onEnded: ()=>{
                                                                    setIsPlayingVocals(false);
                                                                    setIsVocalsPaused(true);
                                                                    setVocalsVolume(0);
                                                                },
                                                                className: "jsx-6f7133ecda062492"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: splitTracks.vocals,
                                                            download: "vocals.mp3",
                                                            className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 434,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 435,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 13
                                                                }, this),
                                                                "Download Vocals"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 347,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-6f7133ecda062492" + " " + "text-xl font-semibold mb-4 text-center",
                                                        children: "Drums"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePlayPause(drumsAudioRef, isDrumsPaused, setIsDrumsPaused, setIsPlayingDrums, drumsVolume, setDrumsVolume),
                                                                        className: "jsx-6f7133ecda062492" + " " + "play-button focus:outline-none",
                                                                        children: isDrumsPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-red-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 467,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 461,
                                                                            columnNumber: 17
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-red-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 476,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 470,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 447,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: drumsVolume,
                                                                        onChange: (e)=>handleVolumeChange(drumsAudioRef, Number(e.target.value), setDrumsVolume, setIsPlayingDrums, setIsDrumsPaused),
                                                                        className: "jsx-6f7133ecda062492" + " " + "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 11
                                                            }, this),
                                                            isPlayingDrums ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "equalizer mt-4 w-full flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 502,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 13
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "mt-4 w-full h-8 opacity-0 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                ref: drumsAudioRef,
                                                                src: splitTracks.drums,
                                                                onEnded: ()=>{
                                                                    setIsPlayingDrums(false);
                                                                    setIsDrumsPaused(true);
                                                                    setDrumsVolume(0);
                                                                },
                                                                className: "jsx-6f7133ecda062492"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: splitTracks.drums,
                                                            download: "drums.mp3",
                                                            className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 530,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 524,
                                                                    columnNumber: 13
                                                                }, this),
                                                                "Download Drums"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 443,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-6f7133ecda062492" + " " + "text-xl font-semibold mb-4 text-center",
                                                        children: "Bass"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePlayPause(bassAudioRef, isBassPaused, setIsBassPaused, setIsPlayingBass, bassVolume, setBassVolume),
                                                                        className: "jsx-6f7133ecda062492" + " " + "play-button focus:outline-none",
                                                                        children: isBassPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-yellow-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 563,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 557,
                                                                            columnNumber: 17
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-yellow-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 572,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 566,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 543,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: bassVolume,
                                                                        onChange: (e)=>handleVolumeChange(bassAudioRef, Number(e.target.value), setBassVolume, setIsPlayingBass, setIsBassPaused),
                                                                        className: "jsx-6f7133ecda062492" + " " + "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 11
                                                            }, this),
                                                            isPlayingBass ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "equalizer mt-4 w-full flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 596,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 597,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 598,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 599,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 13
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "mt-4 w-full h-8 opacity-0 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                ref: bassAudioRef,
                                                                src: splitTracks.bass,
                                                                onEnded: ()=>{
                                                                    setIsPlayingBass(false);
                                                                    setIsBassPaused(true);
                                                                    setBassVolume(0);
                                                                },
                                                                className: "jsx-6f7133ecda062492"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 604,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: splitTracks.bass,
                                                            download: "bass.mp3",
                                                            className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 626,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 627,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 13
                                                                }, this),
                                                                "Download Bass"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 539,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-6f7133ecda062492" + " " + "text-xl font-semibold mb-4 text-center",
                                                        children: "Guitar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePlayPause(guitarAudioRef, isGuitarPaused, setIsGuitarPaused, setIsPlayingGuitar, guitarVolume, setGuitarVolume),
                                                                        className: "jsx-6f7133ecda062492" + " " + "play-button focus:outline-none",
                                                                        children: isGuitarPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-green-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 659,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 653,
                                                                            columnNumber: 17
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-green-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 668,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 662,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: guitarVolume,
                                                                        onChange: (e)=>handleVolumeChange(guitarAudioRef, Number(e.target.value), setGuitarVolume, setIsPlayingGuitar, setIsGuitarPaused),
                                                                        className: "jsx-6f7133ecda062492" + " " + "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 672,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 11
                                                            }, this),
                                                            isPlayingGuitar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "equalizer mt-4 w-full flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 691,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 693,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 695,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 690,
                                                                columnNumber: 13
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "mt-4 w-full h-8 opacity-0 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                ref: guitarAudioRef,
                                                                src: splitTracks.guitar,
                                                                onEnded: ()=>{
                                                                    setIsPlayingGuitar(false);
                                                                    setIsGuitarPaused(true);
                                                                    setGuitarVolume(0);
                                                                },
                                                                className: "jsx-6f7133ecda062492"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 700,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: splitTracks.guitar,
                                                            download: "guitar.mp3",
                                                            className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 722,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 723,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 13
                                                                }, this),
                                                                "Download Guitar"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 711,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 635,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-6f7133ecda062492" + " " + "text-xl font-semibold mb-4 text-center",
                                                        children: "Piano"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePlayPause(pianoAudioRef, isPianoPaused, setIsPianoPaused, setIsPlayingPiano, pianoVolume, setPianoVolume),
                                                                        className: "jsx-6f7133ecda062492" + " " + "play-button focus:outline-none",
                                                                        children: isPianoPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-blue-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 755,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 749,
                                                                            columnNumber: 17
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-blue-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 764,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 735,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: pianoVolume,
                                                                        onChange: (e)=>handleVolumeChange(pianoAudioRef, Number(e.target.value), setPianoVolume, setIsPlayingPiano, setIsPianoPaused),
                                                                        className: "jsx-6f7133ecda062492" + " " + "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 768,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 734,
                                                                columnNumber: 11
                                                            }, this),
                                                            isPlayingPiano ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "equalizer mt-4 w-full flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 787,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 788,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 789,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 790,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 791,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 786,
                                                                columnNumber: 13
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "mt-4 w-full h-8 opacity-0 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 794,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                ref: pianoAudioRef,
                                                                src: splitTracks.piano,
                                                                onEnded: ()=>{
                                                                    setIsPlayingPiano(false);
                                                                    setIsPianoPaused(true);
                                                                    setPianoVolume(0);
                                                                },
                                                                className: "jsx-6f7133ecda062492"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: splitTracks.piano,
                                                            download: "piano.mp3",
                                                            className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 818,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 819,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 812,
                                                                    columnNumber: 13
                                                                }, this),
                                                                "Download Piano"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 807,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 731,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6f7133ecda062492" + " " + "p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "jsx-6f7133ecda062492" + " " + "text-xl font-semibold mb-4 text-center",
                                                        children: "Strings/Pads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "flex items-center space-x-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handlePlayPause(othersAudioRef, isOthersPaused, setIsOthersPaused, setIsPlayingOthers, othersVolume, setOthersVolume),
                                                                        className: "jsx-6f7133ecda062492" + " " + "play-button focus:outline-none",
                                                                        children: isOthersPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-teal-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 851,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 845,
                                                                            columnNumber: 17
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            className: "jsx-6f7133ecda062492" + " " + "h-12 w-12 text-teal-500",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                                className: "jsx-6f7133ecda062492"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                                lineNumber: 860,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 854,
                                                                            columnNumber: 17
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 831,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: othersVolume,
                                                                        onChange: (e)=>handleVolumeChange(othersAudioRef, Number(e.target.value), setOthersVolume, setIsPlayingOthers, setIsOthersPaused),
                                                                        className: "jsx-6f7133ecda062492" + " " + "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 864,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 830,
                                                                columnNumber: 11
                                                            }, this),
                                                            isPlayingOthers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "equalizer mt-4 w-full flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 883,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 884,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 885,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 886,
                                                                        columnNumber: 15
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-6f7133ecda062492" + " " + "bar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                        lineNumber: 887,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 882,
                                                                columnNumber: 13
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6f7133ecda062492" + " " + "mt-4 w-full h-8 opacity-0 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                ref: othersAudioRef,
                                                                src: splitTracks.others,
                                                                onEnded: ()=>{
                                                                    setIsPlayingOthers(false);
                                                                    setIsOthersPaused(true);
                                                                    setOthersVolume(0);
                                                                },
                                                                className: "jsx-6f7133ecda062492"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                lineNumber: 892,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6f7133ecda062492" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: splitTracks.others,
                                                            download: "others.mp3",
                                                            className: "jsx-6f7133ecda062492" + " " + "px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-6f7133ecda062492" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 914,
                                                                            columnNumber: 15
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-6f7133ecda062492"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                            lineNumber: 915,
                                                                            columnNumber: 15
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                                    lineNumber: 908,
                                                                    columnNumber: 13
                                                                }, this),
                                                                "Download Others"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                            lineNumber: 903,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                                lineNumber: 827,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 345,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 242,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6f7133ecda062492",
                children: ".control-container.jsx-6f7133ecda062492{background:linear-gradient(135deg,#1a1b26,#16161e);border-radius:12px;padding:1.5rem;box-shadow:0 8px 32px #0000001a}.equalizer.jsx-6f7133ecda062492{align-items:flex-end;gap:2px;height:40px;display:flex;position:relative}.bar.jsx-6f7133ecda062492{background:linear-gradient(#f59e0b,#ec4899,#6366f1);border-radius:2px 2px 0 0;width:120px;animation:2s ease-in-out infinite equalize}.bar.jsx-6f7133ecda062492:first-child{animation-delay:0s}.bar.jsx-6f7133ecda062492:nth-child(2){animation-delay:.15s}.bar.jsx-6f7133ecda062492:nth-child(3){animation-delay:.3s}.bar.jsx-6f7133ecda062492:nth-child(4){animation-delay:.45s}.bar.jsx-6f7133ecda062492:nth-child(5){animation-delay:.6s}.bar.jsx-6f7133ecda062492:nth-child(6){animation-delay:.75s}.bar.jsx-6f7133ecda062492:nth-child(7){animation-delay:.9s}.bar.jsx-6f7133ecda062492:nth-child(8){animation-delay:1.05s}.loader-dot.jsx-6f7133ecda062492{background:#ddd;border-radius:50%;width:10px;height:10px;animation:1s infinite alternate loader}.loader-dot.jsx-6f7133ecda062492:first-child{animation-delay:0s}.loader-dot.jsx-6f7133ecda062492:nth-child(2){animation-delay:.2s}.loader-dot.jsx-6f7133ecda062492:nth-child(3){animation-delay:.4s}@keyframes equalize{0%,to{height:10%}50%{height:100%}}.control-button.jsx-6f7133ecda062492{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:#ffffff1a;border:none;border-radius:8px;padding:.8rem;transition:all .3s}.slider-thumb.jsx-6f7133ecda062492{background:#ffffff1a;border-radius:8px;height:4px}.slider-thumb.jsx-6f7133ecda062492::-webkit-slider-thumb{background:linear-gradient(45deg,#6366f1,#ec4899);border:2px solid #fff;width:16px;height:16px}@keyframes loader{to{background:#ec4899;transform:scale(1.5)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(AdvanceSplitterClient, "PzmMBq2nQdIGuDr3iryDCJICd30=");
_c = AdvanceSplitterClient;
// Reusable AudioTrack Component
function AudioTrack({ name, audioRef, isPaused, setIsPaused, isPlaying, setIsPlaying, volume, setVolume, src, bgImage, downloadName, downloadColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 rounded-lg bg-cover bg-center bg-no-repeat",
        style: {
            backgroundImage: `url('${bgImage}')`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 text-center",
                children: name
            }, void 0, false, {
                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                lineNumber: 1063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePlayPause(audioRef, isPaused, setIsPaused, setIsPlaying, volume, setVolume),
                                className: "play-button focus:outline-none",
                                children: isPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-12 w-12 text-blue-500",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 3.5v17l14-8.5-14-8.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 1088,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                    lineNumber: 1082,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-12 w-12 text-blue-500",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                        lineNumber: 1097,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                    lineNumber: 1091,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 1068,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "100",
                                value: volume,
                                onChange: (e)=>handleVolumeChange(audioRef, Number(e.target.value), setVolume, setIsPlaying, setIsPaused),
                                className: "w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 1102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                        lineNumber: 1066,
                        columnNumber: 9
                    }, this),
                    isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "equalizer mt-4 w-full flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar"
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 1122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar"
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 1123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar"
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 1124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar"
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 1125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bar"
                            }, void 0, false, {
                                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                lineNumber: 1126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                        lineNumber: 1121,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 w-full h-8 opacity-0 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                        lineNumber: 1129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                        ref: audioRef,
                        src: src,
                        onEnded: ()=>{
                            setIsPlaying(false);
                            setIsPaused(true);
                            setVolume(0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                        lineNumber: 1131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                lineNumber: 1065,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: src,
                    download: downloadName,
                    className: `px-6 py-3 ${downloadColor} text-white font-semibold rounded-full shadow-lg hover:${downloadColor.replace("600", "700")} transition-all duration-300 flex items-center`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 mr-2",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                    lineNumber: 1157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                                    lineNumber: 1158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                            lineNumber: 1151,
                            columnNumber: 11
                        }, this),
                        "Download ",
                        name
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                    lineNumber: 1143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
                lineNumber: 1142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/advanceSplitter/AdvanceSplitterClient.tsx",
        lineNumber: 1059,
        columnNumber: 5
    }, this);
}
_c1 = AudioTrack;
// Reusable handlePlayPause function
function handlePlayPause(audioRef, isPaused, setIsPaused, setIsPlaying, volume, setVolume) {
    if (audioRef.current) {
        if (isPaused) {
            audioRef.current.play();
            setIsPlaying(true);
            setIsPaused(false);
            if (volume === 0) setVolume(50);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
            setIsPaused(true);
        }
    }
}
// Reusable handleVolumeChange function
function handleVolumeChange(audioRef, value, setVolume, setIsPlaying, setIsPaused) {
    setVolume(value);
    if (audioRef.current) {
        audioRef.current.volume = value / 100;
        if (value === 0) {
            audioRef.current.pause();
            setIsPlaying(false);
            setIsPaused(true);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
            setIsPaused(false);
        }
    }
}
var _c, _c1;
__turbopack_refresh__.register(_c, "AdvanceSplitterClient");
__turbopack_refresh__.register(_c1, "AudioTrack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/services/advanceSplitter/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_services_advanceSplitter_9e4c4b._.js.map