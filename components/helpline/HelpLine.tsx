import { Card } from "../ui/card";
import { TextAnimate } from "../magicui/text-animate";
import { ShootingStars } from "../ui/shooting-stars";
export function HelpLine() {
  const bankData = [
    { name: "Airtel Payments Bank", contact: "400/8800-688-006" },
    { name: "AU Small Finance Bank", contact: "1800-258-7300" },
    { name: "Axis Bank Ltd", contact: "1860-419-8585" },
    { name: "Bank of Baroda", contact: "1800-103-4568" },
    { name: "Bank of Maharashtra", contact: "NA" },
    { name: "Canara Bank", contact: "1800-103-3568" },
    { name: "Central Bank of India", contact: "1800221911" },
    { name: "City Union Bank Ltd", contact: "1800-258-7200" },
    { name: "Cosmos Bank", contact: "1800 233 0234" },
    { name: "Equitas Small Finance Bank", contact: "1800-103-1222" },
    { name: "Federal Bank", contact: "1800-266-9520" },
    { name: "FINO Payments Bank", contact: "022-6868-1414" },
    { name: "HDFC Bank", contact: "1800-120-1243" },
    { name: "ICICI Bank", contact: "1800-210-0104" },
    { name: "IDBI Bank", contact: "1800-266-1962" },
    { name: "IDFC First Bank", contact: "1800-266-9970" },
    { name: "Indian Bank", contact: "NA" },
    { name: "IndusInd Bank", contact: "1860-210-8887" },
    { name: "J&K Bank", contact: "1800 572 1370" },
    { name: "Karnataka Bank", contact: "18005722061" },
    { name: "Karur Vysya Bank", contact: "1800-102-1916" },
    { name: "Kotak Mahindra Bank", contact: "18-602-666-888" },
    { name: "Bajaj Finance Ltd.", contact: "18002100260" },
    { name: "Nagpur Nagrik Sahakari Bank", contact: "1800-266-7183" },
    { name: "PAYTM Bank", contact: "1800-120-4210" },
    { name: "Punjab National Bank", contact: "1800-419-6610" },
    { name: "Saraswat Bank", contact: "1800-229-999/1800-266-5555" },
    { name: "South Indian Bank", contact: "1800-425-1809" },
    { name: "State Bank of India", contact: "1800-110-018" },
    { name: "Thrissur District Cooperative Bank", contact: "18004255705" },
    { name: "UCO Bank", contact: "18005721371" },
    { name: "Union Bank of India", contact: "1800-258-6400" },
    { name: "YES BANK", contact: "1800 103 5485" },
    { name: "Dombivli Nagari Sahakari Bank", contact: "1800-233-1700" },
    { name: "LivQuik Technology (India) Pvt Ltd", contact: "18003092225" },
  ];

  return (
    <Card
      className="relative bg-opacity-70 p-4 md:p-8 bg-fixed bg-cover bg-center mx-auto rounded-none border-none"
      style={{
        backgroundImage: "url('/FasTag.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50  to-white/50 backdrop-blur-lg z-0" />
      <TextAnimate
        animation="fadeIn"
        by="line"
        as="p"
        className="text-3xl  md:text-4xl z-1 font-bold text-center "
      >
        Bank Helpline Numbers
      </TextAnimate>
      <TextAnimate
        animation="slideLeft"
        by="character"
        className="text-center text-lg mb-4 z-1 text-gray-600 dark:text-gray-300"
      >
        NHAI FASTag Helpline No. – 1033
      </TextAnimate>

      <div className="container mx-auto relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-1 text-xs md:text-sm">
        {bankData.map((bank, index) => (
          <div
            data-aos="zoom-in-up"
            data-aos-delay={index * 5}
            key={index}
            className="md:w-54 w-40 h-16 md:h-24 mx-auto rounded hover:scale-101 transition-all duration-400 hover:shadow-smoke-lg relative overflow-hidden"
          >
            <ShootingStars
              className="absolute inset-0 pointer-events-none"
              starColor="#ea871f"
              trailColor="#39ac37"
              minSpeed={5}
              maxSpeed={15}
              minDelay={200}
              maxDelay={400}
            />
            <p className="font-semibold ">{bank.name}</p>
            <p className="text-sm">{bank.contact}</p>
          </div>
        ))}
      </div>
      <div></div>
    </Card>
  );
}
