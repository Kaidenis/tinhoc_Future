const lessons = [
  {title:'Word: văn bản hành chính và AI',learn:['Trình bày văn bản hành chính đúng bố cục.','Làm quen cách dùng AI trong công việc.','Thực hành soạn thông báo và hợp đồng.']},
  {title:'Văn bản nghệ thuật & thực hành AI',learn:['Trình bày nội dung theo phong cách sách, báo.','Thực hành dùng AI và chèn, căn chỉnh hình ảnh.','Tạo một trang thông tin nghệ thuật chuyên nghiệp.']},
  {title:'Tab và bảng',learn:['Dùng Tab để căn chỉnh nội dung.','Tạo phiếu điền thông tin.','Trình bày nội dung bằng Tab và bảng.']},
  {title:'Shape, SmartArt và hình ảnh',learn:['Tạo sơ đồ và quy trình làm việc.','Thiết kế sơ đồ tổ chức.','Làm bảng cảnh báo chuyên nghiệp.']},
  {title:'Ôn tập, in ấn và tiêu đề trang',learn:['Ôn lại nội dung Word đã học.','Thiết lập kỹ năng in ấn.','Tạo tiêu đề và đánh số trang tự động.']},
  {title:'Làm quen Excel',learn:['Tạo và định dạng bảng thông tin.','Sử dụng bộ lọc và sắp xếp dữ liệu.','Trình bày bảng rõ ràng, dễ theo dõi.']},
  {title:'Tính sản lượng (Sinh quản, Kế hoạch)',learn:['Tính sản lượng theo yêu cầu công việc.','Làm quen thuật ngữ trong Sinh quản và Kế hoạch.','Thực hành các hàm Excel liên quan.']},
  {title:'Chấm công và tính lương (Nhân sự)',learn:['Tạo bảng chấm công.','Tính giờ công và tiền lương.','Hiểu thuật ngữ và hàm thường dùng trong nhân sự.']},
  {title:'Kế hoạch giao hàng (Kho)',learn:['Lập bảng kế hoạch giao hàng.','Tính số lượng hàng xuất và nhập.','Theo dõi giờ công; làm quen thuật ngữ và hàm liên quan đến kho.']},
  {title:'Bảng xuất nhập tồn (Kho)',learn:['Tạo bảng xuất nhập tồn.','Theo dõi hàng hóa, số lượng và giờ công.','Làm quen thuật ngữ và hàm thường dùng trong công việc kho.']},
  {title:'Theo dõi mua hàng (Thu mua)',learn:['Tạo bảng theo dõi mua hàng.','Theo dõi thời gian giao nhận và số lượng.','Quản lý, theo dõi công nợ.']},
  {title:'Số lượng, đơn giá, thành tiền và thuế',learn:['Tính số lượng xuất hàng và đơn giá.','Tính thành tiền và thuế.','Ứng dụng vào hợp đồng, hóa đơn mua bán.']},
  {title:'Doanh thu, xếp hạng và biểu đồ',learn:['Tính doanh thu theo kỳ.','Xếp hạng và so sánh kết quả.','Trình bày doanh thu hàng tháng bằng biểu đồ.']},
  {title:'Kiểm tra sản xuất và đối chiếu tồn kho',learn:['Kiểm tra số lượng cần sản xuất.','Đối chiếu nhu cầu với số lượng tồn kho.','Nhận biết chênh lệch để hỗ trợ kế hoạch sản xuất.']},
  {title:'Theo dõi vật tư',learn:['Lập bảng theo dõi vật tư.','Cập nhật số lượng sử dụng và còn lại.','Thiết lập cách nhắc nhở khi cần mua hàng.']},
  {title:'Luyện tập tổng hợp 1',learn:['Thực hành các nội dung Word đã học.','Luyện thao tác Excel qua tình huống công việc.','Củng cố phần còn chưa vững.']},
  {title:'Luyện tập tổng hợp 2',learn:['Tiếp tục xử lý bài tập thực tế.','Kết hợp bảng biểu và công thức phù hợp.','Rèn cách tự kiểm tra kết quả.']},
  {title:'Rà soát và luyện tập cuối khóa',learn:['Xem lại các phần còn yếu.','Luyện tập theo nội dung cần củng cố.','Chuẩn bị cho bài kiểm tra tổng kết.']}
];
const roadmap = document.querySelector('#roadmap');
lessons.forEach((lesson, index) => {
  if (index === 5) {
    const exam = document.createElement('div');
    exam.className = 'exam';
    exam.innerHTML = '<span>✦</span> KIỂM TRA GIỮA KỲ';
    roadmap.append(exam);
  }
  const card = document.createElement('article');
  card.className = 'lesson';
  card.innerHTML = `<span class="lesson-number">${String(index + 1).padStart(2, '0')}</span><h3 class="lesson-title">${lesson.title}</h3><div class="lesson-learning"><span class="learning-label">BẠN SẼ HỌC ĐƯỢC GÌ</span><ul>${lesson.learn.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
  roadmap.append(card);
});
document.querySelectorAll('.tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.tabs button').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  document.querySelector('#basic').hidden = button.dataset.tab !== 'basic';
  document.querySelector('#advanced').hidden = button.dataset.tab !== 'advanced';
}));
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

