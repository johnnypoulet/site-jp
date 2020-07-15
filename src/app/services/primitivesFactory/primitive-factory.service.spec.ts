import { TestBed } from '@angular/core/testing';

import { PrimitiveFactoryService } from './primitive-factory.service';

describe('PrimitiveFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimitiveFactoryService = TestBed.get(PrimitiveFactoryService);
    expect(service).toBeTruthy();
  });

  it('should be generate primitives correctly', () => {
    const service: PrimitiveFactoryService = TestBed.get(PrimitiveFactoryService);
    // tslint:disable-next-line: max-line-length
    const primitivesString = '[{"selected":false,"topLeftCorner":{"x":25.932403564453125,"y":18.398300170898438},"bottomRightCorner":{"x":49.86128616333008,"y":19.395339965820312},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":37.8968448638916,"y":18.896820068359375},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","selectable":true,"points":[{"x":24.162506103515625,"y":18.450000762939453},{"x":25.162506103515625,"y":18.450000762939453},{"x":27.162506103515625,"y":18.450000762939453},{"x":31.162506103515625,"y":18.450000762939453},{"x":36.162506103515625,"y":18.450000762939453},{"x":37.162506103515625,"y":18.450000762939453},{"x":38.162506103515625,"y":18.450000762939453},{"x":41.162506103515625,"y":18.450000762939453},{"x":42.162506103515625,"y":18.450000762939453},{"x":44.162506103515625,"y":18.450000762939453},{"x":47.162506103515625,"y":17.450000762939453},{"x":48.162506103515625,"y":17.450000762939453},{"x":48.162506103515625,"y":17.450000762939453}],"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeWidth":1,"type":3,"texture":0,"commandSvg":"M24.162506103515625 18.450000762939453 L24.162506103515625 18.450000762939453 L25.162506103515625 18.450000762939453 L27.162506103515625 18.450000762939453 L31.162506103515625 18.450000762939453 L36.162506103515625 18.450000762939453 L37.162506103515625 18.450000762939453 L38.162506103515625 18.450000762939453 L41.162506103515625 18.450000762939453 L42.162506103515625 18.450000762939453 L44.162506103515625 18.450000762939453 L47.162506103515625 17.450000762939453 L48.162506103515625 17.450000762939453 L48.162506103515625 17.450000762939453"},{"selected":false,"topLeftCorner":{"x":0,"y":0},"bottomRightCorner":{"x":0,"y":0},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":0,"y":0},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","selectable":true,"points":[{"x":24.162506103515625,"y":30.450000762939453},{"x":28.162506103515625,"y":30.450000762939453},{"x":28.162506103515625,"y":30.450000762939453},{"x":30.162506103515625,"y":30.450000762939453},{"x":30.162506103515625,"y":30.450000762939453},{"x":35.162506103515625,"y":30.450000762939453},{"x":40.162506103515625,"y":30.450000762939453},{"x":42.162506103515625,"y":30.450000762939453},{"x":42.162506103515625,"y":30.450000762939453},{"x":45.162506103515625,"y":30.450000762939453},{"x":45.162506103515625,"y":30.450000762939453}],"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeWidth":5.723076923076922,"type":9,"texture":0,"commandSvg":"M24.162506103515625 30.450000762939453 L24.162506103515625 30.450000762939453 L28.162506103515625 30.450000762939453 L28.162506103515625 30.450000762939453 L30.162506103515625 30.450000762939453 L30.162506103515625 30.450000762939453 L35.162506103515625 30.450000762939453 L40.162506103515625 30.450000762939453 L42.162506103515625 30.450000762939453 L42.162506103515625 30.450000762939453 L45.162506103515625 30.450000762939453 L45.162506103515625 30.450000762939453","headPoints":[{"x":45.162506103515625,"y":30.450000762939453},{"x":45.162506103515625,"y":30.450000762939453}],"paths":[{"commandSVG":"M24.162506103515625 30.450000762939453 L24.162506103515625 30.450000762939453","strokeWidth":6},{"commandSVG":"M24.162506103515625 30.450000762939453 L24.162506103515625 30.450000762939453 L28.162506103515625 30.450000762939453","strokeWidth":6},{"commandSVG":"M28.162506103515625 30.450000762939453 L28.162506103515625 30.450000762939453 L28.162506103515625 30.450000762939453","strokeWidth":5.63076923076923},{"commandSVG":"M28.162506103515625 30.450000762939453 L28.162506103515625 30.450000762939453 L30.162506103515625 30.450000762939453","strokeWidth":5.815384615384615},{"commandSVG":"M30.162506103515625 30.450000762939453 L30.162506103515625 30.450000762939453 L30.162506103515625 30.450000762939453","strokeWidth":5.815384615384615},{"commandSVG":"M30.162506103515625 30.450000762939453 L30.162506103515625 30.450000762939453 L35.162506103515625 30.450000762939453","strokeWidth":5.538461538461538},{"commandSVG":"M35.162506103515625 30.450000762939453 L35.162506103515625 30.450000762939453 L40.162506103515625 30.450000762939453","strokeWidth":5.076923076923077},{"commandSVG":"M40.162506103515625 30.450000762939453 L40.162506103515625 30.450000762939453 L42.162506103515625 30.450000762939453","strokeWidth":5.3538461538461535},{"commandSVG":"M42.162506103515625 30.450000762939453 L42.162506103515625 30.450000762939453 L42.162506103515625 30.450000762939453","strokeWidth":5.815384615384615},{"commandSVG":"M42.162506103515625 30.450000762939453 L42.162506103515625 30.450000762939453 L45.162506103515625 30.450000762939453","strokeWidth":5.723076923076922},{"commandSVG":"M45.162506103515625 30.450000762939453 L45.162506103515625 30.450000762939453 L45.162506103515625 30.450000762939453","strokeWidth":5.723076923076922}]},{"selected":false,"topLeftCorner":{"x":0,"y":0},"bottomRightCorner":{"x":0,"y":0},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":0,"y":0},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","selectable":true,"type":11,"linePoints":["","23.162506103515625,45.45000076293945 7.162506103515625,45.45000076293945 7.162506103515625,45.45000076293945 23.162506103515625,45.45000076293945 ","23.162506103515625,45.45000076293945 7.162506103515625,45.45000076293945 8.162506103515625,45.45000076293945 24.162506103515625,45.45000076293945 ","24.162506103515625,45.45000076293945 8.162506103515625,45.45000076293945 12.162506103515625,45.45000076293945 28.162506103515625,45.45000076293945 ","28.162506103515625,45.45000076293945 12.162506103515625,45.45000076293945 14.162506103515625,45.45000076293945 30.162506103515625,45.45000076293945 "],"points":[{"points":[{"x":23.162506103515625,"y":45.45000076293945},{"x":7.162506103515625,"y":45.45000076293945},{"x":7.162506103515625,"y":45.45000076293945},{"x":23.162506103515625,"y":45.45000076293945}]},{"points":[{"x":23.162506103515625,"y":45.45000076293945},{"x":7.162506103515625,"y":45.45000076293945},{"x":8.162506103515625,"y":45.45000076293945},{"x":24.162506103515625,"y":45.45000076293945}]},{"points":[{"x":24.162506103515625,"y":45.45000076293945},{"x":8.162506103515625,"y":45.45000076293945},{"x":12.162506103515625,"y":45.45000076293945},{"x":28.162506103515625,"y":45.45000076293945}]},{"points":[{"x":28.162506103515625,"y":45.45000076293945},{"x":12.162506103515625,"y":45.45000076293945},{"x":14.162506103515625,"y":45.45000076293945},{"x":30.162506103515625,"y":45.45000076293945}]}],"lengthX":8,"lengthY":0,"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1}},{"selected":false,"topLeftCorner":{"x":0,"y":0},"bottomRightCorner":{"x":0,"y":0},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":0,"y":0},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","selectable":true,"points":[{"x":15.162506103515625,"y":51.45000076293945},{"x":16.162506103515625,"y":51.45000076293945},{"x":16.162506103515625,"y":51.45000076293945},{"x":20.162506103515625,"y":51.45000076293945},{"x":20.162506103515625,"y":51.45000076293945},{"x":21.162506103515625,"y":51.45000076293945},{"x":21.162506103515625,"y":51.45000076293945},{"x":22.162506103515625,"y":51.45000076293945},{"x":22.162506103515625,"y":51.45000076293945},{"x":22.162506103515625,"y":51.45000076293945}],"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeWidth":5,"type":2,"texture":0,"commandSvg":"M15.162506103515625 51.45000076293945 L15.162506103515625 51.45000076293945 L16.162506103515625 51.45000076293945 L16.162506103515625 51.45000076293945 L20.162506103515625 51.45000076293945 L20.162506103515625 51.45000076293945 L21.162506103515625 51.45000076293945 L21.162506103515625 51.45000076293945 L22.162506103515625 51.45000076293945 L22.162506103515625 51.45000076293945 L22.162506103515625 51.45000076293945"},{"selected":false,"topLeftCorner":{"x":16.853515625,"y":61.36995315551758},"bottomRightCorner":{"x":42.66176795959473,"y":87.24475288391113},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":29.757641792297363,"y":74.30735301971436},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","pointSize":0.8,"selectable":true,"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"paintDelay":100,"range":30,"type":12,"centerPoints":[],"points":[{"x":34.16118633386463,"y":80.99570480677491},{"x":17.37797942693676,"y":65.26178941275678},{"x":29.516383077281507,"y":75.12160418786307},{"x":28.273939593700906,"y":75.42895777431372},{"x":25.856426428980058,"y":73.56294323270846},{"x":28.13462536389306,"y":77.95836464073741},{"x":23.663683448545925,"y":73.81304504296303},{"x":27.072835546085024,"y":77.76139520567952},{"x":28.179641300523567,"y":75.23734529880451},{"x":36.25961083982944,"y":71.69633792760351},{"x":21.81864618587592,"y":77.79764757928719},{"x":37.3090412910219,"y":85.70105210360828},{"x":25.747632072701414,"y":74.4835996419389},{"x":33.6837229138677,"y":73.62610802882475},{"x":34.73238680320141,"y":65.60314241357673},{"x":29.0027305605367,"y":61.34936176272223},{"x":31.16749630612125,"y":85.47733169766315},{"x":15.856659260247325,"y":81.28998936570038},{"x":18.714735346430516,"y":77.35921668854802},{"x":20.99451080007983,"y":69.53392516260352},{"x":29.58194816279241,"y":74.59846826456175},{"x":17.57324999571818,"y":73.10645326555026},{"x":36.87746942488033,"y":73.99357103319288},{"x":40.14159059750344,"y":75.73381688777506},{"x":23.944739179238205,"y":76.27395707573055},{"x":38.12654219762001,"y":72.16419837287819},{"x":33.203494734192795,"y":78.77884899542367},{"x":30.32009726208311,"y":76.29874721888432},{"x":21.19214565819241,"y":83.55823602586861},{"x":32.96356521283875,"y":79.45750656162579},{"x":29.28464984960539,"y":74.48802079771839},{"x":25.180551514021033,"y":81.20232676133404},{"x":33.567510397442724,"y":64.82570429397698},{"x":24.725428670849368,"y":75.66481718024134},{"x":32.89629557348306,"y":82.55722576374171},{"x":36.62333700962092,"y":78.84515394150657},{"x":32.57391467083994,"y":77.69505967993271},{"x":30.790516147908377,"y":79.63616387804986},{"x":17.915309010496816,"y":71.48064306900271},{"x":29.155445543719384,"y":78.30023944287346},{"x":19.79909834458338,"y":85.69801489334809},{"x":33.87860409679784,"y":85.0458843064198},{"x":27.96022688992408,"y":66.52928752735525},{"x":23.765623218892696,"y":61.927090342973095},{"x":31.539478145977764,"y":70.89653379415375},{"x":31.7482558050759,"y":78.52950069573389},{"x":33.46266376086613,"y":78.22146775180028},{"x":17.403477969899722,"y":68.92216417089212},{"x":35.454837313779464,"y":71.2117044179458},{"x":26.537034222809666,"y":70.94381268758399}]},{"selected":false,"topLeftCorner":{"x":10.797943115234375,"y":71.69416427612305},"bottomRightCorner":{"x":40.4189395904541,"y":103.15342903137207},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":25.60844135284424,"y":87.42379665374756},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","pointSize":0.8,"selectable":true,"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"paintDelay":100,"range":30,"type":12,"centerPoints":[],"points":[{"x":27.30165007337327,"y":89.54570754859087},{"x":29.477730215062408,"y":85.21095089075779},{"x":18.97856258487291,"y":77.05171999265637},{"x":24.302014016684662,"y":86.25732402682095},{"x":35.92526159131193,"y":92.21267439164278},{"x":27.143867172527873,"y":95.09367267797994},{"x":18.85147454140353,"y":91.81213446172025},{"x":27.66563269650056,"y":90.26013910615018},{"x":24.73924917497006,"y":78.97685569455288},{"x":33.45006363055979,"y":96.94278230605138},{"x":19.135511789886223,"y":86.85067271310214},{"x":26.257617827099214,"y":81.33679103202577},{"x":25.070779242929056,"y":86.20475375443945},{"x":34.158780090266404,"y":83.35171074824086},{"x":21.04782733867622,"y":98.80260203567212},{"x":19.509194477201945,"y":87.71715749409334},{"x":26.47779483895274,"y":87.70958581395973},{"x":21.574006996530873,"y":85.4504620960452},{"x":26.76916157738227,"y":89.56243357162515},{"x":16.27119293486242,"y":81.24244097591152},{"x":29.021775233659923,"y":90.51295828990051},{"x":35.89574230094447,"y":87.6901803338886},{"x":21.670527725557147,"y":71.70425744336583},{"x":29.766253475725243,"y":90.97008161101584},{"x":18.477080020471927,"y":77.16612223220328},{"x":25.58771377077346,"y":86.968567158033},{"x":37.89209166278128,"y":90.10404991700098},{"x":9.783063553786148,"y":90.5710420665738},{"x":26.609446661321577,"y":79.58026740807831},{"x":32.41507624412482,"y":78.70694981773717},{"x":19.14188464173441,"y":82.37145874895246},{"x":28.588384394811406,"y":88.28502690848364},{"x":29.297817299841824,"y":87.05937057141642},{"x":23.00507625679434,"y":79.49421047067527},{"x":22.431317901885002,"y":92.24346615646924},{"x":22.23613150817107,"y":87.9606775860601},{"x":18.058561178765906,"y":82.41358828928372},{"x":32.119130607495876,"y":86.15991405824217},{"x":18.71358492889046,"y":80.59547644463427},{"x":37.36746714366313,"y":84.83992557010349},{"x":20.784192347094027,"y":81.59364450283651},{"x":27.34731507151898,"y":84.82880448434761},{"x":22.495712083801784,"y":90.26301248710595},{"x":19.483489009472233,"y":74.09446558816882},{"x":22.233752570700872,"y":86.75717392273512},{"x":31.58115933619821,"y":86.38743344586642},{"x":18.88586617166256,"y":87.9198364492666},{"x":20.997758652871603,"y":93.03617478310484},{"x":28.512028209541867,"y":96.33907303738363},{"x":27.182987831403,"y":87.46853327724351},{"x":32.60217042582722,"y":97.32580949856775},{"x":18.92940968871917,"y":77.46066521864135},{"x":23.427164786504687,"y":93.26300570999305},{"x":20.78640333486716,"y":95.3870808041752},{"x":27.711386279745835,"y":74.89052692713261},{"x":17.997572828188808,"y":95.79993569967127},{"x":14.501547499907382,"y":99.87702014436132},{"x":36.49320431802077,"y":83.62867115980039},{"x":19.9331882782234,"y":85.54153387108},{"x":20.596411414490944,"y":77.61107068605745},{"x":15.52732503644827,"y":97.60332718349501},{"x":26.73796509491793,"y":90.41748585731035},{"x":20.28434120587679,"y":100.5901444353699},{"x":16.165333648031854,"y":83.28399214948463},{"x":24.131039582704613,"y":88.53606183224043},{"x":23.397762976266034,"y":89.11078124292777},{"x":31.256043540574836,"y":81.65936010700727},{"x":13.827595318936371,"y":80.76548199730608},{"x":20.666728301700253,"y":88.25813026190986},{"x":18.12091534552183,"y":78.30072167142487},{"x":24.158625442034015,"y":75.1131158261236},{"x":20.015323034553592,"y":91.94936346250209},{"x":29.57414213083647,"y":98.38196586593716},{"x":22.882342195018555,"y":101.65701406453744},{"x":24.408588991983038,"y":88.1885007816015}]},{"selected":false,"topLeftCorner":{"x":0,"y":0},"bottomRightCorner":{"x":0,"y":0},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":0,"y":0},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","type":4,"selectable":true,"points":[{"x":57.162506103515625,"y":58.45000076293945},{"x":57.162506103515625,"y":111.45000076293945},{"x":57.162506103515625,"y":111.45000076293945}],"linePoints":"M57.162506103515625 58.45000076293945 L57.162506103515625 111.45000076293945 L57.162506103515625 111.45000076293945 L57.162506103515625 111.45000076293945","circlePoints":[],"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeWidth":2,"pattern":1,"lineJoin":5,"lineCap":0,"circleRadius":3,"lineRounding":20,"closePath":false,"tempPoint":{"x":57.162506103515625,"y":111.45000076293945}},{"selected":false,"topLeftCorner":{"x":71.79611206054688,"y":15.407184600830078},"bottomRightCorner":{"x":81.7664737701416,"y":50.30348205566406},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":75.16250610351562,"y":31.950000762939453},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","type":1,"selectable":true,"isRegular":false,"fillColor":{"rgbaTextForm":"none","r":255,"g":255,"b":255,"a":0},"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeWidth":5,"strokeType":1,"center":{"x":75.16250610351562,"y":31.950000762939453},"corner1":{"x":70.16250610351562,"y":14.450000762939453},"corner2":{"x":80.16250610351562,"y":49.45000076293945},"width":10,"absoluteWidth":10,"height":35,"absoluteHeight":35,"position":{"x":70.16250610351562,"y":14.450000762939453}},{"selected":false,"topLeftCorner":{"x":82.2340087890625,"y":76.22644424438477},"bottomRightCorner":{"x":88.2782473564148,"y":81.46089267730713},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":83.66250610351562,"y":78.95000076293945},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","type":7,"selectable":true,"isRegular":true,"fillColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeWidth":5,"strokeType":2,"center":{"x":83.66250610351562,"y":78.95000076293945},"corner1":{"x":75.16250610351562,"y":70.45000076293945},"corner2":{"x":92.16250610351562,"y":93.45000076293945},"width":17,"absoluteWidth":17,"height":17,"absoluteHeight":17,"points":[{"x":83.66250610351562,"y":75.45000076293945},{"x":80.63141719027008,"y":80.70000076293945},{"x":86.69359501676117,"y":80.70000076293945},{"x":83.66250610351562,"y":75.45000076293945}],"listPoints":"83.66250610351562 75.45000076293945,80.63141719027008 80.70000076293945,86.69359501676117 80.70000076293945,83.66250610351562 75.45000076293945","radius":8.5,"sidesNumber":3},{"selected":false,"topLeftCorner":{"x":94.72796630859375,"y":45.318302154541016},"bottomRightCorner":{"x":109.68350887298584,"y":73.23533058166504},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":100.66250610351562,"y":58.45000076293945},"centerOriginSet":true,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","type":6,"selectable":true,"isRegular":false,"fillColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"strokeWidth":5,"strokeType":2,"center":{"x":100.66250610351562,"y":58.45000076293945},"corner1":{"x":93.16250610351562,"y":44.45000076293945},"corner2":{"x":108.16250610351562,"y":72.45000076293945},"width":15,"absoluteWidth":15,"height":28,"absoluteHeight":28,"radiusX":7.5,"radiusY":14},{"selected":false,"topLeftCorner":{"x":130.61505126953125,"y":188.44296646118164},"bottomRightCorner":{"x":139.19893836975098,"y":206.06247329711914},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":134.9069948196411,"y":197.2527198791504},"centerOriginSet":false,"transformations":"rotate(0,0,0) rotate(0,0,0)translate(129.16250610351562,202.45000076293945)scale(1,1) translate(-129.16250610351562,-202.45000076293945)","type":10,"selectable":true,"size":16,"lines":[{"innertext":"t ","position":{"x":129.16250610351562,"y":202.45000076293945}}],"bold":false,"fontWeight":"normal","italic":false,"fontStyle":"normal","textColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1},"font":{"name":"Arial","family":"Arial, sans-serif"},"align":{"name":"Gauche","value":"start"},"position":{"x":129.16250610351562,"y":202.45000076293945},"strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1}},{"selected":false,"topLeftCorner":{"x":0,"y":0},"bottomRightCorner":{"x":0,"y":0},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":0,"y":0},"centerOriginSet":false,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","type":5,"selectable":true,"stampScaleY":0.1,"stampScaleX":0.1,"angle":135,"position":{"x":17.162506103515625,"y":133.45000076293945},"info":{"name":"Coeur","color":{"rgbaTextForm":"rgba(232,76,61,1)","r":232,"g":76,"b":61,"a":1},"adjustedScale":0.4,"initRotation":135,"centerX":150,"centerY":150,"image":"M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"},"stampTranslation":"translate(17.162506103515625,133.45000076293945)","stampRotation":"rotate(-135, 15, 15)","scaled":"scale(0.1,0.1) ","stampTransformations":"translate(17.162506103515625,133.45000076293945)rotate(-135, 15, 15)scale(0.1,0.1) ","origin":"0px 0px","strokeColor":{"rgbaTextForm":"rgba(0,0,0,1)","r":0,"g":0,"b":0,"a":1}},{"selected":false,"topLeftCorner":{"x":73,"y":17},"bottomRightCorner":{"x":76,"y":46},"toShow":true,"rotation":0,"scaleX":1,"scaleY":1,"primitiveRotation":0,"rotationGroupOrigin":{"x":0,"y":0},"rotationCenterOrigin":{"x":0,"y":0},"centerOriginSet":false,"transformations":"rotate(0,0,0) rotate(0,0,0)scale(1,1) ","selectable":true,"points":[],"strokeColor":{"rgbaTextForm":"rgba(255,0,0,1)","r":255,"g":0,"b":0,"a":1},"strokeWidth":2,"type":13,"texture":0,"commandSvg":" M76 42  L76 42  L73 42  M76 43  L76 43  L73 43  M76 41  L76 41  L73 41  M76 44  L76 44  L73 44  M76 40  L76 40  L73 40  M76 45  L76 45  L73 45  M76 39  L76 39  L73 39  M76 46  L76 46  L73 46  M76 38  L76 38  L73 38  M76 37  L76 37  L73 37  M76 36  L76 36  L73 36  M76 35  L76 35  L73 35  M76 34  L76 34  L73 34  M76 33  L76 33  L73 33  M76 32  L76 32  L73 32  M76 31  L76 31  L73 31  M76 30  L76 30  L73 30  M76 29  L76 29  L73 29  M76 28  L76 28  L73 28  M76 27  L76 27  L73 27  M76 26  L76 26  L73 26  M76 25  L76 25  L73 25  M76 24  L76 24  L73 24  M76 23  L76 23  L73 23  M76 22  L76 22  L73 22  M76 21  L76 21  L73 21  M76 20  L76 20  L73 20  M76 19  L76 19  L73 19  M76 18  L76 18  L73 18 ","fillColor":{"rgbaTextForm":"rgba(0,255,0,1)","r":0,"g":255,"b":0,"a":1},"strokeType":2,"fillingPoints":[{"x":76,"y":42},{"x":73,"y":42},{"x":76,"y":43},{"x":73,"y":43},{"x":76,"y":41},{"x":73,"y":41},{"x":76,"y":44},{"x":73,"y":44},{"x":76,"y":40},{"x":73,"y":40},{"x":76,"y":45},{"x":73,"y":45},{"x":76,"y":39},{"x":73,"y":39},{"x":76,"y":46},{"x":73,"y":46},{"x":76,"y":38},{"x":73,"y":38},{"x":76,"y":37},{"x":73,"y":37},{"x":76,"y":36},{"x":73,"y":36},{"x":76,"y":35},{"x":73,"y":35},{"x":76,"y":34},{"x":73,"y":34},{"x":76,"y":33},{"x":73,"y":33},{"x":76,"y":32},{"x":73,"y":32},{"x":76,"y":31},{"x":73,"y":31},{"x":76,"y":30},{"x":73,"y":30},{"x":76,"y":29},{"x":73,"y":29},{"x":76,"y":28},{"x":73,"y":28},{"x":76,"y":27},{"x":73,"y":27},{"x":76,"y":26},{"x":73,"y":26},{"x":76,"y":25},{"x":73,"y":25},{"x":76,"y":24},{"x":73,"y":24},{"x":76,"y":23},{"x":73,"y":23},{"x":76,"y":22},{"x":73,"y":22},{"x":76,"y":21},{"x":73,"y":21},{"x":76,"y":20},{"x":73,"y":20},{"x":76,"y":19},{"x":73,"y":19},{"x":76,"y":18},{"x":73,"y":18},{"x":76,"y":17},{"x":73,"y":17}],"contourPoints":[{"type":"m","points":[{"x":73,"y":17}]},{"type":"c","points":[{"x":73,"y":17},{"x":76,"y":18},{"x":76,"y":22}]},{"type":"c","points":[{"x":76,"y":24},{"x":76,"y":28},{"x":76,"y":32}]},{"type":"c","points":[{"x":76,"y":34},{"x":76,"y":38},{"x":76,"y":42}]},{"type":"c","points":[{"x":76,"y":44},{"x":74,"y":46},{"x":73,"y":43}]},{"type":"c","points":[{"x":73,"y":41},{"x":73,"y":37},{"x":73,"y":33}]},{"type":"c","points":[{"x":73,"y":31},{"x":73,"y":27},{"x":73,"y":23}]},{"type":"c","points":[{"x":73,"y":21},{"x":73,"y":19},{"x":73,"y":18}]}],"contourPath":" M73 17  C73 17,\\n                76 18,\\n                76 22 C76 24,\\n                76 28,\\n                76 32 C76 34,\\n                76 38,\\n                76 42 C76 44,\\n                74 46,\\n                73 43 C73 41,\\n                73 37,\\n                73 33 C73 31,\\n                73 27,\\n                73 23 C73 21,\\n                73 19,\\n                73 18"}]';
    expect(service.generatePrimitives(primitivesString).length).toEqual(12);
  });
});