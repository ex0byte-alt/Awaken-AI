import {Card} from '@/components/Card';
import '@/components/Theme-toggle'
import { ModeToggle } from '@/components/Theme-toggle';
import { TestimonialCard } from '../components/LandingPage/Testimonials/TestimonialCard';

export default function Home() {
  return (
    <div>
      <h1>Awaken AI</h1>
      <TestimonialCard Icon="CYNG&B_icon.svg" Testimonial='Implementing Gao DIM AI the Law AI has reduced 3 times of overhead costing, 5 times faster, generate extra sales for company. The ROI was evident.' CompanyName='CY NG & BARRY' CompanyType='Legal Firm, ADVOCATES & SOLICITORS'/>
    </div>
  );
}
