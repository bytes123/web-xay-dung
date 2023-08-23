import {MdLocationOn} from "react-icons/md"
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"

const headerSectionData = [
    {
        id:1,
        icon: <MdLocationOn/>,
        children: <p className="text-xs xl:text-sm">
            
2130 Fulton Street, San Diego,
CA 94117-1080 USA
        </p>
    },
    {
        id:2,
        icon: <AiOutlineClockCircle/>,
        children: <div className="text-xs xl:text-sm">
            <p>Mon-Fri: 9:00am-6:00pm</p>
            <p>Sat-Sun: 10:00am-5:00pm</p>
        </div>
    },
    {
        id:3,
        icon: <BsTelephone/>,
        children:<div className="text-xs xl:text-sm">
        <p>1-800-3214-684</p>
        <p>1-800-3214-684</p>
    </div>
    },

]

const HomeCarouselData = [
    {
        id:1,
        title: "Thiết Kế Nhà Đẹp Tại TP Hồ Chí Minh và Các Tỉnh Lân Cận",
        content: "Chúng tôi cung cấp dịch vụ thiết kế nhà chất lượng cao tại TP Hồ Chí Minh và các tỉnh lân cận như Bình Dương, Đồng Nai, Long An, …, giúp biến ý tưởng của bạn thành hiện thực với thiết kế độc đáo và tinh tế.",
        banner: "/home-banner1.jpg"
    },
    {
        id:2,
        title: "Xây Dựng Nhà Chuyên Nghiệp Tại Khu Vực TP Hồ Chí Minh",
        content: "Với kinh nghiệm đa dạng trong xây dựng nhà, chúng tôi cam kết mang đến công trình chất lượng cao, tuân thủ tiến độ và ngân sách, phục vụ khách hàng tại TP Hồ Chí Minh và các tỉnh lân cận.",
        banner: "/home-banner2.jpg"
    }
    ,  {
        id:3,
        title: "Dịch Vụ Sửa Chữa Nhà Uy Tín Tại TP Hồ Chí Minh",
        content: "Chúng tôi chuyên sửa chữa nhà với đội ngũ kỹ thuật chuyên nghiệp, cung cấp giải pháp bảo trì và sửa chữa tận tâm cho căn nhà của bạn tại TP Hồ Chí Minh và các khu vực lân cận.",
        banner: "/home-banner3.jpg"
    }
]

const HomeIntroduceData = [
    {
        id:1,
        title: "đội ngũ chuyên nghiệp",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
    },
    {
        id:2,
        title: "kinh nghiệm nhiều năm",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
    },
    {
        id:3,
        title: "giá trị độc đáo",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
    },
]

const HomeServiceData = [
    {
        id: 1,
        title: "Sơn – Chống thấm",
        img: "/home-service1.jpg",
    },
    {
        id: 2,
        title: "Điện nước",
        img: "/home-service2.jpg",
    },
    {
        id: 3,
        title: "Dọn dẹp",
        img: "/home-service3.jpg",
    }
]

const HomeRateData = [
    {
        id:1,
        avatar:"/rate-avatar1.jpg",
        name: "Anh Hùng",
        address: "Quận Gò vấp, TP Hồ Chí Minh",
        content: "Nhận được sự hỗ trợ với kế hoạch sửa chữa tối ưu nhất, trong suốt quá trình thực hiện, đội ngũ công nhân đã làm việc với tận tâm, sự chu đáo và sự cẩn thận."
    },
    {
        id:2,
        avatar:"/rate-avatar1.jpg",
        name: "Anh Tiến",
        address: "Quận Gò vấp, TP Hồ Chí Minh",
        content: "Tôi rất ấn tượng với thái độ lịch sự và tận tâm của đội ngũ kỹ sư cùng công nhân ở đây. Tôi đánh giá rất cao việc lựa chọn thành viên cho đội ngũ của công ty ABC, với sự quan tâm đến tâm hồn và đạo đức, cùng với khả năng tay nghề xuất sắc. Nếu có bạn bè hoặc người quen nhỏ, tôi chắc chắn sẽ giới thiệu họ đến công ty ABC."
    },
    {
        id:3,
        avatar:"/rate-avatar1.jpg",
        name: "Anh Dũng",
        address: "TP Dĩ An, Bình Dương",
        content: "Tôi đã biết đến công ty ABC sau một thời gian tìm hiểu trên Google và sau đó quyết định lựa chọn. Ban đầu, tôi có hai điều lo lắng: thứ nhất là việc chọn nhà thầu, thứ hai là việc đảm bảo rằng công việc sẽ được thực hiện đúng theo yêu cầu. Ban đầu, tôi thậm chí còn thuê một người giám sát riêng để đảm bảo, nhưng thời gian trôi qua tôi đã thấy không cần thiết vì công ty ABC đã làm đúng theo hợp đồng. Đội ngũ tư vấn của họ rất nhiệt tình và các vấn đề phát sinh đều được thảo luận cụ thể với tôi để đảm bảo tính kỹ thuật và khả năng tài chính của gia đình. "
    },   
    {
        id:4,
        avatar:"/rate-avatar1.jpg",
        name: "Chị Như",
        address: "Long Thành, Đồng Nai",
        content: "Tôi rất thích tác phong làm việc chuyên nghiệp của đội"
    },
    {
        id:5,
        avatar:"/rate-avatar1.jpg",
        name: "Anh Hải",
        address: "Nhơn Trạch, Đồng Nai",
        content: "Trong quá trình thực hiện thiết kế và thi công, tôi thấy đội thợ đã làm việc với sự nhiệt tình, luôn sẵn sàng thực hiện các điều chỉnh cần thiết một cách nhanh chóng. Dù có sự cố xảy ra trong quá trình thi công hoặc mong muốn thay đổi nhỏ, đội ngũ đã giải quyết mọi vấn đề một cách nhanh lẹ, khiến tôi cảm thấy rất thoải mái và hài lòng. Nhờ tinh thần hỗ trợ tích cực của đội ngũ, tôi đã có một trải nghiệm tốt và hài lòng."
    },
    {
        id:6,
        avatar:"/rate-avatar1.jpg",
        name: "Anh Hải",
        address: "Quận 10, TP Hồ Chí Minh",
        content: "Dự toán ban đầu khá ổn định, phát sinh chi phí dưới 10%, điều này thực sự là một yếu tố quan trọng và tích cực. Thường thì, việc dự phòng khoản phát sinh ở mức 30% cho mỗi căn nhà, nhưng việc giữ mức phát sinh dưới 10% đã làm tôi rất hài lòng và tin tưởng vào chất lượng của công việc"    },
]

export { headerSectionData,HomeCarouselData,HomeIntroduceData,HomeServiceData,HomeRateData}