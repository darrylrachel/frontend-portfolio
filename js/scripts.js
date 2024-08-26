// window.VANTA.NET({
//     el: "#vanta-bg",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0xff6347, // Customize this color
//     backgroundColor: 0xffffff, // Background color of the effect
//     points: 10.00,
//     maxDistance: 20.00,
//     spacing: 15.00,
//     showDots: false,
//   });

console.log(window.VANTA);
if (window.VANTA && window.VANTA.NET) {
    window.VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc8c8c8,
        backgroundColor: 0xffffff
        // color: 0xff0de9, //0xfdc92d, // 25caca  
        // backgroundColor: 0xffffff // 0x252525
    });
} else {
    console.error("VANTA.NET is not available");
}
