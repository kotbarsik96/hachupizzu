const feedbacksShownDefault=3;class ContactUs{constructor(e){this.feedbacksShownDefault=e}showMoreFeedbacks(e){let t=$(".feedback_item").length-e;for(let e=1;e<=t;e++)$(".feedback_item:nth-child("+e+")").toggleClass("_hidden");this.deleteMargins(),$("#feedbacks_amount_text").text(e)}deleteMargins(){let e=$(".feedback_item").length-2;$(".feedback_item._hidden").length>0&&$("#feedbacks_list").attr("class").includes("_reverse")?$(".feedback_item:nth-child("+e+")").addClass("_no_margin"):$(".feedback_item:nth-child("+e+")").removeClass("_no_margin")}changeTextFeedbacks(){let e=$(".feedback_item._hidden"),t=$(".feedback_item");t.length<=3?($("#feedbacks_shown_text").text("Вам показаны все отзывы ("+t.length+")"),$("#feedback_button").toggleClass("_hidden")):e.length>0?($("#feedbacks_shown_text").text("Вам показаны 3 последних отзыва"),$("#feedback_button").text("Показать все отзывы")):($("#feedbacks_shown_text").text("Вам показаны все отзывы ("+t.length+")"),$("#feedback_button").text("Вернуть 3 последних отзыва"))}changeOrder(e){let t=$("#feedbacks_list");"column"==e?(t.attr("class").includes("_reverse")&&t.removeClass("_reverse"),t.addClass("_column")):"reverse"==e&&(t.attr("class").includes("_column")&&t.removeClass("_column"),t.addClass("_reverse"))}}let contactusMethods=new ContactUs(3);contactusMethods.showMoreFeedbacks(3),contactusMethods.changeTextFeedbacks(),$("#sorting_order").on("change",(function(){contactusMethods.changeOrder($(this).val()),contactusMethods.deleteMargins()})),$("#feedback_button").on("click",(function(){contactusMethods.showMoreFeedbacks(3),contactusMethods.changeTextFeedbacks()}));