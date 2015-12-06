googletag.cmd.push(function() { 
 
    var _auds = new Array(); 
    if(typeof(_ccaud)!='undefined') { 
        for(var i=0;i<_ccaud.Profile.Audiences.Audience.length;i++) 
            if(i<200) 
                _auds.push(_ccaud.Profile.Audiences.Audience[i].abbr); 
    } 
 
 
    var _HDL = ''; 
    var _ARC1 = ''; 
    var _Hyp1 = ''; 
    var _article = ''; 
    var _tval = function(v) { 
        if(typeof(v)=='undefined') return ''; 
        if(v.length>100) return v.substr(0,100); 
        return v; 
    }
 
    var mappingPagepushdown = googletag.sizeMapping().
    addSize([1, 1],[728,90]).
    addSize([768, 200],[728, 90]).
    addSize([1025, 200],[970, 90]).
    addSize([1260, 200], [1024, 180]).
    build();
var mappingBad = googletag.sizeMapping().
                                addSize([1, 1],[728, 90]).
                                addSize([768, 200],[728, 90]).
                                addSize([1025, 200], [970, 90]).
				addSize([1260, 200], [1024, 400]).
        			build();

					
    //googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_ATF_VDC_AS_300', [[300, 250], [300, 600]], 'div-gpt-ad-1420537907241-0').addService(googletag.pubads());
    //googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BAD_VDC_AS', [[728, 90], [970, 90], [1024, 400]], 'div-gpt-ad-1420537907241-1').defineSizeMapping(mappingBad).addService(googletag.pubads());
    //googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BTF_VDC_AS_300', [[300, 250], [300, 600]], 'div-gpt-ad-1420537907241-2').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Innov','div-gpt-ad-1420537907241-0-oop1').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Inter','div-gpt-ad-1420537907241-0-oop2').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Pop','div-gpt-ad-1420537907241-0-oop3').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Shosh','div-gpt-ad-1420537907241-0-oop4').addService(googletag.pubads());
    googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_PPD_VDC_AS', [[728, 90], [970, 90], [1024, 180]], 'div-gpt-ad-1420537907241-7').defineSizeMapping(mappingPagepushdown).addService(googletag.pubads());
    googletag.pubads().setTargeting('sg', _auds).setTargeting('HDL', _tval(_HDL)).setTargeting('ARC1', _tval(_ARC1)).setTargeting('Hyp1', _tval(_Hyp1)).setTargeting('article', _tval(_article));
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
});

//-------------------------------------------------------------------------------------------------
var nextSlotId = 1;
//-------------------------------------------------------------------------------------------------

function rhsAtfLoad(){
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_ATF_VDC_AS_300 */
    document.write("<div id='div-gpt-ad-1420537907241-0'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-0'); });</script></div>");
}

function rhsBtfLoad(){
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BTF_VDC_AS_300 */
    document.write("<div id='div-gpt-ad-1420537907241-2'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-2'); });</script></div>");
}


function rhsAtLoad(){
    //-- /7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_ATF_VDC_AS_300 
    document.write("<div id='rhsbanner'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('rhsbanner'); });</script></div><div class='clr'></div>");
}

function lhsAtLoad(){
    //-- /7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BTF_VDC_AS_300 
    document.write("<div id='lhsbanner'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('lhsbanner'); });</script></div><div class='clr'></div>");
}


function rhsAtLoadLast(){
    document.write("<div id='rhsAtLoadLast'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('rhsAtLoadLast'); });</script></div><div class='clr'></div>");
}

function showHeaderCode() {

	if(nid!='' && cid!='')
		{			
			document.write(" <div class='spiralad'><script language='JavaScript'> var zflag_nid= '"+nid+"';var zflag_cid='"+cid+"';var zflag_sid= '"+sid+"';var zflag_width='728';var zflag_height='90';var zflag_sz='14';</script>  <script language='JavaScript' src='http://c1.zedo.com/jsc/c1/fo.js'></script></div>");    
		}
		else{
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Inter  */
    document.write("<div id='div-gpt-ad-1420537907241-0-oop2'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-0-oop2'); });</script></div>");    
    
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_PPD_VDC_AS */
    document.write("<div id='div-gpt-ad-1420537907241-7'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-7'); });</script></div>");
	
	}
	
}

function BAD_ROS_atLoad(){

	if(nid!='' && cid!='')
		{			
			document.write(" <div class='spiralad'><script language='JavaScript'> var zflag_nid= '"+nid+"';var zflag_cid='"+cid+"';var zflag_sid= '"+sid+"';var zflag_width='728';var zflag_height='90';var zflag_sz='14';</script>  <script language='JavaScript' src='http://c1.zedo.com/jsc/c1/fo.js'></script></div>");    
		}
		else{
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BAD_VDC_AS */
    document.write("<div id='div-gpt-ad-1420537907241-1'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-1'); });</script></div>");
	}
}
function BAD_ROS_atReponse(ContainerId){
    //alert(articleId);
	
		if(nid!='' && cid!=''){
	
	}
	else{
    var id = nextSlotId++;
    var SlotId = 'badRos_' + id;
    //-- start creating div----
    var slotDiv = document.createElement('div');
    slotDiv.id = SlotId; // Id must be the same as slotName
    //-- end creating div----
    //$('#adContainer_'+articleId).html(slotDiv);
    $('#'+ContainerId).html(slotDiv);
    //Indiatimes/Indiatimes_Newsfeed/Indiatimes_Newsfeed_AS/IT_ROS_BAD_NWS_AS
    googletag.cmd.push(function() {
	var mappingBad = googletag.sizeMapping().
				addSize([1, 1],[728, 90]).
				addSize([768, 200],[728, 90]).
				addSize([1025, 200], [970, 90]).
				addSize([1260, 200], [1024, 400]).
				build();	
        var slot = googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BAD_VDC_AS', [[728, 90], [970, 90], [1024, 400]], SlotId).defineSizeMapping(mappingBad).addService(googletag.pubads());
        // Display has to be called before
        // refresh and after the slot div is in the page.
        googletag.display(SlotId);
        //googletag.pubads().refresh([slot]);
    });    	
	}
}
function showFooterCode(){

 if(nid!='' && cid!='')
		{	
				
			document.write(" <div class='spiralad' style='text-align:center'><script language='JavaScript'> var zflag_nid= '"+nid+"';var zflag_cid='"+cid+"';var zflag_sid= '"+sid+"';var zflag_width='728';var zflag_height='90';var zflag_sz='14';</script>  <script language='JavaScript' src='http://c1.zedo.com/jsc/c1/fo.js'></script></div>");    
		}
		else{
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Innov */
    document.write("<div id='div-gpt-ad-1420537907241-0-oop1'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-0-oop1'); });</script></div>");
    
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Pop */
    document.write("<div id='div-gpt-ad-1420537907241-0-oop3'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-0-oop3'); });</script></div>");
    
    /* Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_OOP_VDC_AS_Shosh */
    document.write("<div id='div-gpt-ad-1420537907241-0-oop4'><script type='text/javascript'>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1420537907241-0-oop4'); });</script></div>");
	
	}
    
}
function showBigAD1(SlotId){
    googletag.cmd.push(function() {
        var mappingBig1 = googletag.sizeMapping().
        addSize([1, 1],[728, 90]).
        addSize([768, 200],[728, 90]).
        addSize([1025, 200], [970, 90]).
        addSize([1260, 200], [1024, 400]).
        build();        
        var slot = googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BIG1_VDC_AS', [[728, 90], [970, 90], [1024, 400]], SlotId).defineSizeMapping(mappingBig1).addService(googletag.pubads());
        // Display has to be called before
        // refresh and after the slot div is in the page.
        googletag.display(SlotId);
    //googletag.pubads().refresh([slot]);
    });     
    
}
function showBigAD2(SlotId){
    googletag.cmd.push(function() {
        var mappingBig2 = googletag.sizeMapping().
        addSize([1, 1],[728, 90]).
        addSize([768, 200],[728, 90]).
        addSize([1025, 200], [970, 90]).
        addSize([1260, 200], [1024, 400]).
        build();        
        //googletag.defineSlot('/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_Big2', [[728, 90], [970, 90], [1024, 400]], 'div-gpt-ad-1420536943346-2').defineSizeMapping(mappingBig2).addService(googletag.pubads());
        var slot = googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BIG2_VDC_AS', [[728, 90], [970, 90], [1024, 400]], SlotId).defineSizeMapping(mappingBig2).addService(googletag.pubads());
        // Display has to be called before
        // refresh and after the slot div is in the page.
        googletag.display(SlotId);
    //googletag.pubads().refresh([slot]);
    });     
    
}
function showBigAD3(SlotId){

    googletag.cmd.push(function() {
        var mappingBig3 = googletag.sizeMapping().
        addSize([1, 1],[728, 90]).
        addSize([768, 200],[728, 90]).
        addSize([1025, 200], [970, 90]).
        addSize([1260, 200], [1024, 400]).
        build();        
        //googletag.defineSlot('/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_Big2', [[728, 90], [970, 90], [1024, 400]], 'div-gpt-ad-1420536943346-2').defineSizeMapping(mappingBig2).addService(googletag.pubads());
        var slot = googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BIG3_VDC_AS', [[728, 90], [970, 90], [1024, 400]], SlotId).defineSizeMapping(mappingBig3).addService(googletag.pubads());
        // Display has to be called before
        // refresh and after the slot div is in the page.
        googletag.display(SlotId);
    //googletag.pubads().refresh([slot]);
    });     
    
}
function showBAD(SlotId){
    googletag.cmd.push(function() {
        var mappingBig1 = googletag.sizeMapping().
        addSize([1, 1],[728, 90]).
        addSize([768, 200],[728, 90]).
        addSize([1025, 200], [970, 90]).
        addSize([1260, 200], [1024, 400]).
        build();        
        var slot = googletag.defineSlot('/7176/Indiatimes/Indiatimes_Videocafe/Indiatimes_Videocafe_AS/IT_ROS_BAD_VDC_AS', [[728, 90], [970, 90], [1024, 400]], SlotId).defineSizeMapping(mappingBig1).addService(googletag.pubads());
        // Display has to be called before
        // refresh and after the slot div is in the page.
        googletag.display(SlotId);
    //googletag.pubads().refresh([slot]);
    });     
    
}
//############################## Navive Ads ################################################
var colombia = colombia || {};
colombia.fns = colombia.fns || [];
(function() {
    var cads = document.createElement("script");
    cads.async = true;
    cads.type = "text/javascript";
    cads.src = "http://static.columbia.timesinternet.in/ad/commons/js/colombia.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(cads, node);
})();

/**** Outbrain Replacement ****/
var slotIdDetailCTN = 129831;
var slotNumDetailCTN = 0;
var slotIdDetailCTNArray = [];
$(document).ready(function () { 
	showPaidAroundtheWebMorefromIndiatimesCtnCall();
});	
function showPaidAroundtheWebMorefromIndiatimesCtnCall(){
	if($("div[class='it_ros_rcmw_as_btm_ctn']").length > 0){
		slotNumDetailCTN = $("div[class='it_ros_rcmw_as_btm_ctn_done']").length;
		slotNumDetailCTN = parseInt(slotNumDetailCTN) + 1;
		thisLoopObj = $("div[class='it_ros_rcmw_as_btm_ctn']");
		thisLoopId = $(thisLoopObj).first().attr("id");
		//console.log(thisLoopId);		
		//console.log(slotNumDetailCTN);	
		//console.log(slotIdDetailCTNArray);
		if(slotIdDetailCTNArray.indexOf(thisLoopId) == -1){
			showPaidAroundtheWebMorefromIndiatimesCtn(thisLoopId,slotNumDetailCTN);
			slotIdDetailCTNArray.push(thisLoopId);
			$('#'+thisLoopId).removeClass("it_ros_rcmw_as_btm_ctn");
		    $('#'+thisLoopId).addClass("it_ros_rcmw_as_btm_ctn_done");
		}
	}
}
function showPaidAroundtheWebMorefromIndiatimesCtn(divId, position){	
	var t1 = (new Date()).getTime();
    colombia.fns.push(function()
    {
        // colombia.registerSlot(adunitid,divid,position,section,callback);
    	// Indiatimes_Mweb_ROS_RCMW_AS_BTM_CTN,position=1
        colombia.registerSlot(slotIdDetailCTN,divId,position,0,paidAroundtheWebMorefromIndiatimesCallBack);
        colombia.load();
        //alert(position);
    });
    colombia.fns.push(function(){
        colombia.display(divId);
    });    
    var t2 = (new Date()).getTime();
    var responseTime = (t2 - t1);
    //ga('send', 'event', 'category', 'action', 'label', value);
    //ga('send', 'event', 'LHS_HP_ResponseTime',responseTime+' ms',divId);
    console.log(divId +' '+ (t2 - t1) + 'ms');
}
function paidAroundtheWebMorefromIndiatimesCallBack(data, container){
	console.log("paidAroundtheWebMorefromIndiatimesCallBack======================="+slotIdDetailCTN);
	console.log(container);
	console.log(data);    
	url = window.location.href;
	if(data==null){
        ga('send', 'event', 'CTN-Failed', slotIdDetailCTN, url);
    }
	
    if(data!=null){
        var paidAds = data.paidAds;
        var organicAds = data.organicAds;
        
        var varTpl = '';

		varTpl += '<div class="clr"></div>';
		varTpl += '<div class="outbrain">';
		varTpl += '   <div class="outbrain-container2">';
	
		if(data.paidAds.length > 0){
	
			varTpl += '      <div class="left-outbrain">';
			varTpl += '         <div class="org_heading">Promoted Stories</div>';
			varTpl += '         <ul>';
			$.each(data.paidAds, function(index, value){
				varTpl += '	    <li>';
				varTpl += '               <div class="left-part"> ';
				varTpl += '                  <a href="'+paidAds[index].clk+'" target="_blank"><img src="'+paidAds[index].mainimage+'"> </a> ';
				varTpl += '               </div>';
				varTpl += '               <div class="right-part">';
				varTpl += '                  <a href="'+paidAds[index].clk+'" target="_blank">';
				varTpl += '                     <div class="big-txt">'+paidAds[index].title+'</div>';
				varTpl += '                  </a>';
				varTpl += '                  <div class="small-txt">'+paidAds[index].brandtext+'</div>';
				varTpl += '               </div>';
				varTpl += '            </li>';
			});
			varTpl += '         </ul>';
			varTpl += '      </div>';
	
		}
		if(data.organicAds.length > 0){
	
			varTpl += '      <div class="right-outbrain">';
			varTpl += '         <div class="org_heading">More from indiatimes </div>';
			varTpl += '         <ul>';
			$.each(data.organicAds, function(index, value){
				varTpl += '	    <li>';
				varTpl += '               <div class="left-part"> ';
				varTpl += '                  <a href="'+organicAds[index].clk+'"><img src="'+organicAds[index].mainimage+'"> </a> ';
				varTpl += '               </div>';
				varTpl += '               <div class="right-part">';
				varTpl += '                  <a href="'+organicAds[index].clk+'">';
				varTpl += '                     <div class="big-txt">'+organicAds[index].title+'</div>';
				varTpl += '                  </a>';
				varTpl += '                  <div class="small-txt">'+organicAds[index].brandtext+'</div>';
				varTpl += '               </div>';
				varTpl += '            </li>';
			});
			varTpl += '         </ul>';
			varTpl += '      </div>';
	
		}
	
		varTpl += '      <div class="clr"></div>';
		varTpl += '      <div class="ctn-logo rc colombia-logo-gp"><span class="out-reco"> Recommended By Colombia</span> <img class="colombia-logo" src="'+organicAds[0].colombiaLogo+'"></div>';
		varTpl += '   </div>';
	
		varTpl += '</div>';
		varTpl += '<div class="clr"></div>';

        //alert(varTpl);
        $('#'+container).html(varTpl);
        if(data.paidAds.length < 8 || data.organicAds.length < 4){
        	ga('send', 'event', 'CTN-LessRecord', slotIdDetailCTN, url);
        }  
    }else{
    	//alert("null data for slot id : "+slotIdDetailCTN);
    } 
    $('#'+container).removeClass("it_ros_rcmw_as_btm_ctn");
    $('#'+container).addClass("it_ros_rcmw_as_btm_ctn_done");
}