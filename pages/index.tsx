import AboutSection from "../components/home/AboutSection";
import EducationSection from "../components/home/EducationSection";
import ProjectSection from "../components/home/ProjectSection";
import SkillsSection from "../components/home/SkillsSection";
import WorkSection from "../components/home/WorkSection";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout currentPage="Home">
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ProjectSection />
      <EducationSection />
    </Layout>
  );
}
