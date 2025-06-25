module.exports = {

"[project]/app/faq/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>FAQ)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const faqData = [
    {
        question: "How to use Monaarch?",
        answer: "Simply try our sample features and if you like it, you can subscribe to our minimal plans and start using all features."
    },
    {
        question: "How to use Stem separators?",
        answer: "Simply choose your track or drag and drop your track and let our powerful AI separate the tracks for you."
    },
    {
        question: "How to use Chord extractor?",
        answer: "The Chord extractor can extract a single instrument chord or note. In order to do that, you will first need to separate the tracks using our stem splitters, then download the particular instrument track you want to convert, and finally upload it to the chord extractor which immediately converts it to chords."
    },
    {
        question: "Does Monaarch offer free mastering?",
        answer: "Yes. To download the mastered track and access a plethora of options, simply choose any one of our cost-effective subscription plans."
    },
    {
        question: "What are the benefits of Monaarch?",
        answer: "With Monaarch, create unlimited mastered music, enjoy advanced stem separation of multiple instruments, and utilize tools like our Vocal Remover and chord finder for seamless downloads."
    },
    {
        question: "Does Monaarch use AI?",
        answer: "Upload a track and let our powerful, AI-driven mastering engine do the heavy lifting. Our engine listens carefully and applies a fast, reliable master without relying on generic presets."
    },
    {
        question: "Is it worth paying for mastering?",
        answer: "Absolutely. A great master enhances the quality, sparkle, and thump of a track—giving your recordings the final necessary lift."
    },
    {
        question: "How much do Monaarch plans cost?",
        answer: "Monaarch offers highly cost-effective payment options compared to industry prices. The quality and breadth of services available cannot be found elsewhere."
    },
    {
        question: "What payment modes does Monaarch take?",
        answer: "Monaarch supports multiple convenient payment options."
    },
    {
        question: "How to get Monaarch for free?",
        answer: "Simply log into Monaarch and subscribe to our free plan."
    },
    {
        question: "Is Monaarch good for mixing and mastering?",
        answer: "By using MONAARCH for mastering, you can significantly enhance the overall quality of your tracks."
    },
    {
        question: "What does Monaarch use for mastering and Stem Separation?",
        answer: "Our AI engine leverages machine learning to emulate the decisions mastering engineers make when hearing a mix for the first time."
    },
    {
        question: "Is Monaarch good for Vocal Remover and Stem Separation?",
        answer: "Using our Vocal Remover and stem separator, you can achieve outstanding separation of tracks for high-quality production."
    },
    {
        question: "Is Monaarch mastering and features legit?",
        answer: "Not everyone can afford an experienced mastering engineer. Monaarch offers a simple, affordable solution with pro-level mastering, plus features like Vocal Remover, stem separation, and Chord-to-MIDI conversion."
    },
    {
        question: "How many artists use Monaarch?",
        answer: "Since our recent launch, more than 105k creators from over 30 countries have embraced Monaarch."
    },
    {
        question: "Is MONAARCH a distributor?",
        answer: "No. Monaarch solely focuses on audio processing and does not distribute music."
    },
    {
        question: "Who can use Monaarch?",
        answer: "Monaarch is designed for professional musicians, DJ artists, bands, composers, content creators, and everyone in between."
    }
];
function FAQ() {
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array(faqData.length).fill(false));
    const toggleItem = (index)=>{
        setOpenItems((prev)=>{
            const newOpenItems = [
                ...prev
            ];
            newOpenItems[index] = !newOpenItems[index];
            return newOpenItems;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[url('/images/FAQ_BG.png')] bg-cover bg-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-center text-green-300 mb-8",
                    children: "Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/app/faq/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: faqData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-transparent rounded-2xl border-2 border-dashed border-gray-300/50 shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleItem(index),
                                    className: "w-full flex justify-between items-center p-4 focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-yellow-300",
                                            children: item.question
                                        }, void 0, false, {
                                            fileName: "[project]/app/faq/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-gray-300",
                                            children: openItems[index] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronUp"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/faq/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/faq/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/faq/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/faq/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                openItems[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/app/faq/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/faq/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/faq/page.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/faq/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/faq/page.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/faq/page.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/faq/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_faq_page_tsx_380ca8._.js.map