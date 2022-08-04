
$(document).ready(function () {
  //     $( ".show_btn" ).click(function() {
  // 		$(".lightbox").toggle(); 
  // 	});

});

var validate = $("#myForm").validate({
  rules: {
    NAME: {
      required: true,
    },
    DOWN: {
      required: true,
    },
    EMAIL: {
      required: true,
      email: true,
    },
    MONEY: {
      required: true,
      min: 1,
      digits: true
    },
    BIRTHDAY: {
      required: true,
      yyyyMMdd: true
    },
    MOBILE: {
      required: true,
      mobile: true
    },
    ID: {
      required: true,
      id: true
    },
    GUI: {
      required: true,
      gui: true
    },
    IDGUI: {
      required: true,
      idGui: true
    }
  },
  //錯誤提示
  messages: {
    EMAIL: {
      email: "請輸入正確格式的電子郵件"
    }
  },
  //出錯的項目數
  // invalidHandler: function () {
  //   alert("尚有 " + validate.numberOfInvalids() + " 項目未填");
  // }
});


jQuery.validator.addMethod("yyyyMMdd", function (value, element) {
  var dateString = '';
  dateString = value.slice(0, 4) + '-' + value.slice(4, 6) + '-' + value.slice(-2);
  var dateValid = new Date(dateString).toString() !== 'Invalid Date';
  return this.optional(element) || dateValid;
}, "日期格式錯誤");

jQuery.validator.addMethod("mobile", function (value, element) {
  var mobileValid = new RegExp(/^09\d{8}$/).test(value);
  return this.optional(element) || mobileValid;
}, "手機格式錯誤");

jQuery.validator.addMethod("id", function (value, element) {
  return this.optional(element) || taiwanIdValidator.isNationalIdentificationNumberValid(value);
}, "身分證格式錯誤");

jQuery.validator.addMethod("gui", function (value, element) {
  return this.optional(element) || taiwanIdValidator.isGuiNumberValid(value);
}, "統一編號格式錯誤");

jQuery.validator.addMethod("idGui", function (value, element,params) {
  var word1 = value.substring(0, 1);
  var isId = new RegExp("[A-Za-z]+").test(word1);
  var isGui = new RegExp(/[0-9]/).test(word1);
  if(isId){
    return this.optional(element) || taiwanIdValidator.isNationalIdentificationNumberValid(value);
  }
  if(isGui){
    return this.optional(element) || taiwanIdValidator.isGuiNumberValid(value);
  }
  
}, '身分證/統編格式錯誤');



