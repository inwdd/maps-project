// Adding Icon
var circleIcon = L.icon (
    {   className: 'icon1',
        iconUrl : 'lib/icon_circle2.png',
        shadowUrl: 'lib/icon_circle.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)

var MCIcon = L.icon (
    {
        iconUrl : 'lib/icon_MC2.png',
        shadowUrl: 'lib/icon_MC.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)

var RCIcon = L.icon (
    {
        iconUrl : 'lib/icon_RC2.png',
        shadowUrl: 'lib/icon_RC.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)

var StarIcon = L.icon (
    {
        iconUrl : 'lib/icon_star2.png',
        shadowUrl: 'lib/icon_star.png',
        iconSize : [20, 20],
        shadowSize: [20, 20],
        iconAnchor : [10, 9.5],
        popupAnchor : [0, 42]
    }
)

var projectSites = [
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [35.388162, 14.044225]
        },
        "properties": {
            "name": "Gadarief, SU",
            "info": "-Programme Area: Al-Qadarif <br> -16 Activities",
            "country": "sudan",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["IOM"],
            },
            "partner" : ["IOM"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zgadarief.png",
            "countryflag": "<img height=12px src=lib/cSUbig.png>  ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [36.149322, 12.960314]
        },
        "properties": {
            "name": "Galabat, SU",
            "info": "-Programme Area: Galabat <br> -16 Activities",
            "country": "sudan",
            "activity": {
                "health" : ["UNICEF", "IOM"],
                "wash": ["UNICEF"],
                "gbv": ["UNICEF"],
                "rcce": ["UNICEF", "IOM"],
                "ppe": ["UNOPS", "UNICEF", "IOM"],
                "testing": ["UNOPS"],
                "ambulances": ["UNOPS"],
                "trade": ["TMEA"],
            },
            "partner" : ["UNOPS", "UNICEF", "IOM", "TMEA"],
            "pin_icon": MCIcon,
            "boxcontent": "lib/zgalabat.png",
            "countryflag": "<img height =12px src=lib/cSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [36.413976, 15.455983]
        },
        "properties": {
            "name": "Hamdayet, SU",
            "info": "-Programme Area: Kassala <br> -16 Activities",
            "country": "sudan",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zhamdayet.png",
            "countryflag": "<img height =12px src=lib/cSUbig.png> ",
          
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [33.020113, 12.526098]
        },
        "properties": {
            "name": "Jodah, SU",
            "info": "-Programme Area: Rabak <br> -X Activities",
            "country": "sudan",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zjodah.png",
            "countryflag": "<img height =12px src=lib/cSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [32.244053, 14.165762]
        },
        "properties": {
            "name": "White Nile, SU",
            "info": "-Programme Area: White Nile <br> -X Activities",
            "country": "sudan",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": RCIcon,
            "boxcontent": "lib/zwhitenile.png",
            "countryflag": "<img height =12px src=lib/cSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [31.598537, 4.851911]
        },
        "properties": {
            "name": "Juba, SSU",
            "info": "-Programme Area: Juba <br> -X Activities",
            "country": "southsudan",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": StarIcon,
            "boxcontent": "lib/zjuba.png",
            "countryflag": "<img height =12px src=lib/cSSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [33.040016, 10.053668]
        },
        "properties": {
            "name": "Maban, SSU",
            "info": "-Programme Area: Maban <br> -X Activities",
            "country": "southsudan",
            "activity": {
                "health" : ["UNICEF"],
                "wash" : ["UNICEF"],
                "gbv" : ["UNICEF"],
                "rcce" : ["UNICEF"],
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "UNICEF"],
            "pin_icon": RCIcon,
            "boxcontent": "lib/zmaban.png",
            "countryflag": "<img height =12px src=lib/cSSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [34.283834, 4.405186]
        },
        "properties": {
            "name": "Nadapal, SSU",
            "info": "-Programme Area: Nadapal <br> -X Activities",
            "country": "southsudan",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/znadapal.png",
            "countryflag": "<img height =12px src=lib/cSSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [32.068238, 3.586098]
        },
        "properties": {
            "name": "Nimule, SSU",
            "info": "-Programme Area: Nimule Town <br> -X Activities",
            "country": "southsudan",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],
                "facilities" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/znimule.png",
            "countryflag": "<img height =12px src=lib/cSSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [32.797374, 11.835407]
        },
        "properties": {
            "name": "Renk, SSU",
            "info": "-Programme Area: Renk <br> -X Activities",
            "country": "southsudan",
            "activity": {
                "health" : ["UNICEF"],
                "wash" : ["UNICEF"],
                "gbv" : ["UNICEF"],
                "rcce" : ["UNICEF"],
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "facilities" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "UNICEF"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zrenk.png",
            "countryflag": "<img height =12px src=lib/cSSUbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [31.790426, 3.375915]
        },
        "properties": {
            "name": "Adjumani, UG",
            "info": "-Programme Area: Adjumani <br> -X Activities",
            "country": "uganda",
            "activity": {
                "health" : ["UNICEF", "IOM"],
                "wash" : ["UNICEF", "IOM"],
                "gbv" : ["UNICEF", "IOM"],
                "rcce" : ["UNICEF", "IOM"],
                "ppe" : ["UNOPS", "IOM"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNICEF"],

            },
            "partner" : ["UNOPS", "UNICEF", "IOM"],
            "pin_icon": RCIcon,
            "boxcontent": "lib/zadjumani.png",
            "countryflag": "<img height =12px src=lib/cUGbig.png> ",
            }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [34.090577, 0.468229]
        },
        "properties": {
            "name": "Busia, UG",
            "info": "-Programme Area: Busia <br> -X Activities",
            "country": "uganda",
            "activity": {
                "ppe" : ["UNOPS", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],
            },
            "partner" : ["UNOPS", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zbusia.png",
            "countryflag": "<img height =12px src=lib/cUGbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [32.071642, 3.563650]
        },
        "properties": {
            "name": "Elegu, UG",
            "info": "-Programme Area: Elegu <br> -X Activities",
            "country": "uganda",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS", "IOM", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zelegu.png",
            "countryflag": "<img height =12px src=lib/cUGbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [34.263055, 0.641313]
        },
        "properties": {
            "name": "Malaba, UG",
            "info": "-Programme Area: Malaba <br> -X Activities",
            "country": "uganda",
            "activity": {
                "ppe" : ["UNOPS", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],
            },
            "partner" : ["UNOPS", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zmalaba.png",
            "countryflag": "<img height =12px src=lib/cUGbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [40.305615, 0.057190]
        },
        "properties": {
            "name": "Daadab, KE",
            "info": "-Programme Area: Daadab <br> -X Activities",
            "country": "kenya",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM", "UNICEF"],
                "rcce" : ["IOM"],
                "ppe" : ["IOM"],
            },
            "partner" : ["UNICEF", "IOM"],
            "pin_icon": RCIcon,
            "boxcontent": "lib/zdaadab.png",
            "countryflag": "<img height =12px src=lib/cKEbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [40.959344, 0.994737]
        },
        "properties": {
            "name": "Diif, KE",
            "info": "-Programme Area: Diif <br> -X Activities",
            "country": "kenya",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM", "UNICEF"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM", "UNICEF"],
                "ppe" : ["UNOPS", "IOM"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],

            },
            "partner" : ["UNOPS", "UNICEF", "IOM"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zdiif.png",
            "countryflag": "<img height =12px src=lib/cKEbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [39.641166, -0.455128]
        },
        "properties": {
            "name": "Garissa, KE",
            "info": "-Programme Area: Garissa <br> -X Activities",
            "country": "kenya",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": RCIcon,
            "boxcontent": "lib/zgarissa.png",
            "countryflag": "<img height =12px src=lib/cKEbig.png> ",
            }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [41.857806, 3.939194]
        },
        "properties": {
            "name": "Mandera, KE",
            "info": "-Programme Area: Mandera <br> -X Activities",
            "country": "kenya",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS", "IOM"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "IOM"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zmandera.png",
            "countryflag": "<img height =12px src=lib/cKEbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [37.991614, 2.339366]
        },
        "properties": {
            "name": "Marsabit, KE",
            "info": "-Programme Area: Marsabit/Moyale <br> -X Activities",
            "country": "kenya",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "trade" : ["TMEA"],
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zmarsabit.png",
            "countryflag": "<img height =12px src=lib/cKEbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [35.639530, 3.446768]
        },
        "properties": {
            "name": "Turkana, KE",
            "info": "-Programme Area: Lodwar <br> -X Activities",
            "country": "kenya",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zturkana.png",
            "countryflag": "<img height =12px src=lib/cKEbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [43.644664, 3.121935]
        },
        "properties": {
            "name": "Baidoa, SO",
            "info": "-Programme Area: Baidoa <br> -X Activities",
            "country": "somalia",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
            },
            "partner" : ["IOM"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zbaidoa.png",
            "countryflag": "<img height =12px src=lib/cSObig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [41.874911, 3.924454]
        },
        "properties": {
            "name": "Belet Hawa, SO",
            "info": "-Programme Area: Belet Hawa <br> -X Activities",
            "country": "somalia",
            "activity": {
                "ppe" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zbelethawa.png",
            "countryflag": "<img height =12px src=lib/cSObig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [49.180776, 11.282172]
        },
        "properties": {
            "name": "Bosasso, SO",
            "info": "-Programme Area: Bosasso <br> -X Activities",
            "country": "somalia",
            "activity": {
                "health" : ["UNICEF", "IOM"],
                "wash" : ["UNICEF", "IOM"],
                "gbv" : ["UNICEF", "IOM"],
                "rcce" : ["UNICEF", "IOM"],
                "ppe" : ["UNOPS", "UNICEF"],
                "testing" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "UNICEF", "IOM"],
            "pin_icon": MCIcon,
            "boxcontent": "lib/zbosasso.png",
            "countryflag": "<img height =12px src=lib/cSObig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [41.010596, 0.413374]
        },
        "properties": {
            "name": "Dhoblei, SO",
            "info": "-Programme Area: Dhoblei <br> -X Activities",
            "country": "somalia",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "IOM"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zdhoblei.png",
            "countryflag": "<img height =12px src=lib/cSObig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [40.964303, 0.994551]
        },
        "properties": {
            "name": "Diif, SO",
            "info": "-Programme Area: Diif <br> -X Activities",
            "country": "somalia",
            "activity": {
                "health" : ["UNICEF"],
                "wash" : ["UNICEF"],
                "gbv" : ["UNICEF"],
                "rcce" : ["UNICEF"],
                "ppe" : ["UNICEF"],
                "testing" : ["UNICEF"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "UNICEF"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zdiif2.png",
            "countryflag": "<img height =12px src=lib/cSObig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [45.337671, 2.037124]
        },
        "properties": {
            "name": "Mogadishu, SO",
            "info": "-Programme Area: Mogadishu <br> -X Activities",
            "country": "somalia",
            "activity": {
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
            },
            "partner" : ["UNOPS"],
            "pin_icon": StarIcon,
            "boxcontent": "lib/zmogadishu.png",
            "countryflag": "<img height =12px src=lib/cSObig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [43.335718, 9.602048]
        },
        "properties": {
            "name": "Wajale, SO",
            "info": "-Programme Area: Wajale <br> -X Activities",
            "country": "somalia",
            "activity": {
                "ppe" : ["UNOPS", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],
            },
            "partner" : ["UNOPS", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zwajale.png",
            "countryflag": "<img height =12px src=lib/cSObig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [42.704840, 11.154281]
        },
        "properties": {
            "name": "Ali Sabieh, DJ",
            "info": "-Programme Area: Ali Sabieh <br> -X Activities",
            "country": "djibouti",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM", "UNICEF"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM", "UNICEF"],
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"]
            },
            "partner" : ["UNOPS", "UNICEF", "IOM"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zalisabieh.png",
            "countryflag": "<img height =12px src=lib/cDJbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [43.142559, 11.608643]
        },
        "properties": {
            "name": "Djibouti Port, DJ",
            "info": "-Programme Area: Djibouti <br> -X Activities",
            "country": "djibouti",
            "activity": {
                "ppe" : ["TMEA"],
                "trade" : ["TMEA"],
            },
            "partner" : ["TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zdjiboutiport.png",
            "countryflag": "<img height =12px src=lib/cDJbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [42.476356, 12.150212]
        },
        "properties": {
            "name": "Dora, DJ",
            "info": "-Programme Area: Dora <br> -X Activities",
            "country": "djibouti",
            "activity": {
                "health" : ["UNICEF"],
                "wash" : ["UNICEF"],
                "gbv" : ["UNICEF"],
                "rcce" : ["UNICEF"],
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "UNICEF"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zdora.png",
            "countryflag": "<img height =12px src=lib/cDJbig.png> ",
         }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [41.837472, 11.717967]
        },
        "properties": {
            "name": "Galafi, DJ",
            "info": "-Programme Area: Galafi <br> -X Activities",
            "country": "djibouti",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zgalafi.png",
            "countryflag": "<img height =12px src=lib/cDJbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [43.293760, 11.964294]
        },
        "properties": {
            "name": "Obock, DJ",
            "info": "-Programme Area: Obock <br> -X Activities",
            "country": "djibouti",
            "activity": {
                "health" : ["UNICEF"],
                "wash" : ["UNICEF"],
                "gbv" : ["UNICEF"],
                "ppe" : ["UNOPS"],
                "testing" : ["UNOPS"], 
            },
            "partner" : ["UNOPS", "UNICEF"],
            "pin_icon": MCIcon,
            "boxcontent": "lib/zobock.png",
            "countryflag": "<img height =12px src=lib/cDJbig.png> ",
        }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [43.287527, 11.964997]
        },
        "properties": {
            "name": "Obock (Merkazi), DJ",
            "info": "-Programme Area: Obock <br> -X Activities",
            "country": "djibouti",
            "activity": {
                "health" : ["UNICEF"],
                "wash" : ["UNICEF"],
                "gbv" : ["UNICEF"],
                "rcce" : ["UNICEF"],
            },
            "partner" : ["UNICEF"],
            "pin_icon": RCIcon,
            "boxcontent": "lib/zobock2.png",
            "countryflag": "<img height =12px src=lib/cDJbig.png> ",
        }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [34.591613, 8.248250]
      },
      "properties": {
            "name": "Gambela, ET",
            "info": "-Programme Area: Gambela <br> -X Activities",
            "country": "ethiopia",
            "activity": {
                "health" : ["UNICEF", "IOM"],
                "wash" : ["IOM"],
                "gbv" : ["UNICEF"],
                "rcce" : ["UNICEF"],
                "ppe" : ["UNOPS", "IOM", "UNICEF"],
                "testing" : ["UNOPS"],
                "ambulances": [],
            },
            "partner" : ["UNOPS", "UNICEF", "IOM"],
            "pin_icon": RCIcon,
            "boxcontent": "lib/zgambela.png",
            "countryflag": "<img height =12px src=lib/cETbig.png> ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [41.736924, 11.876704]
      },
      "properties": {
            "name": "Hawli, ET",
            "info": "-Programme Area: Hawli <br> -X Activities",
            "country": "ethiopia",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS", "IOM", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],  
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zhawli.png",
            "countryflag": "<img height =12px src=lib/cETbig.png> ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [36.152759, 12.958203]
      },
      "properties": {
            "name": "Metema, ET",
            "info": "-Programme Area: Galabat <br> -X Activities",
            "country": "ethiopia",
            "activity": {
                "health" : ["IOM"],
                "wash" : ["IOM"],
                "gbv" : ["IOM"],
                "rcce" : ["IOM"],
                "ppe" : ["UNOPS", "IOM", "TMEA"],
                "testing" : ["UNOPS"],
                "ambulances" : ["UNOPS"],
                "trade" : ["TMEA"],  
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/zmetema.png",
            "countryflag": "<img height =12px src=lib/cETbig.png> ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [39.052264, 3.530475]
      },
      "properties": {
        "name": "Moyale, ET",
        "info": "-Programme Area: Moyale <br> -X Activities",
        "country": "ethiopia",
        "activity": {
            "health" : ["IOM"],
            "wash" : ["IOM"],
            "gbv" : ["IOM"],
            "rcce" : ["IOM"],
            "ppe" : ["UNOPS", "IOM"],
            "ambulances" : ["UNOPS"],
            "trade" : ["TMEA"],  
        },
        "partner" : ["UNOPS", "IOM", "TMEA"],
        "pin_icon": circleIcon,
        "boxcontent": "lib/zmoyale.png",
        "countryflag": "<img height =12px src=lib/cETbig.png> ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [41.006512, 11.794918]
      },
      "properties": {
            "name": "Semera, ET",
            "info": "-Programme Area: Semera <br> -X Activities",
            "country": "ethiopia",
            "activity": {
                "health" : ["UNICEF"],
                "wash" : ["UNICEF"],
                "gbv" : ["UNICEF"],
                "rcce" : ["UNICEF"],
                "ppe" : ["UNOPS", "UNICEF", "IOM"],
                "testing" : ["UNOPS"],
            },
            "partner" : ["UNOPS", "UNICEF", "IOM"],
            "pin_icon": MCIcon,
            "boxcontent": "lib/zsemera.png",
            "countryflag": "<img height =12px src=lib/cETbig.png> ",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [43.182245, 9.500747]
      },
      "properties": {
            "name": "Tog Wajale, ET",
            "info": "-Programme Area: Wajale <br> -X Activities",
            "country": "ethiopia",
            "activity": {
                "ppe" : ["UNOPS", "IOM", "TMEA"],
                "trade" : ["TMEA"],  
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/ztogwajale.png",
            "countryflag": "<img height =12px src=lib/cETbig.png> ",
      }
    },

]