console.log("main.js")
const registerServiceWorker = async () => {
    console.log("serviceWorker");
    if ("serviceWorker" in navigator) {
        console.log("支持serviceWorker");
        try {
            const registration = await navigator.serviceWorker.register("/sw.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("正在安装 Service worker");
            } else if (registration.waiting) {
                console.log("已安装 Service worker installed");
            } else if (registration.active) {
                console.log("激活 Service worker");
            }
        } catch (error) {
            console.error(`注册失败：${error}`);
        }
    } else {
        console.log("不支持serviceWorker");
    }
};