import heroimg from "../../assets/image/hero.png";
import {
  HeroSection,
  HeroLeft,
  HeroRight,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButton,
  HeroImage,
} from "./StyledHero";

function Hero() {
  return (
    <HeroSection>
      <HeroLeft>
        <HeroTitle>Covid ID</HeroTitle>
        <HeroSubtitle>Monitoring Perkembangan covid.</HeroSubtitle>
        <HeroDescription>
          Situs web COVID ID dirancang sebagai platform untuk memberikan
          informasi terkini mengenai data dan perkembangan terkait wabah
          COVID-19.
        </HeroDescription>
        <HeroButton>Vaccine</HeroButton>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={heroimg} alt="hero-img" />
      </HeroRight>
    </HeroSection>
  );
}

export default Hero;
