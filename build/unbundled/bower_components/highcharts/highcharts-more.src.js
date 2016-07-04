!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){function i(t,i,a){this.init(t,i,a)}var a,e=t.arrayMin,o=t.arrayMax,n=t.each,r=t.extend,s=t.isNumber,l=t.merge,h=t.map,p=t.pick,c=t.pInt,d=t.correctFloat,u=t.getOptions().plotOptions,g=t.seriesTypes,f=t.extendClass,m=t.splat,y=t.wrap,b=t.Axis,x=t.Tick,A=t.Point,P=t.Pointer,L=t.CenteredSeriesMixin,w=t.TrackerMixin,M=t.Series,v=Math,k=v.round,C=v.floor,T=v.max,X=t.Color,Y=function(){};r(i.prototype,{init:function(t,i,a){var e,o=this,r=o.defaultOptions;o.chart=i,o.options=t=l(r,i.angular?{background:{}}:void 0,t),e=t.background,e&&n([].concat(m(e)).reverse(),function(t){var i=t.backgroundColor,e=a.userOptions;t=l(o.defaultBackgroundOptions,t),i&&(t.backgroundColor=i),t.color=t.backgroundColor,a.options.plotBands.unshift(t),e.plotBands=e.plotBands||[],e.plotBands!==a.options.plotBands&&e.plotBands.unshift(t)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var S=b.prototype,R=x.prototype,z={getOffset:Y,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:Y,setCategories:Y,setTitle:Y},D={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(t){var i=this.options=l(this.defaultOptions,this.defaultRadialOptions,t);i.plotBands||(i.plotBands=[])},getOffset:function(){S.getOffset.call(this),this.chart.axisOffset[this.side]=0,this.center=this.pane.center=L.getCenter.call(this.pane)},getLinePath:function(t,i){var a=this.center;return i=p(i,a[2]/2-this.offset),this.chart.renderer.symbols.arc(this.left+a[0],this.top+a[1],i,i,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){S.setAxisTranslation.call(this),this.center&&(this.isCircular?this.transA=(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.transA=this.center[2]/2/(this.max-this.min||1),this.isXAxis?this.minPixelPadding=this.transA*this.minPointOffset:this.minPixelPadding=0)},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){S.setAxisSize.call(this),this.isRadial&&(this.center=this.pane.center=t.CenteredSeriesMixin.getCenter.call(this.pane),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*p(this.sector,1)/2)},getPosition:function(t,i){return this.postTranslate(this.isCircular?this.translate(t):0,p(this.isCircular?i:this.translate(t),this.center[2]/2)-this.offset)},postTranslate:function(t,i){var a=this.chart,e=this.center;return t=this.startAngleRad+t,{x:a.plotLeft+e[0]+Math.cos(t)*i,y:a.plotTop+e[1]+Math.sin(t)*i}},getPlotBandPath:function(t,i,a){var e,o,n,r,s=this.center,l=this.startAngleRad,d=s[2]/2,u=[p(a.outerRadius,"100%"),a.innerRadius,p(a.thickness,10)],g=/%$/,f=this.isCircular;return"polygon"===this.options.gridLineInterpolation?r=this.getPlotLinePath(t).concat(this.getPlotLinePath(i,!0)):(t=Math.max(t,this.min),i=Math.min(i,this.max),f||(u[0]=this.translate(t),u[1]=this.translate(i)),u=h(u,function(t){return g.test(t)&&(t=c(t,10)*d/100),t}),"circle"!==a.shape&&f?(e=l+this.translate(t),o=l+this.translate(i)):(e=-Math.PI/2,o=1.5*Math.PI,n=!0),r=this.chart.renderer.symbols.arc(this.left+s[0],this.top+s[1],u[0],u[0],{start:Math.min(e,o),end:Math.max(e,o),innerR:p(u[1],u[0]-u[2]),open:n})),r},getPlotLinePath:function(t,i){var a,e,o,r,s=this,l=s.center,h=s.chart,p=s.getPosition(t);return s.isCircular?r=["M",l[0]+h.plotLeft,l[1]+h.plotTop,"L",p.x,p.y]:"circle"===s.options.gridLineInterpolation?(t=s.translate(t),t&&(r=s.getLinePath(0,t))):(n(h.xAxis,function(t){t.pane===s.pane&&(a=t)}),r=[],t=s.translate(t),o=a.tickPositions,a.autoConnect&&(o=o.concat([o[0]])),i&&(o=[].concat(o).reverse()),n(o,function(i,o){e=a.getPosition(i,t),r.push(o?"L":"M",e.x,e.y)})),r},getTitlePosition:function(){var t=this.center,i=this.chart,a=this.options.title;return{x:i.plotLeft+t[0]+(a.x||0),y:i.plotTop+t[1]-{high:.5,middle:.25,low:0}[a.align]*t[2]+(a.y||0)}}};y(S,"init",function(t,e,o){var n,s,h,c,d,u,g=this,f=e.angular,y=e.polar,b=o.isX,x=f&&b,A=e.options,P=o.pane||0;f?(r(this,x?z:D),n=!b,n&&(this.defaultRadialOptions=this.defaultRadialGaugeOptions)):y&&(r(this,D),n=b,this.defaultRadialOptions=b?this.defaultRadialXOptions:l(this.defaultYAxisOptions,this.defaultRadialYOptions)),(f||y)&&(e.inverted=!1,A.chart.zoomType=null),t.call(this,e,o),x||!f&&!y||(c=this.options,e.panes||(e.panes=[]),this.pane=d=e.panes[P]=e.panes[P]||new i(m(A.pane)[P],e,g),u=d.options,this.startAngleRad=s=(u.startAngle-90)*Math.PI/180,this.endAngleRad=h=(p(u.endAngle,u.startAngle+360)-90)*Math.PI/180,this.offset=c.offset||0,this.isCircular=n,n&&o.max===a&&h-s===2*Math.PI&&(this.autoConnect=!0))}),y(S,"autoLabelAlign",function(t){if(!this.isRadial)return t.apply(this,[].slice.call(arguments,1))}),y(R,"getPosition",function(t,i,a,e,o){var n=this.axis;return n.getPosition?n.getPosition(a):t.call(this,i,a,e,o)}),y(R,"getLabelPosition",function(t,i,a,e,o,n,r,s,l){var h,c=this.axis,d=n.y,u=20,g=n.align,f=(c.translate(this.pos)+c.startAngleRad+Math.PI/2)/Math.PI*180%360;return c.isRadial?(h=c.getPosition(this.pos,c.center[2]/2+p(n.distance,-25)),"auto"===n.rotation?e.attr({rotation:f}):null===d&&(d=c.chart.renderer.fontMetrics(e.styles.fontSize).b-e.getBBox().height/2),null===g&&(c.isCircular?(this.label.getBBox().width>c.len*c.tickInterval/(c.max-c.min)&&(u=0),g=f>u&&f<180-u?"left":f>180+u&&f<360-u?"right":"center"):g="center",e.attr({align:g})),h.x+=n.x,h.y+=d):h=t.call(this,i,a,e,o,n,r,s,l),h}),y(R,"getMarkPath",function(t,i,a,e,o,n,r){var s,l,h=this.axis;return h.isRadial?(s=h.getPosition(this.pos,h.center[2]/2+e),l=["M",i,a,"L",s.x,s.y]):l=t.call(this,i,a,e,o,n,r),l}),u.arearange=l(u.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}}),g.arearange=f(g.area,{type:"arearange",pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(t){return[t.low,t.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(t){var i=this.chart,a=this.xAxis.postTranslate(t.rectPlotX,this.yAxis.len-t.plotHigh);t.plotHighX=a.x-i.plotLeft,t.plotHigh=a.y-i.plotTop},translate:function(){var t=this,i=t.yAxis;g.area.prototype.translate.apply(t),n(t.points,function(t){var a=t.low,e=t.high,o=t.plotY;null===e||null===a?t.isNull=!0:(t.plotLow=o,t.plotHigh=i.translate(e,0,1,0,1))}),this.chart.polar&&n(this.points,function(i){t.highToXY(i)})},getGraphPath:function(){var t,i,a,e,o,n,r=this.points,s=[],l=[],h=r.length,p=M.prototype.getGraphPath,c=this.options,d=c.step;for(h=r.length;h--;)t=r[h],t.isNull||r[h+1]&&!r[h+1].isNull||l.push({plotX:t.plotX,plotY:t.plotLow}),i={plotX:t.plotX,plotY:t.plotHigh,isNull:t.isNull},l.push(i),s.push(i),t.isNull||r[h-1]&&!r[h-1].isNull||l.push({plotX:t.plotX,plotY:t.plotLow});return e=p.call(this,r),d&&(d===!0&&(d="left"),c.step={left:"right",center:"center",right:"left"}[d]),o=p.call(this,s),n=p.call(this,l),c.step=d,a=[].concat(e,o),this.chart.polar||"M"!==n[0]||(n[0]="L"),this.areaPath=this.areaPath.concat(e,n),a},drawDataLabels:function(){var t,i,a,e=this.data,o=e.length,n=[],r=M.prototype,s=this.options.dataLabels,l=s.align,h=s.verticalAlign,p=s.inside,c=this.chart.inverted;if(s.enabled||this._hasPointLabels){for(t=o;t--;)i=e[t],i&&(a=p?i.plotHigh<i.plotLow:i.plotHigh>i.plotLow,i.y=i.high,i._plotY=i.plotY,i.plotY=i.plotHigh,n[t]=i.dataLabel,i.dataLabel=i.dataLabelUpper,i.below=a,c?l||(s.align=a?"right":"left"):h||(s.verticalAlign=a?"top":"bottom"),s.x=s.xHigh,s.y=s.yHigh);for(r.drawDataLabels&&r.drawDataLabels.apply(this,arguments),t=o;t--;)i=e[t],i&&(a=p?i.plotHigh<i.plotLow:i.plotHigh>i.plotLow,i.dataLabelUpper=i.dataLabel,i.dataLabel=n[t],i.y=i.low,i.plotY=i._plotY,i.below=!a,c?l||(s.align=a?"left":"right"):h||(s.verticalAlign=a?"bottom":"top"),s.x=s.xLow,s.y=s.yLow);r.drawDataLabels&&r.drawDataLabels.apply(this,arguments)}s.align=l,s.verticalAlign=h},alignDataLabel:function(){g.column.prototype.alignDataLabel.apply(this,arguments)},setStackedPoints:Y,getSymbol:Y,drawPoints:Y}),u.areasplinerange=l(u.arearange),g.areasplinerange=f(g.arearange,{type:"areasplinerange",getPointSpline:g.spline.prototype.getPointSpline}),function(){var t=g.column.prototype;u.columnrange=l(u.column,u.arearange,{lineWidth:1,pointRange:null}),g.columnrange=f(g.arearange,{type:"columnrange",translate:function(){var i,a,e=this,o=e.yAxis,r=e.xAxis,s=r.startAngleRad,l=e.chart,h=e.xAxis.isRadial;t.translate.apply(e),n(e.points,function(t){var n,c,d,u=t.shapeArgs,g=e.options.minPointLength;t.plotHigh=a=o.translate(t.high,0,1,0,1),t.plotLow=t.plotY,d=a,c=p(t.rectPlotY,t.plotY)-a,Math.abs(c)<g?(n=g-c,c+=n,d-=n/2):c<0&&(c*=-1,d-=c),h?(i=t.barX+s,t.shapeType="path",t.shapeArgs={d:e.polarArc(d+c,d,i,i+t.pointWidth)}):(u.height=c,u.y=d,t.tooltipPos=l.inverted?[o.len+o.pos-l.plotLeft-d-c/2,r.len+r.pos-l.plotTop-u.x-u.width/2,c]:[r.left-l.plotLeft+u.x+u.width/2,o.pos-l.plotTop+d+c/2,c])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:Y,crispCol:t.crispCol,pointAttrToOptions:t.pointAttrToOptions,drawPoints:t.drawPoints,drawTracker:t.drawTracker,getColumnMetrics:t.getColumnMetrics,animate:function(){return t.animate.apply(this,arguments)},polarArc:function(){return t.polarArc.apply(this,arguments)}})}(),u.gauge=l(u.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});var O=f(A,{setState:function(t){this.state=t}}),I={type:"gauge",pointClass:O,angular:!0,directTouch:!0,drawGraph:Y,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var t=this,i=t.yAxis,a=t.options,e=i.center;t.generatePoints(),n(t.points,function(t){var o=l(a.dial,t.dial),n=c(p(o.radius,80))*e[2]/200,r=c(p(o.baseLength,70))*n/100,h=c(p(o.rearLength,10))*n/100,d=o.baseWidth||3,u=o.topWidth||1,g=a.overshoot,f=i.startAngleRad+i.translate(t.y,null,null,null,!0);s(g)?(g=g/180*Math.PI,f=Math.max(i.startAngleRad-g,Math.min(i.endAngleRad+g,f))):a.wrap===!1&&(f=Math.max(i.startAngleRad,Math.min(i.endAngleRad,f))),f=180*f/Math.PI,t.shapeType="path",t.shapeArgs={d:o.path||["M",-h,-d/2,"L",r,-d/2,n,-u/2,n,u/2,r,d/2,-h,d/2,"z"],translateX:e[0],translateY:e[1],rotation:f},t.plotX=e[0],t.plotY=e[1]})},drawPoints:function(){var t=this,i=t.yAxis.center,a=t.pivot,e=t.options,o=e.pivot,r=t.chart.renderer;n(t.points,function(i){var a=i.graphic,o=i.shapeArgs,n=o.d,s=l(e.dial,i.dial);a?(a.animate(o),o.d=n):i.graphic=r[i.shapeType](o).attr({stroke:s.borderColor||"none","stroke-width":s.borderWidth||0,fill:s.backgroundColor||"black",rotation:o.rotation,zIndex:1}).add(t.group)}),a?a.animate({translateX:i[0],translateY:i[1]}):t.pivot=r.circle(0,0,p(o.radius,5)).attr({"stroke-width":o.borderWidth||0,stroke:o.borderColor||"silver",fill:o.backgroundColor||"black",zIndex:2}).translate(i[0],i[1]).add(t.group)},animate:function(t){var i=this;t||(n(i.points,function(t){var a=t.graphic;a&&(a.attr({rotation:180*i.yAxis.startAngleRad/Math.PI}),a.animate({rotation:t.shapeArgs.rotation},i.options.animation))}),i.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup),M.prototype.render.call(this),this.group.clip(this.chart.clipRect)},setData:function(t,i){M.prototype.setData.call(this,t,!1),this.processData(),this.generatePoints(),p(i,!0)&&this.chart.redraw()},drawTracker:w&&w.drawTrackerPoint};g.gauge=f(g.line,I),u.boxplot=l(u.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2}),g.boxplot=f(g.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(t){return[t.low,t.q1,t.median,t.q3,t.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:Y,translate:function(){var t=this,i=t.yAxis,a=t.pointArrayMap;g.column.prototype.translate.apply(t),n(t.points,function(t){n(a,function(a){null!==t[a]&&(t[a+"Plot"]=i.translate(t[a],0,1,0,1))})})},drawPoints:function(){var t,i,e,o,r,s,l,h,c,d,u,g,f,m,y,b,x,A,P,L,w,M,v,T=this,X=T.points,Y=T.options,S=T.chart,R=S.renderer,z=T.doQuartiles!==!1,D=T.options.whiskerLength;n(X,function(n){c=n.graphic,w=n.shapeArgs,u={},m={},b={},M=n.color||T.color,n.plotY!==a&&(t=n.pointAttr[n.selected?"selected":""],x=w.width,A=C(w.x),P=A+x,L=k(x/2),i=C(z?n.q1Plot:n.lowPlot),e=C(z?n.q3Plot:n.lowPlot),o=C(n.highPlot),r=C(n.lowPlot),u.stroke=n.stemColor||Y.stemColor||M,u["stroke-width"]=p(n.stemWidth,Y.stemWidth,Y.lineWidth),u.dashstyle=n.stemDashStyle||Y.stemDashStyle,m.stroke=n.whiskerColor||Y.whiskerColor||M,m["stroke-width"]=p(n.whiskerWidth,Y.whiskerWidth,Y.lineWidth),b.stroke=n.medianColor||Y.medianColor||M,b["stroke-width"]=p(n.medianWidth,Y.medianWidth,Y.lineWidth),l=u["stroke-width"]%2/2,h=A+L+l,d=["M",h,e,"L",h,o,"M",h,i,"L",h,r],z&&(l=t["stroke-width"]%2/2,h=C(h)+l,i=C(i)+l,e=C(e)+l,A+=l,P+=l,g=["M",A,e,"L",A,i,"L",P,i,"L",P,e,"L",A,e,"z"]),D&&(l=m["stroke-width"]%2/2,o+=l,r+=l,v=/%$/.test(D)?L*parseFloat(D)/100:D/2,f=["M",h-v,o,"L",h+v,o,"M",h-v,r,"L",h+v,r]),l=b["stroke-width"]%2/2,s=k(n.medianPlot)+l,y=["M",A,s,"L",P,s],c?(n.stem.animate({d:d}),D&&n.whiskers.animate({d:f}),z&&n.box.animate({d:g}),n.medianShape.animate({d:y})):(n.graphic=c=R.g().add(T.group),n.stem=R.path(d).attr(u).add(c),D&&(n.whiskers=R.path(f).attr(m).add(c)),z&&(n.box=R.path(g).attr(t).add(c)),n.medianShape=R.path(y).attr(b).add(c)))})},setStackedPoints:Y}),u.errorbar=l(u.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},whiskerWidth:null}),g.errorbar=f(g.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(t){return[t.low,t.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:g.arearange?g.arearange.prototype.drawDataLabels:Y,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||g.column.prototype.getColumnMetrics.call(this)}}),u.waterfall=l(u.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333",dataLabels:{inside:!0},states:{hover:{lineWidthPlus:0}}}),g.waterfall=f(g.column,{type:"waterfall",upColorProp:"fill",pointValKey:"y",translate:function(){var t,i,a,e,o,n,r,s,l,h,c,u,f=this,m=f.options,y=f.yAxis,b=p(m.minPointLength,5),x=m.threshold,A=m.stacking;for(g.column.prototype.translate.apply(this),f.minPointLengthOffset=0,l=h=x,a=f.points,i=0,t=a.length;i<t;i++)e=a[i],s=this.processedYData[i],o=e.shapeArgs,n=A&&y.stacks[(f.negStacks&&s<x?"-":"")+f.stackKey],c=n?n[e.x].points[f.index+","+i]:[0,s],e.isSum?e.y=d(s):e.isIntermediateSum&&(e.y=d(s-h)),r=T(l,l+e.y)+c[0],o.y=y.translate(r,0,1),e.isSum?(o.y=y.translate(c[1],0,1),o.height=Math.min(y.translate(c[0],0,1),y.len)-o.y+f.minPointLengthOffset):e.isIntermediateSum?(o.y=y.translate(c[1],0,1),o.height=Math.min(y.translate(h,0,1),y.len)-o.y+f.minPointLengthOffset,h=c[1]):(0!==l&&(o.height=s>0?y.translate(l,0,1)-o.y:y.translate(l,0,1)-y.translate(l-s,0,1)),l+=s),o.height<0&&(o.y+=o.height,o.height*=-1),e.plotY=o.y=k(o.y)-f.borderWidth%2/2,o.height=T(k(o.height),.001),e.yBottom=o.y+o.height,o.height<=b&&(o.height=b,f.minPointLengthOffset+=b),o.y-=f.minPointLengthOffset,u=e.plotY+(e.negative?o.height:0)-f.minPointLengthOffset,f.chart.inverted?e.tooltipPos[0]=y.len-u:e.tooltipPos[1]=u},processData:function(t){var i,a,e,o,n,r,s,l=this,h=l.options,p=l.yData,c=l.options.data,u=p.length,g=h.threshold||0;for(e=a=o=n=g,s=0;s<u;s++)r=p[s],i=c&&c[s]?c[s]:{},"sum"===r||i.isSum?p[s]=d(e):"intermediateSum"===r||i.isIntermediateSum?p[s]=d(a):(e+=r,a+=r),o=Math.min(e,o),n=Math.max(e,n);M.prototype.processData.call(this,t),l.dataMin=o,l.dataMax=n},toYData:function(t){return t.isSum?0===t.x?null:"sum":t.isIntermediateSum?0===t.x?null:"intermediateSum":t.y},getAttribs:function(){g.column.prototype.getAttribs.apply(this,arguments);var i=this,a=i.options,e=a.states,o=a.upColor||i.color,r=t.Color(o).brighten(.1).get(),s=l(i.pointAttr),h=i.upColorProp;s[""][h]=o,s.hover[h]=e.hover.upColor||r,s.select[h]=e.select.upColor||o,n(i.points,function(t){t.options.color||(t.y>0?(t.pointAttr=s,t.color=o):t.pointAttr=i.pointAttr)})},getGraphPath:function(){var t,i,a,e,o=this.data,n=o.length,r=this.options.lineWidth+this.borderWidth,s=k(r)%2/2,l=[],h="M",p="L";for(a=1;a<n;a++)i=o[a].shapeArgs,t=o[a-1].shapeArgs,e=[h,t.x+t.width,t.y+s,p,i.x,t.y+s],o[a-1].y<0&&(e[2]+=t.height,e[5]+=t.height),l=l.concat(e);return l},getExtremes:Y,drawGraph:M.prototype.drawGraph}),u.polygon=l(u.scatter,{marker:{enabled:!1}}),g.polygon=f(g.scatter,{type:"polygon",fillGraph:!0,getSegmentPath:function(t){return M.prototype.getSegmentPath.call(this,t).concat("z")},drawGraph:M.prototype.drawGraph,drawLegendSymbol:t.LegendSymbolMixin.drawRectangle}),u.bubble=l(u.scatter,{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"});var W=f(A,{haloPath:function(){return A.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)},ttBelow:!1});g.bubble=f(g.scatter,{type:"bubble",pointClass:W,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],bubblePadding:!0,zoneAxis:"z",pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(t){var i=this.options.marker,a=p(i.fillOpacity,.5);return t=t||i.fillColor||this.color,1!==a&&(t=X(t).setOpacity(a).get("rgba")),t},convertAttribs:function(){var t=M.prototype.convertAttribs.apply(this,arguments);return t.fill=this.applyOpacity(t.fill),t},getRadii:function(t,i,a,e){var o,n,r,s,l,h=this.zData,p=[],c=this.options,d="width"!==c.sizeBy,u=c.zThreshold,g=i-t;for(n=0,o=h.length;n<o;n++)s=h[n],c.sizeByAbsoluteValue&&null!==s&&(s=Math.abs(s-u),i=Math.max(i-u,Math.abs(t-u)),t=0),null===s?l=null:s<t?l=a/2-1:(r=g>0?(s-t)/g:.5,d&&r>=0&&(r=Math.sqrt(r)),l=v.ceil(a+r*(e-a))/2),p.push(l);this.radii=p},animate:function(t){var i=this.options.animation;t||(n(this.points,function(t){var a=t.graphic,e=t.shapeArgs;a&&e&&(a.attr("r",1),a.animate({r:e.r},i))}),this.animate=null)},translate:function(){var t,i,e,o=this.data,n=this.radii;for(g.scatter.prototype.translate.call(this),t=o.length;t--;)i=o[t],e=n?n[t]:0,s(e)&&e>=this.minPxSize/2?(i.shapeType="circle",i.shapeArgs={x:i.plotX,y:i.plotY,r:e},i.dlBox={x:i.plotX-e,y:i.plotY-e,width:2*e,height:2*e}):i.shapeArgs=i.plotY=i.dlBox=a},drawLegendSymbol:function(t,i){var a=this.chart.renderer,e=a.fontMetrics(t.itemStyle.fontSize).f/2;i.legendSymbol=a.circle(e,t.baseline-e,e).attr({zIndex:3}).add(i.legendGroup),i.legendSymbol.isMarker=!0},drawPoints:g.column.prototype.drawPoints,alignDataLabel:g.column.prototype.alignDataLabel,buildKDTree:Y,applyZones:Y}),b.prototype.beforePadding=function(){var t=this,i=this.len,r=this.chart,l=0,h=i,d=this.isXAxis,u=d?"xData":"yData",g=this.min,f={},m=v.min(r.plotWidth,r.plotHeight),y=Number.MAX_VALUE,b=-Number.MAX_VALUE,x=this.max-g,A=i/x,P=[];n(this.series,function(i){var a,s=i.options;!i.bubblePadding||!i.visible&&r.options.chart.ignoreHiddenSeries||(t.allowZoomOutside=!0,P.push(i),d&&(n(["minSize","maxSize"],function(t){var i=s[t],a=/%$/.test(i);i=c(i),f[t]=a?m*i/100:i}),i.minPxSize=f.minSize,i.maxPxSize=f.maxSize,a=i.zData,a.length&&(y=p(s.zMin,v.min(y,v.max(e(a),s.displayNegative===!1?s.zThreshold:-Number.MAX_VALUE))),b=p(s.zMax,v.max(b,o(a))))))}),n(P,function(i){var a,e=i[u],o=e.length;if(d&&i.getRadii(y,b,i.minPxSize,i.maxPxSize),x>0)for(;o--;)s(e[o])&&t.dataMin<=e[o]&&e[o]<=t.dataMax&&(a=i.radii[o],l=Math.min((e[o]-g)*A-a,l),h=Math.max((e[o]-g)*A+a,h))}),P.length&&x>0&&!this.isLog&&(h-=i,A*=(i+l-h)/i,n([["min","userMin",l],["max","userMax",h]],function(i){p(t.options[i[0]],t[i[1]])===a&&(t[i[0]]+=i[2]/A)}))},function(){function t(t,i){var a,e=this.chart,o=this.options.animation,n=this.group,r=this.markerGroup,s=this.xAxis.center,l=e.plotLeft,h=e.plotTop;e.polar?e.renderer.isSVG&&(o===!0&&(o={}),i?(a={translateX:s[0]+l,translateY:s[1]+h,scaleX:.001,scaleY:.001},n.attr(a),r&&r.attr(a)):(a={translateX:l,translateY:h,scaleX:1,scaleY:1},n.animate(a,o),r&&r.animate(a,o),this.animate=null)):t.call(this,i)}var i,a=M.prototype,e=P.prototype;a.searchPointByAngle=function(t){var i=this,a=i.chart,e=i.xAxis,o=e.pane.center,n=t.chartX-o[0]-a.plotLeft,r=t.chartY-o[1]-a.plotTop;return this.searchKDTree({clientX:180+Math.atan2(n,r)*(-180/Math.PI)})},y(a,"buildKDTree",function(t){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.kdDimensions=2),t.apply(this)}),a.toXY=function(t){var i,a,e=this.chart,o=t.plotX,n=t.plotY;t.rectPlotX=o,t.rectPlotY=n,i=this.xAxis.postTranslate(t.plotX,this.yAxis.len-n),t.plotX=t.polarPlotX=i.x-e.plotLeft,t.plotY=t.polarPlotY=i.y-e.plotTop,this.kdByAngle?(a=(o/Math.PI*180+this.xAxis.pane.options.startAngle)%360,a<0&&(a+=360),t.clientX=a):t.clientX=t.plotX},g.spline&&y(g.spline.prototype,"getPointSpline",function(t,i,a,e){var o,n,r,s,l,h,p,c,d,u,g,f,m,y,b,x,A,P,L=1.5,w=L+1;return this.chart.polar?(n=a.plotX,r=a.plotY,s=i[e-1],l=i[e+1],this.connectEnds&&(s||(s=i[i.length-2]),l||(l=i[1])),s&&l&&(h=s.plotX,p=s.plotY,c=l.plotX,d=l.plotY,u=(L*n+h)/w,g=(L*r+p)/w,f=(L*n+c)/w,m=(L*r+d)/w,y=Math.sqrt(Math.pow(u-n,2)+Math.pow(g-r,2)),b=Math.sqrt(Math.pow(f-n,2)+Math.pow(m-r,2)),x=Math.atan2(g-r,u-n),A=Math.atan2(m-r,f-n),P=Math.PI/2+(x+A)/2,Math.abs(x-P)>Math.PI/2&&(P-=Math.PI),u=n+Math.cos(P)*y,g=r+Math.sin(P)*y,f=n+Math.cos(Math.PI+P)*b,m=r+Math.sin(Math.PI+P)*b,a.rightContX=f,a.rightContY=m),e?(o=["C",s.rightContX||s.plotX,s.rightContY||s.plotY,u||n,g||r,n,r],s.rightContX=s.rightContY=null):o=["M",n,r]):o=t.call(this,i,a,e),o}),y(a,"translate",function(t){var i,a,e=this.chart;if(t.call(this),e.polar&&(this.kdByAngle=e.tooltip&&e.tooltip.shared,!this.preventPostTranslate))for(i=this.points,a=i.length;a--;)this.toXY(i[a])}),y(a,"getGraphPath",function(t,i){var a=this;return this.chart.polar&&(i=i||this.points,this.options.connectEnds!==!1&&i[0]&&null!==i[0].y&&(this.connectEnds=!0,i.splice(i.length,0,i[0])),n(i,function(t){void 0===t.polarPlotY&&a.toXY(t)})),t.apply(this,[].slice.call(arguments,1))}),y(a,"animate",t),g.column&&(i=g.column.prototype,i.polarArc=function(t,i,a,e){var o=this.xAxis.center,n=this.yAxis.len;return this.chart.renderer.symbols.arc(o[0],o[1],n-i,null,{start:a,end:e,innerR:n-p(t,n)})},y(i,"animate",t),y(i,"translate",function(t){var i,a,e,o,n=this.xAxis,r=n.startAngleRad;if(this.preventPostTranslate=!0,t.call(this),n.isRadial)for(a=this.points,o=a.length;o--;)e=a[o],i=e.barX+r,e.shapeType="path",e.shapeArgs={d:this.polarArc(e.yBottom,e.plotY,i,i+e.pointWidth)},this.toXY(e),e.tooltipPos=[e.plotX,e.plotY],e.ttBelow=e.plotY>n.center[1]}),y(i,"alignDataLabel",function(t,i,e,o,n,r){if(this.chart.polar){var s,l,h=i.rectPlotX/Math.PI*180;null===o.align&&(s=h>20&&h<160?"left":h>200&&h<340?"right":"center",o.align=s),null===o.verticalAlign&&(l=h<45||h>315?"bottom":h>135&&h<225?"top":"middle",o.verticalAlign=l),a.alignDataLabel.call(this,i,e,o,n,r)}else t.call(this,i,e,o,n,r)})),y(e,"getCoordinates",function(t,i){var a=this.chart,e={xAxis:[],yAxis:[]};return a.polar?n(a.axes,function(t){var o=t.isXAxis,n=t.center,r=i.chartX-n[0]-a.plotLeft,s=i.chartY-n[1]-a.plotTop;e[o?"xAxis":"yAxis"].push({axis:t,value:t.translate(o?Math.PI-Math.atan2(r,s):Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),!0)})}):e=t.call(this,i),e})}()});