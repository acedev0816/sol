self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "../common/dist/lib/components/ConnectButton/index.js":
/*!************************************************************!*\
  !*** ../common/dist/lib/components/ConnectButton/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectButton = void 0;
const antd_1 = __webpack_require__(/*! antd */ "../../node_modules/antd/es/index.js");
const react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));
const wallet_adapter_react_1 = __webpack_require__(/*! @solana/wallet-adapter-react */ "../../node_modules/@solana/wallet-adapter-react/lib/index.js");
const contexts_1 = __webpack_require__(/*! ../../contexts */ "../common/dist/lib/contexts/index.js");
const ConnectButton = (props) => {
    const { onClick, children, disabled, allowWalletChange, ...rest } = props;
    const { wallet, connect, connected } = wallet_adapter_react_1.useWallet();
    const { setVisible } = contexts_1.useWalletModal();
    const open = react_1.useCallback(() => setVisible(true), [setVisible]);
    const handleClick = react_1.useCallback(() => {
        console.log('connect button click');
        wallet ? connect().catch(() => { }) : open();
    }, [wallet, connect, open]);
    react_1.useEffect(() => {
        console.log('wallet', wallet);
    });
    // only show if wallet selected or user connected
    if (!wallet || !allowWalletChange) {
        return (react_1.default.createElement(antd_1.Button, { ...rest, onClick: handleClick, disabled: connected && disabled }, connected ? props.children : 'Connect'));
    }
    return (react_1.default.createElement(antd_1.Dropdown.Button, { onClick: handleClick, disabled: connected && disabled, overlay: react_1.default.createElement(antd_1.Menu, null,
            react_1.default.createElement(antd_1.Menu.Item, { onClick: open }, "Change Wallet")) }, "Connect"));
};
exports.ConnectButton = ConnectButton;
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NvbW1vbi9kaXN0L2xpYi9jb21wb25lbnRzL0Nvbm5lY3RCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHFCQUFxQjtBQUNyQixlQUFlLG1CQUFPLENBQUMsaURBQU07QUFDN0IsNkJBQTZCLG1CQUFPLENBQUMsZ0RBQU87QUFDNUMsK0JBQStCLG1CQUFPLENBQUMsa0dBQThCO0FBQ3JFLG1CQUFtQixtQkFBTyxDQUFDLDREQUFnQjtBQUMzQztBQUNBLFdBQVcsMERBQTBEO0FBQ3JFLFdBQVcsNkJBQTZCO0FBQ3hDLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOERBQThELGlFQUFpRTtBQUMvSDtBQUNBLG1FQUFtRTtBQUNuRSw2REFBNkQsZ0JBQWdCLHFCQUFxQjtBQUNsRztBQUNBLHFCQUFxQjtBQUNyQixpQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zcmNfQXBwX3RzeC42Y2UwZjdlMzc1M2VjZjJhNjNlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29ubmVjdEJ1dHRvbiA9IHZvaWQgMDtcclxuY29uc3QgYW50ZF8xID0gcmVxdWlyZShcImFudGRcIik7XHJcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxuY29uc3Qgd2FsbGV0X2FkYXB0ZXJfcmVhY3RfMSA9IHJlcXVpcmUoXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCIpO1xyXG5jb25zdCBjb250ZXh0c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRleHRzXCIpO1xyXG5jb25zdCBDb25uZWN0QnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2xpY2ssIGNoaWxkcmVuLCBkaXNhYmxlZCwgYWxsb3dXYWxsZXRDaGFuZ2UsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyB3YWxsZXQsIGNvbm5lY3QsIGNvbm5lY3RlZCB9ID0gd2FsbGV0X2FkYXB0ZXJfcmVhY3RfMS51c2VXYWxsZXQoKTtcclxuICAgIGNvbnN0IHsgc2V0VmlzaWJsZSB9ID0gY29udGV4dHNfMS51c2VXYWxsZXRNb2RhbCgpO1xyXG4gICAgY29uc3Qgb3BlbiA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSwgW3NldFZpc2libGVdKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gcmVhY3RfMS51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3QgYnV0dG9uIGNsaWNrJyk7XHJcbiAgICAgICAgd2FsbGV0ID8gY29ubmVjdCgpLmNhdGNoKCgpID0+IHsgfSkgOiBvcGVuKCk7XHJcbiAgICB9LCBbd2FsbGV0LCBjb25uZWN0LCBvcGVuXSk7XHJcbiAgICByZWFjdF8xLnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dhbGxldCcsIHdhbGxldCk7XHJcbiAgICB9KTtcclxuICAgIC8vIG9ubHkgc2hvdyBpZiB3YWxsZXQgc2VsZWN0ZWQgb3IgdXNlciBjb25uZWN0ZWRcclxuICAgIGlmICghd2FsbGV0IHx8ICFhbGxvd1dhbGxldENoYW5nZSkge1xyXG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYW50ZF8xLkJ1dHRvbiwgeyAuLi5yZXN0LCBvbkNsaWNrOiBoYW5kbGVDbGljaywgZGlzYWJsZWQ6IGNvbm5lY3RlZCAmJiBkaXNhYmxlZCB9LCBjb25uZWN0ZWQgPyBwcm9wcy5jaGlsZHJlbiA6ICdDb25uZWN0JykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhbnRkXzEuRHJvcGRvd24uQnV0dG9uLCB7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrLCBkaXNhYmxlZDogY29ubmVjdGVkICYmIGRpc2FibGVkLCBvdmVybGF5OiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudSwgbnVsbCxcclxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnUuSXRlbSwgeyBvbkNsaWNrOiBvcGVuIH0sIFwiQ2hhbmdlIFdhbGxldFwiKSkgfSwgXCJDb25uZWN0XCIpKTtcclxufTtcclxuZXhwb3J0cy5Db25uZWN0QnV0dG9uID0gQ29ubmVjdEJ1dHRvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==