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
            "info": "Put # of Activities | Province | Else... | Put map on Project Website",
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
            "info": "Info on Galabat. Shop No 7, Ground Floor, Chemox House, Hospital Lane, Barrack Rd, New Marine Lines, Mumbai, Maharashtra 400020, India",
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
            "info": "Hamdayet Info goes here!",
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
            "info": "Jodah Info. Lower Parel, Mumbai, Maharashtra 400013, India",
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
            "info": "White Nile Info. Shop No 2, Ground floor Kanakia Zillion, LBS Marg, Kurla West, Mumbai, Maharashtra 400070, India",
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
            "info": "Juba Text goes here. No. 1-5, Building, Shop, No. 35, Evershine Millennium Paradise, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101, India",
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
            "info": "Maban Text: Floor,Shop No. A,Municipal No. 26A & 27A-UA Jawahar Nagar,Kamla Nagar, near Malka Ganj, Chowk, Delhi 110007, India",
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
            "info": "SHOP NO. 10-11, COMMUNITY CENTRE, Garg Mall, Pocket 4, Sector 11, Rohini, New Delhi, Delhi 110020, India",
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
            "info": "Nimule Text. Plot No. 7,LSC, Pankaj Plaza, near Prince Apartments, I.P.Extension, Patparganj, New Delhi, Delhi 110092, India",
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
            "info": "Renk - No.16, Ground Floor, Community Center Rd, Pocket A, Okhla Phase I, Okhla Industrial Area, New Delhi, Delhi 110020, India",
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
            "info": "Adjumani Text Ground Floor, Shop no. 3 & 4, Dist, Chinar Park, Noapara, Sukanta Pally, Newtown, Kolkata, West Bengal 700157, India",
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
            "info": "Busia 3A, Humayun Place Near New Empire Cinema, Esplanade, New Market Area, Dharmatala, Kolkata, West Bengal 700087, India",
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
            "info": "Elegu : Municipality, 352/1889, Dakshminayan Barasat Road Under Panhihati, Sodepur, Kolkata, West Bengal 700110, India",
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
            "info": "Malaba Plot No. 99A, Block F, Nalini Ranjan Ave, New Alipore, Kolkata, West Bengal 700053, India",
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
            "info": "Daadab Plot No. 50 & 51, Survey No. 301/2, 313/1, 304/2, Shop No. G - 7 & 8 Ground Floor, Opp. Gujarat High Court, S. G. Road Town Planning Scheme No. 28, Ahmedabad, Gujarat 380061, India",
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
            "info": "Diif (Kenya) Neelgagan Plaza, 1st And 2nd Floor Survey Number 2259 Commissioner Office, Dr Ambedkar Rd, Opposite Police, Jain Colony, Shahibag, Ahmedabad, Gujarat 380004, India",
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
            "info": "Garissa A1 Amrapali Axiom, Sardar Patel Ring Rd, Ambli, Ahmedabad, Gujarat 380058, India",
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
            "info": "Mandera Shop Number A/03 & A/04, Ground Floor, Gujarat 382350, India",
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
            "info": "Marsabit Shop no 31/A, Ground floor, Shoppers Orbit, Next Mahalaxsmi Complex Near Visharantwadi Police Chowki, Dhanori Rd, Pune, Maharashtra 411015, India",
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
            "info": "Turkana Shop No:4,5,14,15,16 & 17 Fortune Plaza, Hadapsar, Pune, Maharashtra 411028, India",
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
            "info": "Baidoa Plot No. 7, Dhanlaxmi Society, Opp. Jagtap Hospital, Pune, Maharashtra 411051, India",
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
            "info": "Belet Hawa Bus Stop, Shop No. 6 & 7, opposite Deccan Gymkhana, Pune, Maharashtra 411004, India",
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
            "info": "Bosasso Cipla Foundation, Survey No. 116/1, Shop No. 2, Opposite, Warje, Pune, Maharashtra 411058, India",
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
            "info": "Dhoblei Dukes Complex, 120, Bharathiar Salai, Melapudur, Cantonment, Tiruchirappalli, Tamil Nadu 620001, India",
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
            "info": "Diif (Somalia) Vignesh Plaza, A-6, Ground Floor, Thillai Nagar Main Rd, Tiruchirappalli, Tamil Nadu 620018, India",
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
            "info": "Mogadishu Shop No. G5, G6 and G7, Ground Floor, Jaipur Rd, Hathi Bhata, Ajmer, Rajasthan 305001, India",
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
            "info": "Wajale Domino'S Pizza Ground Floor Shop No 2 Shiv Mandir cinema, Fatehpur Rd, Sikar, Rajasthan 332001, India",
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
            "info": "Ali Sabieh Khasra No. 489 & 490, V Square Mall, Alwar Bypass Road, Sector-15, Bhiwadi, Rajasthan 301019, India",
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
            "info": "Djibouti Port A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Dora A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Galafi A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Obock A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Obock (Merkazi) A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Gambela Text A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Hawli Text A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Metema A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
        "info": "Moyale A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Semera A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
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
            "info": "Tog Wajale A-47, Jhalawar Road, Indraprastha Industrial Area, Kota, Rajasthan 324005, India",
            "country": "ethiopia",
            "activity": {
                "health" : ["UNOPS", "IOM", "TMEA"],
                "trade" : ["TMEA"],  
            },
            "partner" : ["UNOPS", "IOM", "TMEA"],
            "pin_icon": circleIcon,
            "boxcontent": "lib/ztogwajale.png",
            "countryflag": "<img height =12px src=lib/cETbig.png> ",
      }
    },

]