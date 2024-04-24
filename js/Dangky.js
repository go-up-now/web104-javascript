    var nutDangKy = document.getElementById("dangky");
    var nutDangNhap = document.getElementById("dangnhap");
    var dangky = document.getElementById("idDangKy");
    var dangnhap = document.getElementById("idDangNhap");

// Phương thức form đăng ký
function onDangKy(){
    dangky.style.display = "block"; // Hiện form đăng ký
    dangnhap.style.display = "none"; // Ẩn form đăng nhập
    nutDangKy.style.backgroundColor = "orange";
    nutDangNhap.style.backgroundColor = "rgba(181, 183, 183, 0.9)";
}


// Phương thức form đăng nhập
function onDangNhap(){
    dangky.style.display = "none"; // Ẩn form đăng ký
    dangnhap.style.display = "block"; // Hiện form đăng nhập
    nutDangKy.style.backgroundColor = "rgba(181, 183, 183, 0.9)";
    nutDangNhap.style.backgroundColor = "orange";
    
}

// Đối tượng
function validator (options) {
    // Hàm thực hiện
    function validate (inputElement, rules) {
        var errorMessage = rules.text(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message');

        if(errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.classList.add('actives');
        } else {
            errorElement.innerText = '';
            errorElement.classList.remove('actives');
        }
    }


// Lấy element của form validate
    var formElement = document.querySelector(options.form);
    if(formElement) {
        options.rules.forEach( (rules) => {
            var inputElement = formElement.querySelector(rules.selector);
            var errorElement = inputElement.parentElement.querySelector('.form-message');

            if(inputElement) {
                // xử lý khi blur ra ngoài
                inputElement.onblur = function () {
                    validate (inputElement, rules);
                }

                // xử lý khi nhập 
                inputElement.oninput = function () {
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('actives');
                }
            }
        });
    }
}

// Định nghĩa function
validator.isRequired = function (selector) {
    return {
        selector: selector,
        text: function (value) {
            return value.trim() ? undefined: 'Vui lòng nhập tên của bạn';
        }
    };
}

validator.isEmail = function (selector) {
    return {
        selector: selector,
        text: function (value) {
            var mauEmail = /^\w+@\w+(\.\w{2,4}){1,2}$/;
            return mauEmail.test(value) ? undefined: 'Email không hợp lệ';
        }
    };
}

validator.minlength = function (selector, min) {
    return {
        selector: selector,
        text: function (value) {
            console.log(value)
            return value.length>=min ? undefined: 'Vui lòng nhập tối thiểu 6 ký tự';
        }
    };
}

// kiểm tra đăng nhập



document.getElementById('dangkyNode').disabled = true;
function daoNut(){
    var formdangNhap = document.getElementsByClassName('form-group1');
    for(let i=0; i<formdangNhap.length; i++){
        var formText = formdangNhap[i].querySelector('.form-text').value;
        if(formText>0){
            document.getElementById('dangkyNode').disabled = false;
        } else {
            document.getElementById('dangkyNode').disabled = true;
        }
    
    }
}
  function showtext(){
      var passs =document.getElementById("passwordes") ;
        
        if (passs.type=='text') {
            passs.type='password';
        }
        else {
            passs.type='text';
        } 
  }










// Kiểm tra độ dài tên đăng ký
function kiemTraTen(){
    var ten = document.getElementById("tendangnhap");
    var giaTri = ten.value;
    var mauTen = /^\w{8,30}$/;
    var theSP = document.getElementById("tbtendangnhap");
    if(giaTri.match(mauTen)){
        theSP.style.display = "none";
        formDangKy.tendangnhap.style.border = "none";
        return true;
    }else{
        theSP.style.display = "inline-block";
        theSP.innerHTML = "Tên đăng nhập phải từ 8 đến 30 ký tự và không chứa ký tự đặc biệt!";
        theSP.style.color ="red";
        // theSP.style.fontWeight ="900";
        formDangKy.tendangnhap.style.border = "red solid 2px";
        return false;
    }
}

// Kiểm tra password
function kiemTraPassword(){
    var pass = document.getElementById("matkhau");
    var giaTri = pass.value;
    var mauPass = /^\w{8,30}$/;
    var theSP = document.getElementById("tbmatkhau");
    if(giaTri.match(mauPass)){
        theSP.style.display = "none";
        formDangKy.matkhau.style.border = "none";
        return true;
    }else{
        theSP.style.display = "inline-block";
        theSP.innerHTML = "Mật khẩu phải từ 8 đến 30 ký tự và không chứa ký tự đặc biệt!";
        theSP.style.color ="red";
        // theSP.style.fontWeight ="900";
        formDangKy.matkhau.style.border = "red solid 2px";
        return false;
    }
}

// Kiểm tra email
function kiemTraEmail(){
    var email = document.getElementById("email");
    var giaTri = email.value;
    var mauEmail = /^\w+@\w+(\.\w{2,4}){1,2}$/;
    var theSP = document.getElementById("tbemail");
    if(giaTri.match(mauEmail)){
        theSP.style.display = "none";
        formDangKy.email.style.border = "none";
        return true;
    }else{
        theSP.style.display = "inline-block";
        theSP.innerHTML = "Email không hợp lệ!";
        theSP.style.color ="red";
        // theSP.style.fontWeight ="900";
        formDangKy.email.style.border = "red solid 2px";
        return false;
    }
}

// Kiểm tra tuổi
function kiemTraTuoi(){
    var tuoi = document.getElementById("tuoi");
    theSP = document.getElementById("tbtuoi");
    if(tuoi.value>=18 && tuoi.value<100){
        theSP.style.display = "none";
        formDangKy.tuoi.style.border ="none";
        return true;
    }else{
        theSP.style.display = "inline-block";
        theSP.innerHTML ="Tuổi phải lớn hơn 17 và nhỏ hơn 100!";
        theSP.style.color = "red";
        // theSP.style.fontWeight = "900";
        formDangKy.tuoi.style.border ="red solid 2px";
        return false;
    }
}

// kiểm tra tên đăng nhập
function kiemTraTenDN(){
    var tenNhap = document.getElementById("tennhap");
    var theSP = document.getElementById("tbtendangnhap");
    if(formDangNhap.tendangnhap.value == formDangKy.tendangnhap.value){
        theSP.innerHTML ="Hợp lệ";
        return false;
    }
}

// Kiểm tra form đăng ký
function kiemTraDangKy(){
    return kiemTraDangNhapRong()&&kiemTraTen()&&kiemTraPassword()&&kiemTraEmail()&&kiemTraTuoi();
}

// kiểm tra form đăng nhập
function kiemTraDangNhap(){
    return kiemTraTenDN()&&kiemTraPassword();
}