/**
 * Created by cz on 2017/4/28.
 */
$(document).ready(function(){
    $('#pagepiling').pagepiling({
        sectionsColor: ['rgb(204,102,153)', 'rgb(204,102,153)', 'rgb(204,102,153)','rgb(204,102,153)','rgb(204,102,153)','rgb(204,102,153)'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu',
        loopBottom: true,
        loopTop: true,
        // 回调函数，滚动到某一屏的时候执行，通过index确定滚动到某一屏
        afterLoad:function (anchorLInk,index) {
            // console.log(index);
            var pageThree = $('#page-three');
            var phone = $('.phone');
            if(index==3){
                pageThree.addClass('current');
                // 移入背景和字体颜色变色
                $('.list li').each(function() {
                    $(this).hover(function () {
                        $(this).find('a').addClass('hover');
                    },function () {
                        $(this).find('a').removeClass('hover');
                    })
                });
                phone.removeClass('phone-on');
            }else if(index==6){
                phone.addClass('phone-on');
                pageThree.removeClass('current');
            }else{
                pageThree.removeClass('current');
                phone.removeClass('phone-on');
            }
        },
    });



});