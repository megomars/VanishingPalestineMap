/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'lato, sans-serif': '<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['0px', '0px', '1140px', '790px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"6.jpg",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['0px', '0px', '1140px', '790px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"5.jpg",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '0px', '1140px', '790px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.jpg",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['0px', '0px', '1140px', '790px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.jpg",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '0px', '1140px', '790px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.jpg",'0px','0px']
                        },
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['0px', '0px', '1140px', '790px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['0px', '0px', '1140px', '790px', 'auto', 'auto'],
                            opacity: 0.7,
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3Copy17',
                            type: 'rect',
                            rect: ['96px', '45px', '360px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy2',
                            type: 'rect',
                            rect: ['96px', '103px', '360px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['275px', '45px', '70px', '60px', 'auto', 'auto'],
                            fill: ["rgba(88,88,91,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Land_Control',
                            type: 'text',
                            rect: ['153px', '7px', '244px', '30px', 'auto', 'auto'],
                            text: "Land control",
                            align: "center",
                            font: ['lato, sans-serif', [28, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", ""]
                        },
                        {
                            id: 'Population',
                            type: 'text',
                            rect: ['21px', '121px', '117px', '38px', 'auto', 'auto'],
                            text: "Population",
                            align: "left",
                            font: ['lato, sans-serif', [22, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['42px', '738px', '1078px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy5',
                            type: 'rect',
                            rect: ['22px', '738px', '20px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['20px', '155px', '2px', '585px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy14',
                            type: 'rect',
                            rect: ['22px', '642px', '20px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy13',
                            type: 'rect',
                            rect: ['22px', '544px', '20px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy11',
                            type: 'rect',
                            rect: ['22px', '447px', '20px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy10',
                            type: 'rect',
                            rect: ['22px', '350px', '20px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy9',
                            type: 'rect',
                            rect: ['22px', '253px', '20px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy8',
                            type: 'rect',
                            rect: ['22px', '155px', '20px', '2px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'year',
                            type: 'text',
                            rect: ['650px', '45px', '460px', '38px', 'auto', 'auto'],
                            text: "1917-1939",
                            align: "center",
                            font: ['lato, sans-serif', [30, "px"], "rgba(46,204,113,1.00)", "900", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Jews',
                            type: 'text',
                            rect: ['346px', 'auto', '100px', '50px', 'auto', '690px'],
                            text: "Jews",
                            align: "center",
                            font: ['lato, sans-serif', [22, "px"], "rgba(255,255,255,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", ""]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['205px', '45px', '70px', '60px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Arabs',
                            type: 'text',
                            rect: ['100px', 'auto', '100px', '50px', 'auto', '690px'],
                            text: "Arabs",
                            align: "center",
                            font: ['lato, sans-serif', [22, "px"], "rgba(255,255,255,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", ""]
                        },
                        {
                            id: 'AC',
                            type: 'text',
                            rect: ['205px', 'auto', '70px', '50px', 'auto', '690px'],
                            text: "97%",
                            align: "center",
                            font: ['lato, sans-serif', [22, "px"], "rgba(0,0,0,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", ""]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['20px', '751px', '60px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy8',
                            type: 'rect',
                            rect: ['1070px', '751px', '60px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy6',
                            type: 'rect',
                            rect: ['838px', '751px', '60px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy7',
                            type: 'rect',
                            rect: ['906px', '751px', '60px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy5',
                            type: 'rect',
                            rect: ['579px', '751px', '60px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['220px', '751px', '60px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['386px', '751px', '58px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['445px', '751px', '58px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['327px', '751px', '58px', '30px', 'auto', 'auto'],
                            opacity: 0.25,
                            fill: ["rgba(46,204,113,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'JC',
                            type: 'text',
                            rect: ['275px', 'auto', '70px', '50px', 'auto', '690px'],
                            text: "3%",
                            align: "center",
                            font: ['lato, sans-serif', [22, "px"], "rgba(255,255,255,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", ""]
                        },
                        {
                            id: '_1995',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1995.png",'0px','0px']
                        },
                        {
                            id: '_1993',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1993.png",'0px','0px']
                        },
                        {
                            id: '_1967',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1967.png",'0px','0px']
                        },
                        {
                            id: '_6day',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"6day.png",'0px','0px']
                        },
                        {
                            id: '_1948',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1948.png",'0px','0px']
                        },
                        {
                            id: '_1947',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1947.png",'0px','0px']
                        },
                        {
                            id: 'nakba',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"nakba.png",'0px','0px']
                        },
                        {
                            id: '_1946',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1946.png",'0px','0px']
                        },
                        {
                            id: 'immigration',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"immigration.png",'0px','0px']
                        },
                        {
                            id: '_1917',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"1917.png",'0px','0px']
                        },
                        {
                            id: 'labels',
                            type: 'image',
                            tag: 'img',
                            rect: ['180px', '28px', '690px', '690px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"labels.png",'0px','0px']
                        },
                        {
                            id: 'slider',
                            type: 'rect',
                            rect: ['50px', '734px', '1056px', '10px', 'auto', 'auto'],
                            fill: ["rgba(46,204,113,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'notes',
                            type: 'text',
                            rect: ['320px', '173px', '135px', '72px', 'auto', 'auto'],
                            text: "",
                            align: "center",
                            font: ['lato, sans-serif', [16, "px"], "rgba(172,172,172,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'notesCopy',
                            type: 'text',
                            rect: ['30px', '663px', '170px', '38px', 'auto', 'auto'],
                            text: "Palestinian population",
                            align: "left",
                            font: ['lato, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'notesCopy3',
                            type: 'text',
                            rect: ['122px', '126px', '88px', '38px', 'auto', 'auto'],
                            text: "(in millions)",
                            align: "center",
                            font: ['lato, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'gazawest1',
                            type: 'text',
                            rect: ['534px', '598px', '346px', '38px', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['lato, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'gazawest2',
                            type: 'text',
                            rect: ['494px', '712px', '386px', '38px', 'auto', 'auto'],
                            text: "",
                            align: "left",
                            font: ['lato, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'notesCopy2',
                            type: 'text',
                            rect: ['30px', '693px', '170px', '38px', 'auto', 'auto'],
                            text: "Jewish population",
                            align: "left",
                            font: ['lato, sans-serif', [16, "px"], "rgba(147,147,147,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['1015px', '680px', '50px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(253,253,253,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy',
                            type: 'rect',
                            rect: ['1070px', '680px', '50px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(253,253,253,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['50px', '143px', '88px', '20px', 'auto', 'auto'],
                            opacity: 0.8,
                            text: "6",
                            align: "left",
                            font: ['lato, sans-serif', [18, "px"], "rgba(46,204,113,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['50px', '241px', '88px', '20px', 'auto', 'auto'],
                            opacity: 0.8,
                            text: "5",
                            align: "left",
                            font: ['lato, sans-serif', [18, "px"], "rgba(46,204,113,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['50px', '338px', '88px', '20px', 'auto', 'auto'],
                            opacity: 0.8,
                            text: "4",
                            align: "left",
                            font: ['lato, sans-serif', [18, "px"], "rgba(46,204,113,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy3',
                            type: 'text',
                            rect: ['50px', '436px', '88px', '20px', 'auto', 'auto'],
                            opacity: 0.8,
                            text: "3",
                            align: "left",
                            font: ['lato, sans-serif', [18, "px"], "rgba(46,204,113,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy4',
                            type: 'text',
                            rect: ['50px', '533px', '88px', '20px', 'auto', 'auto'],
                            opacity: 0.8,
                            text: "2",
                            align: "left",
                            font: ['lato, sans-serif', [18, "px"], "rgba(46,204,113,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy5',
                            type: 'text',
                            rect: ['50px', '630px', '88px', '20px', 'auto', 'auto'],
                            opacity: 0.8,
                            text: "1",
                            align: "left",
                            font: ['lato, sans-serif', [18, "px"], "rgba(46,204,113,1.00)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'timeline2',
                            type: 'image',
                            rect: ['16px', '146px', '1090px', '585px', 'auto', 'auto'],
                            clip: 'rect(0px 1088px 600px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"time.png",'0px','0px'],
                            transform: [[],[],[],['0.99817','0.97403']]
                        },
                        {
                            id: 'summary',
                            type: 'text',
                            rect: ['680px', '78px', '400px', '594px', 'auto', 'auto'],
                            text: "<br>The British mandate's main objective was to place historic Palestine under political, administrative and economic conditions that would secure the establishment of a Jewish national home in Palestine.<br><br>Before the British mandate in Palestine, Jews made up three percent of the total population.<br>",
                            align: "left",
                            font: ['lato, sans-serif', [22, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "23px", ""]
                        },
                        {
                            id: 'y1917',
                            type: 'text',
                            rect: ['20px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1917",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy5',
                            type: 'text',
                            rect: ['325px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1946",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy6',
                            type: 'text',
                            rect: ['220px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1939",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy7',
                            type: 'text',
                            rect: ['384px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1947",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy8',
                            type: 'text',
                            rect: ['443px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1948",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy2',
                            type: 'text',
                            rect: ['579px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1967",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy3',
                            type: 'text',
                            rect: ['838px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1993",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy4',
                            type: 'text',
                            rect: ['906px', '710px', '60px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "1995",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "110px", ""]
                        },
                        {
                            id: 'y1917Copy',
                            type: 'text',
                            rect: ['1070px', '730px', '60px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "2014",
                            align: "center",
                            font: ['lato, sans-serif', [20, "px"], "rgba(255,255,255,1)", "300", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "70px", ""]
                        },
                        {
                            id: 'replay',
                            type: 'image',
                            tag: 'img',
                            rect: ['790px', '455px', '500px', '500px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"replay.svg",'0px','0px'],
                            userClass: "",
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'playb',
                            type: 'image',
                            tag: 'img',
                            rect: ['845px', '455px', '500px', '500px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"pause.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1140px', '790px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: true,
                    labels: {
                        "1917": 0,
                        "1939": 11550,
                        "1946": 18000,
                        "1947": 21657,
                        "1948": 24916,
                        "1967": 31924,
                        "1993": 46875,
                        "1995": 50400,
                        "2014": 60000
                    },
                    data: [
                        [
                            "eid45",
                            "opacity",
                            0,
                            15353,
                            "easeInSine",
                            "${_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            31924,
                            14951,
                            "easeInExpo",
                            "${_1967}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            24916,
                            7008,
                            "easeInExpo",
                            "${_1948}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            34500,
                            12375,
                            "easeInSine",
                            "${_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            0,
                            0,
                            "easeInExpo",
                            "${_6day}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid43",
                            "opacity",
                            30338,
                            2662,
                            "easeInExpo",
                            "${_6day}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            33000,
                            8250,
                            "easeInExpo",
                            "${_6day}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "clip",
                            0,
                            60000,
                            "linear",
                            "${timeline2}",
                            [0,34,600,0],
                            [0,1088,600,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid47",
                            "opacity",
                            24916,
                            9583,
                            "easeInSine",
                            "${_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            18000,
                            "easeInSine",
                            "${_1917}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            46875,
                            3525,
                            "easeInExpo",
                            "${_1993}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "opacity",
                            21657,
                            3260,
                            "easeInExpo",
                            "${_1947}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            18000,
                            3657,
                            "easeInExpo",
                            "${_1946}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "width",
                            0,
                            60000,
                            "linear",
                            "${slider}",
                            '1px',
                            '1056px'
                        ],
                        [
                            "eid49",
                            "opacity",
                            46875,
                            9375,
                            "easeInSine",
                            "${_5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            14203,
                            "easeInExpo",
                            "${immigration}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            14204,
                            7453,
                            "easeInExpo",
                            "${immigration}",
                            '1',
                            '0'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            0,
                            "easeInExpo",
                            "${nakba}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid41",
                            "opacity",
                            21657,
                            3912,
                            "easeInExpo",
                            "${nakba}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            25569,
                            3912,
                            "easeInExpo",
                            "${nakba}",
                            '1',
                            '0'
                        ],
                        [
                            "eid46",
                            "opacity",
                            15353,
                            9563,
                            "easeInSine",
                            "${_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text2Copy3}",
                            '436px',
                            '436px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-40799987");
