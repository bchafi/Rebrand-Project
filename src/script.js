window.onload = function() {
    console.log("JavaScript loaded and executed.");
    // Define a variable for the price
    const products = [
        { title: "IMPLAYER IPTV", img: "src/implayer.png", alt:"Rebrand IMPLAYER APP" , price:"80$"},
        { title: "IBO 26 Themes V4.1", img: "src/ibo26.jpg", alt:"Rebrand Ibo Sky" , price:"100$"},
        { title: "IBO 17 Themes", img: "src/ibomulti.png", alt:"Rebrand Ibo Sky" , price:"100$"},
        { title: "Rebrand Smarter V4", img: "src/Smarterv4.jpg", alt:"Smarters v4" , price:"100$"},
        { title: "Rebrand Tivimate V5", img: "src/tivimate5.jpg", alt:"Rebrand tivimate5 hd plus" , price:"100$"},
        { title: "IPTV Rebrand IBO SKY", img: "src/Ibosky.png", alt:"Rebrand Ibo Sky" , price:"100$"},
        { title: "Rebrand CenimaHD Plus", img: "src/cenima.png", alt:"Rebrand cenima hd plus" , price:"100$"},
        { title: "Rebrand Smarter Navy", img: "src/dino.png", alt:"Rebrand Sky Smart Player" , price:"100$"},
        { title: "Rebrand SkySmart", img: "src/sky.jpg", alt:"Rebrand Sky Smart Player" , price:"100$"},
        { title: "Rebrand Perfect Player", img: "src/perfectplayer.jpg", alt:"Rebrand perfect Player" , price:"100$"},
        { title: "Rebranding Iptv Sky", img: "src/skysmart.png", alt:"Branded design for IPTV Sky Smarter", price:"100$" },
        { title: "Rebrand Xtream Smarter", img: "src/xtreamsmarter.jpg", alt:"Customized design for Xtream Smarter IPTV app showcasing branded elements", price:"100$" },
        { title: "Neutro Iptv V7 ", img: "src/Neutro.jpg", alt:"Custom Neutro IPTV application design with unique branding", price:"100$" },        
        { title: "Brand IBO COLORED Theme V3.9", img: "src/colored.jpg", alt:"Colorful branding design for IBO IPTV application version 3.9", price:"100$", price:"100$" },
        { title: "IBO GOLD Theme V3.9", img: "src/gold.jpg", alt:"Elegant gold-themed branding for IBO IPTV application version 3.9", price:"100$" },
        { title: "Get SmaraterADS iptv v4", img: "src/smaarterbigads.png", alt:"Promotional design for SmaraterADS IPTV version 4 with branded features", price:"100$" },
        { title: "Rebrand XCIPTV 911", img: "src/XC911.jpg", alt:"Custom branding for XCIPTV 911 application showcasing unique logos", price:"100$" },
        { title: "VuPlayer V3 Rebrand", img: "src/vu.jpg", alt:"Rebranded VuPlayer V3 IPTV app design with distinctive branding", price:"100$" },
        { title: "Revamped BOB PLAYER Version 2", img: "src/BOBPlayerv2.jpg", alt:"Updated design for BOB PLAYER v2 featuring custom branding elements", price:"100$" },
        { title: "Enhanced BOB PLAYER Version 3", img: "src/bobv3.jpg", alt:"Distinctive branding design for BOB PLAYER v3 IPTV application", price:"100$" },
        { title: "Smarter IPTV Version 4 Rebranding", img: "src/e.jpg", alt:"Customized branding for Smarter IPTV application version 4", price:"100$" },
        { title: "Smarter Pro IPTV Application Rebrand", img: "src/smrt3pro.jpg", alt:"Professional branding design for Smarter Pro IPTV application", price:"100$" },
        { title: "Smarter IPTV with ADS Version 3", img: "src/smarterv3.jpg", alt:"Full-featured branding for Smarter IPTV application with advertisements", price:"100$" },
        { title: "IBO PLAYER Comprehensive Rebranding", img: "src/i1.jpg", alt:"Comprehensive rebranding for IBO PLAYER IPTV application with logos", price:"100$" },
        { title: "XCIPTV Version 803 Custom Branding", img: "src/XC803.png", alt:"Tailored XCIPTV V803 application design with custom branding", price:"100$" },
        { title: "XCIPTV Version 722 Distinctive Branding", img: "src/xc722.png", alt:"Distinctive branding for XCIPTV V722 IPTV application", price:"100$" },
        { title: "Rebranding for BOB PLAYER Application", img: "src/BOBPlayer.jpg", alt:"Updated branding design for BOB PLAYER IPTV application", price:"100$" }
      ];
  
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error("Could not find the 'product-list' element.");
        return;
    }
    products.forEach(product => {
        const box = document.createElement('div');
        box.classList.add('box');
        // Use the globalPrice variable for all products
        box.innerHTML = `<div class="image-container">
                    <a href="https://t.me/IPTV_REBRAND" target="_blank" rel="noopener noreferrer">
                        <img src="${product.img}" alt="${product.alt}" width="500" height="300" loading="lazy">
                    </a>
                </div>
            <h1>${product.title}</h1>
            <h2>${product.title.toUpperCase()} Multi Dns ${product.price}$</h2>
            <a href="https://t.me/IPTV_REBRAND" target="_blank" rel="noopener noreferrer" class="button">Get Trial APP Now</a>
        `;
        productList.appendChild(box);
    });
};
// Call the function to generate the product boxes on page load