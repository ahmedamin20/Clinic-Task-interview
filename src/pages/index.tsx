import AvilableTime from "@/components/molecules/AvilableTime";
import Services from "@/components/molecules/Services";
import Hearo from "@/components/molecules/hearoSeaction";
import Testimonials from "@/components/molecules/testimonials";
import GalleryContainer from "@/modules/Gallery/containers/GalleryContainer";
import BlogsContainer from "@/modules/blogs/containers/BlogsContainer";
import PartnersContainers from "@/modules/partners/container/PartnersContainers";
import PointsContainer from "@/modules/points/container/PointsContainer";

export default function Home() {
  return (
    <div>
      <main>
        <Hearo />
        <div className="px-3  md:px-20 lg:px-32">
          <AvilableTime />

          <Services title="Doctor Services" />
          <PointsContainer/>
          <BlogsContainer />
          <Testimonials
            title="What People Say"
            info="Welcome to our Website name and what we do say some discriptions abouth this service or what you need. "
          />
          <GalleryContainer />
          <PartnersContainers/>
        </div>
      </main>
    </div>
  );
}
