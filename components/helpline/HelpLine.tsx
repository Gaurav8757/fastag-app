import { Card } from "../ui/card";
import { TextAnimate } from "../magicui/text-animate";
import { ShootingStars } from "../ui/shooting-stars";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
export function HelpLine() {
const bankData = [
  { name: "Airtel Payments Bank", contact: "400/8800-688-006", imageUrl: "airtel.png" },
  { name: "AU Small Finance Bank", contact: "1800-258-7300", imageUrl: "au.png" },
  { name: "Axis Bank Ltd", contact: "1860-419-8585", imageUrl: "axis.png" },
  { name: "Bajaj Finance Ltd.", contact: "18002100260", imageUrl: "bajaj.png" },
  { name: "Bank of Baroda", contact: "1800-103-4568", imageUrl: "bankofbaroda.png" },
  { name: "Bank of Maharashtra", contact: "NA", imageUrl: "bankofmaharashtra.png" },
  { name: "Canara Bank", contact: "1800-103-3568", imageUrl: "canara.png" },
  { name: "Central Bank of India", contact: "1800221911", imageUrl: "centralbank.png" },
  { name: "City Union Bank Ltd", contact: "1800-258-7200", imageUrl: "cityunion.png" },
  { name: "Cosmos Bank", contact: "1800 233 0234", imageUrl: "cosmos.png" },
  { name: "Dombivli Nagari Sahakari Bank", contact: "1800-233-1700", imageUrl: "dns.png" },
  { name: "Equitas Small Finance Bank", contact: "1800-103-1222", imageUrl: "equitas.png" },
  { name: "Federal Bank", contact: "1800-266-9520", imageUrl: "federal.png" },
  { name: "FINO Payments Bank", contact: "022-6868-1414", imageUrl: "fino.png" },
  { name: "HDFC Bank", contact: "1800-120-1243", imageUrl: "hdfc.png" },
  { name: "ICICI Bank", contact: "1800-210-0104", imageUrl: "icici.png" },
  { name: "IDBI Bank", contact: "1800-266-1962", imageUrl: "idbi.png" },
  { name: "IDFC First Bank", contact: "1800-266-9970", imageUrl: "idfc.png" },
  { name: "Indian Bank", contact: "NA", imageUrl: "indian.png" },
  { name: "IndusInd Bank", contact: "1860-210-8887", imageUrl: "indusind.png" },
  { name: "J&K Bank", contact: "1800 572 1370", imageUrl: "jkb.png" },
  { name: "Karnataka Bank", contact: "18005722061", imageUrl: "karnataka.png" },
  { name: "Karur Vysya Bank", contact: "1800-102-1916", imageUrl: "kvb.png" },
  { name: "Kotak Mahindra Bank", contact: "18-602-666-888", imageUrl: "kotak.png" },
  { name: "Nagpur Nagrik Sahakari Bank", contact: "1800-266-7183", imageUrl: "nnsb.png" },
  { name: "PAYTM Bank", contact: "1800-120-4210", imageUrl: "pytm.png" },
  { name: "Punjab National Bank", contact: "1800-419-6610", imageUrl: "pnb.png" },
  { name: "Saraswat Bank", contact: "1800-229-999/1800-266-5555", imageUrl: "saraswat.png" },
  { name: "South Indian Bank", contact: "1800-425-1809", imageUrl: "sib.png" },
  { name: "State Bank of India", contact: "1800-110-018", imageUrl: "sbi.png" },
  { name: "Thrissur District Cooperative Bank", contact: "18004255705", imageUrl: "trichur.png" },
  { name: "UCO Bank", contact: "18005721371", imageUrl: "uco.png" },
  { name: "Union Bank of India", contact: "1800-258-6400", imageUrl: "union.png" },
  { name: "YES BANK", contact: "1800 103 5485", imageUrl: "yesbank.png" },
  { name: "LivQuik Technology (India) Pvt Ltd", contact: "18003092225", imageUrl: "livquik.png" }
];


  return (
    <Card
      className="relative bg-opacity-70 p-4 md:p-8 bg-fixed bg-cover bg-center mx-auto rounded-none border-none"
      style={{
        backgroundImage: "url('/FasTag.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50  to-white/60 backdrop-blur-sm z-0" />
      <TextAnimate
        animation="fadeIn"
        by="line"
        as="p"
        className="text-3xl  md:text-4xl z-1 font-bold text-center bg-gradient-to-tl from-blue-700 to-blue-900 bg-clip-text text-transparent"
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

      <div className="container mx-auto relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 rounded-2xl text-xs md:text-sm">
        {bankData.map((bank, index) => (
          <div
            data-aos="zoom-in-up"
            // data-aos-delay={index * 10}
            key={index}
            className=" rounded transition-all duration-400 hover:shadow-smoke-lg relative overflow-hidden"
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
            <p className="font-semibold text-primary">{bank.name}</p>
            <p className="text-sm">{bank.contact}</p>
          </div>
        ))}
      </div>
      <div></div>
    </Card>
  );
}
