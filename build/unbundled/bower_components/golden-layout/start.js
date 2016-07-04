$(function(){console.log("inside start.js");var e=function(){};e.prototype.getStocksBySymbol=function(e){var o,c=[];for(o=0;o<n.length;o++)e.indexOf(n[o].symbol)!==-1&&c.push(n[o]);return c};var n=[{symbol:"III",company:"3i Group",price:376.6,change:1.6,changeRel:.42,volume:1},{symbol:"ADN",company:"Aberdeen Asset Management",price:429.3,change:2.9,changeRel:.67,volume:2},{symbol:"ADM",company:"Admiral Group",price:1,change:8,changeRel:.64,volume:523},{symbol:"AGK",company:"Aggreko",price:1,change:7,changeRel:.43,volume:608},{symbol:"AAL",company:"Anglo American",price:1,change:5.5,changeRel:.37,volume:3},{symbol:"ANTO",company:"Antofagasta",price:761.5,change:2.5,changeRel:.33,volume:1},{symbol:"ARM",company:"ARM Holdings",price:938,change:16.5,changeRel:1.73,volume:2},{symbol:"AHT",company:"Ashtead Group",price:1,change:1,changeRel:.1,volume:1},{symbol:"ABF",company:"Associated British Foods",price:2,change:11,changeRel:.42,volume:823},{symbol:"AZN",company:"AstraZeneca",price:4,change:23,changeRel:.51,volume:1},{symbol:"AV",company:"Aviva",price:526.5,change:1,changeRel:.19,volume:4},{symbol:"BAB",company:"Babcock International Group",price:1,change:25,changeRel:2.35,volume:1},{symbol:"BA",company:"BAE Systems",price:458.1,change:.9,changeRel:.2,volume:4},{symbol:"BARC",company:"Barclays",price:229.4,change:.6,changeRel:.26,volume:35},{symbol:"BDEV",company:"Barratt Developments",price:385,change:4.3,changeRel:1.1,volume:3},{symbol:"BG",company:"BG Group",price:1,change:25,changeRel:2.12,volume:5},{symbol:"BLT",company:"BHP Billiton",price:1,change:6.5,changeRel:.35,volume:5},{symbol:"BP",company:"BP",price:468.3,change:1.85,changeRel:.39,volume:20},{symbol:"BATS",company:"British American Tobacco",price:3,change:4,changeRel:.11,volume:2},{symbol:"BLND",company:"British Land Co",price:713.5,change:6.5,changeRel:.9,volume:1},{symbol:"BSY",company:"British Sky Broadcasting Group",price:875,change:1,changeRel:.11,volume:2},{symbol:"BT.A",company:"BT Group",price:387.3,change:2.1,changeRel:.54,volume:9},{symbol:"BNZL",company:"Bunzl",price:1,change:17,changeRel:1.06,volume:512},{symbol:"BRBY",company:"Burberry Group",price:1,change:2,changeRel:.13,volume:966},{symbol:"CPI",company:"Capita",price:1,change:10,changeRel:.85,volume:588},{symbol:"CCL",company:"Carnival",price:2,change:1,changeRel:.04,volume:1},{symbol:"CNA",company:"Centrica",price:319.9,change:2.1,changeRel:.65,volume:9},{symbol:"CCH",company:"Coca-Cola HBC AG (CDI)",price:1,change:5,changeRel:.36,volume:319},{symbol:"CPG",company:"Compass Group",price:967,change:6.5,changeRel:.67,volume:2},{symbol:"CRH",company:"CRH",price:1,change:33,changeRel:2.23,volume:2},{symbol:"DGE",company:"Diageo",price:1,change:40.5,changeRel:2.23,volume:5},{symbol:"EZJ",company:"easyJet",price:1,change:35,changeRel:2.51,volume:1},{symbol:"EXPN",company:"Experian",price:1,change:14,changeRel:1.31,volume:1},{symbol:"FRES",company:"Fresnillo",price:821,change:5,changeRel:.61,volume:777},{symbol:"FLG",company:"Friends Life Group Limited",price:303,change:.4,changeRel:.13,volume:2},{symbol:"GFS",company:"G4S",price:260.4,change:.9,changeRel:.35,volume:2},{symbol:"GKN",company:"GKN",price:340.5,change:7.3,changeRel:2.1,volume:4},{symbol:"GSK",company:"GlaxoSmithKline",price:1,change:9,changeRel:.62,volume:7},{symbol:"GLEN",company:"Glencore",price:355.5,change:3.25,changeRel:.91,volume:25},{symbol:"HMSO",company:"Hammerson",price:603,change:3.5,changeRel:.58,volume:1},{symbol:"HL",company:"Hargreaves Lansdown",price:987.5,change:17.5,changeRel:1.74,volume:775},{symbol:"HSBA",company:"HSBC Holdings",price:658.2,change:.8,changeRel:.12,volume:14},{symbol:"IMI",company:"IMI",price:1,change:12,changeRel:.92,volume:515},{symbol:"IMT",company:"Imperial Tobacco Group",price:2,change:11,changeRel:.4,volume:1},{symbol:"IHG",company:"InterContinental Hotels Group",price:2,change:22,changeRel:.94,volume:783},{symbol:"IAG",company:"International Consolidated Airli..",price:373,change:1,changeRel:.27,volume:5},{symbol:"ITRK",company:"Intertek Group",price:2,change:4,changeRel:.15,volume:184},{symbol:"INTU",company:"Intu Properties",price:341.1,change:.1,changeRel:.03,volume:1},{symbol:"ITV",company:"ITV",price:215,change:1.5,changeRel:.69,volume:12},{symbol:"JMAT",company:"Johnson Matthey",price:3,change:32,changeRel:1.01,volume:251},{symbol:"KGF",company:"Kingfisher",price:315.9,change:3.1,changeRel:.97,volume:7},{symbol:"LAND",company:"Land Securities Group",price:1,change:1,changeRel:.09,volume:1},{symbol:"LGEN",company:"Legal & General Group",price:237.1,change:1,changeRel:.42,volume:8},{symbol:"LLOY",company:"Lloyds Banking Group",price:73.54,change:1.04,changeRel:1.39,volume:83},{symbol:"LSE",company:"London Stock Exchange Group",price:1,change:10,changeRel:.54,volume:481},{symbol:"MKS",company:"Marks & Spencer Group",price:426,change:1,changeRel:.24,volume:2},{symbol:"MGGT",company:"Meggitt",price:483,change:2.4,changeRel:.49,volume:2},{symbol:"MNDI",company:"Mondi",price:1,change:9,changeRel:.85,volume:809},{symbol:"MRW",company:"Morrison (Wm) Supermarkets",price:176.1,change:.4,changeRel:.23,volume:9},{symbol:"NG",company:"National Grid",price:895.5,change:2,changeRel:.22,volume:4},{symbol:"NXT",company:"Next",price:6,change:25,changeRel:.36,volume:282},{symbol:"OML",company:"Old Mutual",price:191.5,change:2.5,changeRel:1.29,volume:14},{symbol:"PSON",company:"Pearson",price:1,change:28,changeRel:2.38,volume:4},{symbol:"PSN",company:"Persimmon",price:1,change:19,changeRel:1.39,volume:673},{symbol:"PFC",company:"Petrofac Ltd.",price:1,change:7,changeRel:.66,volume:1},{symbol:"PRU",company:"Prudential",price:1,change:8.5,changeRel:.6,volume:3},{symbol:"RRS",company:"Randgold Resources Ltd.",price:4,change:7,changeRel:.15,volume:363},{symbol:"RB",company:"Reckitt Benckiser Group",price:5,change:45,changeRel:.83,volume:1},{symbol:"REL",company:"Reed Elsevier",price:995.5,change:3,changeRel:.3,volume:2},{symbol:"REX",company:"Rexam",price:498.9,change:2.6,changeRel:.52,volume:1},{symbol:"RIO",company:"Rio Tinto",price:3,change:30,changeRel:.94,volume:3},{symbol:"RR",company:"Rolls-Royce Holdings",price:1,change:12,changeRel:1.17,volume:4},{symbol:"RBS",company:"Royal Bank of Scotland Group",price:346.7,change:3,changeRel:.86,volume:7},{symbol:"RDSA",company:"Royal Dutch Shell 'A'",price:2,change:1,changeRel:.04,volume:9},{symbol:"RDSB",company:"Royal Dutch Shell 'B'",price:2,change:2,changeRel:.08,volume:2},{symbol:"RMG",company:"Royal Mail",price:423.3,change:.1,changeRel:.02,volume:1},{symbol:"RSA",company:"RSA Insurance Group",price:470,change:5,changeRel:1.05,volume:4},{symbol:"SAB",company:"SABMiller",price:3,change:334.5,changeRel:9.82,volume:17},{symbol:"SGE",company:"Sage Group",price:383,change:.2,changeRel:.05,volume:2},{symbol:"SBRY",company:"Sainsbury (J)",price:284.2,change:2.9,changeRel:1.01,volume:5},{symbol:"SDR",company:"Schroders",price:2,change:17,changeRel:.69,volume:249},{symbol:"SVT",company:"Severn Trent",price:1,change:20,changeRel:1.03,volume:512},{symbol:"SHP",company:"Shire Plc",price:5,change:15,changeRel:.28,volume:1},{symbol:"SN",company:"Smith & Nephew",price:1,change:5,changeRel:.47,volume:1},{symbol:"SMIN",company:"Smiths Group",price:1,change:7,changeRel:.52,volume:855},{symbol:"SPD",company:"Sports Direct International",price:690,change:22.5,changeRel:3.16,volume:1},{symbol:"SSE",company:"SSE",price:1,change:5,changeRel:.34,volume:2},{symbol:"STJ",company:"St James's Place",price:694.5,change:5.5,changeRel:.79,volume:1},{symbol:"STAN",company:"Standard Chartered",price:1,change:7.5,changeRel:.6,volume:4},{symbol:"SL",company:"Standard Life",price:412.1,change:1.5,changeRel:.37,volume:3},{symbol:"TSCO",company:"Tesco",price:228.5,change:.15,changeRel:.07,volume:19},{symbol:"TPK",company:"Travis Perkins",price:1,change:16,changeRel:.95,volume:682},{symbol:"TT",company:"TUI Travel",price:365.7,change:5.6,changeRel:1.56,volume:9},{symbol:"TLW",company:"Tullow Oil",price:700.5,change:6,changeRel:.85,volume:1},{symbol:"ULVR",company:"Unilever",price:2,change:4,changeRel:.15,volume:2},{symbol:"UU",company:"United Utilities Group",price:857.5,change:8.5,changeRel:1,volume:1},{symbol:"VOD",company:"Vodafone Group",price:201.5,change:2.15,changeRel:1.06,volume:39},{symbol:"WEIR",company:"Weir Group",price:2,change:31,changeRel:1.15,volume:581},{symbol:"WTB",company:"Whitbread",price:4,change:44,changeRel:1.04,volume:430},{symbol:"WOS",company:"Wolseley",price:3,change:22,changeRel:.67,volume:395},{symbol:"WPP",company:"WPP",price:1,change:12,changeRel:.94,volume:2}],o=function(n,o){this._container=n,this._state=o,this._grid=null,this._stockDataProvider=new e,this._columns=[{id:"symbol",name:"Symbol",field:"symbol"},{id:"company",name:"Company",field:"company"},{id:"price",name:"Price",field:"price"},{id:"change",name:"Change",field:"change"},{id:"changeRel",name:"Change %",field:"changeRel"},{id:"volume",name:"Volume",field:"volume"}],this._options={editable:!1,enableAddRow:!1,enableCellNavigation:!0},n.on("open",this._scheduleGridCreation,this)};o.prototype._scheduleGridCreation=function(){var e=setInterval(function(){var n,o=$("link[rel=stylesheet]");for(n=0;n<o.length;n++)if(null===o[n].sheet)return;clearInterval(e),this._createGrid()}.bind(this),10)},o.prototype._createGrid=function(){this._grid=new Slick.Grid(this._container.getElement(),this._stockDataProvider.getStocksBySymbol(this._state.symbols),this._columns,this._options),this._container.on("resize",this._resize,this),this._container.on("destroy",this._destroy,this),this._resize()},o.prototype._resize=function(){this._grid.resizeCanvas(),this._grid.autosizeColumns()},o.prototype._destroy=function(){this._grid.destroy()};var c={content:[{type:"row",content:[{width:20,type:"column",content:[{title:"Filter",type:"component",componentName:"filterPanel"}]},{width:80,type:"column",content:[{type:"row",content:[{type:"stack",content:[{type:"component",title:"Buyer",componentName:"heatMapBuyer"},{type:"component",title:"Vendor",componentName:"heatMapVendor"}]},{title:"Summary",type:"component",componentName:"barChart"}]},{type:"row",content:[{type:"component",title:"Scatter - Requisition By Buyer",componentName:"bubbleChart"},{title:"Requisition By Purchasing Group Manager",type:"component",componentName:"stackedBarChart"}]}]}]}]};window.myLayout=new GoldenLayout(c),myLayout.registerComponent("hey",function(e,n){n.bg&&e.getElement().text("hey")}),myLayout.registerComponent("filterPanel",function(e,n){e.getElement().html("<filter-panel-card></filter-panel-card>")}),myLayout.registerComponent("heatMapBuyer",function(e,n){e.getElement().html("<heatmap-buyer-card></heatmap-buyer-card>")}),myLayout.registerComponent("heatMapVendor",function(e,n){e.getElement().html("<heatmap-vendor-card></heatmap-vendor-card>")}),myLayout.registerComponent("barChart",function(e,n){e.getElement().html("<bar-chart-card></bar-chart-card>")}),myLayout.registerComponent("bubbleChart",function(e,n){e.getElement().html("<bubble-chart-card></bubble-chart-card>")}),myLayout.registerComponent("stackedBarChart",function(e,n){e.getElement().html("<stacked-bar-chart></stacked-bar-chart>")}),myLayout.init()});