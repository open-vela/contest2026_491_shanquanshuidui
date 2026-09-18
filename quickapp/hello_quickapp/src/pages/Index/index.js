export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "container"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#0a1018"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "100%",
                            height: "100%",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            backgroundColor: "#0a1018",
                            paddingTop: "15px",
                            paddingRight: "20px",
                            paddingBottom: "15px",
                            paddingLeft: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nav-bar"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "40px",
                            marginTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nav-btn"
                            ]
                        ],
                        {
                            width: "50px",
                            height: "30px",
                            marginTop: "0",
                            marginRight: "15px",
                            marginBottom: "0",
                            marginLeft: "15px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(245, 200, 66, 0.15)",
                            borderRadius: "15px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "rgba(245,200,66,0.4)",
                            borderRightColor: "rgba(245,200,66,0.4)",
                            borderBottomColor: "rgba(245,200,66,0.4)",
                            borderLeftColor: "rgba(245,200,66,0.4)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nav-arrow"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            color: "#f5c842",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-home"
                            ]
                        ],
                        {
                            background: "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"bottom\"],\"values\":[\"#0a1628\",\"#142a4a\"]}]}",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "header"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            flexGrow: 0,
                            marginTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "time"
                            ]
                        ],
                        {
                            fontSize: "32px",
                            color: "#f5c842",
                            fontWeight: "bold",
                            letterSpacing: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "date"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#b0c4de",
                            marginTop: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "metrics-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "100%",
                            flexGrow: 0,
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "metric-card"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "110px",
                            height: "150px",
                            backgroundColor: "rgba(30, 60, 100, 0.4)",
                            borderRadius: "16px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "rgba(80,120,160,0.3)",
                            borderRightColor: "rgba(80,120,160,0.3)",
                            borderBottomColor: "rgba(80,120,160,0.3)",
                            borderLeftColor: "rgba(80,120,160,0.3)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "metric-icon"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            marginBottom: "6px",
                            paddingTop: "4px",
                            paddingRight: "8px",
                            paddingBottom: "4px",
                            paddingLeft: "8px",
                            borderRadius: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hr-icon"
                            ]
                        ],
                        {
                            color: "#ff6b8a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "spo2-icon"
                            ]
                        ],
                        {
                            color: "#4fc3f7",
                            fontSize: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stress-icon"
                            ]
                        ],
                        {
                            color: "#c0e34d"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "metric-value"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            color: "#ffffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "metric-label"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#b0c4de",
                            marginTop: "3px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "metric-unit"
                            ]
                        ],
                        {
                            fontSize: "9px",
                            color: "#6a8aad",
                            marginTop: "2px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "es3-bar"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "280px",
                            height: "45px",
                            marginTop: "10px",
                            marginBottom: "5px",
                            backgroundColor: "rgba(245, 166, 35, 0.1)",
                            borderRadius: "25px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "rgba(245,166,35,0.5)",
                            borderRightColor: "rgba(245,166,35,0.5)",
                            borderBottomColor: "rgba(245,166,35,0.5)",
                            borderLeftColor: "rgba(245,166,35,0.5)",
                            flexGrow: 0,
                            flexShrink: 0
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "es3-value"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            color: "#f5a623",
                            fontWeight: "bold",
                            marginRight: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "es3-label"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#d0d0d0"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-chat"
                            ]
                        ],
                        {
                            backgroundColor: "#1a1510",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-header"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            height: "50px",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-title"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            color: "#ffffff",
                            paddingTop: "4px",
                            paddingRight: "16px",
                            paddingBottom: "4px",
                            paddingLeft: "16px",
                            borderRadius: "20px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#3a3a3a",
                            borderRightColor: "#3a3a3a",
                            borderBottomColor: "#3a3a3a",
                            borderLeftColor: "#3a3a3a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-es3"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#f5a623"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-body"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            width: "100%",
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: "scroll"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-msg-list"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            width: "100%",
                            paddingTop: "8px",
                            paddingRight: "12px",
                            paddingBottom: "8px",
                            paddingLeft: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-msg-row"
                            ]
                        ],
                        {
                            width: "100%",
                            marginBottom: "10px",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "msg-row-ai"
                            ]
                        ],
                        {
                            alignItems: "flex-start"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "msg-row-user"
                            ]
                        ],
                        {
                            alignItems: "flex-end"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-msg-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            lineHeight: "22px",
                            paddingTop: "8px",
                            paddingRight: "14px",
                            paddingBottom: "8px",
                            paddingLeft: "14px",
                            borderRadius: "14px",
                            maxWidth: "240px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "msg-text-ai"
                            ]
                        ],
                        {
                            color: "#e0e0e0",
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            textAlign: "left"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "msg-text-user"
                            ]
                        ],
                        {
                            color: "#f5c842",
                            backgroundColor: "rgba(245, 200, 66, 0.12)",
                            textAlign: "right"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-thinking"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            marginTop: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-thinking-text"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#888888",
                            fontStyle: "italic"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-input-bar"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            height: "60px",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-mic-btn"
                            ]
                        ],
                        {
                            width: "44px",
                            height: "44px",
                            borderRadius: "22px",
                            backgroundColor: "rgba(245, 166, 35, 0.2)",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-mic-icon"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#f5a623"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-input"
                            ]
                        ],
                        {
                            flex: 1,
                            height: "40px",
                            marginTop: "0",
                            marginRight: "10px",
                            marginBottom: "0",
                            marginLeft: "10px",
                            paddingTop: "0",
                            paddingRight: "16px",
                            paddingBottom: "0",
                            paddingLeft: "16px",
                            justifyContent: "center",
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            borderRadius: "20px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#3a3a3a",
                            borderRightColor: "#3a3a3a",
                            borderBottomColor: "#3a3a3a",
                            borderLeftColor: "#3a3a3a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-input-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-placeholder"
                            ]
                        ],
                        {
                            color: "#666666"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-send-btn"
                            ]
                        ],
                        {
                            width: "44px",
                            height: "44px",
                            borderRadius: "22px",
                            backgroundColor: "rgba(245, 166, 35, 0.3)",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chat-send-icon"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#f5a623",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-history"
                            ]
                        ],
                        {
                            backgroundColor: "#1a1a1a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-title"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            color: "#ffffff",
                            fontWeight: "bold",
                            marginTop: "10px",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "history-list"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            width: "100%",
                            flexGrow: 1,
                            flexShrink: 0
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "history-item"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            width: "100%",
                            paddingTop: "12px",
                            paddingRight: "16px",
                            paddingBottom: "12px",
                            paddingLeft: "16px",
                            marginBottom: "8px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            borderLeftWidth: "3px",
                            borderLeftColor: "#f5c842"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "history-date"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#ffffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "history-summary"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            color: "#a0a0a0",
                            marginTop: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "empty-state"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            flexGrow: 1,
                            flexShrink: 0
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "empty-icon"
                            ]
                        ],
                        {
                            fontSize: "40px",
                            color: "#3a3a3a",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "empty-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#666666",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-podcast"
                            ]
                        ],
                        {
                            backgroundColor: "#1a1a1a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-card"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            width: "100%",
                            flexGrow: 1,
                            flexShrink: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            borderLeftWidth: "3px",
                            borderLeftColor: "#f5c842",
                            paddingTop: "16px",
                            paddingRight: "16px",
                            paddingBottom: "16px",
                            paddingLeft: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-card-header"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-date"
                            ]
                        ],
                        {
                            fontSize: "15px",
                            color: "#ffffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-play-btn"
                            ]
                        ],
                        {
                            paddingTop: "4px",
                            paddingRight: "12px",
                            paddingBottom: "4px",
                            paddingLeft: "12px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(245, 166, 35, 0.2)",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#f5a623",
                            borderRightColor: "#f5a623",
                            borderBottomColor: "#f5a623",
                            borderLeftColor: "#f5a623"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-play-text"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#f5a623",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-del-btn"
                            ]
                        ],
                        {
                            width: "28px",
                            height: "28px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(255, 100, 100, 0.1)",
                            borderRadius: "14px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-del-icon"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#ff6464"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "podcast-text"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#d0d0d0",
                            lineHeight: "24px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page-trends"
                            ]
                        ],
                        {
                            backgroundColor: "#1a1a1a",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "trends-tabs"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "tab"
                            ]
                        ],
                        {
                            fontSize: "14px",
                            color: "#666666",
                            paddingTop: "6px",
                            paddingRight: "20px",
                            paddingBottom: "6px",
                            paddingLeft: "20px",
                            marginTop: "0",
                            marginRight: "6px",
                            marginBottom: "0",
                            marginLeft: "6px",
                            borderRadius: "16px",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#3a3a3a",
                            borderRightColor: "#3a3a3a",
                            borderBottomColor: "#3a3a3a",
                            borderLeftColor: "#3a3a3a",
                            backgroundColor: "rgba(255, 255, 255, 0.03)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "tab-active"
                            ]
                        ],
                        {
                            color: "#0a1018",
                            backgroundColor: "#f5c842",
                            borderTopColor: "#f5c842",
                            borderRightColor: "#f5c842",
                            borderBottomColor: "#f5c842",
                            borderLeftColor: "#f5c842",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chart-area"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: "center",
                            width: "100%",
                            height: "160px",
                            marginBottom: "15px",
                            paddingTop: "0",
                            paddingRight: "5px",
                            paddingBottom: "0",
                            paddingLeft: "5px",
                            flexGrow: 0
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bar-row"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            flex: 1,
                            height: "100%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bar"
                            ]
                        ],
                        {
                            width: "24px",
                            background: "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"top\"],\"values\":[\"#f5a623\",\"#f5c842\"]}]}",
                            borderRadius: "4px 4px 0 0",
                            marginBottom: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bar-label"
                            ]
                        ],
                        {
                            fontSize: "9px",
                            color: "#888888"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stats-row"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: "100%"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stat-card"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100px",
                            height: "70px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stat-label"
                            ]
                        ],
                        {
                            fontSize: "12px",
                            color: "#888888",
                            marginBottom: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "stat-value"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#f5c842",
                            fontWeight: "bold"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _service = _interopRequireDefault($app_require$1("@app-module/service.health"));
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.velaclaw"));
                    var _storage = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    var _file = null;
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        data: {
                            currentPage: 0,
                            timeStr: '14:53:43',
                            dateStr: '2026年9月14日 周一',
                            es3: 65,
                            hr: 73,
                            spo2: 97,
                            stress: 37,
                            chatMessages: [],
                            userMsg: '',
                            inputText: '',
                            isAiThinking: false,
                            autoConvIndex: 0,
                            autoConvActive: false,
                            autoConvSeq: [
                                '我今天心情不太好，感觉压力有点大',
                                '我的心率73，血氧97，压力37，你觉得我的状态怎么样？',
                                '主要是最近工作有点忙，经常加班',
                                '有什么建议可以帮我放松一下吗？',
                                '好的谢谢你，我感觉好多了'
                            ],
                            historyList: [],
                            podcastText: '嗨，大家好，欢迎回到我们的心理小电台，我是你们的主播。这一周我们看着数据起起伏伏，就像坐了一趟情绪过山车。9月10号那天压力飙到57，情绪跌到41分，而到了9月9号和11号，你又恢复了活力，情绪冲上70多分。这种波动其实特别正常，说明你的身心在努力自我调节。',
                            podcastDate: '今天 周日 23:11',
                            isPlaying: false,
                            activeTab: 'hr',
                            chartData: [
                                {
                                    date: '09-07',
                                    height: 120
                                },
                                {
                                    date: '09-08',
                                    height: 125
                                },
                                {
                                    date: '09-09',
                                    height: 90
                                },
                                {
                                    date: '09-10',
                                    height: 160
                                },
                                {
                                    date: '09-11',
                                    height: 110
                                },
                                {
                                    date: '09-12',
                                    height: 140
                                },
                                {
                                    date: '09-13',
                                    height: 115
                                }
                            ],
                            stats: {
                                min: '71bpm',
                                max: '81bpm',
                                avg: '74.9bpm'
                            }
                        },
                        onReady () {
                            this.updateTime();
                            this.timer = setInterval(()=>this.updateTime(), 1000);
                            this.initHistoryData();
                            this.getRecentHealth();
                            this.subscribeHealth();
                            this.currentPage = 1;
                            this.chatMessages = [
                                {
                                    role: 'ai',
                                    text: '你好，我是你的情绪访谈员。有什么想聊的吗？'
                                }
                            ];
                            this.pollTimer = setInterval(()=>{
                                this.checkExternalMsg();
                            }, 5000);
                        },
                        checkExternalMsg () {
                            if (this.isAiThinking) return;
                            if (!_file) {
                                return;
                            }
                            try {
                                _file.default.readText({
                                    uri: 'internal://file/com.disco.emotionsense/chat_input.txt',
                                    success: (res)=>{
                                        if (res && res.text && res.text.trim()) {
                                            var msg = res.text.trim();
                                            _file.default.writeText({
                                                uri: 'internal://file/com.disco.emotionsense/chat_input.txt',
                                                content: '',
                                                success: ()=>{},
                                                fail: ()=>{}
                                            });
                                            this.handleExternalMsg(msg);
                                        }
                                    },
                                    fail: ()=>{}
                                });
                            } catch(e) {}
                        },
                        handleExternalMsg (msg) {
                            this.chatMessages.push({
                                role: 'user',
                                text: msg
                            });
                            this.isAiThinking = true;
                            var fallback = '收到你的消息。让我想想...';
                            var received = false;
                            setTimeout(()=>{
                                if(!received){
                                    received = true;
                                    this.isAiThinking = false;
                                    this.chatMessages.push({
                                        role: 'ai',
                                        text: fallback
                                    });
                                }
                            }, 65000);
                            try {
                                _system.default.ask({
                                    query: msg,
                                    success: (res)=>{
                                        if(received) return;
                                        received = true;
                                        this.isAiThinking = false;
                                        let reply = res && res.reply ? res.reply : fallback;
                                        if(reply.length < 10) reply = fallback;
                                        this.chatMessages.push({
                                            role: 'ai',
                                            text: reply
                                        });
                                    },
                                    fail: ()=>{
                                        if(received) return;
                                        received = true;
                                        this.isAiThinking = false;
                                        this.chatMessages.push({
                                            role: 'ai',
                                            text: fallback
                                        });
                                    }
                                });
                            } catch (e) {
                                this.isAiThinking = false;
                                this.chatMessages.push({
                                    role: 'ai',
                                    text: fallback
                                });
                            }
                        },
                        startAutoConversation () {
                            this.autoConvActive = true;
                            this.autoConvIndex = 0;
                            this.currentPage = 1;
                            this.chatMessages = [
                                {
                                    role: 'ai',
                                    text: '你好，我是你的情绪访谈员。检测到你的 ES3 波动值为 ' + this.es3 + '，今天感觉怎么样？'
                                }
                            ];
                            try {
                                _system.default.ask({
                                    query: 'hello',
                                    success: ()=>{
                                        console.log('warmup done');
                                        setTimeout(()=>{
                                            this.sendAutoMessage();
                                        }, 1000);
                                    },
                                    fail: ()=>{
                                        console.log('warmup fail, continue anyway');
                                        setTimeout(()=>{
                                            this.sendAutoMessage();
                                        }, 1000);
                                    }
                                });
                            } catch (e) {
                                console.log('warmup error, continue');
                                setTimeout(()=>{
                                    this.sendAutoMessage();
                                }, 1000);
                            }
                        },
                        sendAutoMessage () {
                            if (this.autoConvIndex >= this.autoConvSeq.length) {
                                this.autoConvActive = false;
                                this.chatMessages.push({
                                    role: 'ai',
                                    text: '对话就到这里啦～如果你想生成播客回顾这次对话，可以滑到播客页面。随时想聊了，我都在这里。'
                                });
                                return;
                            }
                            const msg = this.autoConvSeq[this.autoConvIndex];
                            var fallbacks = [
                                '听起来你今天压力不小。你的心率73和血氧97都在正常范围，但情绪感受和生理数据有时不完全一致。想和我聊聊是什么让你感到压力大吗？',
                                '根据你的数据，心率73bpm处于健康范围，血氧97%正常，压力等级37属于中等偏低。整体生理状态不错，但你主观感受压力大，建议关注情绪调节。最近有什么特别的事情吗？',
                                '工作加班确实很消耗人。长时间的压力会慢慢累积，影响睡眠和情绪。这种状态持续多久了？有没有什么时刻你会觉得稍微放松一点？',
                                '可以试试4-7-8呼吸法：吸气4秒、屏息7秒、呼气8秒。另外接触自然光、播放轻柔白噪音也有帮助。适当运动也能释放压力。今晚可以早点休息吗？',
                                '不客气，能帮到你我很开心。记住，照顾好自己的情绪和身体健康一样重要。有什么想聊的随时来找我，晚安～'
                            ];
                            var fbIdx = this.autoConvIndex;
                            this.userMsg = msg;
                            this.chatMessages.push({
                                role: 'user',
                                text: msg
                            });
                            this.isAiThinking = true;
                            var replyReceived = false;
                            setTimeout(()=>{
                                if(!replyReceived){
                                    replyReceived = true;
                                    this.isAiThinking = false;
                                    this.chatMessages.push({
                                        role: 'ai',
                                        text: fallbacks[fbIdx] || '(AI思考中...)'
                                    });
                                    this.autoConvIndex++;
                                    setTimeout(()=>{
                                        this.sendAutoMessage();
                                    }, 5000);
                                }
                            }, 65000);
                            try {
                                _system.default.ask({
                                    query: msg,
                                    success: (res)=>{
                                        if(replyReceived) return;
                                        replyReceived = true;
                                        this.isAiThinking = false;
                                        let reply = res && res.reply ? res.reply : fallbacks[fbIdx] || '(空回复)';
                                        if(reply.length < 20) reply = fallbacks[fbIdx] || reply;
                                        this.chatMessages.push({
                                            role: 'ai',
                                            text: reply
                                        });
                                        this.autoConvIndex++;
                                        setTimeout(()=>{
                                            this.sendAutoMessage();
                                        }, 5000);
                                    },
                                    fail: (data, code)=>{
                                        if(replyReceived) return;
                                        replyReceived = true;
                                        this.isAiThinking = false;
                                        this.chatMessages.push({
                                            role: 'ai',
                                            text: fallbacks[fbIdx] || 'AI 回复失败 (code: ' + code + ')'
                                        });
                                        this.autoConvIndex++;
                                        setTimeout(()=>{
                                            this.sendAutoMessage();
                                        }, 5000);
                                    }
                                });
                            } catch (e) {
                                this.isAiThinking = false;
                                this.chatMessages.push({
                                    role: 'ai',
                                    text: 'AI 调用异常: ' + e
                                });
                                this.autoConvIndex++;
                                setTimeout(()=>{
                                    this.sendAutoMessage();
                                }, 5000);
                            }
                        },
                        generatePodcast () {
                            this.podcastText = '正在生成播客内容...';
                            var query = '用户心率73血氧97压力37，自述心情不好压力大，AI建议4-7-8呼吸法放松。请基于这些信息生成一段播客风格叙事文本，80字以内，温暖治愈语调。';
                            try {
                                _system.default.ask({
                                    query: query,
                                    success: (res)=>{
                                        if (res && res.reply) this.podcastText = res.reply;
                                        else this.podcastText = '播客生成失败，请重试';
                                    },
                                    fail: (data, code)=>{
                                        console.log('podcast gen fail, code:', code);
                                        this.podcastText = '播客生成失败 (code: ' + code + ')';
                                    }
                                });
                            } catch (e) {
                                console.log('podcast gen error:', e);
                                this.podcastText = '播客生成异常: ' + e;
                            }
                        },
                        onDestroy () {
                            if (this.timer) clearInterval(this.timer);
                            this.unsubscribeHealth();
                        },
                        updateTime () {
                            const d = new Date();
                            const h = String(d.getHours()).padStart(2, '0');
                            const m = String(d.getMinutes()).padStart(2, '0');
                            const s = String(d.getSeconds()).padStart(2, '0');
                            this.timeStr = `${h}:${m}:${s}`;
                            const week = [
                                '日',
                                '一',
                                '二',
                                '三',
                                '四',
                                '五',
                                '六'
                            ][d.getDay()];
                            this.dateStr = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 周${week}`;
                        },
                        getRecentHealth () {
                            try {
                                _service.default.getRecentSamples({
                                    dataTypes: [
                                        _service.default.DATA_TYPES.HEART_RATE,
                                        _service.default.DATA_TYPES.SPO2,
                                        _service.default.DATA_TYPES.STRESS
                                    ],
                                    success: (list)=>{
                                        if (list && list.length > 0) list.forEach((item)=>{
                                            if (item.dataType === _service.default.DATA_TYPES.HEART_RATE && item.data && item.data.value) {
                                                this.hr = item.data.value;
                                                this.saveHealthData('hr', item.data.value);
                                            }
                                            else if (item.dataType === _service.default.DATA_TYPES.SPO2 && item.data && item.data.value) {
                                                this.spo2 = item.data.value;
                                                this.saveHealthData('spo2', item.data.value);
                                            }
                                            else if (item.dataType === _service.default.DATA_TYPES.STRESS && item.data && item.data.value) {
                                                this.stress = item.data.value;
                                                this.saveHealthData('stress', item.data.value);
                                            }
                                        });
                                    },
                                    fail: (data, code)=>{
                                        console.log('getRecentSamples fail, code:', code);
                                    }
                                });
                            } catch (e) {
                                console.log('getRecentSamples error:', e);
                            }
                        },
                        subscribeHealth () {
                            try {
                                _service.default.subscribeSample({
                                    dataType: _service.default.DATA_TYPES.HEART_RATE,
                                    callback: (sample)=>{
                                        if (sample && sample.value) {
                                            this.hr = sample.value;
                                            this.saveHealthData('hr', sample.value);
                                        }
                                    },
                                    fail: (data, code)=>{
                                        console.log('HR subscribe fail, code:', code);
                                    }
                                });
                                _service.default.subscribeSample({
                                    dataType: _service.default.DATA_TYPES.SPO2,
                                    callback: (sample)=>{
                                        if (sample && sample.value) {
                                            this.spo2 = sample.value;
                                            this.saveHealthData('spo2', sample.value);
                                        }
                                    },
                                    fail: (data, code)=>{
                                        console.log('SPO2 subscribe fail, code:', code);
                                    }
                                });
                                _service.default.subscribeSample({
                                    dataType: _service.default.DATA_TYPES.STRESS,
                                    callback: (sample)=>{
                                        if (sample && sample.value) {
                                            this.stress = sample.value;
                                            this.saveHealthData('stress', sample.value);
                                        }
                                    },
                                    fail: (data, code)=>{
                                        console.log('STRESS subscribe fail, code:', code);
                                    }
                                });
                            } catch (e) {
                                console.log('subscribeHealth error:', e);
                            }
                        },
                        unsubscribeHealth () {
                            try {
                                _service.default.unsubscribeSample({
                                    dataType: _service.default.DATA_TYPES.HEART_RATE
                                });
                                _service.default.unsubscribeSample({
                                    dataType: _service.default.DATA_TYPES.SPO2
                                });
                                _service.default.unsubscribeSample({
                                    dataType: _service.default.DATA_TYPES.STRESS
                                });
                            } catch (e) {
                                console.log('unsubscribeHealth error:', e);
                            }
                        },
                        initHistoryData () {
                                var self = this;
                                var keys = ['history_hr', 'history_spo2', 'history_stress'];
                                var defaults = [73, 97, 37];
                                var labels = ['hr', 'spo2', 'stress'];
                                keys.forEach(function(key, idx) {
                                    var storageKey = key;
                                    _storage.default.get({
                                        key: storageKey,
                                        success: function(data) {
                                            if (data && data.value) {
                                                var parsed = [];
                                                try { parsed = JSON.parse(data.value); } catch(e) {}
                                                if (parsed.length >= 7) return;
                                            }
                                            var arr = [];
                                            var now = new Date();
                                            for (var i = 6; i >= 0; i--) {
                                                var d = new Date(now.getTime() - i * 86400000);
                                                var mm = (d.getMonth() + 1 < 10 ? '0' : '') + (d.getMonth() + 1);
                                                var dd = (d.getDate() < 10 ? '0' : '') + d.getDate();
                                                var baseVal = defaults[idx];
                                                var variance = idx === 0 ? 15 : (idx === 1 ? 2 : 12);
                                                var val = baseVal + Math.floor((Math.random() - 0.5) * 2 * variance);
                                                if (idx === 1 && val > 100) val = 100;
                                                if (idx === 1 && val < 90) val = 90;
                                                if (idx === 0 && val < 55) val = 55;
                                                if (idx === 0 && val > 120) val = 120;
                                                if (idx === 2 && val < 10) val = 10;
                                                if (idx === 2 && val > 70) val = 70;
                                                arr.push({ date: mm + '-' + dd, value: val });
                                            }
                                            _storage.default.set({
                                                key: storageKey,
                                                value: JSON.stringify(arr),
                                                success: function() {
                                                    if (idx === 0) self.loadChartData('hr');
                                                },
                                                fail: function() { console.log('storage set fail for', storageKey); }
                                            });
                                        },
                                        fail: function() { console.log('storage get fail for', storageKey); }
                                    });
                                });
                        },
                        saveHealthData (type, value) {
                                if (!value) return;
                                var key = 'history_' + type;
                                var self = this;
                                _storage.default.get({
                                    key: key,
                                    success: function(data) {
                                        var arr = [];
                                        if (data && data.value) {
                                            try { arr = JSON.parse(data.value); } catch(e) {}
                                        }
                                        var now = new Date();
                                        var mm = (now.getMonth() + 1 < 10 ? '0' : '') + (now.getMonth() + 1);
                                        var dd = (now.getDate() < 10 ? '0' : '') + now.getDate();
                                        arr.push({ date: mm + '-' + dd, value: value });
                                        if (arr.length > 30) arr = arr.slice(arr.length - 30);
                                        _storage.default.set({
                                            key: key,
                                            value: JSON.stringify(arr),
                                            success: function() {
                                                self.loadChartData(self.activeTab);
                                            },
                                            fail: function() { console.log('saveHealthData storage set fail'); }
                                        });
                                    },
                                    fail: function() { console.log('saveHealthData storage get fail'); }
                                });
                        },
                        loadChartData (tab) {
                                var keyMap = { hr: 'history_hr', spo2: 'history_spo2', stress: 'history_stress' };
                                var key = keyMap[tab] || keyMap.hr;
                                var self = this;
                                _storage.default.get({
                                    key: key,
                                    success: function(data) {
                                        var arr = [];
                                        if (data && data.value) {
                                            try { arr = JSON.parse(data.value); } catch(e) {}
                                        }
                                        if (arr.length === 0) return;
                                        var recent = arr.length > 7 ? arr.slice(arr.length - 7) : arr;
                                        var chartData = recent.map(function(item) {
                                            return { date: item.date, height: item.value };
                                        });
                                        var values = recent.map(function(item) { return item.value; });
                                        var min = Math.min.apply(null, values);
                                        var max = Math.max.apply(null, values);
                                        var avg = (values.reduce(function(a, b) { return a + b; }, 0) / values.length).toFixed(1);
                                        var suffix = tab === 'hr' ? 'bpm' : (tab === 'spo2' ? '%' : '');
                                        self.chartData = chartData;
                                        self.stats = {
                                            min: min + suffix,
                                            max: max + suffix,
                                            avg: avg + suffix
                                        };
                                    },
                                    fail: function() { console.log('loadChartData storage get fail for', key); }
                                });
                        },
                        onBack () {
                            if (this.currentPage > 0) {
                                this.currentPage = 0;
                                return true;
                            }
                            return false;
                        },
                        goNext () {
                            if (this.currentPage < 4) this.currentPage++;
                        },
                        goPrev () {
                            if (this.currentPage > 0) this.currentPage--;
                        },
                        onTapMetric (type) {
                            this.es3 = Math.floor(50 * Math.random()) + 30;
                        },
                        onInputFocus () {},
                        onInputChange (e) {
                            this.inputText = e.value || '';
                        },
                        onSendMsg () {
                            const msg = this.inputText;
                            if (!msg) return;
                            this.userMsg = msg;
                            this.chatMessages.push({
                                role: 'user',
                                text: msg
                            });
                            this.inputText = '';
                            this.isAiThinking = true;
                            try {
                                _system.default.ask({
                                    query: msg,
                                    success: (res)=>{
                                        this.isAiThinking = false;
                                        if (res && res.reply) this.chatMessages.push({
                                            role: 'ai',
                                            text: res.reply
                                        });
                                        else this.chatMessages.push({
                                            role: 'ai',
                                            text: '抱歉，我没有理解你的意思。'
                                        });
                                    },
                                    fail: (data, code)=>{
                                        this.isAiThinking = false;
                                        console.log('velaclaw ask fail, code:', code);
                                        let errMsg;
                                        errMsg = 203 === code ? '当前设备不支持 AI 能力。' : 1000 === code ? 'AI 服务暂不可用，请稍后重试。' : 1001 === code ? '对话内容被拒绝，请换个话题。' : 'AI 回复失败（code: ' + code + '）';
                                        this.chatMessages.push({
                                            role: 'ai',
                                            text: errMsg
                                        });
                                    }
                                });
                            } catch (e) {
                                this.isAiThinking = false;
                                this.chatMessages.push({
                                    role: 'ai',
                                    text: 'AI 调用异常：' + e
                                });
                            }
                        },
                        onVoiceInput () {
                            this.chatMessages.push({
                                role: 'ai',
                                text: '语音输入功能待接入，请使用自动对话演示'
                            });
                        },
                        onPlayPodcast () {
                            this.isPlaying = !this.isPlaying;
                        },
                        onDeletePodcast () {
                            this.podcastText = '';
                        },
                        onSwitchTab (tab) {
                            this.activeTab = tab;
                            this.loadChartData(tab);
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "container"
                            ]
                        }
                    }, [
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return 0 === _vm_.currentPage;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page",
                                            "page-home"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "header"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "time"
                                                ],
                                                value: function() {
                                                    return _vm_.timeStr;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "date"
                                                ],
                                                value: function() {
                                                    return _vm_.dateStr;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "metrics-row"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "metric-card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onTapMetric("hr", evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-icon",
                                                        "hr-icon"
                                                    ],
                                                    value: "HR"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-value"
                                                    ],
                                                    value: function() {
                                                        return _vm_.hr;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-label"
                                                    ],
                                                    value: "心率"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-unit"
                                                    ],
                                                    value: "bpm"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "metric-card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onTapMetric("spo2", evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-icon",
                                                        "spo2-icon"
                                                    ],
                                                    value: "SpO2"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-value"
                                                    ],
                                                    value: function() {
                                                        return _vm_.spo2 + "%";
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-label"
                                                    ],
                                                    value: "血氧"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-unit"
                                                    ],
                                                    value: "饱和度"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "metric-card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onTapMetric("stress", evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-icon",
                                                        "stress-icon"
                                                    ],
                                                    value: "ST"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-value"
                                                    ],
                                                    value: function() {
                                                        return _vm_.stress;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-label"
                                                    ],
                                                    value: "压力"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "metric-unit"
                                                    ],
                                                    value: "等级"
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "es3-bar"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "es3-value"
                                                ],
                                                value: function() {
                                                    return _vm_.es3;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "es3-label"
                                                ],
                                                value: "ES3 波动"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "nav-bar"
                                            ]
                                        }
                                    }, [
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.currentPage < 4;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "nav-btn",
                                                            "nav-up"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.goNext(evt);
                                                            }
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "nav-arrow"
                                                            ],
                                                            value: "^"
                                                        }
                                                    }, [])
                                                ])
                                            ];
                                        })
                                    ])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return 1 === _vm_.currentPage;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page",
                                            "page-chat"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "chat-header"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "chat-title"
                                                ],
                                                value: "对话"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "chat-es3"
                                                ],
                                                value: function() {
                                                    return "ES3 波动 " + _vm_.es3;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "chat-body"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "chat-msg-list"
                                                ]
                                            }
                                        }, [
                                            aiot.__cf__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    exp: function() {
                                                        return _vm_.chatMessages;
                                                    },
                                                    key: "$idx",
                                                    value: "$item"
                                                }
                                            }, function($idx, $item) {
                                                return [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: function() {
                                                                const $classValue$ = "chat-msg-row " + ("user" === $item.role ? "msg-row-user" : "msg-row-ai");
                                                                if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                                return $classValue$;
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: function() {
                                                                    const $classValue$ = "chat-msg-text " + ("user" === $item.role ? "msg-text-user" : "msg-text-ai");
                                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                                    return $classValue$;
                                                                },
                                                                value: function() {
                                                                    return $item.text;
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ];
                                            }),
                                            aiot.__ci__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    shown: function() {
                                                        return _vm_.isAiThinking;
                                                    }
                                                }
                                            }, function() {
                                                return [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "chat-thinking"
                                                            ]
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "chat-thinking-text"
                                                                ],
                                                                value: "AI 思考中..."
                                                            }
                                                        }, [])
                                                    ])
                                                ];
                                            })
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "chat-input-bar"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "chat-mic-btn"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onVoiceInput(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "chat-mic-icon"
                                                    ],
                                                    value: "MIC"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "chat-input"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onInputFocus(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ci__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    shown: function() {
                                                        return _vm_.inputText;
                                                    }
                                                }
                                            }, function() {
                                                return [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "chat-input-text"
                                                            ],
                                                            value: function() {
                                                                return _vm_.inputText;
                                                            }
                                                        }
                                                    }, [])
                                                ];
                                            }),
                                            aiot.__ci__({
                                                __vm__: _vm_,
                                                __opts__: {
                                                    shown: function() {
                                                        return !_vm_.inputText;
                                                    }
                                                }
                                            }, function() {
                                                return [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "chat-input-text",
                                                                "chat-placeholder"
                                                            ],
                                                            value: "输入想说的话..."
                                                        }
                                                    }, [])
                                                ];
                                            })
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "chat-send-btn"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onSendMsg(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "chat-send-icon"
                                                    ],
                                                    value: "->"
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "nav-bar"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "nav-btn",
                                                    "nav-down"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goPrev(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-arrow"
                                                    ],
                                                    value: "v"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "nav-btn",
                                                    "nav-up"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goNext(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-arrow"
                                                    ],
                                                    value: "^"
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return 2 === _vm_.currentPage;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page",
                                            "page-history"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "page-title"
                                            ],
                                            value: "历史"
                                        }
                                    }, []),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.historyList.length > 0;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "history-list"
                                                    ]
                                                }
                                            }, [
                                                aiot.__cf__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        exp: function() {
                                                            return _vm_.historyList;
                                                        },
                                                        key: "$idx",
                                                        value: "$item"
                                                    }
                                                }, function($idx, $item) {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "history-item"
                                                                ],
                                                                events: {
                                                                    click: function(evt) {
                                                                        return _vm_.onTapHistory($idx, evt);
                                                                    }
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "history-date"
                                                                    ],
                                                                    value: function() {
                                                                        return $item.date;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "history-summary"
                                                                    ],
                                                                    value: function() {
                                                                        return $item.summary;
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return !(_vm_.historyList.length > 0);
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "empty-state"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "empty-icon"
                                                        ],
                                                        value: "[ ]"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "empty-text"
                                                        ],
                                                        value: "这一天还没有对话记录"
                                                    }
                                                }, [])
                                            ])
                                        ];
                                    }),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "nav-bar"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "nav-btn",
                                                    "nav-down"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goPrev(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-arrow"
                                                    ],
                                                    value: "v"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "nav-btn",
                                                    "nav-up"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goNext(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-arrow"
                                                    ],
                                                    value: "^"
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return 3 === _vm_.currentPage;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page",
                                            "page-podcast"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "page-title"
                                            ],
                                            value: "播客访谈"
                                        }
                                    }, []),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.podcastText;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "podcast-card"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "podcast-card-header"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "podcast-date"
                                                            ],
                                                            value: function() {
                                                                return "播客访谈 " + _vm_.podcastDate;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "podcast-play-btn"
                                                            ],
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onPlayPodcast(evt);
                                                                }
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "podcast-play-text"
                                                                ],
                                                                value: function() {
                                                                    return _vm_.isPlaying ? "STOP" : "PLAY";
                                                                }
                                                            }
                                                        }, [])
                                                    ]),
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "podcast-del-btn"
                                                            ],
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onDeletePodcast(evt);
                                                                }
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("text", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "podcast-del-icon"
                                                                ],
                                                                value: "X"
                                                            }
                                                        }, [])
                                                    ])
                                                ]),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "podcast-text"
                                                        ],
                                                        value: function() {
                                                            return _vm_.podcastText;
                                                        }
                                                    }
                                                }, [])
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return !_vm_.podcastText;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "empty-state"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "empty-text"
                                                        ],
                                                        value: "还没有对话，去对话页聊聊，再回来选日期和话题生成播客"
                                                    }
                                                }, [])
                                            ])
                                        ];
                                    }),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "nav-bar"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "nav-btn",
                                                    "nav-down"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goPrev(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-arrow"
                                                    ],
                                                    value: "v"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "nav-btn",
                                                    "nav-up"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goNext(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-arrow"
                                                    ],
                                                    value: "^"
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return 4 === _vm_.currentPage;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page",
                                            "page-trends"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "page-title"
                                            ],
                                            value: "趋势"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "trends-tabs"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: function() {
                                                    const $classValue$ = "tab " + ("hr" === _vm_.activeTab ? "tab-active" : "");
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                },
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onSwitchTab("hr", evt);
                                                    }
                                                },
                                                value: "心率"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: function() {
                                                    const $classValue$ = "tab " + ("stress" === _vm_.activeTab ? "tab-active" : "");
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                },
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onSwitchTab("stress", evt);
                                                    }
                                                },
                                                value: "压力"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: function() {
                                                    const $classValue$ = "tab " + ("spo2" === _vm_.activeTab ? "tab-active" : "");
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                },
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.onSwitchTab("spo2", evt);
                                                    }
                                                },
                                                value: "血氧"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "chart-area"
                                            ]
                                        }
                                    }, [
                                        aiot.__cf__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                exp: function() {
                                                    return _vm_.chartData;
                                                },
                                                key: "$idx",
                                                value: "$item"
                                            }
                                        }, function($idx, $item) {
                                            return [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "bar-row"
                                                        ]
                                                    }
                                                }, [
                                                    aiot.__ce__("div", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "bar"
                                                            ],
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("height: " + $item.height + "px;");
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("text", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            classList: [
                                                                "bar-label"
                                                            ],
                                                            value: function() {
                                                                return $item.date;
                                                            }
                                                        }
                                                    }, [])
                                                ])
                                            ];
                                        })
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "stats-row"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "stat-card"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "stat-label"
                                                    ],
                                                    value: "Min"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "stat-value"
                                                    ],
                                                    value: function() {
                                                        return _vm_.stats.min;
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "stat-card"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "stat-label"
                                                    ],
                                                    value: "Max"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "stat-value"
                                                    ],
                                                    value: function() {
                                                        return _vm_.stats.max;
                                                    }
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "stat-card"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "stat-label"
                                                    ],
                                                    value: "Avg"
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "stat-value"
                                                    ],
                                                    value: function() {
                                                        return _vm_.stats.avg;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "nav-bar"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "nav-btn",
                                                    "nav-down"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goPrev(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nav-arrow"
                                                    ],
                                                    value: "v"
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ];
                        })
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
