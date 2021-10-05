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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NvbW1vbi9kaXN0L2xpYi9jb21wb25lbnRzL0Nvbm5lY3RCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHFCQUFxQjtBQUNyQixlQUFlLG1CQUFPLENBQUMsaURBQU07QUFDN0IsNkJBQTZCLG1CQUFPLENBQUMsZ0RBQU87QUFDNUMsK0JBQStCLG1CQUFPLENBQUMsa0dBQThCO0FBQ3JFLG1CQUFtQixtQkFBTyxDQUFDLDREQUFnQjtBQUMzQztBQUNBLFdBQVcsMERBQTBEO0FBQ3JFLFdBQVcsNkJBQTZCO0FBQ3hDLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhEQUE4RCxpRUFBaUU7QUFDL0g7QUFDQSxtRUFBbUU7QUFDbkUsNkRBQTZELGdCQUFnQixxQkFBcUI7QUFDbEc7QUFDQSxxQkFBcUI7QUFDckIsaUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3JjX0FwcF90c3guOWY5YWViNDQzMTEwZjhjMDU1ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNvbm5lY3RCdXR0b24gPSB2b2lkIDA7XHJcbmNvbnN0IGFudGRfMSA9IHJlcXVpcmUoXCJhbnRkXCIpO1xyXG5jb25zdCByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmNvbnN0IHdhbGxldF9hZGFwdGVyX3JlYWN0XzEgPSByZXF1aXJlKFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiKTtcclxuY29uc3QgY29udGV4dHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0c1wiKTtcclxuY29uc3QgQ29ubmVjdEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrLCBjaGlsZHJlbiwgZGlzYWJsZWQsIGFsbG93V2FsbGV0Q2hhbmdlLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgd2FsbGV0LCBjb25uZWN0LCBjb25uZWN0ZWQgfSA9IHdhbGxldF9hZGFwdGVyX3JlYWN0XzEudXNlV2FsbGV0KCk7XHJcbiAgICBjb25zdCB7IHNldFZpc2libGUgfSA9IGNvbnRleHRzXzEudXNlV2FsbGV0TW9kYWwoKTtcclxuICAgIGNvbnN0IG9wZW4gPSByZWFjdF8xLnVzZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSksIFtzZXRWaXNpYmxlXSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0IGJ1dHRvbiBjbGljaycpO1xyXG4gICAgICAgIHdhbGxldCA/IGNvbm5lY3QoKS5jYXRjaCgoKSA9PiB7IH0pIDogb3BlbigpO1xyXG4gICAgfSwgW3dhbGxldCwgY29ubmVjdCwgb3Blbl0pO1xyXG4gICAgLy8gb25seSBzaG93IGlmIHdhbGxldCBzZWxlY3RlZCBvciB1c2VyIGNvbm5lY3RlZFxyXG4gICAgaWYgKCF3YWxsZXQgfHwgIWFsbG93V2FsbGV0Q2hhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhbnRkXzEuQnV0dG9uLCB7IC4uLnJlc3QsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLCBkaXNhYmxlZDogY29ubmVjdGVkICYmIGRpc2FibGVkIH0sIGNvbm5lY3RlZCA/IHByb3BzLmNoaWxkcmVuIDogJ0Nvbm5lY3QnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGFudGRfMS5Ecm9wZG93bi5CdXR0b24sIHsgb25DbGljazogaGFuZGxlQ2xpY2ssIGRpc2FibGVkOiBjb25uZWN0ZWQgJiYgZGlzYWJsZWQsIG92ZXJsYXk6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGFudGRfMS5NZW51LCBudWxsLFxyXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudS5JdGVtLCB7IG9uQ2xpY2s6IG9wZW4gfSwgXCJDaGFuZ2UgV2FsbGV0XCIpKSB9LCBcIkNvbm5lY3RcIikpO1xyXG59O1xyXG5leHBvcnRzLkNvbm5lY3RCdXR0b24gPSBDb25uZWN0QnV0dG9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9