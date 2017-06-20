// JavaScript Document
//初始化当前索引
var key = 0;
//记录上一屏，这一屏滚动将要消失
var prev = 0;
$(function() {
	out();
	//滑轮滚动事件
	$(document).mousewheel(function(event, delta) {
		//如果没有处于执行动画状态，方可执行
			if (!$('.wrapBox').is(':animated')) {

				//两个参数  delta  返回当前往上滚动（1）   往下滚动（-1）

				/*
				0   -1    1
				1   -1    2
				2   -1    3
				 */
				key = key - delta;
				//console.log(key);
				if (key < 0) {
					key = 0;
				} else if (key > 5) {
					key = 5;
				}
				$('.wrapBox').stop(true).animate( {
					top : -key * 100 + '%'
				}, 1000);
				$('.nav li').eq(key).addClass('current').siblings().removeClass('current');

			}

			out();
			prev = key;
		});
	var arr = [ '首页', '系统简介', '行业特色', '乌海周边' ]
	$('.nav li').bind( {
		mouseenter : function() {
			$(this).append('<span>' + arr[$(this).index()] + '</span>');
		},
		mouseleave : function() {
			$(this).find('span').remove();
		},
		click : function() {
			//获取当前索引
		key = $(this).index();
		$('.wrapBox').stop(true).animate( {
			top : -key * 100 + '%'
		}, 1000);
		$(this).addClass('current').siblings().removeClass('current');
		out();
		prev = key;
	}
	});

	//通过按钮点击第一屏动画显示
	$('button:first').click(function() {
		$('.box').removeClass('comeout');
	});
	function out() {
		$('.box').eq(prev).addClass('comeout');
		$('.box').eq(key).removeClass('comeout');
	}
	$('.superlow').bind( {
		mouseenter : function() {
			$('.superlow .info').show();
		},
		mouseleave : function() {
			$('.superlow .info').hide();
		}
	});
	$('.analysis').bind( {
		mouseenter : function() {
			$('.analysis .info').show();
		},
		mouseleave : function() {
			$('.analysis .info').hide();
		}
	});
	$('.quality').bind( {
		mouseenter : function() {
			$('.quality .info').show();
		},
		mouseleave : function() {
			$('.quality .info').hide();
		}
	});
	$('.hotword').bind( {
		mouseenter : function() {
			$('.hotword .info').show();
		},
		mouseleave : function() {
			$('.hotword .info').hide();
		}
	});
	$('.superlow').bind( {
		mouseenter : function() {
			$('.superlow .info').show();
		},
		mouseleave : function() {
			$('.superlow .info').hide();
		}
	});
	$('.saiku').bind( {
		mouseenter : function() {
			$('.saiku .info').show();
		},
		mouseleave : function() {
			$('.saiku .info').hide();
		}
	});
	$('.moreInfo').bind( {
		mouseenter : function() {
			$('.moreInfo .info').show();
		},
		mouseleave : function() {
			$('.moreInfo .info').hide();
		}
	});

});
function enterContent() {
	var li = $(".nav li:nth-child(2)");
	//获取当前索引
	key = $(li).index();
	$('.wrapBox').stop(true).animate( {
		top : -key * 100 + '%'
	}, 1000);
	$(li).addClass('current').siblings().removeClass('current');
	out();
	prev = key;
}