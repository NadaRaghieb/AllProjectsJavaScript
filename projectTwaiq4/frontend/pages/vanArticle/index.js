import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link"
//import photo1 from "../../public/img/van_gogh_5.jpg"
import VanGogh from "../../public/img/van_gogh_4.jpg"
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router";

export default function Van() {
    const router = useRouter();
    <Layout/>
    return (
      <>
       
       
    <section class="u-clearfix u-grey-10 u-section-1" id="carousel_ffe6" style={{margin:"15em"}}>
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 style={{margin:"30px"}}>Biography of Vincent van Gogh</h2>
        <hr/>
        <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div class="u-gutter-0 u-layout">
            <div class="u-layout-row">
              <div class="u-size-30">
                <div class="u-layout-col">
                  <div class="u-container-style u-image u-layout-cell u-size-60 u-image-1" data-image-width="721" data-image-height="1080">
                    <Image  height={240} width={200} src={VanGogh} />
                    <div class="u-container-layout u-container-layout-1"></div>
                  </div>
                </div>
              </div>
              <div class="u-size-30">
                <div class="u-layout-col">
                  <div class="u-container-style u-layout-cell u-palette-2-base u-size-30 u-layout-cell-2">
                    <div class="u-container-layout u-valign-bottom u-container-layout-2" style={{margin:"20px"}}>
                      <h3 class="u-text u-text-default u-text-1">Childhood</h3>
                    </div>
                  </div>
                  <div class="u-align-justify u-container-style u-layout-cell u-size-30 u-layout-cell-3" >
                    <div class="u-container-layout u-valign-middle u-container-layout-3"  >
                      <p class="u-text u-text-default u-text-2" style={{margin:"29px"}}> 
                      
                      Vincent Van Gogh was born the second of six children into a religious Dutch Reformed Church family in the south of the Netherlands. His father, Theodorus Van Gogh, was a clergyman and his mother, Anna Cornelia Carbentus, was the daughter of a bookseller. Van Gogh exhibited unstable moods during his childhood, and showed no early inclination toward art-making, though he excelled at languages while attending two boarding schools. In 1868, he abandoned his studies and never successfully returned to formal schooling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="u-align-justify u-text u-text-3" style={{margin:"29px"}}>
        
          In 1869, Van Gogh apprenticed at the headquarters of the international art dealers Goupil & Cie in Paris and eventually worked at the Hague branch of the firm. He was relatively successful as an art dealer and stayed with the firm for almost a decade. In 1872, Van Gogh began exchanging letters with his younger brother Theo. This correspondence continued through the end of Vincent's life. The following year, Theo himself became an art dealer, and Vincent was transferred to the London office of Goupil & Cie. Around this time, Vincent became depressed and turned to God.<br/>
        </p>
        <p class="u-align-justify u-text u-text-3" style={{margin:"29px"}}>After several transfers between London and Paris, Van Gogh was let go from his position at Goupil's and decided to pursue a life in the clergy. While living in southern Belgium as a poor preacher, he gave away his possessions to the local coal-miners until the church dismissed him because of his overly enthusiastic commitment to his faith. In 1880, Van Gogh decided he could be an artist and still remain in God's service, writing, "To try to understand the real significance of what the great artists, the serious masters, tell us in their masterpieces, that leads to God; one man wrote or told it in a book; another, in a picture." Van Gogh was still a pauper, but Theo sent him some money for survival. Theo financially supported his elder brother his entire career, as Vincent made virtually no money from making art.<br/>
        </p>
        <p class="u-align-justify u-text u-text-3" style={{margin:"29px"}}>A year later, in 1881, dire poverty motivated Van Gogh to move back home with his parents, where he taught himself to draw. He became infatuated with his cousin, Kee Vos-Stricker. His continued pursuit of her affection, despite utter rejection, eventually split the family. With the support of Theo, Van Gogh moved to the Hague, rented a studio, and studied under Anton Mauve - a leading member of the Hague School. Mauve introduced Van Gogh to the work of the French painter Jean-François Millet, who was renowned for depicting common laborers and peasants.<br/>
        </p>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-image u-shading u-section-2" src="" data-image-width="256" data-image-height="256" id="sec-d5a6" style={{margin:"15em"}}>
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h2 class="u-text u-text-default u-title u-text-1">Mature Period</h2>
        <p class="u-align-justify u-text u-text-3" style={{margin:"29px"}}>In 1884, after moving to Nuenen, Netherlands, Van Gogh began drawing the weathered hands, heads, and other anatomical features of workers and the poor, determined to become a painter of peasant life like Millet. Although he found a professional calling, his personal life was in shambles. Van Gogh accused Theo of not trying hard enough to sell his paintings, to which Theo replied that Vincent's dark palette was out of vogue compared to the bold and bright style of the Impressionist artists that was popular. Suddenly, on March 26, 1885, their father died from a stroke, putting pressure on Van Gogh to have a successful career. Shortly afterward, he completed the Potato Eaters (1885), his first large-scale composition and great work.<br/>
        </p>
        <p class="u-align-justify u-text u-text-3" style={{margin:"29px"}}>Leaving the Netherlands for the last time, in 1885 Van Gogh enrolled at the Academy of Fine Arts in Antwerp. There he discovered the art of Baroque painter Peter Paul Rubens, whose swirling forms and loose brushwork had a clear impact on the young artist's style. However, the rigidity of academicism of the school did not appeal to Van Gogh and he left for Paris the following year. He moved in with Theo in Montmartre - the artist's district in northern Paris - and studied with painter Fernand Cormon, who introduced the young artist to the Impressionists. The influence of artists such as Claude Monet, Camille Pissarro, Edgar Degas, and Georges Seurat, as well as pressure from Theo to sell paintings, motivated Van Gogh to adopt a lighter palette.<br/>
        </p>
        
      </div>
    </section>
    <section class="u-clearfix u-section-3" id="sec-2747" style={{margin:"15em"}}>
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-image u-layout-cell u-size-30 u-image-1" data-image-width="400" data-image-height="265">
              
                <div class="u-container-layout u-container-layout-1"></div>
              </div>
              <div class="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-valign-middle u-container-layout-2">
                  <h2 class="u-text u-text-default u-text-1">Late Years and Death</h2>
                  <p class="u-align-justify u-text u-text-3" style={{margin:"29px"}}>The majority of Van Gogh's best-known works were produced during the final two years of his life. During the fall and winter of 1888, Vincent Van Gogh and Paul Gauguin lived and worked together in Arles in the south of France, where Van Gogh eventually rented four rooms at 2 Place Lamartine, which was dubbed the "Yellow House" for its citron hue. The move to Provence began as a plan for a new artist's community in Arles as alternative to Paris and came at a critical point in each of the artists' careers. While at the "Yellow House" Gauguin and Van Gogh worked closely together and developed a concept of color symbolic of inner emotion and not dependent upon nature. Despite enormous productivity, Van Gogh suffered from various bouts of mental instability, likely including epilepsy, psychotic episodes, delusions, and bipolar disorder. Gauguin left for Tahiti, partially as a means of escaping Van Gogh's increasingly erratic behavior. The artist slipped away after a particularly violent fight in which Van Gogh threatened Gauguin with a razor and then cut off part of his own right ear.<br/>
        </p>
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
    </>

    );
    }