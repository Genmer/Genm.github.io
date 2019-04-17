/**
 * 
 * @authors Genmer (www.genmer.xyz)
 * @date    2019-02-18 21:58:49
 * @version $1.0$
 */

// 设置当前屏的动画效果



var screenAnimateElements = {
	'.screen-1':[
	'.screen-1_heading',
	'.screen-1_phone',
	'.screen-shadow',
	],

	'.screen-2':[
	'.screen-2_heading',
	'.screen-2_subheading',
	'.screen-2_phone', 
	'.screen-2_phone_up',
	'.screen-2_phone_down',
	'.screen-2_point_i_1',
	'.screen-2_point_i_2',
	'.screen-2_point_i_3',
	],
	'.screen-3':[
	'.screen-3_heading',
	'.screen-3_subheading',
	'.screen-3_phone',
	'.screen-3_features',
	],
	'.screen-4':[
	'.screen-4_heading',
	'.screen-4_subheading',
	'.screen-4_type_item_i_1',
	'.screen-4_type_item_i_2',
	'.screen-4_type_item_i_3',
	'.screen-4_type_item_i_4',
	],
	'.screen-5':[
	'.screen-5_heading',
	'.screen-5_subheading',
	'.screen-5_bg',
	]

};

function setScreenAnimate(screenCls){

	var screen=document.querySelector(screenCls);	//获取当前屏的元素
	var animateElements=screenAnimateElements[screenCls];	//需要设置动画的元素

	var isSetAnimateClass=false;	//是否有初始化元素的样式

	var isAnimateDone=false;	//当前屏幕下所有子元素的状态是done？

	screen.onclick=function(){

		//初始化样式 增加initial A A_init
	
		if ( isSetAnimateClass === false) {
				isSetAnimateClass=true;				//本来这个是要放for循环后，但是我放会获取不到getAttribute  so 放前面了

			for(var i = 0; i<animateElements.length; i++){
				var element=document.querySelector(animateElements[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class', baseCls +' '+ animateElements[i].substr(1)+'_animate_init');
			}
	
			console.log(isSetAnimateClass);
			return ;
		} 
		//切换所有 animateElements 的 init ——》done  A A_done
		if (isAnimateDone === false) {
				isAnimateDone=true;

				for(var i = 0; i<animateElements.length; i++){
				var element=document.querySelector(animateElements[i]);	
				var baseCls=element.getAttribute('class');
				element.setAttribute('class', baseCls.replace('_init','_done'));
			}

			return;
		}
		//切换所有 animateElements 的 done ——》init  A A_init
		if (isAnimateDone === true) {
				isAnimateDone=false;

				for(var i = 0; i<animateElements.length; i++){
				var element=document.querySelector(animateElements[i]);	
				var baseCls=element.getAttribute('class');
				element.setAttribute('class', baseCls.replace('_done','_init'));
			}

			return;
		}
	}
}


for (k in screenAnimateElements) {
	setScreenAnimate(k);
}

