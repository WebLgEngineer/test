
$(document).ready(function () {
  //     $( ".show_btn" ).click(function() {
  // 		$(".lightbox").toggle(); 
  // 	});

});

$("#myForm").validate({
  onkeyup: function (element,event) {
    //去除空格
    var value = this.elementValue(element).replace(/ /g, "");
    $(element).val(value);
    // 補上驗證
    var excludedKeys = [
      16, 17, 18, 20, 35, 36, 37,
      38, 39, 40, 45, 144, 225
    ];

    if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
      return;
    } else if ( element.name in this.submitted || element.name in this.invalid ) {
      this.element( element );
    }
  },
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
    NUMBER_ID: {
      required: true,
      numberId: true
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

// 日期檢核(yyyyMMdd)
jQuery.validator.addMethod("yyyyMMdd", function (value, element) {
  return this.optional(element) || isDate8(value);
}, "日期格式錯誤");
// 手機格式檢合
jQuery.validator.addMethod("mobile", function (value, element) {
  var mobileValid = new RegExp(/^09\d{8}$/).test(value);
  return this.optional(element) || mobileValid;
}, "手機格式錯誤");
// 身分證格式檢核
jQuery.validator.addMethod("numberId", function (value, element) {
  return this.optional(element) || taiwanIdValidator.isNationalIdentificationNumberValid(value);
}, "身分證格式錯誤");
// 統一編號格式檢核
jQuery.validator.addMethod("gui", function (value, element) {
  return this.optional(element) || taiwanIdValidator.isGuiNumberValid(value);
}, "統一編號格式錯誤");

// 身分證/統編格式檢核
jQuery.validator.addMethod("idGui", function (value, element, params) {
  var word1 = value.substring(0, 1);
  var isId = new RegExp("[A-Za-z]+").test(word1);
  var isGui = new RegExp(/[0-9]/).test(word1);
  if (isId) {
    return this.optional(element) || taiwanIdValidator.isNationalIdentificationNumberValid(value);
  }
  if (isGui) {
    return this.optional(element) || taiwanIdValidator.isGuiNumberValid(value);
  }

}, '身分證/統編格式錯誤');


function isDate8(sDate) {
  if (!/^[0-9]{8}$/.test(sDate)) {
    return false;
  }
  var year, month, day;
  year = sDate.substring(0, 4);
  month = sDate.substring(4, 6);
  day = sDate.substring(6, 8);
  var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (year < 1700 || year > 2500) return false
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
  if (month < 1 || month > 12) return false
  if (day < 1 || day > iaMonthDays[month - 1]) return false
  return true
}



