import ServiceActivities from "@/components/Service/ServiceActivities";
import ServiceBenefits from "@/components/Service/ServiceBenefits";
import ServiceInfor from "@/components/Service/ServiceInfor";
import Heading from "@/components/Utils/Heading";

export default function ServicePage() {
    return (
      <div>
        <Heading/>
        <ServiceBenefits/>
        <ServiceInfor/>
        <ServiceActivities/>
      </div>
    )
  }
  