var http = new XMLHttpRequest()

http.open('GET', 'index.hbs', true)

http.addEventListener('load', function () {
    var source = this.responseText

console.log(source)

var template = Handlebars.compile(source)
var products =

    {
        products : [
        {
            "name": "AKG AVIATION AV100 ANR HEADSET",
            "desc": "A pair of headphones",
            "price": "$45.99",
            "originalPrice": "$75",
            "discount": "-45%",
            "image": "app/img/Headphones.png",
            "altText": "headphones"
        },
        {
            "name": "ALPHA INDUSTRIES MEN'S CWU PILOT X FLIGHT JACKET",
            "desc": "An awesome coat",
            "price": "$120",
            "originalPrice": "$120",
            "image": "app/img/bomberJacket.png",
            "altText": "bomber jacket"
        },
        {
            "name": "AMERICAN OPTICAL ORIGINAL PILOT EYEWEAR 57MM FRAME",
            "desc": "Swanky shades",
            "price": "$55",
            "originalPrice": "$65",
            "discount": "-15%",
            "image": "app/img/aviators.png",
            "altText": "aviators"
        },
        {
            "name": "ASPEN AVIONICS EVOLUTION",
            "desc": "Navigation equipment",
            "price": "$150",
            "originalPrice": "$160",
            "discount": "-6%",
            "image": "app/img/navigationSystem.png",
            "altText": "navigation system"
        },
        {
            "name": "AVIDYNE EX5000 R8.0 CIRRUS MULTIFUNCTION DISPLAY",
            "desc": "Whichever aircraft part you need...",
            "price": "$45.99",
            "originalPrice": "$75",
            "discount": "-45%",
            "image": "app/img/dashComputer.png",
            "altText": "onboard computer"
        },
        {
            "name": "COCOONS FITOVERS POLARISED SUNGLASSES PILOT (LG)",
            "desc": "We serve pilots of all kinds of...",
            "price": "$120",
            "originalPrice": "$120",
            "image": "app/img/sunglasses.png",
            "altText": "sunglasses"
        },
        {
            "name": "DAVID CLARK DC X11P PANEL ANR ENC AVIATION PILOT",
            "desc": "Our store was created back in 19...",
            "price": "$66.00",
            "originalPrice": "$76.00",
            "discount": "-15%",
            "image": "app/img/wiredHeadphones.png",
            "altText": "wired headphones"
        },
        {
            "name": "GARMIN AERA 796",
            "desc": "We care about our loyal customer",
            "price": "$112",
            "originalPrice": "$160",
            "image": "app/img/satNav.png",
            "altText": "mobile satnavs"
        }
    ]
    }

    var html = template(products)
    document.getElementById('productItems').innerHTML= html
})

http.send()

