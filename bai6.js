document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form mặc định

  // Lấy giá trị từ các trường input
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Kiểm tra thông tin đăng nhập
  if (email === "rinro153624@gmail.com" && password === "153624") {
    // Nếu thông tin đúng, chuyển đến trang chính
    window.location.href = "homepage.html";
  } else {
    // Nếu thông tin sai, hiển thị thông báo lỗi
    document.getElementById("error-message").textContent = "Email hoặc mật khẩu không đúng.";
  }
});