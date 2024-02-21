function changeEmailAndPassword(oldEmail, oldPassword, newEmail, newPassword) {
    // Kiểm tra và xử lý thay đổi email và mật khẩu ở đây
    // Ví dụ: Kiểm tra xem oldEmail và oldPassword có khớp với dữ liệu trong hệ thống không
    // Nếu khớp, thực hiện thay đổi bằng cách cập nhật dữ liệu người dùng với newEmail và newPassword
    // Nếu không khớp, in ra thông báo lỗi
  
    if (oldEmail === "user@example.com" && oldPassword === "oldpassword123") {
      // Thực hiện cập nhật dữ liệu người dùng với newEmail và newPassword
      console.log("Email và mật khẩu đã được thay đổi thành công!");
      console.log("Email mới: " + newEmail);
      console.log("Mật khẩu mới: " + newPassword);
    } else {
      console.log("Email hoặc mật khẩu không đúng. Thay đổi không thành công.");
    }
  }
  
  // Gọi hàm để thực hiện thay đổi email và mật khẩu
  changeEmailAndPassword("user@example.com", "oldpassword123", "newemail@example.com", "newpassword123");