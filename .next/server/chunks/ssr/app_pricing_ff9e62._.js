module.exports = {

"[project]/app/pricing/PricingClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PricingClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@stripe/react-stripe-js/dist/react-stripe.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@stripe/stripe-js/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const stripePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadStripe"])("YOUR_STRIPE_PUBLIC_KEY");
function PaymentForm({ selectedPlan }) {
    const stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStripe"])();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElements"])();
    const [cardholderName, setCardholderName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!stripe || !elements) return;
        const card = elements.getElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardNumberElement"]);
        if (!card) return;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
            billing_details: {
                name: cardholderName
            }
        });
        if (error) {
            alert(error.message);
        } else {
            alert(`Payment method created for ${selectedPlan}: ${paymentMethod.id}`);
        // TODO: Send paymentMethod.id to your server to complete the payment
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "mt-6 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        children: "Cardholder Name"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: cardholderName,
                        onChange: (e)=>setCardholderName(e.target.value),
                        className: "w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm mb-1",
                        children: "Card Number"
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-gray-800 rounded-md border border-gray-600 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardNumberElement"], {
                            className: "w-full"
                        }, void 0, false, {
                            fileName: "[project]/app/pricing/PricingClient.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1",
                                children: "Expiry Date"
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-gray-800 rounded-md border border-gray-600 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardExpiryElement"], {
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1",
                                children: "CVC"
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-gray-800 rounded-md border border-gray-600 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardCvcElement"], {
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300",
                children: "Pay with Card"
            }, void 0, false, {
                fileName: "[project]/app/pricing/PricingClient.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pricing/PricingClient.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
function PricingClient() {
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("international");
    const [selectedBilling, setSelectedBilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("yearly");
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    const pricingData = {
        international: {
            ultraLite: {
                name: "Ultra Lite",
                pricing: "$1.99 per day",
                features: {
                    "Number of Tracks": "Any",
                    "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
                    "Fast Processing": "Yes",
                    "Maximum Song Length": "5 minutes",
                    "Maximum Length for Download": "Full Length",
                    "Number of Mastered Song Downloads": "3 Tracks",
                    "Vocal/Basic/Advanced Stem Separation": "Yes",
                    "Stem Download": "50 minutes",
                    "Batch Upload": "Yes",
                    "Chords Conversion": "Yes",
                    "Chords Download": "3 Tracks"
                }
            },
            lite: {
                name: "Lite",
                pricing: {
                    yearly: "$9.99",
                    monthly: "$19.99"
                },
                features: {
                    "Number of Tracks": "Any",
                    "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
                    "Fast Processing": "Yes",
                    "Maximum Song Length": "Any",
                    "Maximum Length for Download": "Full Length",
                    "Number of Mastered Song Downloads": "100 per month",
                    "Vocal/Basic/Advanced Stem Separation": "Yes",
                    "Stem Download": "500 minutes",
                    "Batch Upload": "Yes",
                    "Chords Conversion": "Yes",
                    "Chords Download": "50 Tracks per month"
                }
            },
            pro: {
                name: "Pro",
                pricing: {
                    yearly: "$14.99",
                    monthly: "$29.99"
                },
                bestValue: true,
                features: {
                    "Number of Tracks": "Any",
                    "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
                    "Fast Processing": "Yes",
                    "Maximum Song Length": "Any",
                    "Maximum Length for Download": "Full Length",
                    "Number of Mastered Song Downloads": "200 per month",
                    "Vocal/Basic/Advanced Stem Separation": "Yes",
                    "Stem Download": "800 Minutes",
                    "Batch Upload": "Yes",
                    "Chords Conversion": "Yes",
                    "Chords Download": "100 Tracks per month"
                }
            }
        },
        india: {
            ultraLite: {
                name: "Ultra Lite",
                pricing: "Rs.99 per day",
                features: {
                    "Number of Tracks": "Any",
                    "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
                    "Fast Processing": "Yes",
                    "Maximum Song Length": "5 minutes",
                    "Maximum Length for Download": "Full Length",
                    "Number of Mastered Song Downloads": "3 Tracks",
                    "Vocal/Basic/Advanced Stem Separation": "Yes",
                    "Stem Download": "50 minutes",
                    "Batch Upload": "Yes",
                    "Chords Conversion": "Yes",
                    "Chords Download": "3 Tracks"
                }
            },
            lite: {
                name: "Lite",
                pricing: {
                    yearly: "Rs.150/month, Rs.1800 billed upfront",
                    monthly: "Rs.190/month"
                },
                features: {
                    "Number of Tracks": "Any",
                    "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
                    "Fast Processing": "Yes",
                    "Maximum Song Length": "Any",
                    "Maximum Length for Download": "Full Length",
                    "Number of Mastered Song Downloads": "100 per month",
                    "Vocal/Basic/Advanced Stem Separation": "Yes",
                    "Stem Download": "500 minutes",
                    "Batch Upload": "Yes",
                    "Chords Conversion": "Yes",
                    "Chords Download": "20 Tracks"
                }
            },
            pro: {
                name: "Pro",
                pricing: {
                    yearly: "Rs.250/month, Rs.3000 billed upfront",
                    monthly: "Rs.290/month"
                },
                bestValue: true,
                features: {
                    "Number of Tracks": "Any",
                    "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
                    "Fast Processing": "Yes",
                    "Maximum Song Length": "Any",
                    "Maximum Length for Download": "Full Length",
                    "Number of Mastered Song Downloads": "200 per month",
                    "Vocal/Basic/Advanced Stem Separation": "Yes",
                    "Stem Download": "800 Minutes",
                    "Batch Upload": "Yes",
                    "Chords Conversion": "Yes",
                    "Chords Download": "100 Tracks per month"
                }
            }
        }
    };
    const plans = [
        pricingData[selectedRegion].ultraLite,
        pricingData[selectedRegion].lite,
        pricingData[selectedRegion].pro
    ];
    const handlePayPal = (planName)=>{
        alert(`Redirecting to PayPal for plan: ${planName}`);
    // TODO: Integrate PayPal SDK or redirection
    };
    const handleStripeClick = (planName)=>{
        setSelectedPlan(planName);
        setShowModal(true);
    };
    const closeModal = ()=>{
        setShowModal(false);
        setSelectedPlan(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Elements"], {
        stripe: stripePromise,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "jsx-bf7ab68c14a8a4b0" + " " + "relative min-h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: "./videos/pricing_background.mp4",
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    className: "jsx-bf7ab68c14a8a4b0" + " " + "absolute top-0 left-0 w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/PricingClient.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-bf7ab68c14a8a4b0" + " " + "absolute inset-0 bg-gradient-to-r from-green-900/30 to-blue-900/40 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/app/pricing/PricingClient.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-bf7ab68c14a8a4b0" + " " + "relative z-10 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bf7ab68c14a8a4b0" + " " + "container mx-auto px-4 sm:px-6 py-12 md:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bf7ab68c14a8a4b0" + " " + "text-center pb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "text-4xl font-bold md:text-5xl bg-gradient-to-r from-green-300 via-blue-400 to-green-300 bg-clip-text text-transparent animate-gradient-shift",
                                        children: "Pricing Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "mt-8 flex justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedBilling("monthly"),
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + `px-6 py-2 rounded-full ${selectedBilling === "monthly" ? "bg-gradient-to-r from-green-400 to-blue-500 text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"}`,
                                                children: "Monthly"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedBilling("yearly"),
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + `px-6 py-2 rounded-full ${selectedBilling === "yearly" ? "bg-gradient-to-r from-green-400 to-blue-500 text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"}`,
                                                children: "Yearly"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bf7ab68c14a8a4b0" + " " + "grid grid-cols-1 gap-8 md:grid-cols-3",
                                children: plans.map((plan, index)=>{
                                    let pricingDisplay = typeof plan.pricing === "string" ? plan.pricing : plan.pricing[selectedBilling];
                                    if (plan.bestValue) {
                                        pricingDisplay = `Best Value for Money - ${pricingDisplay}`;
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "relative rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                                                children: plan.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 304,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "mt-4 text-3xl font-bold",
                                                children: pricingDisplay
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "my-6 space-y-4 text-sm",
                                                children: Object.entries(plan.features).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "flex text-gray-300 hover:text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "w-5 h-5 mr-3 text-green-400 mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z",
                                                                    clipRule: "evenodd",
                                                                    className: "jsx-bf7ab68c14a8a4b0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-bf7ab68c14a8a4b0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "jsx-bf7ab68c14a8a4b0",
                                                                        children: [
                                                                            key,
                                                                            ":"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                        lineNumber: 324,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    " ",
                                                                    value
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 309,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-bf7ab68c14a8a4b0" + " " + "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleStripeClick(plan.name),
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-600",
                                                        children: "Pay with Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePayPal(plan.name),
                                                        className: "jsx-bf7ab68c14a8a4b0" + " " + "py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-700",
                                                        children: "Pay with PayPal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                                lineNumber: 330,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/pricing/PricingClient.tsx",
                                        lineNumber: 300,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this),
                            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bf7ab68c14a8a4b0" + " " + "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-bf7ab68c14a8a4b0" + " " + "bg-gray-900 p-6 rounded-2xl max-w-md w-full border border-gray-700 relative shadow-2xl scale-95 opacity-0 animate-fadeIn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeModal,
                                            "aria-label": "Close",
                                            className: "jsx-bf7ab68c14a8a4b0" + " " + "absolute top-3 right-3 text-gray-400 hover:text-white",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/PricingClient.tsx",
                                            lineNumber: 353,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-bf7ab68c14a8a4b0" + " " + "text-xl font-semibold mb-4 text-white",
                                            children: [
                                                "Enter card details for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-bf7ab68c14a8a4b0" + " " + "text-green-400",
                                                    children: selectedPlan
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pricing/PricingClient.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentForm, {
                                            selectedPlan: selectedPlan
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/PricingClient.tsx",
                                            lineNumber: 363,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pricing/PricingClient.tsx",
                                    lineNumber: 352,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/PricingClient.tsx",
                                lineNumber: 351,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/PricingClient.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/pricing/PricingClient.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "bf7ab68c14a8a4b0",
                    children: "@keyframes gradient-shift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}.animate-gradient-shift.jsx-bf7ab68c14a8a4b0{background-size:200%;animation:6s linear infinite gradient-shift}@keyframes fadeIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.animate-fadeIn.jsx-bf7ab68c14a8a4b0{animation:.3s ease-out forwards fadeIn}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/pricing/PricingClient.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/pricing/PricingClient.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/pricing/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_pricing_ff9e62._.js.map