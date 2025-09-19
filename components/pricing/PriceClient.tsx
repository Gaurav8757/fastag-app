import { TextAnimate } from "../magicui/text-animate";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShootingStars } from "../ui/shooting-stars";


export default function PriceClient() {
  return (
    <section className="py-8">
      <ShootingStars
        className="absolute inset-0 pointer-events-none"
        starColor="#ea871f"
        trailColor="#39ac37"
        minSpeed={5}
        maxSpeed={10}
        minDelay={200}
        maxDelay={300}
      />
      
      <div className="container mx-auto px-4">
       
          <div className="text-center space-y-4 mb-16">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              className="text-3xl lg:text-4xl font-bold text-primary text-center"
            >
             Our Pricing Plans
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="text-xl text-muted-foreground text-pretty"
            >
               Comprehensive FASTag Plans
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="text-xl text-muted-foreground text-pretty"
            >
                One-time Tag Joining Fee of ₹100 (inclusive of all applicable
            taxes), tailored to suit all your travel needs.
            </TextAnimate>
          </div>
      </div>
      <div className="container mx-auto px-4">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-lg tracking-wider">
            <TableHead className="font-bold">NPCI Vehicle Class</TableHead>
            <TableHead className="font-bold">Description</TableHead>
            <TableHead className="font-bold">Minimum Recharge Amount</TableHead>
            <TableHead className="text-right font-bold">Refundable Security Deposit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">₹250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </section>
  );
}
