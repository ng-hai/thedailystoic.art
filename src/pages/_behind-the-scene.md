---
title: BEHIND THE SCENE
description: Chuyện về quá trình xây dựng website này, từ ý tưởng cho tới thành phẩm
date: 2023-12-18
---

Sự tồn tại của website The Daily Stoic hơi không liên quan đến ý tưởng ban đầu, vốn dĩ là nó không dành cho cuốn sách này.

Một năm trước tôi được cho vé tham dự UX Vietnam Festival, sự kiện diễn ra cả ngày, nhưng phải đến cuối buổi thì sự cuốn hút mới được đẩy lên cao trào, khi nói về [Nhân Sinh Quan cho Product/Designer](https://www.canva.com/design/DAFUVgvNt8I/ed8Bn-rM_O7013Tu-sC0lw/view) do anh Tùng Jacob trình bày.

Trong buổi diễn thuyết, anh Tùng có đề cập tới [bộ bài](https://readingcabin.vn/product/bo-bai-minh/) “Mình”—sản phẩm của team So Much Closer. Bộ bài bao gồm 54 câu hỏi và 6 lời khuyên, mỗi ngày rút ra một lá để chiêm nghiệm, soi chiếu bản thân, có thể là buổi tối trước khi ngủ, hoặc bỏ 1 lá vào túi áo mỗi sáng chuẩn bị đi làm giống cách của anh Tùng.

Như có điểm chạm vào mong muốn tìm hiểu về bản thân, tôi cũng đi mua ngay lập tức. Trong quá trình sử dụng thì cái đầu nảy số, muốn digitalize bộ bài, muốn làm website, rồi cũng bỏ dở giữa chừng việc thực hiện như bao lần.

Tôi đã từng khai tử 3 chiếc blog cá nhân cũng vì mải mê xử lý những vấn đề nhiều khi không ai gặp, để rồi quên mất mục tiêu ban đầu là tạo lập thói quen viết lách định kì.

Sẽ luôn có một tiếng nói trong đầu đưa ra đủ mọi lý do và trường hợp để phức tạp hóa vấn đề lên cấp số nhân, khiến ta bị đắm chìm vào những suy nghĩ đó, rồi dậm chân tại chỗ, không thể đưa ra thành phẩm vì căn bệnh cầu toàn, hoặc vẽ ra nhiều viễn cảnh xa vời. Vấn đề này có lẽ không chỉ xảy ra ở mình tôi.

***

Bẵng đi gần 1 năm trời, tôi bị dính quảng cáo sách, đập vào mặt, đánh vào guu là cái bìa sách khá đẹp của cuốn The Daily Stoic. Sách có thể không đọc, nhưng bìa đẹp là phải mua, tôi là người đơn giản.

Như hiểu được lòng tôi nên tiệm sách nhỏ [Moonbird](https://shopee.vn/moonbirdbooks) ngỏ ý tặng luôn một cuốn.

<figure>
  <div>
    <img src="/images/book.jpeg" alt="" />
  </div>
  <figcaption>Sách đẹp cạnh bàn phím đẹp, trên tấm lót bàn cũng đẹp, của tôi</figurecaption>
</figure>

Cuốn sách này cũng hay, và rồi cái đầu lại nảy số trong quá trình đọc.

### Từ ý tưởng đến thành phẩm

Nội dung cuốn sách được tổ chức theo định dạng _page-a-day_, nên tôi cũng muốn website đi theo cách này, mỗi ngày hiển thị một trang duy nhất. Ý tưởng cũng gần giống như một extension của Chrome tên là Momentum, nội dung trang sách của ngày hôm nay sẽ hiện lên mỗi khi trình duyệt mở Tab mới.

Vì kiếp trước tôi là designer nên còn đọng lại được chút nghề tới kiếp này, nên về mặt thiết kế tôi múa một chút là xong. Đùa vậy thôi chứ nghiêm túc mà nói thì đúng là như vậy. (⌐■_■)

Còn thực sự nghiêm túc thì đây là kết quả được đúc kết từ khoảng thời gian chìm đắm vào quá trình làm mấy cái blog cũ.

Tôi dùng 2 trong 3 bảng màu có sẵn của [Rosé Pine](https://rosepinetheme.com), rồi pha thêm cảm hứng từ nhiều nguồn khác nhau, cho ra được thiết kế này. So với tiếng Việt thì việc căn chỉnh font chữ tiếng Anh nhẹ nhàng hơn vì không phải bỏ dấu (diacritics).

<figure>
  <div>
    <img src="/images/light.png" alt="" />
  </div>
  <figcaption>Light theme — Rosé Pine Dawn</figurecaption>
</figure>

<figure>
  <div>
    <img src="/images/dark.png" alt="" />
  </div>
  <figcaption>Dark theme — Rosé Pine Moon</figurecaption>
</figure>

Với tôi thì sự gọn gàng, chỉn chu cũng là một cái đẹp, không cần mắc triệu chứng OCD cũng có thể cảm nhận được. Giá mà cái phòng tôi cũng được vậy.

<figure>
  <div>
    <img src="/images/reader-mode.png" alt="" />
  </div>
  <figcaption>Safari Reader Mode</figurecaption>
</figure>

***

Về mặt kỹ thuật, thực hiện dự án cá nhân cũng là một cơ hội thử nghiệm tooling & framework, và [Astro](https://astro.build) là kẻ được chọn vì dạo này khá viral.

Sử dụng ngày tháng hiện tại tôi có thể định danh được nội dung nào cần lấy ra, để làm được điều đó thì dữ liệu sẽ được chia thành 366 files, mỗi file sẽ được đặt tên theo định dạng **MM-DD**, ví dụ **11-28**, chứa nội dung ngày 28 tháng 11.

Tự ngồi tạo ra đống file theo thứ tự như một cuốn lịch sẽ tốn rất nhiều thời gian, có khi chưa tạo xong hết thì đã khai tử luôn dự án vì nản. Năm nay không như năm ngoái, AI bây giờ đầy như rau ngoài chợ, đi lựa một con rồi xài cho lẹ.

Tôi yêu cầu ChatGPT 3.5 viết một file bashscript chạy trên macOS để tạo ra 366 files markdown, với tên file tăng dần dựa vào ngày tháng trong năm theo định dạng **MM-DD.md**. Nó trả lời cũng nhanh, còn chạy thì lỗi lên lỗi xuống, sửa lòng vòng 3-4 lần vẫn vậy. Quay qua Google Bard, cũng là yêu cầu đó nhưng chạy lần đầu thì thành công luôn. Bye GPT, you failed me.

Công đoạn nhập liệu cũng tốn nhiều thời gian, có thể dùng một tool nào đó chuyển đổi từ PDF (lậu)[^1], nhưng tôi chấp nhận đánh đổi ngồi sao chép từng trang để đối chiếu được nội dung, đảm bảo từng câu chữ được không sai chính tả, xuống hàng, in nghiêng, v.v... theo đúng nguyên bản của cuốn sách. Quá trình này cũng chỉ mất 2 buổi tối ngồi cafe.

Phần xử lý lấy ra nội dung theo ngày được thực hiện ở phía server mỗi khi website nhận lượt truy cập, Astro hỗ trợ phần này qua cơ chế [On-demand Rendered](https://docs.astro.build/en/core-concepts/rendering-modes/#on-demand-rendered), kết hợp cùng [Content Collections](https://docs.astro.build/en/guides/content-collections/) APIs nên thời gian xây dựng website được giảm tải hơn nhiều so với cách tôi dựng 3 cái blog trước đây.

Có một suy nghĩ khác là build hết ra thành static files, rồi mỗi lần vào trang chủ sẽ chuyển hướng tới đường dẫn của file đó. Cách này có thể khiến thời gian tải trang tăng thêm (không căn cứ), và URL nhìn không đẹp vì dài dòng. Sau khi làm xong bản đầu tiên thì tôi chuyển qua chế độ Hybrid, để phục vụ trường hợp sao chép đường dẫn tới thẳng trang mong muốn khi cần chia sẻ.

Một vấn đề nữa là _“Thời Không Sai Lệch”_[^2], tôi ở Việt Nam nhưng server của Vercel lấy khu vực [mặc định](https://vercel.com/docs/edge-network/regions#compute-defaults) là Washington, D.C, USA. Điều này khiến cho nội dung không ăn khớp với thời gian vì bị lệch múi giờ, đúng ra phải lấy theo vị trí của người dùng. Để giải quyết chuyện này, tôi dùng thông tin địa chỉ IP của Request, gọi tới [Time API](https://timeapi.io) để có được dữ liệu thời gian chính xác hơn.

Vậy là chỉ mất khoảng 3 ngày, tôi đã biến ý tưởng thành hình hoàn chỉnh, nhanh nhất trong các dự án cá nhân đã từng vẽ ra làm.

### Bài học

Hơi trễ vì từng ấy năm trong nghề, lần đầu tiên tôi thấy mình “biết làm” sản phẩm. Không phải vì thiếu kỹ năng, mà do tư duy chưa được mở khóa, cũng chẳng buồn lắm vì xưa giờ toàn tự mò mẫm, học lỏm, không có ai chỉ bảo.

Website này không có gì to tát, cũng chẳng giải quyết vấn đề của người đọc cuốn sách này. Trải qua quá trình xây dựng, tôi học được cách thoát khỏi mê cung của sự bủa vây từ vô vàn suy nghĩ, của sự trì hoãn, và cả tiếng nói trong tâm trí ngăn cản tôi hướng tới đến mục tiêu ban đầu. Với một lập trình viên, chắc đây là “lời nguyền kiến thức”, ta biết nhiều, rồi đâm ra lo lắng nhiều.

Ta lo nghĩ về việc trùng ý tưởng, đã có người làm rồi, nhưng quên rằng ý tưởng thì rẻ mạt, thực hiện chúng mới là điều quan trọng.

Ta lo nghĩ về hiệu năng, tốc độ thực thi của sản phẩm khi phục vụ các thể loại người dùng, nhưng đến chính bản thân còn chưa được sử dụng.

Ta lo nghĩ về sự chê bai, đánh giá về cái đẹp từ người khác, nhưng sản phẩm còn chẳng được bước ra ánh sáng, màn che cứ mãi bao phủ.

Ta lo nghĩ về áp dụng công nghệ mới, mà chưa nhận ra nhiều thứ vẫn vận hành tốt trước cả lúc công nghệ được phổ cập.

Ta mải nghĩ, rồi ta quên làm.

Ta làm, vì ta muốn làm.

***

[^1]: Trang web này không hiển thị toàn bộ nội dung cuốn sách vì áy náy chuyện bản quyền. Tôi là người bài trừ việc xài lậu, lần này đã phải phá lệ đôi chút. Nếu có phần nội dung nào chạm tới được cảm xúc của bạn, hãy mua sách để có được trải nghiệm trọn vẹn hơn.
[^2]: Chơi chữ theo ca khúc _[Thời Không Sai Lệch - Ngải Thần](https://music.youtube.com/watch?v=FVEpQ8a4fs0)_ (错位时空 - 艾辰)