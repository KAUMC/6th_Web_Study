document.addEventListener('DOMContentLoaded', function() {
    // 이름, 닉네임, 이메일, 비밀번호, 비밀번호 확인에 대한 유효성 검사 이벤트 리스너 등록
    document.querySelector('input[name="username"]').addEventListener('input', validateUsername);
    document.querySelector('input[name="nickname"]').addEventListener('input', validateNickname);
    document.querySelector('input[name="useremail"]').addEventListener('input', validateEmail);
    document.querySelector('input[name="password"]').addEventListener('input', validatePassword);
    document.querySelector('input[name="checkpassword"]').addEventListener('input', validatePasswordMatch);

    // 폼 제출 이벤트 리스너
    document.getElementById('join-form').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // 폼의 유효성 검사가 실패하면 제출 방지
        }
    });
});

// 이름 유효성 검사
function validateUsername() {
    var input = document.querySelector('input[name="username"]');
    var errorSpan = input.nextElementSibling;
    if (input.value.trim() === '') {
        errorSpan.textContent = '필수 입력 항목입니다!';
        errorSpan.style.color = 'red';
        return false;
    } else {
        errorSpan.textContent = '성공했습니다!';
        errorSpan.style.color = 'green';
        return true;
    }
}

// 닉네임 유효성 검사
function validateNickname() {
    var input = document.querySelector('input[name="nickname"]');
    var errorSpan = input.nextElementSibling;
    if (input.value.trim() === '') {
        errorSpan.textContent = '필수 입력 항목입니다!';
        errorSpan.style.color = 'red';
        return false;
    }
    else if (input.value.trim().length < 2 || input.value.trim().length > 6) {
        errorSpan.textContent = '닉네임은 2~6글자로 구성해주세요!';
        errorSpan.style.color = 'red';
        return false;
    } else {
        errorSpan.textContent = '성공했습니다!';
        errorSpan.style.color = 'green';
        return true;
    }
}

// 이메일 유효성 검사
function validateEmail() {
    var input = document.querySelector('input[name="useremail"]');
    var errorSpan = input.nextElementSibling;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.trim() === '') {
        errorSpan.textContent = '필수 입력 항목입니다!';
        errorSpan.style.color = 'red';
        return false;
    }
    else if (!emailPattern.test(input.value)) {
        errorSpan.textContent = '올바른 메일 형식이 아닙니다!';
        errorSpan.style.color = 'red';
        return false;
    } else {
        errorSpan.textContent = '성공했습니다!';
        errorSpan.style.color = 'green';
        return true;
    }
}

// 비밀번호 유효성 검사
function validatePassword() {
    var input = document.querySelector('input[name="password"]');
    var errorSpan = input.nextElementSibling;
    var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (input.value.trim() === '') {
        errorSpan.textContent = '필수 입력 항목입니다!';
        errorSpan.style.color = 'red';
        return false;
    }
    else if (!passwordPattern.test(input.value)) {
        errorSpan.textContent = '비밀번호는 8자 이상, 숫자/영어/특수문자를 포함해야 합니다!';
        errorSpan.style.color = 'red';
        return false;
    } else {
        errorSpan.textContent = '성공했습니다!';
        errorSpan.style.color = 'green';
        return true;
    }
}

// 비밀번호 일치 확인
function validatePasswordMatch() {
    var passwordInput = document.querySelector('input[name="password"]');
    var checkInput = document.querySelector('input[name="checkpassword"]');
    var errorSpan = checkInput.nextElementSibling;
    if (passwordInput.value !== checkInput.value) {
        errorSpan.textContent = '비밀번호가 일치하지 않습니다!';
        errorSpan.style.color = 'red';
        return false;
    } else {
        errorSpan.textContent = '비밀번호가 일치합니다!';
        errorSpan.style.color = 'green';
        return true;
    }
}

// 폼 전체 유효성 검사
function validateForm() {
    return validateUsername() && validateNickname() && validateEmail() && validatePassword() && validatePasswordMatch();
}

document.getElementById('join-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지
    if (validateForm()) { // 폼 유효성 검사
        showModal(); // 모달 표시
    }
});

function showModal() {
    var modal = document.getElementById("successModal");
    var closeButton = document.querySelector(".close-button");
    modal.style.display = "block"; // 모달 표시

    closeButton.onclick = function() {
        modal.style.display = "none"; // 모달 닫기
    }
}

