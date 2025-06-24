import { Card } from "@/components/Card";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface TestimonailCardProps {
    Testimonial: string;
    CompanyName: string;
    CompanyType: string;
    Icon: string;
}
export function TestimonialCard({ Testimonial, CompanyName, CompanyType, Icon }: TestimonailCardProps) {
    return (
        <>
            <div className="flex h-[15vh] w-[76vw] justify-self-center">
                <Card >
                    <div className="">
                        <div className="xl:h-[70px] xl:w-[70px] lg:[10px] lg:[10px]">
                            <img src={Icon} alt="icon" />
                        </div>
                        <div>
                            <span>"{Testimonial}"</span>
                            <div>
                                <span>{CompanyName}</span>
                                <span>{CompanyType}</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}