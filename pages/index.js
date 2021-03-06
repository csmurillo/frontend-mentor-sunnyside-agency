import MainSection from '../components/MainSection';
import LearnMoreSection from '../components/LearnMoreSection';
import ImageDescription from '../components/ImageDescription';
import ClientTestimonials from '../components/ClientTestimonials';
import Images from '../components/Images';
import Footer from '../components/Footer';
import Head from 'next/head';

export default () => (
  <>
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>  
      <title>Frontend Mentor | Sunnyside agency landing page</title>
    </Head>
    <main>
      <MainSection></MainSection>
      <LearnMoreSection id={1} imgSrcMobile="./images/mobile/image-transform.jpg" imgSrcDesktop="./images/desktop/image-transform.jpg" title="Transform your brand" content="We are a full-service creative agency specializing in helping brands grow fast. Engage your client through compelling visuals that do most of the marketing for you." linkUnderlineColor='hsl(51,100%,92%)' hoverLinklineColor='hsl(51,100%,70%)'></LearnMoreSection>
      <LearnMoreSection id={2} imgSrcMobile="./images/mobile/image-stand-out.jpg" imgSrcDesktop="./images/desktop/image-stand-out.jpg" title="Stand out to the right audience" content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places." linkUnderlineColor='hsl(7, 99%, 92%)' hoverLinklineColor='hsl(7, 99%, 70%)'></LearnMoreSection>
      <ImageDescription imageDescriptionSectionName="graphic-design" imgSrcMobile="./images/mobile/image-graphic-design.jpg" imgSrcDesktop="./images/desktop/image-graphic-design.jpg" title="Graphic Design" content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."></ImageDescription>
      <ImageDescription imageDescriptionSectionName="photography" imgSrcMobile="./images/mobile/image-photography.jpg" imgSrcDesktop="./images/mobile/image-photography.jpg" title="Photography" content="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."></ImageDescription>
      <ClientTestimonials></ClientTestimonials>
      <Images></Images>
      <Footer></Footer>
    </main>
  </>
);

